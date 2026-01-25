export interface CreatorSummary {
  id: string;
  name: string;
  avatar: string;
  coverImage?: string;
  niche: string;
  location: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  verified: boolean;
  platforms: string[];
  theme: {
    gradient: string;
    accent: string;
  };
}

export interface CreatorSocialProfile {
  name: string;
  handle: string;
  followers: string;
  icon: "instagram" | "youtube" | "blog" | "linkedin" | "twitter" | "twitch";
}

export interface CreatorService {
  id: string;
  name: string; // Service name (some data uses 'name' instead of 'title')
  title?: string; // Optional title field
  description: string;
  price: number;
  deliveryDays: number;
  image?: string; // Optional image for digital products
  rating?: number;
  reviews?: number;
  features?: string[];
}

export interface CreatorReview {
  id: string;
  customer: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CreatorRecentWork {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface CreatorExperience {
  id: string;
  role: string;
  company: string;
  logo?: string;
  period?: string; // or duration
  duration?: string;
  description?: string;
}

export interface CreatorAchievement {
  id: string;
  title: string;
  date: string;
  icon: any; // Using any for lucide icons in data file
  description?: string;
}

export interface CreatorSpotlight {
  id: string;
  title: string;
  image: string;
  link?: string;
}

export interface CreatorProfile extends CreatorSummary {
  backgroundTheme?: string; // Theme ID from PROFILE_THEMES
  bio: string;
  languages?: string[];
  stats: {
    followers: string;
    campaigns: number | string;
    avgEngagement: string;
  };
  socialProfiles: CreatorSocialProfile[];
  services: CreatorService[];
  reviews: CreatorReview[];
  recentWorks: CreatorRecentWork[];
  availability: string[];
  experience?: CreatorExperience[];
  achievements?: CreatorAchievement[];
  spotlights?: CreatorSpotlight[];
}
