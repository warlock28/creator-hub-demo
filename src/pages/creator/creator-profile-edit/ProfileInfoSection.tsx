import { Camera, FileText, Tag, MapPin, Globe, User, BarChart, Target, Users, ImageIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { ThemeSelector } from "@/components/ui/ThemeSelector";
import { ProfileData } from "./types";
import { Dispatch, SetStateAction } from "react";

interface ProfileInfoSectionProps {
    profileData: ProfileData;
    setProfileData: Dispatch<SetStateAction<ProfileData>>;
    handleAvatarUpload: (file: File) => Promise<string>;
}

export function ProfileInfoSection({ profileData, setProfileData, handleAvatarUpload }: ProfileInfoSectionProps) {
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Profile Images Section */}
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                            <Camera className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold">Profile Images</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Your visual identity</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Avatar Upload */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <Label className="text-sm font-medium">Profile Photo</Label>
                            </div>
                            <div className="w-32 sm:w-36 md:w-40">
                                <ImageUpload
                                    onUpload={handleAvatarUpload}
                                    currentImage={profileData.profilePhoto}
                                    aspectRatio="square"
                                    label="Upload Avatar"
                                />
                            </div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                                Square format • 400×400px recommended
                            </p>
                        </div>


                        {/* Background Theme Selector */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <ImageIcon className="h-4 w-4 text-muted-foreground" />
                                <Label className="text-sm font-medium">Background Theme</Label>
                            </div>
                            <ThemeSelector
                                selectedTheme={profileData.backgroundTheme}
                                onThemeChange={(themeId) =>
                                    setProfileData(prev => ({ ...prev, backgroundTheme: themeId }))
                                }
                            />
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                                Choose a theme that represents your brand
                            </p>
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Basic Info */}
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold">Basic Information</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Your public details</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                            </div>
                            <Input
                                id="name"
                                value={profileData.name}
                                onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Tag className="h-4 w-4 text-muted-foreground" />
                                <Label htmlFor="niche" className="text-sm font-medium">Niche / Category</Label>
                            </div>
                            <Input
                                id="niche"
                                value={profileData.niche}
                                onChange={(e) => setProfileData(prev => ({ ...prev, niche: e.target.value }))}
                                placeholder="e.g., Tech Reviewer, Beauty Influencer"
                                className="transition-all focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                            </div>
                            <Input
                                id="location"
                                value={profileData.location}
                                onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                                placeholder="e.g., Mumbai, India"
                                className="transition-all focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-muted-foreground" />
                                <Label htmlFor="languages" className="text-sm font-medium">Languages</Label>
                            </div>
                            <Input
                                id="languages"
                                value={profileData.languages}
                                onChange={(e) => setProfileData(prev => ({ ...prev, languages: e.target.value }))}
                                placeholder="e.g., English, Hindi, Marathi"
                                className="transition-all focus:ring-2 focus:ring-primary/20"
                            />
                            <p className="text-xs text-muted-foreground">Separate multiple languages with commas</p>
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Bio */}
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-4">
                    {/* Section Header */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <Label htmlFor="bio" className="text-sm font-medium">Bio / About You</Label>
                        </div>
                        <span className={`text-xs font-medium ${profileData.bio.length > 450 ? 'text-warning' : 'text-muted-foreground'}`}>
                            {profileData.bio.length}/500
                        </span>
                    </div>
                    <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => {
                            if (e.target.value.length <= 500) {
                                setProfileData(prev => ({ ...prev, bio: e.target.value }));
                            }
                        }}
                        placeholder="Share your story, expertise, and what makes you unique..."
                        rows={5}
                        className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
                        maxLength={500}
                    />
                    <p className="text-xs text-muted-foreground">
                        Pro tip: A compelling bio helps brands connect with you. Mention your expertise, achievements, and personality.
                    </p>
                </div>
            </GlassCard>

            {/* Stats */}
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                            <BarChart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold">Statistics</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Your reach and impact</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Followers Card */}
                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/10 space-y-3">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-blue-500" />
                                <Label htmlFor="followers" className="text-sm font-medium">Followers</Label>
                            </div>
                            <Input
                                id="followers"
                                value={profileData.stats.followers}
                                onChange={(e) => setProfileData(prev => ({
                                    ...prev,
                                    stats: { ...prev.stats, followers: e.target.value }
                                }))}
                                placeholder="e.g., 10K"
                                className="bg-background/80"
                            />
                            <p className="text-xs text-muted-foreground">Use K for thousands, M for millions</p>
                        </div>

                        {/* Campaigns Card */}
                        <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/10 space-y-3">
                            <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-green-500" />
                                <Label htmlFor="campaigns" className="text-sm font-medium">Campaigns</Label>
                            </div>
                            <Input
                                id="campaigns"
                                value={profileData.stats.campaigns}
                                onChange={(e) => setProfileData(prev => ({
                                    ...prev,
                                    stats: { ...prev.stats, campaigns: e.target.value }
                                }))}
                                placeholder="e.g., 50"
                                className="bg-background/80"
                            />
                            <p className="text-xs text-muted-foreground">Total campaigns completed</p>
                        </div>

                        {/* Engagement Card */}
                        <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/5 to-violet-500/10 border border-violet-500/10 space-y-3">
                            <div className="flex items-center gap-2">
                                <BarChart className="h-4 w-4 text-violet-500" />
                                <Label htmlFor="engagement" className="text-sm font-medium">Avg. Engagement</Label>
                            </div>
                            <Input
                                id="engagement"
                                value={profileData.stats.avgEngagement}
                                onChange={(e) => setProfileData(prev => ({
                                    ...prev,
                                    stats: { ...prev.stats, avgEngagement: e.target.value }
                                }))}
                                placeholder="e.g., 5.5%"
                                className="bg-background/80"
                            />
                            <p className="text-xs text-muted-foreground">Average engagement rate</p>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
