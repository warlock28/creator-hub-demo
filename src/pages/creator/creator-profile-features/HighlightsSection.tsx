import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, X } from "lucide-react";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";

interface HighlightsSectionProps {
    creator: CreatorProfileType;
}

interface SelectedSpotlight {
    image: string;
    title: string;
}

export function HighlightsSection({ creator }: HighlightsSectionProps) {
    const [selectedImage, setSelectedImage] = useState<SelectedSpotlight | null>(null);

    if (!creator.spotlights || creator.spotlights.length === 0) {
        return null;
    }

    const handleImageClick = (spotlight: SelectedSpotlight) => {
        setSelectedImage(spotlight);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
            >
                <h2 className="font-display text-sm font-bold uppercase tracking-wider flex items-center gap-2 px-1" style={{ color: '#64748B' }}>
                    <div className="h-5 w-5 rounded-md flex items-center justify-center" style={{
                        background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)'
                    }}>
                        <Sparkles className="h-3 w-3 text-white" />
                    </div>
                    <span className="dark:hidden" style={{ color: '#1E293B' }}>Highlights</span>
                    <span className="hidden dark:inline" style={{ color: '#E5E7EB' }}>Highlights</span>
                </h2>

                <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
                    {creator.spotlights.map((spotlight, index) => (
                        <motion.div
                            key={spotlight.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 cursor-pointer group"
                            onClick={() => handleImageClick({ image: spotlight.image, title: spotlight.title })}
                        >
                            {/* 3D Card Container */}
                            <div className="w-20 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden relative" style={{
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                                transform: 'perspective(1000px) rotateX(2deg)',
                                transformStyle: 'preserve-3d'
                            }}>
                                {/* Card Background with gradient border effect */}
                                <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]" style={{
                                    background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #8B5CF6 100%)',
                                    padding: '2px'
                                }}>
                                    <div className="w-full h-full rounded-[10px] overflow-hidden bg-white dark:bg-slate-900">
                                        <img
                                            src={spotlight.image}
                                            alt={spotlight.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    </div>
                                </div>
                                {/* Title at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5">
                                    <span className="text-[11px] sm:text-xs font-semibold text-white text-center block truncate drop-shadow-lg">
                                        {spotlight.title}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Add More Button */}
                    <motion.div
                        className="flex-shrink-0"
                    >
                        <div className="w-20 sm:w-24 aspect-[3/4] rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-1.5 transition-colors" style={{
                            borderColor: '#CBD5E1',
                            background: 'rgba(241, 245, 249, 0.5)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                        }}>
                            <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{
                                background: 'linear-gradient(135deg, #E2E8F0 0%, #F1F5F9 100%)'
                            }}>
                                <Plus className="h-4 w-4" style={{ color: '#64748B' }} />
                            </div>
                            <span className="text-[9px] sm:text-[10px] font-medium" style={{ color: '#64748B' }}>View All</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
                        style={{ background: 'rgba(0, 0, 0, 0.9)' }}
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-w-4xl max-h-[85vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Gradient Border Frame */}
                            <div className="rounded-2xl sm:rounded-3xl overflow-hidden" style={{
                                background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #8B5CF6 100%)',
                                padding: '3px'
                            }}>
                                <div className="rounded-[14px] sm:rounded-[22px] overflow-hidden bg-black">
                                    <img
                                        src={selectedImage.image}
                                        alt={selectedImage.title}
                                        className="w-full h-auto max-h-[75vh] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute -bottom-12 left-0 right-0 text-center"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                                    {selectedImage.title}
                                </h3>
                            </motion.div>
                        </motion.div>

                        {/* Click anywhere hint */}
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="text-xs sm:text-sm text-white/50">Click anywhere to close</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
