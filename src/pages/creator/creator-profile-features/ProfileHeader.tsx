import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
    Star,
    MapPin,
    CheckCircle2,
    MessageCircle,
    Share2,
    Heart,
    Calendar,
    IndianRupee,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";
import { useLikedCreators } from "@/hooks/useLikedCreators";
import { useEffect, useRef, useState } from "react";

interface ProfileHeaderProps {
    creator: CreatorProfileType;
}

// Animated Counter Component
function AnimatedCounter({ value, gradient }: { value: string; gradient: string }) {
    const numberRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    const motionValue = useMotionValue(0);
    const hasAnimatedRef = useRef(false);

    // Extract suffix from value (K, K+, %, ★, +, etc.)
    const getSuffix = () => {
        const match = value.match(/[^\d.].*/);
        return match ? match[0] : '';
    };
    const suffix = getSuffix();

    useEffect(() => {
        if (isInView && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const numericMatch = value.match(/[\d.]+/);
            if (numericMatch) {
                const targetValue = parseFloat(numericMatch[0]);
                animate(motionValue, targetValue, {
                    duration: 2.5,
                    ease: "easeOut",
                });
            }
        }
    }, [isInView, value, motionValue]);

    const rounded = useTransform(motionValue, (latest) => {
        const hasDecimal = value.includes('.');
        return hasDecimal ? latest.toFixed(1) : Math.round(latest).toString();
    });

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            if (numberRef.current) {
                numberRef.current.textContent = latest;
            }
        });

        return () => unsubscribe();
    }, [rounded, value]);

    return (
        <div
            ref={containerRef}
            className="font-display text-base sm:text-lg md:text-2xl font-bold mb-0.5 sm:mb-1 tabular-nums number-display"
            style={{
                fontFamily: '"Libertinus Serif Display", Georgia, serif',
                fontFeatureSettings: '"tnum"',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '0.02em'
            }}
        >
            {/* Numeric value with gradient */}
            <span
                ref={numberRef}
                style={{
                    background: gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                0
            </span>
            {/* Suffix in neutral color */}
            {suffix && (
                <span style={{ color: '#EF4444', fontSize: '0.75em' }}>
                    {suffix}
                </span>
            )}
        </div>
    );
}

// Stats Section Component
function StatsSection({ creator }: { creator: CreatorProfileType }) {
    const stats = [
        {
            value: String(creator.stats.followers),
            label: "Followers",
            gradient: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)"
        },
        {
            value: String(creator.stats.campaigns),
            label: "Campaigns",
            gradient: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)"
        },
        {
            value: String(creator.stats.avgEngagement),
            label: "Engagement",
            gradient: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)"
        },
        {
            value: "4.9★",
            label: "Rating",
            gradient: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)"
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6" style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)' }}>
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="relative text-center py-2 sm:p-3 md:p-4 sm:rounded-xl"
                    style={{
                        // Only show box styling on sm+ screens via CSS
                    }}
                >
                    {/* Box background - only visible on sm+ screens */}
                    <div className="hidden sm:block absolute inset-0 rounded-xl" style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(148, 163, 184, 0.15)'
                    }} />
                    {/* Dark mode box - only visible on sm+ screens */}
                    <div className="hidden dark:sm:block absolute inset-0 rounded-xl" style={{
                        background: 'rgba(30, 41, 59, 0.6)',
                        boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.3), 0 2px 6px -2px rgba(0, 0, 0, 0.2)',
                        border: '1px solid rgba(51, 65, 85, 0.3)'
                    }} />
                    <div className="relative">
                        <AnimatedCounter value={stat.value} gradient={stat.gradient} />
                        <p
                            className="text-xs sm:text-sm md:text-base font-semibold mt-0.5 sm:mt-1"
                            style={{
                                color: '#64748B',
                                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                            }}
                        >
                            <span className="dark:hidden">{stat.label}</span>
                            <span className="hidden dark:inline" style={{ color: '#94A3B8', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>{stat.label}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Desktop Action Buttons - Icon-only with expand on hover
function DesktopActionButtons() {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const buttons = [
        {
            id: 'message',
            icon: MessageCircle,
            label: 'Message',
            bgClass: 'bg-blue-100 dark:bg-blue-900/40',
            textClass: 'text-blue-700 dark:text-blue-300',
            shadow: 'rgba(37, 99, 235, 0.2)',
        },
        {
            id: 'appointment',
            icon: Users,
            label: '1:1 Meet',
            bgClass: 'bg-violet-100 dark:bg-violet-900/40',
            textClass: 'text-violet-700 dark:text-violet-300',
            shadow: 'rgba(124, 58, 237, 0.2)',
        },
        {
            id: 'thanks',
            icon: IndianRupee,
            label: 'Thanks',
            bgClass: 'bg-emerald-100 dark:bg-emerald-900/40',
            textClass: 'text-emerald-700 dark:text-emerald-300',
            shadow: 'rgba(16, 185, 129, 0.2)',
        },
    ];

    return (
        <div className="hidden sm:flex flex-col gap-2 flex-shrink-0 items-end">
            {buttons.map((btn) => {
                const Icon = btn.icon;
                const isHovered = hoveredButton === btn.id;

                return (
                    <div key={btn.id} className="relative h-10 w-10">
                        <motion.button
                            onMouseEnter={() => setHoveredButton(btn.id)}
                            onMouseLeave={() => setHoveredButton(null)}
                            initial={false}
                            animate={{
                                width: isHovered ? 'auto' : 40,
                                scale: isHovered ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className={`absolute right-0 top-0 h-10 rounded-full font-bold text-sm flex items-center justify-center gap-2 overflow-hidden cursor-pointer ${btn.bgClass} ${btn.textClass}`}
                            style={{
                                boxShadow: isHovered
                                    ? `0 6px 16px ${btn.shadow}`
                                    : `0 3px 10px ${btn.shadow}`,
                                minWidth: 40,
                                paddingLeft: isHovered ? 16 : 0,
                                paddingRight: isHovered ? 16 : 0,
                            }}
                        >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <motion.span
                                initial={false}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    width: isHovered ? 'auto' : 0,
                                    marginLeft: isHovered ? 0 : -8,
                                }}
                                transition={{ duration: 0.15 }}
                                className="whitespace-nowrap overflow-hidden"
                            >
                                {btn.label}
                            </motion.span>
                        </motion.button>
                    </div>
                );
            })}
        </div>
    );
}

export function ProfileHeader({ creator }: ProfileHeaderProps) {
    const { isLiked, toggleLike } = useLikedCreators();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl backdrop-blur-xl p-4 sm:p-6 relative overflow-hidden"
            style={{
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(148, 163, 184, 0.4)',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.1)'
            }}
        >
            {/* Dark mode overlay */}
            <div className="absolute inset-0 hidden dark:block rounded-2xl" style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }} />

            <div className="relative z-10">
                {/* Top Section - Avatar + Info + Icons */}
                <div className="flex items-start gap-4">
                    {/* Avatar + Mobile Icons Column */}
                    <div className="relative flex-shrink-0">
                        {/* Avatar */}
                        <div className="rounded-xl sm:rounded-2xl border border-slate-900 dark:border-slate-400 overflow-hidden shadow-sm">
                            {creator.avatar ? (
                                <img
                                    src={creator.avatar}
                                    alt={creator.name}
                                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover bg-white dark:bg-slate-900"
                                />
                            ) : (
                                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl md:text-5xl">
                                    {creator.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        {creator.verified && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="hidden sm:flex absolute -bottom-1 -right-1 h-8 w-8 sm:h-9 sm:w-9 rounded-full items-center justify-center ring-[2.5px] sm:ring-[3px] ring-white dark:ring-slate-900"
                                style={{
                                    background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
                                    boxShadow: '0 4px 8px -1px rgba(6, 182, 212, 0.4)'
                                }}
                            >
                                <CheckCircle2 className="h-[18px] w-[18px] sm:h-5 sm:w-5 text-white" strokeWidth={2.5} />
                            </motion.div>
                        )}


                    </div>

                    {/* Info Section */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#0F172A' }}>
                                    <span className="dark:hidden">{creator.name}</span>
                                    <span className="hidden dark:inline" style={{ color: '#F1F5F9' }}>{creator.name}</span>
                                </h1>
                                <p className="text-sm sm:text-base font-medium mt-1" style={{ color: '#64748B' }}>
                                    <span className="dark:hidden">{creator.niche}</span>
                                    <span className="hidden dark:inline" style={{ color: '#94A3B8' }}>{creator.niche}</span>
                                </p>
                                <p className="text-xs sm:text-sm flex items-center gap-1 mt-1" style={{ color: '#94A3B8' }}>
                                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                    {creator.location}
                                </p>


                                {/* Action Icons and Verified Badge */}
                                <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-3">
                                    {/* Share and Like Icons */}
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full h-8 w-8 transition-all duration-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-500"
                                            style={{
                                                border: '1px solid #E2E8F0',
                                                color: creator && isLiked(creator.id) ? '#F43F5E' : '#64748B'
                                            }}
                                            onClick={() => creator && toggleLike(creator.id)}
                                            aria-label={creator && isLiked(creator.id) ? "Unlike creator" : "Like creator"}
                                        >
                                            <Heart
                                                className={`h-3.5 w-3.5 transition-all ${creator && isLiked(creator.id) ? "fill-rose-500 text-rose-500 scale-110" : ""}`}
                                            />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full h-8 w-8 transition-all duration-200 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-500"
                                            style={{ border: '1px solid #E2E8F0', color: '#64748B' }}
                                            aria-label="Share profile"
                                        >
                                            <Share2 className="h-3.5 w-3.5" />
                                        </Button>
                                    </div>

                                    {/* Verified Badge */}
                                    {creator.verified && (
                                        <span className="inline-flex items-center text-xs sm:text-sm font-medium px-2 sm:px-2.5 py-1 rounded-md" style={{
                                            background: 'rgba(224, 242, 254, 0.7)',
                                            color: '#075985',
                                            border: '1px solid rgba(186, 230, 253, 0.5)'
                                        }}>
                                            <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                                            Verified
                                        </span>
                                    )}
                                </div>
                            </div>



                            {/* Action Buttons - Desktop Only (Icon-only with expand on click) */}
                            <DesktopActionButtons />
                        </div>
                    </div>
                </div>


                {/* Stats Section */}
                <StatsSection creator={creator} />

                {/* Action Buttons - Mobile/Tablet Only (Single Row) */}
                <div className="sm:hidden mt-4 pt-4" style={{ borderTop: '1px solid rgba(148, 163, 184, 0.3)' }}>
                    <div className="grid grid-cols-3 gap-2">
                        {/* Message Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-full h-8 px-2 font-bold text-[10px] flex items-center justify-center gap-1 transition-all bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                            style={{
                                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.15)'
                            }}
                        >
                            <MessageCircle className="h-3 w-3" />
                            <span>Message</span>
                        </motion.button>

                        {/* Appointment Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-full h-8 px-2 font-bold text-[10px] flex items-center justify-center gap-1 transition-all bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                            style={{
                                boxShadow: '0 2px 8px rgba(124, 58, 237, 0.15)'
                            }}
                        >
                            <Calendar className="h-3 w-3" />
                            <span>Book</span>
                        </motion.button>

                        {/* Thanks Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-full h-8 px-2 font-bold text-[10px] flex items-center justify-center gap-1 transition-all bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
                            style={{
                                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)'
                            }}
                        >
                            <IndianRupee className="h-3 w-3" />
                            <span>Thanks</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}
