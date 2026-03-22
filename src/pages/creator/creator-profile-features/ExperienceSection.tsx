import { motion } from "framer-motion";
import {
    Briefcase,
    Calendar,
    Building2,
    ChevronDown,
} from "lucide-react";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";

interface ExperienceSectionProps {
    creator: CreatorProfileType;
}

export function ExperienceSection({ creator }: ExperienceSectionProps) {
    if (!creator.experience || creator.experience.length === 0) {
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
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-extrabold flex items-center gap-2 sm:gap-3">
                        <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0" style={{
                            backgroundColor: '#DBEAFE'
                        }}>
                            <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#1E40AF' }} />
                            <span className="hidden dark:block absolute inset-0 rounded-xl" style={{ backgroundColor: '#1E3A8A' }} />
                        </div>
                        <span className="bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(90deg, #1E40AF 0%, #0284C7 100%)'
                        }}>
                            <span className="dark:hidden">Experience</span>
                        </span>
                        <span className="hidden dark:inline bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(90deg, #60A5FA 0%, #22D3EE 100%)'
                        }}>
                            Experience
                        </span>
                    </h3>
                    <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>
                        {creator.experience.length} roles
                    </span>
                </div>

                <div className="max-h-[240px] sm:max-h-[260px] lg:max-h-[280px] overflow-y-auto scrollbar-hide">
                    <div className="space-y-0">
                        {creator.experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="relative"
                            >
                                <div className={`flex gap-3 sm:gap-4 py-3 sm:py-4`}>
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md overflow-hidden bg-white dark:bg-slate-800 relative z-10" style={{
                                            border: '2px solid #DBEAFE'
                                        }}>
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        {index !== creator.experience.length - 1 && (
                                            <div className="w-0.5 flex-1 min-h-[20px] mt-1" style={{
                                                background: 'linear-gradient(180deg, #2563EB 0%, #06B6D4 100%)'
                                            }}>
                                                <div className="hidden dark:block w-full h-full" style={{
                                                    background: 'linear-gradient(180deg, #60A5FA 0%, #22D3EE 100%)'
                                                }} />
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-start justify-between gap-1.5 sm:gap-2 mb-1">
                                            <h4 className="font-bold text-sm sm:text-base leading-tight" style={{ color: '#0F172A' }}>
                                                <span className="dark:hidden">{exp.role}</span>
                                                <span className="hidden dark:inline text-gray-100">{exp.role}</span>
                                            </h4>
                                            <span className="text-[9px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-0.5 sm:gap-1 flex-shrink-0" style={{
                                                backgroundColor: '#DBEAFE',
                                                color: '#1E40AF'
                                            }}>
                                                <Calendar className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                                                <span className="dark:hidden">{exp.period}</span>
                                                <span className="hidden dark:inline" style={{ color: '#93C5FD' }}>{exp.period}</span>
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 sm:gap-1.5 text-xs font-semibold mb-1" style={{ color: '#1E40AF' }}>
                                            <Building2 className="h-3 w-3 flex-shrink-0" />
                                            <span className="dark:hidden truncate">{exp.company}</span>
                                            <span className="hidden dark:inline text-blue-400 truncate">{exp.company}</span>
                                        </div>

                                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#475569' }}>
                                            <span className="dark:hidden">{exp.description}</span>
                                            <span className="hidden dark:inline text-gray-400">{exp.description}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {creator.experience.length > 3 && (
                    <div className="flex justify-center mt-2 sm:mt-3 pt-2" style={{ borderTop: '1px solid rgba(37, 99, 235, 0.15)' }}>
                        <span className="text-[10px] sm:text-xs flex items-center gap-1" style={{ color: '#64748B' }}>
                            <ChevronDown className="h-3 w-3 animate-bounce" />
                            Scroll for more
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
