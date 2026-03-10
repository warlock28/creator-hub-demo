import React, { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ThumbsUp, MessageSquare, Share2, Tag, ArrowRight, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data for Content Posts
const contentPosts = [
    {
        id: 1,
        brandName: "Organic Farms",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/2329/2329865.png",
        time: "2h ago",
        title: "Weekend Flash Sale: 50% Off Top Vegetables! 🥬",
        description: "Get your weekly dose of fresh greens with our exclusive weekend deal. Limited stock available for spinach, kale, and broccoli. Don't miss out on these organic goodies directly from the farm.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2568&auto=format&fit=crop",
        category: "Grocery",
        likes: 124,
        comments: 45,
        tags: ["#Organic", "#Vegetables", "#HealthyEating"]
    },
    {
        id: 2,
        brandName: "Luxe Beauty",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/3163/3163158.png",
        time: "4h ago",
        title: "New Summer Collection Drop 💄",
        description: "Introducing our vibrant new lipstick shades for the summer season. Waterproof, long-lasting, and vegan. Shop the look now and get a free gift with every purchase over $50.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2535&auto=format&fit=crop",
        category: "Beauty",
        likes: 89,
        comments: 12,
        tags: ["#Beauty", "#Makeup", "#SummerVibes"]
    },
    {
        id: 3,
        brandName: "Tech Giants",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/3616/3616927.png",
        time: "5h ago",
        title: "The Future of Smart Home is Here",
        description: "Control your entire home with a single touch. Our new Smart Hub V2 integrates seamlessly with all your devices. Pre-order now to get early bird pricing.",
        image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2670&auto=format&fit=crop",
        category: "Electronics",
        likes: 256,
        comments: 78,
        tags: ["#Tech", "#SmartHome", "#Innovation"]
    },
    {
        id: 4,
        brandName: "Fresh Valley",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/11361/11361903.png",
        time: "1d ago",
        title: "Buy 1 Get 1 Free on all Berries! 🍓",
        description: "Strawberries, Blueberries, and Raspberries are all on special offer this week. Perfect for your morning smoothies or baking needs.",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2515&auto=format&fit=crop",
        category: "Grocery",
        likes: 310,
        comments: 92,
        tags: ["#Berries", "#Deal", "#Grocery"]
    },
    {
        id: 5,
        brandName: "Urban Threads",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/2950/2950588.png",
        time: "1d ago",
        title: "Denim Days are Back",
        description: "Upgrade your wardrobe with our sustainable denim collection. Classic cuts, modern comfort.",
        image: "https://images.unsplash.com/photo-1542272617-08f086303b96?q=80&w=2670&auto=format&fit=crop",
        category: "Fashion",
        likes: 156,
        comments: 34,
        tags: ["#Fashion", "#Denim", "#Style"]
    },
    {
        id: 6,
        brandName: "Pixel Perfect",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
        time: "2d ago",
        title: "Pro Photography Masterclass 📸",
        description: "Join our exclusive workshop with award-winning photographers. Learn composition, lighting, and editing in this 3-day intensive course.",
        image: "https://images.unsplash.com/photo-1542038784424-48edea715036?q=80&w=2000&auto=format&fit=crop",
        category: "Services",
        likes: 412,
        comments: 156,
        tags: ["#Photography", "#Workshop", "#Skills"]
    },
    {
        id: 7,
        brandName: "Cozy Home",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/2950/2950715.png",
        time: "3d ago",
        title: "Minimalist Living Room Makeover",
        description: "Transform your living space with our new Scandinavian furniture line. Clean lines, natural wood, and ultimate comfort.",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop",
        category: "Home & Living",
        likes: 389,
        comments: 67,
        tags: ["#HomeDecor", "#Minimalism", "#Interior"]
    },
    {
        id: 8,
        brandName: "FitFusion",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png",
        time: "5h ago",
        title: "New Year, New You - Gym Gear Sale 💪",
        description: "Get up to 60% off on premium workout apparel. High-performance fabrics designed for intense training sessions.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
        category: "Fashion",
        likes: 542,
        comments: 89,
        tags: ["#Fitness", "#GymWear", "#Sale"]
    },
    {
        id: 9,
        brandName: "GamerHub",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/3474/3474360.png",
        time: "6h ago",
        title: "Next-Gen Console Restock Alert! 🎮",
        description: "Limited stock of the latest gaming consoles just arrived. Secure yours now before they sell out again!",
        image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2687&auto=format&fit=crop",
        category: "Electronics",
        likes: 1024,
        comments: 450,
        tags: ["#Gaming", "#Console", "#Restock"]
    },
    {
        id: 10,
        brandName: "Pet Paradise",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
        time: "12h ago",
        title: "Organic Treats for Your Furry Friends 🐾",
        description: "Treat your pets to our new range of grain-free, all-natural snacks. Healthy, delicious, and vet-approved.",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop",
        category: "Grocery",
        likes: 275,
        comments: 45,
        tags: ["#Pets", "#Organic", "#Dogs"]
    },
    {
        id: 11,
        brandName: "SoundWave",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/3616/3616086.png",
        time: "1d ago",
        title: "Immerse Yourself in Pure Sound 🎧",
        description: "Experience music like never before with our noise-cancelling headphones. 30-hour battery life and studio-quality audio.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop",
        category: "Electronics",
        likes: 670,
        comments: 112,
        tags: ["#Audio", "#Music", "#Tech"]
    },
    {
        id: 12,
        brandName: "Wanderlust Travel",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
        time: "2d ago",
        title: "Dream Vacation: Bali Getaway 🌴",
        description: "Book your escape to paradise. 7 days, all-inclusive resort stay including flights for $999. Limited time offer.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2638&auto=format&fit=crop",
        category: "Services",
        likes: 890,
        comments: 320,
        tags: ["#Travel", "#Bali", "#Vacation"]
    },
    {
        id: 13,
        brandName: "EcoKitchen",
        brandAvatar: "https://cdn-icons-png.flaticon.com/512/2950/2950550.png",
        time: "3d ago",
        title: "Zero Waste Kitchen Essentials",
        description: "Ditch the plastic with our sustainable kitchen starter kit. Includes beeswax wraps, silicone bags, and bamboo utensils.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop",
        category: "Home & Living",
        likes: 345,
        comments: 56,
        tags: ["#Sustainability", "#ZeroWaste", "#Kitchen"]
    }
];

const categories = ["All", "Grocery", "Fashion", "Beauty", "Electronics", "Home & Living", "Health"];

const ContentPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = contentPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#F3F2EF] font-sans">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-[85px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">

                    {/* Left Sidebar - Filters */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 pl-2 pr-4">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3 flex items-center gap-2">
                                <Filter className="w-3 h-3" /> Filters
                            </h3>
                            <div className="space-y-1">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all group flex items-center justify-between ${selectedCategory === category
                                            ? "bg-black text-white shadow-md"
                                            : "text-gray-600 hover:bg-white hover:shadow-sm"
                                            }`}
                                    >
                                        <span className={selectedCategory === category ? "" : "text-gray-500 group-hover:text-gray-900"}>{category}</span>
                                        {category !== "All" && (
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === category ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500 group-hover:bg-gray-100"}`}>
                                                {contentPosts.filter(p => p.category === category).length}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 px-3">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Trending</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["#Organic", "#Summer", "#Tech", "#Vegan", "#Deals"].map(tag => (
                                        <span key={tag} className="text-xs text-gray-500 cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Feed */}
                    <div className="lg:col-span-9 space-y-6">

                        {/* Sticky Header: Search + Keywords */}
                        <div className="sticky top-[50px] z-40 bg-[#F3F2EF] pt-8 pb-2 space-y-3 -mt-8">
                            {/* Search Bar */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 transform transition-all focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500">
                                <div className="relative flex items-center">
                                    <Search className="absolute left-4 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search for deals, trending products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 h-11 bg-transparent border-none text-sm text-gray-900 placeholder-gray-500 focus:ring-0 outline-none"
                                    />
                                    <Button size="sm" className="hidden sm:flex bg-black text-white rounded-lg px-4 h-9 mr-1">
                                        Search
                                    </Button>
                                </div>
                            </div>

                            {/* Keywords / Quick Filters */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                                <div className="flex items-center gap-2 pr-4">
                                    <span className="text-xs font-bold text-gray-500 uppercase whitespace-nowrap">Trending:</span>
                                    {["🔥 Flash Sale", "🥬 Organic", "📱 Tech", "💄 Beauty", "🏠 Home", "👟 Fashion", "🎁 Gifts"].map((keyword) => (
                                        <button
                                            key={keyword}
                                            onClick={() => setSearchQuery(keyword.replace(/[^a-zA-Z ]/g, "").trim())}
                                            className="whitespace-nowrap px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm flex-shrink-0"
                                        >
                                            {keyword}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Posts List */}
                        <div className="space-y-5">
                            <AnimatePresence mode="popLayout">
                                {filteredPosts.map((post) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                                    >
                                        {/* Post Header */}
                                        <div className="p-5 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
                                                    <img src={post.brandAvatar} alt={post.brandName} className="w-full h-full object-cover rounded-lg" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{post.brandName}</h3>
                                                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-0.5">
                                                        {post.time} • <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-semibold text-gray-700">{post.category}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal className="w-6 h-6" />
                                            </button>
                                        </div>

                                        {/* Post Content */}
                                        <div className="px-5 pb-4">
                                            <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                                {post.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {post.tags.map(tag => (
                                                    <span key={tag} className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Post Image */}
                                        <div className="relative w-full bg-gray-100 aspect-video">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                        </div>

                                        {/* Post Actions (Stats & Buttons) */}
                                        <div className="p-4">
                                            <div className="flex items-center justify-between text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
                                                <div className="flex items-center gap-1">
                                                    <div className="bg-blue-500 p-0.5 rounded-full">
                                                        <ThumbsUp className="w-2 h-2 text-white fill-current" />
                                                    </div>
                                                    <span>{post.likes} likes</span>
                                                </div>
                                                <span>12 shares</span>
                                            </div>

                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex gap-1">
                                                    <Button variant="ghost" size="sm" className="text-gray-600 gap-2 hover:bg-gray-50">
                                                        <ThumbsUp className="w-4 h-4" /> <span className="hidden sm:inline">Like</span>
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-gray-600 gap-2 hover:bg-gray-50">
                                                        <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Share</span>
                                                    </Button>
                                                </div>
                                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5">
                                                    View Deal <ArrowRight className="w-4 h-4 ml-1.5" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {filteredPosts.length === 0 && (
                                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                    <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <Search className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <h3 className="text-gray-900 font-bold mb-1">No posts found</h3>
                                    <p className="text-gray-500 text-sm">Try adjusting your filters or search query.</p>
                                </div>
                            )}
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ContentPage;
