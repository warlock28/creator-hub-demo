import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { PublicLayout } from "@/components/layout/PublicLayout";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";
import NotFound from "../static-pages/NotFound";
import { useCreatorProfile } from "@/hooks/useCreatorProfile";
import {
    ProfileHeader,
    CreatorAnalyticsSection,
    HighlightsSection,
    ServicesSectionMobile,
    ServicesSectionDesktop,
    AboutSection,
    ExperienceSection,
    AchievementsSection,
    TabsSection,
    CreatorBackgroundTheme,
} from "./creator-profile-features";

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
};

export default function CreatorProfile() {
    const { id } = useParams<{ id: string }>();
    const [selectedService, setSelectedService] = useState<string | null>(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }, [id]);

    const { data: creator, isLoading: loading } = useCreatorProfile(id);

    // Set initial selected service
    useEffect(() => {
        if (creator?.services?.length && !selectedService) {
            setSelectedService(creator.services[0].id);
        }
    }, [creator, selectedService]);

    if (loading) {
        return (
            <PublicLayout hideFooter>
                {/* Hero Skeleton */}
                <Skeleton className="h-52 sm:h-60 md:h-72 lg:h-80 w-full" />

                <div className="container mx-auto px-4 lg:px-8 -mt-24 relative pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                        {/* Left Column Skeleton */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* Profile Header Skeleton */}
                            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50 space-y-4">
                                <div className="flex justify-between items-start">
                                    <Skeleton className="h-24 w-24 rounded-full border-4 border-background" />
                                    <Skeleton className="h-10 w-32 rounded-lg" />
                                </div>
                                <div className="space-y-2 pt-2">
                                    <Skeleton className="h-8 w-1/2" />
                                    <Skeleton className="h-4 w-3/4" />
                                </div>
                            </div>
                            {/* Stats Skeleton */}
                            <Skeleton className="h-32 w-full rounded-3xl" />
                        </div>

                        {/* Right Column Skeleton */}
                        <div className="hidden lg:block lg:col-span-4">
                            <Skeleton className="h-[600px] w-full rounded-3xl" />
                        </div>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    if (!creator) {
        return <NotFound />;
    }

    return (
        <PublicLayout hideFooter>
            {/* Hero Background Section with Theme */}
            <CreatorBackgroundTheme themeId={creator.backgroundTheme} />

            <div className="container mx-auto px-4 lg:px-8 -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64 relative pb-16">
                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* LEFT COLUMN */}
                    <motion.div
                        className="lg:col-span-8 space-y-6"
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        {/* Profile Header Card */}
                        <ProfileHeader creator={creator} />

                        {/* Highlights Section */}
                        <HighlightsSection creator={creator} />

                        {/* Analytics Section (Private) */}
                        <CreatorAnalyticsSection />

                        {/* Services Section - Mobile/Tablet Only */}
                        <ServicesSectionMobile
                            creator={creator}
                            selectedService={selectedService}
                            setSelectedService={setSelectedService}
                        />

                        {/* About Section */}
                        <AboutSection creator={creator} />

                        {/* Experience Section */}
                        <ExperienceSection creator={creator} />

                        {/* Achievements Section */}
                        <AchievementsSection creator={creator} />

                        {/* Tabs Section - Reviews & Recent Works */}
                        <TabsSection creator={creator} />

                    </motion.div>

                    {/* RIGHT COLUMN - Services Sidebar (Desktop Only) */}
                    <ServicesSectionDesktop
                        creator={creator}
                        selectedService={selectedService}
                        setSelectedService={setSelectedService}
                    />

                </div>
            </div>
        </PublicLayout>
    );
}
