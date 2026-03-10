import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, ShoppingCart, Award, BadgeCheck, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Brand/Customer Testimonials
const brandTestimonials = [
    {
        name: "Rajesh Kumar",
        role: "Founder & CEO",
        company: "NeoApps",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        content: "We've collaborated with 15+ creators through AdPromoo. The ROI has been phenomenal - our brand awareness tripled in just 3 months. Direct communication and escrow protection gave us complete peace of mind.",
        rating: 5,
        results: { metric: "3x", label: "Brand Awareness" },
        tags: ["Tech Startup", "App Launch"],
    },
    {
        name: "Sneha Patel",
        role: "Marketing Director",
        company: "FashionHub",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        content: "Finding the right fashion creators was always a nightmare. AdPromoo's verification system and transparent pricing saved us months of time and lakhs in agency fees. Our sales jumped 40% after creator campaigns.",
        rating: 5,
        results: { metric: "₹25L+", label: "Saved in Fees" },
        tags: ["Fashion Brand", "E-commerce"],
    },
    {
        name: "Vikram Singh",
        role: "Brand Manager",
        company: "FoodieKart",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        content: "We launched our new product line with 8 food creators from AdPromoo. The results were incredible - 500K impressions and 2000+ orders in the first week! The platform made collaboration seamless.",
        rating: 5,
        results: { metric: "2000+", label: "Orders in Week 1" },
        tags: ["Food & Beverage", "Product Launch"],
    },
    {
        name: "Anita Desai",
        role: "Growth Lead",
        company: "TechStart",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        content: "AdPromoo transformed our influencer marketing strategy. We now have direct relationships with top creators in our niche. The escrow system ensures smooth transactions every time.",
        rating: 5,
        results: { metric: "5x", label: "ROI Increase" },
        tags: ["SaaS", "B2B Marketing"],
    },
    {
        name: "Karan Malhotra",
        role: "CMO",
        company: "StyleCraft",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        content: "The quality of creators on AdPromoo is unmatched. We found exactly the right voices to represent our brand. Our customer engagement metrics have never been better.",
        rating: 5,
        results: { metric: "150%", label: "Engagement Boost" },
        tags: ["Lifestyle", "Premium Brand"],
    },
];

// Creator Testimonials
const creatorTestimonials = [
    {
        name: "Priya Sharma",
        handle: "@priyatech",
        niche: "Tech Reviewer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        content: "As a creator, getting direct brand deals without middlemen has doubled my monthly earnings. The platform is professional, payments are always on time, and I feel safe working here.",
        rating: 5,
        results: { metric: "2x", label: "Monthly Income" },
        followers: "245K",
        verified: true,
    },
    {
        name: "Arjun Mehta",
        handle: "@arjunstyle",
        niche: "Fashion Influencer",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
        content: "I was tired of agencies taking 30-40% cuts. AdPromoo connected me directly with brands, and now I keep 100% of what I earn. Plus the escrow protection means I never worry about payment issues.",
        rating: 5,
        results: { metric: "₹1.5L+", label: "Monthly Earnings" },
        followers: "580K",
        verified: true,
    },
    {
        name: "Neha Gupta",
        handle: "@nehafoodies",
        niche: "Food Blogger",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        content: "What I love most is the safety - no sharing personal numbers, all communication inside the platform. As a woman creator, this gives me so much confidence. And the rewards program is amazing!",
        rating: 5,
        results: { metric: "50+", label: "Brand Deals" },
        followers: "180K",
        verified: true,
    },
    {
        name: "Rohit Verma",
        handle: "@rohitfitness",
        niche: "Fitness Coach",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        content: "AdPromoo has been a game-changer for my fitness brand partnerships. The transparent pricing and professional approach attracts serious brands. My collaborations have grown 3x!",
        rating: 5,
        results: { metric: "3x", label: "More Collabs" },
        followers: "320K",
        verified: true,
    },
    {
        name: "Kavya Menon",
        handle: "@kavyatravels",
        niche: "Travel Vlogger",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        content: "From hotel partnerships to travel gear brands, AdPromoo made everything simple. The platform dashboard helps me manage all my deals in one place. Highly recommend!",
        rating: 5,
        results: { metric: "₹2L+", label: "Per Campaign" },
        followers: "410K",
        verified: true,
    },
];

// Success Keywords/Tags
const successTags = [
    { text: "3x More Sales", icon: TrendingUp, bg: "bg-green-50", text_color: "text-green-700", border: "border-green-200", iconBg: "bg-green-100" },
    { text: "Zero Fraud", icon: Award, bg: "bg-blue-50", text_color: "text-blue-700", border: "border-blue-200", iconBg: "bg-blue-100" },
    { text: "100% Secure Payments", icon: BadgeCheck, bg: "bg-violet-50", text_color: "text-violet-700", border: "border-violet-200", iconBg: "bg-violet-100" },
    { text: "Direct Brand Deals", icon: Users, bg: "bg-pink-50", text_color: "text-pink-700", border: "border-pink-200", iconBg: "bg-pink-100" },
    { text: "Increased Revenue", icon: ShoppingCart, bg: "bg-amber-50", text_color: "text-amber-700", border: "border-amber-200", iconBg: "bg-amber-100" },
    { text: "Verified Creators", icon: BadgeCheck, bg: "bg-cyan-50", text_color: "text-cyan-700", border: "border-cyan-200", iconBg: "bg-cyan-100" },
    { text: "Fast Response", icon: TrendingUp, bg: "bg-emerald-50", text_color: "text-emerald-700", border: "border-emerald-200", iconBg: "bg-emerald-100" },
];

// Smooth Carousel Hook with CSS transforms
const useSmoothCarousel = (totalItems: number, autoPlayInterval: number = 4000) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % totalItems);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [totalItems, isTransitioning]);

    const goToPrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [totalItems, isTransitioning]);

    const goToIndex = useCallback((index: number) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [currentIndex, isTransitioning]);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isAutoPlaying, goToNext, autoPlayInterval]);

    return {
        currentIndex,
        goToNext,
        goToPrev,
        goToIndex,
        setIsAutoPlaying,
        isTransitioning
    };
};

// Get card position class based on relative position to center
const getCardPosition = (index: number, currentIndex: number, total: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + total + Math.floor(total / 2)) % total) - Math.floor(total / 2);

    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === -1 || normalizedDiff === total - 1) return 'left';
    if (normalizedDiff === 1 || normalizedDiff === -(total - 1)) return 'right';
    return 'hidden';
};

// Brand Testimonial Card
interface BrandTestimonial {
    name: string;
    role: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
    results: { metric: string; label: string };
    tags: string[];
}

const BrandCard = ({ testimonial, position }: { testimonial: BrandTestimonial; position: string }) => {
    const isCenter = position === 'center';
    const isVisible = position !== 'hidden';

    return (
        <div
            className={`
                testimonial-card
                absolute top-1/2 left-1/2 w-[85%] sm:w-[45%] md:w-[32%] max-w-[380px]
                rounded-3xl p-5 md:p-7 border backdrop-blur-sm
                transition-all duration-500 ease-out will-change-transform
                ${isCenter
                    ? 'z-20 scale-100 opacity-100 -translate-x-1/2 -translate-y-1/2 bg-card shadow-2xl shadow-gray-200/50 border-gray-100'
                    : position === 'left'
                        ? 'z-10 scale-[0.85] opacity-60 -translate-x-[140%] -translate-y-1/2 bg-card/90 shadow-xl border-gray-100'
                        : position === 'right'
                            ? 'z-10 scale-[0.85] opacity-60 translate-x-[40%] -translate-y-1/2 bg-card/90 shadow-xl border-gray-100'
                            : 'z-0 scale-75 opacity-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none'
                }
            `}
            style={{
                visibility: isVisible ? 'visible' : 'hidden',
                transform: isCenter
                    ? 'translate(-50%, -50%) scale(1)'
                    : position === 'left'
                        ? 'translate(-140%, -50%) scale(0.85)'
                        : position === 'right'
                            ? 'translate(40%, -50%) scale(0.85)'
                            : 'translate(-50%, -50%) scale(0.75)'
            }}
        >
            {/* Glow effect for center card */}
            {isCenter && (
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-3xl blur-2xl -z-10 opacity-70" />
            )}

            {/* Quote Icon */}
            <Quote className={`absolute top-5 right-5 h-7 w-7 transition-colors duration-500 ${isCenter ? 'text-violet-200' : 'text-gray-100'}`} />

            {/* Result Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 transition-all duration-500 ${isCenter
                ? 'bg-accent text-primary scale-100'
                : 'bg-secondary text-muted-foreground scale-95'
                }`}>
                <TrendingUp className="h-4 w-4" />
                <span className="font-bold text-sm">{testimonial.results.metric}</span>
                <span className="text-xs">{testimonial.results.label}</span>
            </div>

            {/* Content */}
            <p className={`mb-5 leading-relaxed transition-all duration-500 ${isCenter ? 'text-gray-700 text-[15px]' : 'text-gray-500 text-sm'
                }`}>
                "{testimonial.content}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className={`fill-amber-400 text-amber-400 transition-all duration-500 ${isCenter ? 'h-[18px] w-[18px]' : 'h-4 w-4'
                        }`} />
                ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100/80">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={`rounded-full object-cover border-2 border-white shadow-md transition-all duration-500 ${isCenter ? 'w-13 h-13' : 'w-11 h-11'
                        }`}
                    style={{ width: isCenter ? '52px' : '44px', height: isCenter ? '52px' : '44px' }}
                />
                <div>
                    <h4 className={`font-semibold transition-all duration-500 ${isCenter ? 'text-gray-900 text-base' : 'text-gray-700 text-sm'
                        }`}>
                        {testimonial.name}
                    </h4>
                    <p className={`text-gray-500 transition-all duration-500 ${isCenter ? 'text-sm' : 'text-xs'
                        }`}>
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
                {testimonial.tags.map((tag, i) => (
                    <span
                        key={i}
                        className={`px-2.5 py-1 rounded-full transition-all duration-500 ${isCenter
                            ? 'text-xs bg-violet-100 text-violet-700'
                            : 'text-[11px] bg-gray-100 text-gray-500'
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

// Creator Testimonial Card
interface CreatorTestimonial {
    name: string;
    handle: string;
    niche: string;
    avatar: string;
    content: string;
    rating: number;
    results: { metric: string; label: string };
    followers: string;
    verified: boolean;
}

const CreatorCard = ({ testimonial, position }: { testimonial: CreatorTestimonial; position: string }) => {
    const isCenter = position === 'center';
    const isVisible = position !== 'hidden';

    return (
        <div
            className={`
                testimonial-card
                absolute top-1/2 left-1/2 w-[85%] sm:w-[45%] md:w-[32%] max-w-[380px]
                rounded-3xl p-5 md:p-7 border backdrop-blur-sm
                transition-all duration-500 ease-out will-change-transform
                ${isCenter
                    ? 'z-20 scale-100 opacity-100 -translate-x-1/2 -translate-y-1/2 bg-card shadow-2xl shadow-gray-200/50 border-gray-100'
                    : position === 'left'
                        ? 'z-10 scale-[0.85] opacity-60 -translate-x-[140%] -translate-y-1/2 bg-card/90 shadow-xl border-gray-100'
                        : position === 'right'
                            ? 'z-10 scale-[0.85] opacity-60 translate-x-[40%] -translate-y-1/2 bg-card/90 shadow-xl border-gray-100'
                            : 'z-0 scale-75 opacity-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none'
                }
            `}
            style={{
                visibility: isVisible ? 'visible' : 'hidden',
                transform: isCenter
                    ? 'translate(-50%, -50%) scale(1)'
                    : position === 'left'
                        ? 'translate(-140%, -50%) scale(0.85)'
                        : position === 'right'
                            ? 'translate(40%, -50%) scale(0.85)'
                            : 'translate(-50%, -50%) scale(0.75)'
            }}
        >
            {/* Glow effect for center card */}
            {isCenter && (
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-3xl blur-2xl -z-10 opacity-70" />
            )}

            {/* Quote Icon */}
            <Quote className={`absolute top-5 right-5 h-7 w-7 transition-colors duration-500 ${isCenter ? 'text-pink-200' : 'text-pink-100'}`} />

            {/* Result Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 transition-all duration-500 ${isCenter
                ? 'bg-gradient-to-r from-pink-100 to-violet-100 text-pink-700 scale-100'
                : 'bg-gradient-to-r from-pink-50 to-violet-50 text-pink-600 scale-95'
                }`}>
                <TrendingUp className="h-4 w-4" />
                <span className="font-bold text-sm">{testimonial.results.metric}</span>
                <span className="text-xs">{testimonial.results.label}</span>
            </div>

            {/* Content */}
            <p className={`mb-5 leading-relaxed transition-all duration-500 ${isCenter ? 'text-gray-700 text-[15px]' : 'text-gray-500 text-sm'
                }`}>
                "{testimonial.content}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className={`fill-amber-400 text-amber-400 transition-all duration-500 ${isCenter ? 'h-[18px] w-[18px]' : 'h-4 w-4'
                        }`} />
                ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-pink-100/80">
                <div className="relative">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className={`rounded-full object-cover border-2 border-white shadow-md transition-all duration-500`}
                        style={{ width: isCenter ? '52px' : '44px', height: isCenter ? '52px' : '44px' }}
                    />
                    {testimonial.verified && (
                        <div className={`absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 transition-all duration-500 ${isCenter ? 'scale-110' : 'scale-100'
                            }`}>
                            <BadgeCheck className="h-3.5 w-3.5 text-white" />
                        </div>
                    )}
                </div>
                <div>
                    <h4 className={`font-semibold transition-all duration-500 ${isCenter ? 'text-gray-900 text-base' : 'text-gray-700 text-sm'
                        }`}>
                        {testimonial.name}
                    </h4>
                    <p className={`text-gray-500 transition-all duration-500 ${isCenter ? 'text-sm' : 'text-xs'
                        }`}>
                        {testimonial.handle} • {testimonial.followers} followers
                    </p>
                </div>
            </div>

            {/* Niche */}
            <div className="mt-4">
                <span className={`px-3 py-1 rounded-full font-medium transition-all duration-500 ${isCenter
                    ? 'text-sm bg-pink-100 text-pink-700'
                    : 'text-xs bg-pink-50 text-pink-600'
                    }`}>
                    {testimonial.niche}
                </span>
            </div>
        </div>
    );
};

export function TestimonialsSection() {
    const brandCarousel = useSmoothCarousel(brandTestimonials.length, 4500);
    const creatorCarousel = useSmoothCarousel(creatorTestimonials.length, 5000);

    return (
        <section className="py-16 md:py-24 bg-background-secondary relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-white/50 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-30" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary/20"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 18}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.15, 0.35, 0.15],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <Badge className="bg-accent text-primary border-0 px-4 py-2 text-sm font-medium mb-4">
                        Success Stories
                    </Badge>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Trusted by <span className="text-primary">Thousands</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See how brands and creators are achieving incredible results with AdPromoo
                    </p>
                </motion.div>

                {/* Success Tags Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-14 overflow-hidden relative"
                >
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10" />

                    <div className="flex gap-4 animate-testimonial-marquee">
                        {[...successTags, ...successTags, ...successTags].map((tag, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl ${tag.bg} ${tag.text_color} border ${tag.border} font-medium shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300`}
                            >
                                <div className={`w-9 h-9 rounded-xl ${tag.iconBg} flex items-center justify-center`}>
                                    <tag.icon className="h-5 w-5" />
                                </div>
                                <span className="font-semibold text-sm">{tag.text}</span>
                            </div>
                        ))}
                    </div>

                    <style>{`
                        @keyframes testimonial-marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-33.33%); }
                        }
                        .animate-testimonial-marquee {
                            animation: testimonial-marquee 20s linear infinite;
                        }
                        .animate-testimonial-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </motion.div>

                {/* Brand/Customer Testimonials Carousel */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mb-10"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <div className="relative">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    What <span className="text-primary">Brands</span> Say
                                </h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-transparent to-primary" />
                            <div className="h-1.5 w-20 rounded-full bg-primary" />
                            <div className="h-1 w-12 rounded-full bg-gradient-to-l from-transparent to-primary" />
                        </div>
                    </motion.div>

                    {/* Carousel Container */}
                    <div
                        className="relative h-[420px] md:h-[380px]"
                        onMouseEnter={() => brandCarousel.setIsAutoPlaying(false)}
                        onMouseLeave={() => brandCarousel.setIsAutoPlaying(true)}
                    >
                        {/* Navigation Arrows */}
                        <button
                            onClick={brandCarousel.goToPrev}
                            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-gray-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 hover:scale-110 active:scale-95 transition-all duration-200"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </button>
                        <button
                            onClick={brandCarousel.goToNext}
                            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-gray-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 hover:scale-110 active:scale-95 transition-all duration-200"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                        </button>

                        {/* Cards Container */}
                        <div className="relative h-full w-full overflow-hidden">
                            {brandTestimonials.map((testimonial, index) => (
                                <BrandCard
                                    key={index}
                                    testimonial={testimonial}
                                    position={getCardPosition(index, brandCarousel.currentIndex, brandTestimonials.length)}
                                />
                            ))}
                        </div>

                        {/* Dots Indicator */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {brandTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => brandCarousel.goToIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === brandCarousel.currentIndex
                                        ? 'w-8 bg-gradient-to-r from-violet-600 to-pink-600'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Creator Testimonials Carousel */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mb-10"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                                <Star className="h-6 w-6 text-primary" />
                            </div>
                            <div className="relative">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    What <span className="text-primary">Creators</span> Say
                                </h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-transparent to-primary" />
                            <div className="h-1.5 w-20 rounded-full bg-primary" />
                            <div className="h-1 w-12 rounded-full bg-gradient-to-l from-transparent to-primary" />
                        </div>
                    </motion.div>

                    {/* Carousel Container */}
                    <div
                        className="relative h-[420px] md:h-[380px]"
                        onMouseEnter={() => creatorCarousel.setIsAutoPlaying(false)}
                        onMouseLeave={() => creatorCarousel.setIsAutoPlaying(true)}
                    >
                        {/* Navigation Arrows */}
                        <button
                            onClick={creatorCarousel.goToPrev}
                            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-pink-200 flex items-center justify-center hover:bg-pink-50 hover:border-pink-300 hover:scale-110 active:scale-95 transition-all duration-200"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </button>
                        <button
                            onClick={creatorCarousel.goToNext}
                            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-pink-200 flex items-center justify-center hover:bg-pink-50 hover:border-pink-300 hover:scale-110 active:scale-95 transition-all duration-200"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                        </button>

                        {/* Cards Container */}
                        <div className="relative h-full w-full overflow-hidden">
                            {creatorTestimonials.map((testimonial, index) => (
                                <CreatorCard
                                    key={index}
                                    testimonial={testimonial}
                                    position={getCardPosition(index, creatorCarousel.currentIndex, creatorTestimonials.length)}
                                />
                            ))}
                        </div>

                        {/* Dots Indicator */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {creatorTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => creatorCarousel.goToIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === creatorCarousel.currentIndex
                                        ? 'w-8 bg-gradient-to-r from-pink-600 to-violet-600'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
                >
                    {[
                        { value: "50,000+", label: "Successful Campaigns" },
                        { value: "₹75Cr+", label: "Creator Earnings" },
                        { value: "4.9/5", label: "Average Rating" },
                        { value: "98%", label: "Satisfaction Rate" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-violet-200 transition-all duration-300 cursor-default"
                        >
                            <p className="text-2xl md:text-3xl font-bold text-primary">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link to="/stories">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 px-8 py-6 text-lg font-semibold group"
                        >
                            Read More Success Stories
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
