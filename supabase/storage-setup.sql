-- Create Storage Buckets for Creator Profile Images

-- 1. Avatars bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'avatars',
  'avatars',
  true,
  2097152, -- 2MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Services bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'services',
  'services',
  true,
  5242880, -- 5MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- 3. Spotlights bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'spotlights',
  'spotlights',
  true,
  5242880, -- 5MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- 4. Portfolio bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'portfolio',
  'portfolio',
  true,
  5242880, -- 5MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- 5. Experience/Company Logos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'experience',
  'experience',
  true,
  2097152, -- 2MB
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- RLS Policies for Storage Buckets

-- Avatars: Allow authenticated users to upload/update their own avatar
CREATE POLICY "Users can upload their own avatar"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own avatar"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Anyone can view avatars"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'avatars');

-- Services: Allow creators to upload service images
CREATE POLICY "Creators can upload service images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'services' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Creators can update service images"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'services' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Anyone can view service images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'services');

-- Spotlights: Allow creators to upload spotlight images
CREATE POLICY "Creators can upload spotlight images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'spotlights' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Creators can update spotlight images"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'spotlights' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Anyone can view spotlight images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'spotlights');

-- Portfolio: Allow creators to upload portfolio images
CREATE POLICY "Creators can upload portfolio images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'portfolio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Creators can update portfolio images"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'portfolio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Anyone can view portfolio images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'portfolio');

-- Experience: Allow creators to upload company logos
CREATE POLICY "Creators can upload experience logos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'experience' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Creators can update experience logos"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'experience' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Anyone can view experience logos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'experience');
