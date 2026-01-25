import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingBag, Apple, Laptop, Shirt, Sparkles, Wrench, Search,
    X, ChevronLeft, ChevronRight, TrendingUp, Package, Truck, CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GROCERY_BRANDS } from "@/data/groceryBrands";
import { ELECTRONICS_BRANDS } from "@/data/electronicsBrands";
import { CLOTHES_BRANDS } from "@/data/clothesBrands";
import { BEAUTY_BRANDS } from "@/data/beautyBrands";
import { SERVICES_BRANDS } from "@/data/servicesBrands";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { BrandCard, THEME_COLORS, type Brand } from "./BrandCard";
import { SearchCategoryBar, type Category } from "@/pages/static-pages/SearchCategoryBar";

// Combine all brands with category info
const ALL_BRANDS = [
    ...GROCERY_BRANDS.map(b => ({ ...b, themeCategory: 'grocery' })),
    ...ELECTRONICS_BRANDS.map(b => ({ ...b, themeCategory: 'electronics' })),
    ...CLOTHES_BRANDS.map(b => ({ ...b, themeCategory: 'clothes' })),
    ...BEAUTY_BRANDS.map(b => ({ ...b, themeCategory: 'beauty' })),
    ...SERVICES_BRANDS.map(b => ({ ...b, themeCategory: 'services' })),
];

// Banner carousel data
const banners = [
    {
        id: 1,
        title: "Discover Premium Brands",
        subtitle: "Shop from 500+ verified brands across India",
        description: "Explore top-tier brands in Tech, Fashion, Grocery, and Lifestyle. Curated collections, verified sellers, and exclusive deals.",
        cta: "Explore Now",
        gradient: "from-blue-600 via-indigo-600 to-violet-700",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        brandImages: [
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop",
        ],
        stats: [
            { label: "Brands", value: "500+" },
            { label: "Products", value: "50K+" },
            { label: "Categories", value: "25+" },
        ],
    },
    {
        id: 2,
        title: "Fresh & Organic",
        subtitle: "Farm to table, delivered to your doorstep",
        description: "Browse organic groceries, fresh vegetables, and artisan products from trusted local and national brands.",
        cta: "Shop Groceries",
        gradient: "from-emerald-600 via-green-600 to-teal-700",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
        brandImages: [
            "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&h=150&fit=crop",
        ],
        stats: [
            { label: "Organic", value: "100%" },
            { label: "Delivery", value: "2 Hrs" },
            { label: "Fresh", value: "Daily" },
        ],
    },
    {
        id: 3,
        title: "Tech & Electronics",
        subtitle: "Latest gadgets, best prices",
        description: "Discover cutting-edge technology from top electronics brands. Smartphones, laptops, accessories, and more.",
        cta: "Shop Tech",
        gradient: "from-slate-700 via-slate-800 to-slate-900",
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop",
        brandImages: [
            "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=150&h=150&fit=crop",
        ],
        stats: [
            { label: "Brands", value: "200+" },
            { label: "Warranty", value: "1 Yr" },
            { label: "Returns", value: "Easy" },
        ],
    },
];

// Categories with icons and colors
const BRAND_CATEGORIES = [
    { id: 'all', name: 'All', icon: ShoppingBag, color: 'slate' },
    { id: 'grocery', name: 'Grocery', icon: Apple, color: 'green' },
    { id: 'electronics', name: 'Electronics', icon: Laptop, color: 'blue' },
    { id: 'clothes', name: 'Fashion', icon: Shirt, color: 'purple' },
    { id: 'beauty', name: 'Beauty', icon: Sparkles, color: 'pink' },
    { id: 'services', name: 'Services', icon: Wrench, color: 'orange' },
];

export default function BrandDiscoveryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showFilters, setShowFilters] = useState(false);

    // Banner carousel state
    const [currentBanner, setCurrentBanner] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate banners
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToNextBanner = useCallback(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, []);

    const goToPrevBanner = useCallback(() => {
        setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, []);

    const goToBanner = useCallback((index: number) => {
        setCurrentBanner(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, []);

    const clearFilters = () => {
        setSelectedCategory("all");
        setSearchQuery("");
    };

    const filteredBrands = ALL_BRANDS.filter((brand) => {
        const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            brand.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === "all" || brand.themeCategory === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const hasActiveFilters = selectedCategory !== "all" || searchQuery.length > 0;
    const activeBanner = banners[currentBanner];

    return (
        <PublicLayout hideFooter={true}>
            <section className="pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-20 bg-gradient-to-b from-secondary/20 to-background">
                <div className="container mx-auto px-3 sm:px-4 lg:px-8">

                    {/* Dynamic Banner Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative mb-6 sm:mb-8 md:mb-10 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
                    >
                        {/* Banner Container */}
                        <div className="relative h-[280px] sm:h-[300px] md:h-[320px] lg:h-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentBanner}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl"
                                >
                                    {/* Background Image with Gradient Overlay */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={activeBanner.image}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-r ${activeBanner.gradient} opacity-90`} />
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute inset-0 opacity-20 hidden sm:block">
                                        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                                        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex items-center px-4 sm:px-6 md:px-10 lg:px-16">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-4 lg:gap-6">

                                            {/* Left Content */}
                                            <div className="flex-1 text-white max-w-xl">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="flex items-center gap-2 mb-2 sm:mb-3 md:mb-4"
                                                >
                                                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm">
                                                        <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
                                                        {ALL_BRANDS.length} Verified Brands
                                                    </Badge>
                                                </motion.div>

                                                <motion.h2
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 leading-tight"
                                                >
                                                    {activeBanner.title}
                                                </motion.h2>

                                                <motion.p
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4 }}
                                                    className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 leading-relaxed line-clamp-2 sm:line-clamp-3"
                                                >
                                                    {activeBanner.description}
                                                </motion.p>

                                                {/* Stats Row */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="flex flex-wrap gap-4 sm:gap-5 md:gap-6"
                                                >
                                                    {activeBanner.stats.map((stat, index) => (
                                                        <div key={index} className="text-center">
                                                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">{stat.value}</p>
                                                            <p className="text-[10px] sm:text-xs text-white/70">{stat.label}</p>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            </div>

                                            {/* Right Side - Brand Showcase */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="hidden md:flex items-center justify-center"
                                            >
                                                <div className="relative">
                                                    {/* Brand Avatar Stack */}
                                                    <div className="flex items-center -space-x-3 md:-space-x-4">
                                                        {activeBanner.brandImages.map((img, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: 15 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.5 + idx * 0.1 }}
                                                                className="relative"
                                                                style={{ zIndex: 3 - idx }}
                                                            >
                                                                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl border-3 md:border-4 border-white/30 overflow-hidden shadow-xl bg-white">
                                                                    <img
                                                                        src={img}
                                                                        alt="Brand"
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </div>
                                                                {idx === 0 && (
                                                                    <div className="absolute -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                                                                        <CheckCircle2 className="h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 text-white" />
                                                                    </div>
                                                                )}
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    {/* Floating Icons */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8 }}
                                                        className="absolute -top-3 -right-3 md:-top-4 md:-right-4 h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                                    >
                                                        <TrendingUp className="h-4 w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 text-white" />
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.9 }}
                                                        className="absolute -bottom-2 -left-4 md:-bottom-3 md:-left-6 h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                                    >
                                                        <Package className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1 }}
                                                        className="absolute top-1/2 -right-6 md:-right-8 h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-md md:rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                                    >
                                                        <Truck className="h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 text-white" />
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={goToPrevBanner}
                                className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 shadow-lg"
                                aria-label="Previous banner"
                            >
                                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                            </button>
                            <button
                                onClick={goToNextBanner}
                                className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 shadow-lg"
                                aria-label="Next banner"
                            >
                                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                            </button>

                            {/* Dot Indicators */}
                            <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5 z-10">
                                {banners.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToBanner(index)}
                                        className={`h-1.5 sm:h-2 md:h-2.5 rounded-full transition-all duration-300 ${index === currentBanner
                                            ? "w-6 sm:w-8 md:w-10 bg-white shadow-lg"
                                            : "w-1.5 sm:w-2 md:w-2.5 bg-white/40 hover:bg-white/60"
                                            }`}
                                        aria-label={`Go to banner ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Combined Search & Categories - Sticky Section */}
                    <SearchCategoryBar
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        searchPlaceholder="Search brands..."
                        showFilters={showFilters}
                        onToggleFilters={() => setShowFilters(!showFilters)}
                        categories={BRAND_CATEGORIES as Category[]}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        themeColors={THEME_COLORS}
                    />

                    {/* Active Filters Display */}
                    {hasActiveFilters && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8"
                        >
                            <p className="text-xs sm:text-sm text-muted-foreground mr-1 sm:mr-2">Filters:</p>
                            {selectedCategory !== "all" && (
                                <Badge variant="default" className="gap-1 sm:gap-2 text-xs">
                                    {BRAND_CATEGORIES.find(c => c.id === selectedCategory)?.name}
                                    <button onClick={() => setSelectedCategory("all")}>
                                        <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                    </button>
                                </Badge>
                            )}
                            {searchQuery && (
                                <Badge variant="secondary" className="gap-1 sm:gap-2 text-xs">
                                    "{searchQuery}"
                                    <button onClick={() => setSearchQuery("")}>
                                        <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                    </button>
                                </Badge>
                            )}
                        </motion.div>
                    )}

                    {/* Results Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div>
                            <h3 className="font-semibold text-base sm:text-lg">
                                {filteredBrands.length === 0
                                    ? "No brands found"
                                    : `${filteredBrands.length} Brand${filteredBrands.length !== 1 ? "s" : ""} Found`}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {selectedCategory !== "all"
                                    ? `in ${BRAND_CATEGORIES.find(c => c.id === selectedCategory)?.name}`
                                    : "Showing all categories"}
                            </p>
                        </div>
                    </div>

                    {/* Brand Grid - 3 Cards Per Row */}
                    {filteredBrands.length === 0 ? (
                        <div className="text-center py-10 sm:py-12 md:py-16">
                            <div className="max-w-md mx-auto">
                                <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <Search className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-muted-foreground" />
                                </div>
                                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">No brands found</h3>
                                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                                    Try adjusting your filters or search query
                                </p>
                                <Button onClick={clearFilters} variant="outline" size="sm" className="text-sm">
                                    Clear All Filters
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                        >
                            {filteredBrands.map((brand, index) => (
                                <BrandCard key={brand.id} brand={brand as Brand} index={index} />
                            ))}
                        </motion.div>
                    )}

                </div>
            </section>
        </PublicLayout>
    );
}
