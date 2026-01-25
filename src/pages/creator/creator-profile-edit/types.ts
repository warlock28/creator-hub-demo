export interface ItemWithId {
    id: string;
    [key: string]: any;
}

export interface ProfileStats {
    followers: string;
    campaigns: string;
    avgEngagement: string;
}

export interface ProfileData {
    name: string;
    bio: string;
    location: string;
    niche: string;
    languages: string;
    profilePhoto: string;
    backgroundTheme?: string; // Theme ID from PROFILE_THEMES
    stats: ProfileStats;
    experience: ItemWithId[];
    achievements: ItemWithId[];
    spotlights: ItemWithId[];
    recentWorks: ItemWithId[];
    theme?: any;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    price: number;
    delivery_days: number;
    image_url?: string;
    creator_id?: string;
}
