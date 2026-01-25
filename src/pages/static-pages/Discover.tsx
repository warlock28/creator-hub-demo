import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { CreatorCard } from "@/pages/creator/CreatorCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  X,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Play,
  Camera,
  Mic,
} from "lucide-react";
import { SearchCategoryBar, type Category } from "@/pages/static-pages/SearchCategoryBar";
import type { CreatorSummary } from "@/types/creator";
import { creators as creatorsData } from "@/data/creators";

// Banner data for the carousel with creator-themed images (Static for now)
const banners = [
  {
    id: 1,
    title: "Find Your Perfect Creator",
    subtitle: "Discover verified professionals across India",
    description: "Browse creators by niche, location, platform, and budget. Our smart matching helps you find the ideal collaborator for your brand.",
    cta: "Start Exploring",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
    creatorImages: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    ],
    stats: [
      { label: "Creators", value: "100+" },
      { label: "Categories", value: "20+" },
      { label: "Cities", value: "10+" },
    ],
  },
  {
    id: 2,
    title: "Verified & Trusted",
    subtitle: "Every creator undergoes rigorous verification",
    description: "Identity verification, portfolio review, and social media authentication ensure you work with genuine, quality creators.",
    cta: "Learn About Trust",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    creatorImages: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    ],
    stats: [
      { label: "Verified", value: "100%" },
      { label: "Security", value: "Escrow" },
      { label: "Success", value: "98%" },
    ],
  },
];

const categories: Category[] = [
  { id: "All", name: "All", icon: Sparkles },
  { id: "Tech", name: "Tech", icon: TrendingUp },
  { id: "Lifestyle", name: "Lifestyle", icon: Users },
  { id: "Food", name: "Food", icon: Award },
  { id: "Fitness", name: "Fitness", icon: TrendingUp },
  { id: "Fashion", name: "Fashion", icon: Sparkles },
  { id: "Gaming", name: "Gaming", icon: TrendingUp },
  { id: "Education", name: "Education", icon: Award },
  { id: "Finance", name: "Finance", icon: TrendingUp },
];

const locations = [
  "All Cities",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Pune",
  "Ahmedabad",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Chandigarh",
  "Kochi",
  "Goa",
];

const platforms = ["Instagram", "YouTube", "Blog", "LinkedIn", "Twitter", "Twitch"];

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Cities");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Real Data State
  const [creators, setCreators] = useState<CreatorSummary[]>([]);
  const [loading, setLoading] = useState(true);

  // Banner carousel state
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);

  function fetchCreators() {
    try {
      setLoading(true);
      // Use local data from creators.ts
      const mappedCreators: CreatorSummary[] = creatorsData.map((c) => ({
        id: c.id,
        name: c.name,
        avatar: c.avatar,
        coverImage: c.coverImage,
        niche: c.niche,
        location: c.location,
        rating: c.rating,
        reviewCount: c.reviewCount,
        startingPrice: c.startingPrice,
        verified: c.verified,
        platforms: c.platforms,
        theme: c.theme
      }));
      setCreators(mappedCreators);
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setLoading(false);
    }
  }

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

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const clearFilters = () => {
    setSelectedNiche("All");
    setSelectedLocation("All Cities");
    setSelectedPlatforms([]);
    setSearchQuery("");
  };

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesNiche =
      selectedNiche === "All"
        ? true
        : creator.niche.toLowerCase().includes(selectedNiche.toLowerCase());
    const matchesLocation =
      selectedLocation === "All Cities"
        ? true
        : creator.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesPlatforms =
      selectedPlatforms.length === 0
        ? true
        : selectedPlatforms.some((platform) => creator.platforms.includes(platform));

    return matchesSearch && matchesNiche && matchesLocation && matchesPlatforms;
  });

  const hasActiveFilters =
    selectedNiche !== "All" ||
    selectedLocation !== "All Cities" ||
    selectedPlatforms.length > 0;

  const activeBanner = banners[currentBanner];

  return (
    <PublicLayout hideFooter={true}>
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-20 bg-gradient-to-b from-secondary/20 to-background min-h-screen">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">

          {/* Dynamic Banner Carousel - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-6 sm:mb-8 md:mb-10 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
          >
            {/* Banner Container - Responsive Heights */}
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

                  {/* Decorative Elements - Hidden on mobile for cleaner look */}
                  <div className="absolute inset-0 opacity-20 hidden sm:block">
                    <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                  </div>

                  {/* Content - Responsive Layout */}
                  <div className="relative h-full flex items-center px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-4 lg:gap-6">
                      {/* Left Content - Responsive Text */}
                      <div className="flex-1 text-white max-w-xl">
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-2 mb-2 sm:mb-3 md:mb-4"
                        >
                          <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm">
                            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
                            <span className="hidden xs:inline">{creators.length > 0 ? creators.length : "100+"}</span> Verified Creators
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

                        {/* Stats Row - Responsive */}
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

                      {/* Right Side - Creator Showcase (Hidden on small screens) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hidden md:flex items-center justify-center"
                      >
                        <div className="relative">
                          {/* Creator Avatar Stack */}
                          <div className="flex items-center -space-x-3 md:-space-x-4">
                            {activeBanner.creatorImages.map((img, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="relative"
                                style={{ zIndex: 3 - idx }}
                              >
                                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-3 md:border-4 border-white/30 overflow-hidden shadow-xl">
                                  <img
                                    src={img}
                                    alt="Creator"
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

                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - Responsive Size */}
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

              {/* Dot Indicators - Responsive */}
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
            searchPlaceholder="Search creators..."
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
            categories={categories}
            selectedCategory={selectedNiche}
            onCategoryChange={setSelectedNiche}
            activeGradient="from-violet-600 to-purple-600"
            variant="combined"
          />

          {/* Advanced Filters Panel - Responsive */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 sm:mb-8 md:mb-10"
            >
              <GlassCard className="p-4 sm:p-6 md:p-8">
                <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Advanced Filters
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* Location Filter */}
                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      Location
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      {locations.map((location) => (
                        <button
                          key={location}
                          onClick={() => setSelectedLocation(location)}
                          className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${selectedLocation === location
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-secondary/50 text-foreground hover:bg-secondary"
                            }`}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Platform Filter */}
                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      Platforms
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      {platforms.map((platform) => (
                        <button
                          key={platform}
                          onClick={() => togglePlatform(platform)}
                          className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${selectedPlatforms.includes(platform)
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-secondary/50 text-foreground hover:bg-secondary"
                            }`}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {hasActiveFilters && (
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {filteredCreators.length} creators match your filters
                    </p>
                    <Button variant="outline" onClick={clearFilters} size="sm" className="text-xs sm:text-sm">
                      <X className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          )}

          {/* Active Filters Display - Responsive */}
          {hasActiveFilters && !showFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8"
            >
              <p className="text-xs sm:text-sm text-muted-foreground mr-1 sm:mr-2">Filters:</p>
              {selectedNiche !== "All" && (
                <Badge variant="default" className="gap-1 sm:gap-2 text-xs">
                  {selectedNiche}
                  <button onClick={() => setSelectedNiche("All")}>
                    <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </button>
                </Badge>
              )}
              {selectedLocation !== "All Cities" && (
                <Badge variant="default" className="gap-1 sm:gap-2 text-xs">
                  <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  {selectedLocation}
                  <button onClick={() => setSelectedLocation("All Cities")}>
                    <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </button>
                </Badge>
              )}
              {selectedPlatforms.map((platform) => (
                <Badge key={platform} variant="default" className="gap-1 sm:gap-2 text-xs">
                  {platform}
                  <button onClick={() => togglePlatform(platform)}>
                    <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </button>
                </Badge>
              ))}
            </motion.div>
          )}

          {/* Results Header - Responsive */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="font-semibold text-base sm:text-lg">
                {loading ? "Loading..." : filteredCreators.length === 0
                  ? "No creators found"
                  : `${filteredCreators.length} Creator${filteredCreators.length !== 1 ? "s" : ""} Found`}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {selectedNiche !== "All" ? `in ${selectedNiche}` : "Showing all categories"}
              </p>
            </div>
          </div>

          {/* Creator Grid - Responsive */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 md:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-[400px] rounded-3xl bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : filteredCreators.length === 0 ? (
            <div className="text-center py-10 sm:py-12 md:py-16">
              <div className="max-w-md mx-auto">
                <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Search className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">No creators found</h3>
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 md:gap-6"
            >
              {filteredCreators.map((creator, index) => (
                <CreatorCard key={creator.id} creator={creator} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
