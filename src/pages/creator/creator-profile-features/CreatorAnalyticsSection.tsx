import { motion } from "framer-motion";
import { Users, BarChart2, Search, Eye, ArrowRight } from "lucide-react";

export function CreatorAnalyticsSection() {
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
                            backgroundColor: '#FFE4E6'
                        }}>
                            <BarChart2 className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#BE123C' }} />
                            <span className="hidden dark:block absolute inset-0 rounded-xl" style={{ backgroundColor: '#881337' }} />
                        </div>
                        <span className="bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(90deg, #BE123C 0%, #E11D48 100%)'
                        }}>
                            <span className="dark:hidden">Analytics</span>
                        </span>
                        <span className="hidden dark:inline bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(90deg, #FB7185 0%, #FDA4AF 100%)'
                        }}>
                            Analytics
                        </span>
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: '#FFE4E6', color: '#BE123C' }}>
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>Private to you</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
                    {/* Item 1 */}
                    <div className="flex gap-3 items-start group hover:bg-white/50 dark:hover:bg-slate-800/50 p-3 -ml-3 rounded-xl transition-all cursor-pointer">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#F1F5F9' }}>
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300" />
                        </div>
                        <div>
                            <div className="font-bold text-sm sm:text-base transition-colors group-hover:text-rose-600 dark:group-hover:text-rose-400" style={{ color: '#0F172A' }}>
                                <span className="dark:hidden">76 profile views</span>
                                <span className="hidden dark:inline text-slate-100 group-hover:text-rose-400">76 profile views</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-0.5" style={{ color: '#475569' }}>
                                <span className="dark:hidden">Discover who's viewed your profile.</span>
                                <span className="hidden dark:inline text-slate-400">Discover who's viewed your profile.</span>
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-3 items-start group hover:bg-white/50 dark:hover:bg-slate-800/50 p-3 -ml-3 rounded-xl transition-all cursor-pointer">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#F1F5F9' }}>
                            <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300" />
                        </div>
                        <div>
                            <div className="font-bold text-sm sm:text-base transition-colors group-hover:text-rose-600 dark:group-hover:text-rose-400" style={{ color: '#0F172A' }}>
                                <span className="dark:hidden">13 post impressions</span>
                                <span className="hidden dark:inline text-slate-100 group-hover:text-rose-400">13 post impressions</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-0.5" style={{ color: '#475569' }}>
                                <span className="dark:hidden">Check out who's engaging with your posts.</span>
                                <span className="hidden dark:inline text-slate-400">Check out who's engaging with your posts.</span>
                            </p>
                            <p className="text-[10px] sm:text-xs mt-1" style={{ color: '#64748B' }}>Past 7 days</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex gap-3 items-start group hover:bg-white/50 dark:hover:bg-slate-800/50 p-3 -ml-3 rounded-xl transition-all cursor-pointer">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#F1F5F9' }}>
                            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300" />
                        </div>
                        <div>
                            <div className="font-bold text-sm sm:text-base transition-colors group-hover:text-rose-600 dark:group-hover:text-rose-400" style={{ color: '#0F172A' }}>
                                <span className="dark:hidden">1 search appearance</span>
                                <span className="hidden dark:inline text-slate-100 group-hover:text-rose-400">1 search appearance</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-0.5" style={{ color: '#475569' }}>
                                <span className="dark:hidden">See how often you appear in search results.</span>
                                <span className="hidden dark:inline text-slate-400">See how often you appear in search results.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer / Show All */}
                <div 
                    className="mt-2 pt-4 border-t hover:opacity-80 transition-opacity cursor-pointer flex justify-center items-center"
                    style={{ borderColor: 'rgba(244, 63, 94, 0.15)' }}
                >
                    <span 
                        className="font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 w-full h-full"
                        style={{ color: '#E11D48' }}
                    >
                        <span className="dark:hidden flex items-center gap-1.5">Show all analytics <ArrowRight className="w-4 h-4" /></span>
                        <span className="hidden dark:flex items-center gap-1.5" style={{ color: '#FB7185' }}>Show all analytics <ArrowRight className="w-4 h-4" /></span>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
