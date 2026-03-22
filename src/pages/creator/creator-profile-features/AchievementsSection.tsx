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
            className="relative bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-shadow duration-300 overflow-hidden"
        >
            <div className="relative z-10">
                <h3 className="font-display text-lg sm:text-xl font-extrabold mb-6 sm:mb-8 flex items-center gap-3">
                    <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl flex items-center justify-center shadow-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400">
                        <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-amber-700 dark:text-amber-400">
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
                                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400">
                                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
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
