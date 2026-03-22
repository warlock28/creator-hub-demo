import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Briefcase, ExternalLink, CalendarDays } from "lucide-react";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";

interface TabsSectionProps {
    creator: CreatorProfileType;
}

export function TabsSection({ creator }: TabsSectionProps) {
    const [activeTab, setActiveTab] = useState<"reviews" | "recentWorks">("recentWorks");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-shadow duration-300 overflow-hidden"
        >
            <div className="relative z-10">
                {/* Tab Headers */}
                <div className="flex gap-2 mb-4 sm:mb-5">
                    {[
                        { id: "recentWorks", label: "Recent Works", count: creator.recentWorks?.length || 0, icon: Briefcase },
                        { id: "reviews", label: "Reviews", count: creator.reviews.length, icon: MessageSquare },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as "reviews" | "recentWorks")}
                                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2`}
                                style={{
                                    background: activeTab === tab.id
                                        ? 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)'
                                        : 'rgba(219, 234, 254, 0.6)',
                                    color: activeTab === tab.id ? '#FFFFFF' : '#1E40AF',
                                    boxShadow: activeTab === tab.id ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none'
                                }}
                            >
                                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                <span>{tab.label}</span>
                                <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full"
                                    style={{
                                        background: activeTab === tab.id ? 'rgba(255,255,255,0.2)' : 'rgba(30, 64, 175, 0.1)',
                                        color: activeTab === tab.id ? '#FFFFFF' : '#1E40AF'
                                    }}
                                >
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="min-h-[200px] sm:min-h-[220px] max-h-[280px] sm:max-h-[300px] overflow-y-auto scrollbar-hide">
                    <AnimatePresence mode="wait">
                        {activeTab === "reviews" ? (
                            <motion.div
                                key="reviews"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-3 sm:space-y-4"
                            >
                                {creator.reviews.map((review, index) => (
                                    <motion.div
                                        key={review.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.08 }}
                                        className="p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-200 hover:shadow-md"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.5) 0%, rgba(224, 242, 254, 0.5) 100%)',
                                            border: '1px solid rgba(147, 197, 253, 0.4)'
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="relative flex-shrink-0">
                                                <img
                                                    src={review.avatar}
                                                    alt={review.customer}
                                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl object-cover shadow-sm"
                                                    style={{ border: '2px solid #DBEAFE' }}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center gap-2 mb-1.5">
                                                    <h5 className="font-bold text-sm sm:text-base truncate" style={{ color: '#0F172A' }}>
                                                        <span className="dark:hidden">{review.customer}</span>
                                                        <span className="hidden dark:inline text-gray-100">{review.customer}</span>
                                                    </h5>
                                                    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full flex-shrink-0 flex items-center gap-1"
                                                        style={{ background: '#DBEAFE', color: '#1E40AF' }}
                                                    >
                                                        <CalendarDays className="h-2.5 w-2.5" />
                                                        {review.date}
                                                    </span>
                                                </div>
                                                <div className="flex gap-0.5 mb-2">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-blue-200"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#475569' }}>
                                                    <span className="dark:hidden">{review.comment}</span>
                                                    <span className="hidden dark:inline text-gray-400">{review.comment}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="works"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3"
                            >
                                {creator.recentWorks?.map((work, index) => (
                                    <motion.div
                                        key={work.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.06 }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="group rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
                                            border: '1px solid rgba(147, 197, 253, 0.4)',
                                            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)'
                                        }}
                                    >
                                        <div className="aspect-square overflow-hidden relative">
                                            <img
                                                src={work.image}
                                                alt={work.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{
                                                    background: 'linear-gradient(to top, rgba(30, 64, 175, 0.8) 0%, rgba(37, 99, 235, 0.4) 40%, transparent 100%)'
                                                }}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center"
                                                    style={{ background: 'rgba(255,255,255,0.9)' }}
                                                >
                                                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#1E40AF' }} />
                                                </div>
                                            </div>
                                            <span
                                                className="absolute bottom-1.5 left-1.5 text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full font-semibold"
                                                style={{
                                                    background: 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
                                                    color: 'white',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                                }}
                                            >
                                                {work.category}
                                            </span>
                                        </div>
                                        <div className="p-2 sm:p-2.5">
                                            <h4 className="font-bold text-[10px] sm:text-xs truncate mb-0.5" style={{ color: '#0F172A' }}>
                                                <span className="dark:hidden">{work.title}</span>
                                                <span className="hidden dark:inline text-gray-100">{work.title}</span>
                                            </h4>
                                            <p className="text-[9px] sm:text-[10px] flex items-center gap-1" style={{ color: '#1E40AF' }}>
                                                <CalendarDays className="h-2.5 w-2.5" />
                                                {work.date}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
