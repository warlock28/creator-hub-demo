import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, ShoppingCart, Heart, Star, Menu, X,
    ChevronRight, ChevronLeft, Leaf, Truck, Clock,
    ShieldCheck, ArrowRight, Zap, Eye, Shuffle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, Product } from "@/data/mockBrands";

interface GroceryThemeProps {
    brand: Brand;
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
    isInCart: (productId: string) => boolean;
}

// Category data with icons
const sidebarCategories = [
    { name: "Milks and Dairies", icon: "🥛" },
    { name: "Clothing & beauty", icon: "👗" },
    { name: "Pet Foods & Toy", icon: "🐕" },
    { name: "Baking material", icon: "🧈" },
    { name: "Wines & Drinks", icon: "🍷" },
    { name: "Fresh Seafood", icon: "🦐" },
    { name: "Fast food", icon: "🍔" },
    { name: "Vegetables", icon: "🥬" },
    { name: "Fresh Fruit", icon: "🥭" },
    { name: "Bread and Juice", icon: "🍞" },
];

// Brand names for products
const brandNames = ["NestFood", "Country Crock", "Organic Farm", "Fresh Valley", "Nature's Best"];

export function GroceryTheme({ brand, products, onAddToCart, onProductClick, isInCart }: GroceryThemeProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [scrolled, setScrolled] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Dynamic Hero Slides Data
    const heroSlides = [
        {
            title: "Fresh Vegetables",
            subtitle: "Big Discount",
            desc: "Save up to 50% off on your first order. Fresh products delivered to your doorstep.",
            discount: 50,
            image: brand.coverImage || "https://cdn-icons-png.flaticon.com/512/2329/2329865.png",
            bg: "bg-[#dbf7e6]", // Light mint green
            buttonColor: "bg-[#7c5dfa] hover:bg-[#6b4df0]", // Purple
            badgeColor: "bg-[#fdc040]", // Yellow
            rating: 4.9,
            reviews: "10k+"
        },
        {
            title: "Organic Fruits",
            subtitle: "Healthy Life",
            desc: "Get the best organic fruits directly from the farm. 100% fresh and natural.",
            discount: 30,
            image: "https://cdn-icons-png.flaticon.com/512/3194/3194766.png",
            bg: "bg-[#fff3e3]", // Light yellow/orange
            buttonColor: "bg-[#3bb77e] hover:bg-[#2fa76d]", // Green
            badgeColor: "bg-[#fdc040]",
            rating: 4.8,
            reviews: "8k+"
        }
    ];

    const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const dailyBestSells = products.slice(0, 4);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Generate discount and badge for each product
    const getProductBadges = (idx: number) => {
        const discounts = [13, 6, 8, 10, 15, 20, 5, 12];
        const badges = ["Sale", "New", "Hot", "", "Best", ""];
        return {
            discount: discounts[idx % discounts.length],
            badge: badges[idx % badges.length]
        };
    };

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8f9fa] relative" style={{ fontFamily: "'Quicksand', 'Inter', sans-serif" }}>

            {/* Promo Bar */}
            <div className="bg-[#3bb77e] text-white text-center py-2.5 text-sm font-medium relative z-50">
                🚚 Free delivery on orders over ₹500 | Fresh & Organic Guaranteed
            </div>

            {/* Header */}
            <header
                className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>

                        {/* 1. Left Section: Logo */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#def9ec] rounded-full flex items-center justify-center">
                                    <Leaf className="w-5 h-5 text-[#3bb77e]" />
                                </div>
                                <span className="text-xl md:text-2xl font-bold text-[#253D4E]">
                                    {brand.name}
                                </span>
                            </div>
                        </div>

                        {/* 2. Middle Section: Search */}
                        <div className="hidden md:block flex-1 max-w-lg mx-12">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Search for items..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full h-11 pl-12 pr-4 rounded-full border border-gray-200 bg-gray-50 text-[#253D4E] text-sm focus:outline-none focus:border-[#3bb77e] focus:bg-white transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {/* 3. Right Section: Actions */}
                        <div className="flex items-center gap-4">
                            <button className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity text-[#253D4E]">
                                <Heart className="w-6 h-6" />
                            </button>

                            <button className="relative group">
                                <div className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <ShoppingCart className="w-6 h-6 text-[#253D4E]" />
                                    <span className="absolute top-0 right-0 w-5 h-5 bg-[#3bb77e] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                        3
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className={`md:hidden pb-4 transition-all ${scrolled ? 'hidden' : 'block'}`}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#3bb77e]"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Dynamic Hero Slider */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[32px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`relative ${heroSlides[currentSlide].bg} min-h-[350px] md:min-h-[450px] grid md:grid-cols-2 items-center overflow-hidden`}
                        >
                            {/* Content */}
                            <div className="p-8 md:p-16 lg:p-20 z-10 relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className={`inline-flex items-center gap-2 ${heroSlides[currentSlide].badgeColor} text-[#253D4E] text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm`}>
                                        <Zap className="w-3.5 h-3.5" /> Free Shipping
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#253D4E] leading-[1.1] mb-6 tracking-tight"
                                >
                                    {heroSlides[currentSlide].title}<br />
                                    <span className="text-[#3bb77e]">{heroSlides[currentSlide].subtitle}</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
                                >
                                    {heroSlides[currentSlide].desc}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Button
                                        className={`${heroSlides[currentSlide].buttonColor} text-white rounded-full h-14 px-10 text-base font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1`}
                                    >
                                        Shop Now <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Image Side */}
                            <div className="hidden md:flex items-center justify-center p-8 relative h-full">
                                {/* Decorative Circles */}
                                <div className="absolute w-[450px] h-[450px] bg-white/40 rounded-full blur-3xl -top-20 -right-20 pointer-events-none"></div>
                                <div className="absolute w-[300px] h-[300px] bg-white/60 rounded-full blur-2xl bottom-10 right-20 pointer-events-none"></div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="relative z-10 w-full max-w-[450px] aspect-square flex items-center justify-center"
                                >
                                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-full transform scale-90"></div>
                                    <img
                                        src={heroSlides[currentSlide].image}
                                        alt="Hero Product"
                                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 font-bold"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2329/2329865.png";
                                        }}
                                    />

                                    {/* Floating Rating Card */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="absolute bottom-10 -left-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-gray-100 z-20"
                                    >
                                        <div className="w-10 h-10 bg-[#fff3e3] rounded-full flex items-center justify-center">
                                            <Star className="w-5 h-5 text-[#fdc040] fill-current" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#253D4E] text-base">{heroSlides[currentSlide].rating} Rating</div>
                                            <div className="text-xs text-gray-500 font-medium">{heroSlides[currentSlide].reviews} Reviews</div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slider Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                        {heroSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === idx
                                    ? "bg-[#3bb77e] w-8"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {[
                        { icon: Truck, title: "Free Delivery", desc: "Orders over ₹500", color: "bg-pink-50", iconColor: "text-pink-500" },
                        { icon: ShieldCheck, title: "Secure Payment", desc: "100% Secure", color: "bg-blue-50", iconColor: "text-blue-500" },
                        { icon: Leaf, title: "Fresh & Organic", desc: "From the Farm", color: "bg-green-50", iconColor: "text-green-500" },
                        { icon: Clock, title: "24/7 Support", desc: "Ready to Help", color: "bg-orange-50", iconColor: "text-orange-500" },
                    ].map((item, idx) => (
                        <div key={idx} className={`${item.color} p-4 rounded-xl flex items-center gap-3`}>
                            <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${item.iconColor}`}>
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#253D4E] text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-6">
                        <h2 className="text-xl md:text-2xl font-bold text-[#253D4E]">Featured Categories</h2>
                        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-500">
                            <a href="#" className="hover:text-[#3bb77e] transition-colors">Cake & Milk</a>
                            <a href="#" className="hover:text-[#3bb77e] transition-colors">Coffes & Teas</a>
                            <a href="#" className="hover:text-[#3bb77e] transition-colors">Pet Foods</a>
                            <a href="#" className="hover:text-[#3bb77e] transition-colors">Vegetables</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronLeft className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Categories Scroll */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                    {[
                        { name: "Peach", items: 6, icon: "🍑", bg: "bg-[#feefea]" },
                        { name: "Red Apple", items: 10, icon: "🍎", bg: "bg-[#fef1f1]" },
                        { name: "Snacks", items: 11, icon: "🍿", bg: "bg-[#fff8e5]" },
                        { name: "Vegetables", items: 6, icon: "🥬", bg: "bg-[#ecffd9]" },
                        { name: "Strawberry", items: 10, icon: "🍓", bg: "bg-[#feefea]" },
                        { name: "Black plum", items: 10, icon: "🫐", bg: "bg-[#f2f3f8]" },
                        { name: "Custard apple", items: 10, icon: "🍏", bg: "bg-[#def9ec]" },
                        { name: "Coffee & Tea", items: 11, icon: "☕", bg: "bg-[#fdf4e5]" },
                        { name: "Headphone", items: 4, icon: "🎧", bg: "bg-[#fff3e3]" },
                        { name: "Cake & Milk", items: 11, icon: "🍰", bg: "bg-[#def9ec]" },
                    ].map((cat, idx) => (
                        <button
                            key={idx}
                            className={`flex-shrink-0 ${cat.bg} rounded-xl p-4 min-w-[100px] flex flex-col items-center gap-2 hover:shadow-md transition-all group`}
                        >
                            <div className="w-12 h-12 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold text-[#253D4E] whitespace-nowrap">{cat.name}</p>
                                <p className="text-xs text-[#3bb77e]">{cat.items} items</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Promotional Banners */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Banner 1 - Green */}
                    <div className="bg-[#def9ec] rounded-2xl p-5 flex items-center justify-between overflow-hidden relative min-h-[160px]">
                        <div className="z-10">
                            <h3 className="text-lg font-bold text-[#253D4E] leading-tight mb-3">
                                Everyday Fresh &<br />Clean with Our<br />Products
                            </h3>
                            <Button size="sm" className="bg-[#3bb77e] hover:bg-[#2fa76d] text-white rounded-md h-8 px-4 text-xs font-semibold">
                                Shop Now <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                        </div>
                        <div className="absolute right-0 bottom-0 w-32 h-32">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2329/2329865.png"
                                alt="Fresh Products"
                                className="w-full h-full object-contain opacity-80"
                            />
                        </div>
                    </div>

                    {/* Banner 2 - Blue */}
                    <div className="bg-[#f2f3f8] rounded-2xl p-5 flex items-center justify-between overflow-hidden relative min-h-[160px]">
                        <div className="z-10">
                            <h3 className="text-lg font-bold text-[#253D4E] leading-tight mb-3">
                                Make your Breakfast<br />Healthy and Easy
                            </h3>
                            <Button size="sm" className="bg-[#3bb77e] hover:bg-[#2fa76d] text-white rounded-md h-8 px-4 text-xs font-semibold">
                                Shop Now <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                        </div>
                        <div className="absolute right-2 bottom-0 w-28 h-28">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
                                alt="Breakfast"
                                className="w-full h-full object-contain opacity-80"
                            />
                        </div>
                    </div>

                    {/* Banner 3 - Mint */}
                    <div className="bg-[#def9ec] rounded-2xl p-5 flex items-center justify-between overflow-hidden relative min-h-[160px]">
                        <div className="z-10">
                            <h3 className="text-lg font-bold text-[#253D4E] leading-tight mb-3">
                                The best Organic<br />Products Online
                            </h3>
                            <Button size="sm" className="bg-[#3bb77e] hover:bg-[#2fa76d] text-white rounded-md h-8 px-4 text-xs font-semibold">
                                Shop Now <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                        </div>
                        <div className="absolute right-0 bottom-0 w-32 h-32">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
                                alt="Organic Products"
                                className="w-full h-full object-contain opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content with Sticky Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex gap-6">
                    {/* Sticky Sidebar - Desktop Only */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-2xl border border-[#3bb77e]/30 overflow-hidden shadow-sm">
                                <div className="p-4 border-b border-gray-100">
                                    <h3 className="font-bold text-[#253D4E] text-lg">Categories</h3>
                                </div>
                                <nav className="p-2">
                                    {sidebarCategories.map((cat, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveCategory(cat.name)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all hover:bg-[#def9ec] group ${activeCategory === cat.name ? "bg-[#def9ec]" : ""}`}
                                        >
                                            <span className="text-xl">{cat.icon}</span>
                                            <span className={`text-sm font-medium ${activeCategory === cat.name ? "text-[#3bb77e]" : "text-[#253D4E] group-hover:text-[#3bb77e]"}`}>
                                                {cat.name}
                                            </span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 min-w-0">
                        {/* Mobile Categories Scroll */}
                        <div className="lg:hidden mb-6">
                            <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? "bg-[#3bb77e] text-white" : "bg-white border border-gray-200 text-[#253D4E] hover:border-[#3bb77e]"}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Products Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#253D4E]">Popular Products</h2>
                                <p className="text-sm text-gray-500 mt-1">Fresh quality products from our store</p>
                            </div>
                            <div className="hidden lg:flex gap-2">
                                {categories.slice(0, 5).map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? "bg-[#3bb77e] text-white" : "bg-gray-100 text-[#253D4E] hover:bg-gray-200"}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, idx) => {
                                    const { discount, badge } = getProductBadges(idx);
                                    const originalPrice = Math.round(product.price / (1 - discount / 100));
                                    const productBrand = brandNames[idx % brandNames.length];

                                    return (
                                        <motion.div
                                            key={product.id}
                                            layout
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.15, delay: idx * 0.015 }}
                                            className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-lg hover:border-[#3bb77e]/30 transition-all duration-200"
                                        >
                                            {/* Image Container - Compact */}
                                            <div className="relative p-2">
                                                {/* Discount Badge */}
                                                <span className="absolute top-2 left-2 z-10 bg-[#3bb77e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                    {discount}%
                                                </span>

                                                {/* Sale/New Badge */}
                                                {badge && (
                                                    <span className={`absolute top-2 right-2 z-10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${badge === "Hot" ? "bg-[#f74b81]" : badge === "New" ? "bg-[#67bcee]" : "bg-[#3bb77e]"}`}>
                                                        {badge}
                                                    </span>
                                                )}

                                                {/* Product Image */}
                                                <div
                                                    className="aspect-[4/3] flex items-center justify-center cursor-pointer relative bg-gray-50 rounded-lg overflow-hidden"
                                                    onClick={() => onProductClick(product)}
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                                        onError={(e) => {
                                                            e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2329/2329865.png";
                                                        }}
                                                    />

                                                    {/* Hover Action Buttons */}
                                                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                        <button
                                                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-[#3bb77e] hover:text-white transition-colors"
                                                            onClick={(e) => { e.stopPropagation(); onProductClick(product); }}
                                                        >
                                                            <Eye className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-[#3bb77e] hover:text-white transition-colors">
                                                            <Shuffle className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-[#f74b81] hover:text-white transition-colors">
                                                            <Heart className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content - Compact */}
                                            <div className="px-3 pb-3">
                                                {/* Category */}
                                                <p className="text-[10px] text-[#3bb77e] font-medium mb-1">{product.category}</p>

                                                {/* Product Name */}
                                                <h3
                                                    className="font-semibold text-[#253D4E] text-xs leading-snug line-clamp-2 min-h-[32px] cursor-pointer hover:text-[#3bb77e] transition-colors mb-1.5"
                                                    onClick={() => onProductClick(product)}
                                                >
                                                    {product.name}
                                                </h3>

                                                {/* Rating */}
                                                <div className="flex items-center gap-1 mb-1.5">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-[#fdc040] fill-current" : "text-gray-200 fill-current"}`} />
                                                        ))}
                                                    </div>
                                                    <span className="text-[10px] text-gray-400">({product.reviews})</span>
                                                </div>

                                                {/* Brand */}
                                                <p className="text-[10px] text-gray-400 mb-2">
                                                    By <span className="text-[#3bb77e] font-medium">{productBrand}</span>
                                                </p>

                                                {/* Price and Add Button */}
                                                <div className="flex items-center justify-between gap-2">
                                                    <div className="flex items-baseline gap-1 flex-shrink min-w-0">
                                                        <span className="text-sm font-bold text-[#3bb77e]">₹{product.price}</span>
                                                        <span className="text-[10px] text-gray-400 line-through">₹{originalPrice}</span>
                                                    </div>

                                                    <Button
                                                        size="sm"
                                                        onClick={() => onAddToCart(product)}
                                                        className={`h-7 px-2.5 rounded text-[11px] font-semibold flex items-center gap-1 flex-shrink-0 ${isInCart(product.id)
                                                            ? "bg-[#3bb77e] text-white hover:bg-[#2fa76d]"
                                                            : "bg-[#def9ec] text-[#3bb77e] hover:bg-[#3bb77e] hover:text-white border border-[#3bb77e]/20"
                                                            } transition-colors`}
                                                    >
                                                        <ShoppingCart className="w-3 h-3" />
                                                        {isInCart(product.id) ? "✓" : "Add"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>


                        {filteredProducts.length === 0 && (
                            <div className="text-center py-16 bg-white rounded-xl">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-2">No products found</h3>
                                <p className="text-gray-500 text-sm">Try a different category or search term</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Promotional Banners */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Banner 1 - Pink */}
                    <div className="bg-[#feefea] rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
                                alt="Fresh Products"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#253D4E] text-sm leading-tight mb-1">Everyday Fresh with Our Products</h4>
                            <a href="#" className="text-xs text-[#3bb77e] font-medium hover:underline">Go to supplier →</a>
                        </div>
                    </div>

                    {/* Banner 2 - Lavender */}
                    <div className="bg-[#f2f3f8] rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1261/1261163.png"
                                alt="Fresh Items"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#253D4E] text-sm leading-tight mb-1">100% guaranteed all Fresh items</h4>
                            <a href="#" className="text-xs text-[#3bb77e] font-medium hover:underline">Go to supplier →</a>
                        </div>
                    </div>

                    {/* Banner 3 - Yellow */}
                    <div className="bg-[#fff3e3] rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3514/3514216.png"
                                alt="Grocery Sale"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#253D4E] text-sm leading-tight mb-1">Special grocery sale off this month</h4>
                            <a href="#" className="text-xs text-[#3bb77e] font-medium hover:underline">Go to supplier →</a>
                        </div>
                    </div>

                    {/* Banner 4 - Mint */}
                    <div className="bg-[#def9ec] rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3194/3194766.png"
                                alt="Vegetables"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#253D4E] text-sm leading-tight mb-1">Enjoy 15% OFF for all vegetable and fruit</h4>
                            <a href="#" className="text-xs text-[#3bb77e] font-medium hover:underline">Go to supplier →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Daily Best Sells */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-[#253D4E]">Daily Best Sells</h2>
                    <a href="#" className="text-sm font-medium text-[#3bb77e] hover:underline">View All →</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Banner */}
                    <div className="hidden md:flex bg-gradient-to-br from-[#3bb77e] to-[#2fa76d] rounded-2xl p-6 flex-col justify-between text-white min-h-[260px]">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Bring Nature<br />Into Your Home</h3>
                            <p className="text-white/80 text-sm">Up to 50% off on selected items</p>
                        </div>
                        <Button variant="secondary" className="bg-white text-[#3bb77e] hover:bg-gray-100 rounded-full w-fit">
                            Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>

                    {/* Deal Products */}
                    {dailyBestSells.slice(0, 3).map((product, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-100 p-3 flex gap-3 hover:shadow-md hover:border-[#3bb77e]/30 transition-all">
                            <div className="w-20 h-20 bg-gray-50 rounded-lg flex-shrink-0 p-2">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2329/2329865.png"; }} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-[#253D4E] text-sm line-clamp-1 mb-1">{product.name}</h4>
                                <div className="flex items-center gap-1 mb-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span className="text-xs font-medium text-[#253D4E]">{product.rating}</span>
                                </div>
                                <div className="text-base font-bold text-[#3bb77e] mb-1">₹{product.price}</div>
                                <div className="w-full bg-gray-100 rounded-full h-1.5">
                                    <div className="bg-[#3bb77e] h-1.5 rounded-full" style={{ width: `${60 + idx * 10}%` }}></div>
                                </div>
                                <p className="text-[10px] text-gray-500 mt-0.5">Sold: {50 + idx * 15}/{80 + idx * 10}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Brand Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gradient-to-br from-[#def9ec] to-[#c8f0dc] rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Brand Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <Leaf className="w-6 h-6 text-[#3bb77e]" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#253D4E]">{brand.name}</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We are committed to bringing you the freshest, highest-quality products directly to your doorstep.
                                Our mission is to make healthy eating accessible and convenient for everyone.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#253D4E] shadow-sm">
                                    <ShieldCheck className="w-4 h-4 text-[#3bb77e]" /> 100% Trusted
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#253D4E] shadow-sm">
                                    <Leaf className="w-4 h-4 text-[#3bb77e]" /> Fresh & Organic
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#253D4E] shadow-sm">
                                    <Truck className="w-4 h-4 text-[#3bb77e]" /> Fast Delivery
                                </span>
                            </div>
                        </div>

                        {/* Trust Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-3xl font-bold text-[#3bb77e] mb-1">10K+</div>
                                <p className="text-sm text-gray-500">Happy Customers</p>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-3xl font-bold text-[#3bb77e] mb-1">500+</div>
                                <p className="text-sm text-gray-500">Products</p>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-3xl font-bold text-[#3bb77e] mb-1">4.9</div>
                                <p className="text-sm text-gray-500">Average Rating</p>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-3xl font-bold text-[#3bb77e] mb-1">24/7</div>
                                <p className="text-sm text-gray-500">Support Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GroceryTheme;


