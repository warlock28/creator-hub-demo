-- Enable necessary extensions
create extension if not exists pg_trgm;

-- Create custom types
create type user_role as enum ('creator', 'customer', 'admin');
create type order_status as enum ('pending', 'in_progress', 'completed', 'cancelled', 'disputed');

-- Create profiles table (Strict User Role)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade not null primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  role user_role default 'customer'::user_role,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on public.profiles for update
  using ( auth.uid() = id );

-- Trigger for new user signup (Auto-assign role)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  assigned_role user_role;
begin
  -- Extract role from metadata, default to customer if missing or invalid
  begin
    assigned_role := (new.raw_user_meta_data->>'role')::user_role;
  exception when others then
    assigned_role := 'customer'::user_role;
  end;

  -- Insert into profiles
  insert into public.profiles (id, email, full_name, avatar_url, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url',
    coalesce(assigned_role, 'customer'::user_role)
  );

  -- Automatically create the sub-profile based on role
  if assigned_role = 'creator' then
    insert into public.creator_profiles (id) values (new.id);
  elsif assigned_role = 'customer' then
    insert into public.customer_profiles (id) values (new.id);
  end if;

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create creator_profiles table
create table public.creator_profiles (
  id uuid references public.profiles(id) on delete cascade not null primary key,
  bio text,
  niche text,
  location text,
  rating numeric(3, 2) default 0,
  reviews_count int default 0,
  is_verified boolean default false,
  social_links jsonb default '[]'::jsonb,
  experience jsonb default '[]'::jsonb,
  achievements jsonb default '[]'::jsonb,
  availability text[],
  theme jsonb default '{}'::jsonb
);

alter table public.creator_profiles enable row level security;

create policy "Creator profiles are viewable by public"
  on public.creator_profiles for select
  using ( true );

create policy "Creators can update own profile"
  on public.creator_profiles for update
  using ( auth.uid() = id );
  
-- Note: Insert is handled by trigger, but we allow it for resilience if manual creation is needed
create policy "Creators can insert own profile"
  on public.creator_profiles for insert
  with check ( auth.uid() = id );

-- Create customer_profiles table
create table public.customer_profiles (
  id uuid references public.profiles(id) on delete cascade not null primary key,
  company_name text,
  industry text,
  website text
);

alter table public.customer_profiles enable row level security;

create policy "Customer profiles are viewable by public"
  on public.customer_profiles for select
  using ( true );
  
create policy "Customers can update own profile"
  on public.customer_profiles for update
  using ( auth.uid() = id );
  
create policy "Customers can insert own profile"
  on public.customer_profiles for insert
  with check ( auth.uid() = id );

-- Create services table
create table public.services (
  id uuid default gen_random_uuid() primary key,
  creator_id uuid references public.creator_profiles(id) on delete cascade not null,
  title text not null,
  description text,
  price numeric(10, 2) not null,
  delivery_days int,
  image_url text,
  created_at timestamptz default now()
);

alter table public.services enable row level security;

create policy "Services are viewable by everyone"
  on public.services for select
  using ( true );

create policy "Creators can manage their own services"
  on public.services for all
  using ( auth.uid() = creator_id );

-- Create orders table
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  customer_id uuid references public.profiles(id) on delete set null not null,
  creator_id uuid references public.creator_profiles(id) on delete set null not null,
  service_id uuid references public.services(id) on delete set null not null,
  amount numeric(10, 2) not null,
  status order_status default 'pending'::order_status,
  created_at timestamptz default now()
);

alter table public.orders enable row level security;

create policy "Users can see their own orders"
  on public.orders for select
  using ( auth.uid() = customer_id or auth.uid() = creator_id );

create policy "Any user can create orders"
  on public.orders for insert
  with check ( auth.uid() = customer_id );

-- Create reviews table
create table public.reviews (
  id uuid default gen_random_uuid() primary key,
  service_id uuid references public.services(id) on delete set null,
  creator_id uuid references public.creator_profiles(id) on delete cascade not null,
  customer_id uuid references public.profiles(id) on delete set null not null,
  rating int check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamptz default now()
);

alter table public.reviews enable row level security;

create policy "Reviews are public"
  on public.reviews for select
  using ( true );

create policy "Any user can write reviews"
  on public.reviews for insert
  with check ( auth.uid() = customer_id );
