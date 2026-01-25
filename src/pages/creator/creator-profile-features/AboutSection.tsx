import { motion } from "framer-motion";
import {
    Users,
    Instagram,
    Youtube,
    Globe,
    Linkedin,
    Twitter,
    Twitch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";

const socialIconMap: Record<
    CreatorProfileType["socialProfiles"][number]["icon"],
    LucideIcon
> = {
    instagram: Instagram,
    youtube: Youtube,
    blog: Globe,
    linkedin: Linkedin,
    twitter: Twitter,
    twitch: Twitch,
};

interface AboutSectionProps {
    creator: CreatorProfileType;
}

export function AboutSection({ creator }: AboutSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-indigo-100/50 dark:border-indigo-900/30 shadow-xl overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 60%, #FFF1F7 100%)'
            }}
        >
            <div className="absolute inset-0 hidden dark:block" style={{
                background: 'linear-gradient(135deg, #0B1220 0%, #1E1B4B 50%, #3B0A45 100%)'
            }} />

            <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5" style={{
                background: 'linear-gradient(90deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)'
            }} />

            <div className="relative z-10">
                <h3 className="font-display text-base sm:text-lg md:text-xl font-extrabold mb-3 sm:mb-4 md:mb-5 flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0" style={{
                        background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                    }}>
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent" style={{
                        backgroundImage: 'linear-gradient(90deg, #4338CA 0%, #DB2777 100%)'
                    }}>
                        About Me
                    </span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#5b5f65ff' }}>
                    <span className="dark:hidden">{creator.bio}</span>
                    <span className="hidden dark:inline text-gray-200">{creator.bio}</span>
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
                    {creator.socialProfiles.map((profile) => {
                        const Icon = socialIconMap[profile.icon] ?? Globe;
                        return (
                            <motion.div
                                key={profile.name}
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-[#1E1B4B] border border-indigo-100 dark:border-indigo-800/50 cursor-pointer shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transition-shadow"
                            >
                                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0" style={{
                                    background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                                }}>
                                    <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-gray-100">{profile.name}</span>
                                <span className="text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full" style={{
                                    backgroundColor: '#EEF2FF',
                                    color: '#4338CA'
                                }}>
                                    <span className="dark:hidden">{profile.followers}</span>
                                    <span className="hidden dark:inline" style={{ backgroundColor: '#312E81', color: '#A5B4FC' }}>{profile.followers}</span>
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
