// Local type definitions for authentication

export type UserRole = "creator" | "customer";

export interface UserProfile {
    id: string;
    email: string;
    full_name: string;
    role: UserRole;
    profile: CreatorProfile | CustomerProfile | null;
}

export interface CreatorProfile {
    user_id: string;
    bio?: string;
    avatar_url?: string;
    niche?: string;
    location?: string;
    rating?: number;
    reviews_count?: number;
    is_verified?: boolean;
}

export interface CustomerProfile {
    user_id: string;
    company_name?: string;
    industry?: string;
    avatar_url?: string;
}

export interface Session {
    user: User;
    access_token: string;
    expires_at: number;
}

export interface User {
    id: string;
    email: string;
    created_at: string;
}
