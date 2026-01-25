import { motion } from "framer-motion";
import {
    Trophy,
    Youtube,
    Star,
    Award,
    Calendar,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";

const iconMap: Record<string, LucideIcon> = {
    Trophy: Trophy,
    Youtube: Youtube,
    Star: Star,
};

interface AchievementsSectionProps {
    creator: CreatorProfileType;
}

export function AchievementsSection({ creator }: AchievementsSectionProps) {
    if (!creator.achievements || creator.achievements.length === 0) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-amber-100/50 dark:border-amber-900/30 shadow-xl overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 50%, #FDF2F8 100%)'
            }}
        >
            <div className="absolute inset-0 hidden dark:block" style={{
                background: 'linear-gradient(135deg, #0B1220 0%, #2A1700 50%, #2B123F 100%)'
            }} />

            <div className="absolute top-0 left-0 right-0 h-1.5" style={{
                background: 'linear-gradient(90deg, #F59E0B 0%, #FB7185 50%, #8B5CF6 100%)'
            }} />

            <div className="relative z-10">
                <h3 className="font-display text-lg sm:text-xl font-extrabold mb-6 sm:mb-8 flex items-center gap-3">
                    <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl flex items-center justify-center shadow-lg" style={{
                        background: 'linear-gradient(135deg, #FBBF24 0%, #FB7185 100%)'
                    }}>
                        <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent" style={{
                        backgroundImage: 'linear-gradient(90deg, #92400E 0%, #9D174D 100%)'
                    }}>
                        <span className="dark:hidden">Achievements & Awards</span>
                    </span>
                    <span className="hidden dark:inline bg-clip-text text-transparent" style={{
                        backgroundImage: 'linear-gradient(90deg, #FCD34D 0%, #F9A8D4 100%)'
                    }}>
                        Achievements & Awards
                    </span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {creator.achievements.map((item, index) => {
                        const Icon = iconMap[item.icon as string] || Award;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="relative rounded-2xl p-5 sm:p-6 cursor-default shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                                style={{
                                    background: 'white',
                                    border: '1px solid #FED7AA'
                                }}
                            >
                                <div className="absolute inset-0 hidden dark:block rounded-2xl" style={{
                                    background: 'linear-gradient(135deg, #0B1220 0%, #2A1700 100%)',
                                    border: '1px solid #78350F'
                                }} />

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="relative">
                                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{
                                            background: 'linear-gradient(135deg, #FBBF24 0%, #FB7185 100%)'
                                        }}>
                                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                        </div>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-bold text-sm sm:text-base leading-tight" style={{ color: '#92400E' }}>
                                            <span className="dark:hidden">{item.title}</span>
                                            <span className="hidden dark:inline text-amber-100">{item.title}</span>
                                        </h4>
                                        <p className="text-xs sm:text-sm font-semibold mt-1.5 flex items-center gap-1.5" style={{ color: '#B45309' }}>
                                            <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                            <span className="dark:hidden">{item.date}</span>
                                            <span className="hidden dark:inline text-amber-400">{item.date}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
