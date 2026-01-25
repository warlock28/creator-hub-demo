// Electronics Theme - Replicated "Electro" Design (Light, Professional, Yellow Accents)
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu, Search, ShoppingCart, ShoppingBag, Heart, User, RefreshCw, Check,
    ChevronRight, ChevronDown, List, Grid, Star, Percent, Eye,
    Smartphone, Laptop, Headphones, Camera, Watch, Speaker,
    Printer, Gamepad, Monitor, Truck, ShieldCheck, PhoneCall,
    CreditCard, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin,
    Zap, Clock, ArrowRight, Plus, Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, Product } from "@/data/mockBrands";

interface ElectronicsThemeProps {
    brand: Brand;
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
    isInCart: (productId: string) => boolean;
}

// --- Categories & Mock Data ---
const TOP_CATEGORIES = [
    { name: "Laptops & Computers", icon: Laptop },
    { name: "Smartphones & Tablets", icon: Smartphone },
    { name: "Audio & Headphones", icon: Headphones },
    { name: "Cameras & Photography", icon: Camera },
    { name: "Wearable Technology", icon: Watch },
    { name: "Home Entertainment", icon: Speaker },
    { name: "Printers & Ink", icon: Printer },
    { name: "Gaming & Consoles", icon: Gamepad },
    { name: "Monitors & Displays", icon: Monitor },
    { name: "Accessories", icon: Grid },
];



export function ElectronicsTheme({ brand, products, onAddToCart, onProductClick, isInCart }: ElectronicsThemeProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [activeTab, setActiveTab] = useState<"featured" | "onsale" | "toprated">("featured");
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Default open on desktop often

    // Filter Products
    const filteredProducts = useMemo(() => {
        let filtered = products;
        if (searchTerm) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        // In a real app, logic for tabs would go here
        if (activeTab === "onsale") {
            // Mock logic: randomly simulate 'sale' items if no property exists
            filtered = filtered.slice(0, 6);
        } else if (activeTab === "toprated") {
            filtered = filtered.sort((a, b) => b.rating - a.rating);
        }
        return filtered;
    }, [products, searchTerm, activeTab]);

    // Deal of the Day Logic (Mock)
    const dealEndTime = new Date();
    dealEndTime.setHours(dealEndTime.getHours() + 14); // 14 hours left

    return (
        <div className="min-h-screen bg-[#f4f4f4] font-sans text-[#333e48]">

            {/* Sticky Header Container */}
            <div className="sticky top-0 z-50 bg-white shadow-sm">

                {/* --- Top Bar (Logo, Search, Icons) --- */}
                <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-8">

                    {/* Logo & Menu */}
                    {/* Logo */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <h1 className="text-3xl font-bold tracking-tight text-[#333e48] flex items-center">
                            electro<span className="text-[#fed700] text-4xl leading-none">.</span>
                        </h1>
                    </div>

                    {/* Search Bar - Centered */}
                    <div className="flex-1 max-w-2xl mx-auto px-4 hidden lg:block">
                        <div className="flex h-11 border-2 border-[#fed700] rounded-full overflow-hidden bg-white shadow-sm">
                            <input
                                type="text"
                                placeholder="Search for Products..."
                                className="flex-1 px-5 outline-none text-sm placeholder-gray-400"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="bg-[#fed700] px-6 flex items-center justify-center hover:bg-[#e6c200] transition-colors">
                                <Search className="text-[#333e48]" size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Right Icons - Heart & Bag */}
                    <div className="flex items-center gap-5 flex-shrink-0">
                        {/* Wishlist */}
                        <div className="relative cursor-pointer hover:text-[#fed700] transition-colors group">
                            <Heart size={24} className="text-[#333e48] group-hover:text-[#fed700]" />
                            <span className="absolute -top-2 -right-2 bg-[#fed700] text-[#333e48] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                                0
                            </span>
                        </div>

                        {/* Shopping Bag */}
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <div className="relative">
                                <ShoppingBag size={24} className="text-[#333e48] group-hover:text-[#fed700] transition-colors" />
                                <span className="absolute -top-2 -right-2 bg-[#fed700] text-[#333e48] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                                    0
                                </span>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <Menu size={24} className="text-[#333e48]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Hero Section --- */}
            <div className="container mx-auto px-4 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row gap-6">


                    {/* Main Slider & Banners */}
                    <div className="flex-1 flex flex-col md:flex-row gap-6">
                        {/* Main Slider */}
                        <div className="flex-1 bg-white relative overflow-hidden rounded-lg shadow-sm group cursor-pointer h-[420px]">
                            <img
                                src={brand.coverImage}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Hero"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000"; }}

                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent flex flex-col justify-center p-8 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-[#fed700] bg-[#333e48] px-3 py-1 text-xs font-bold uppercase rounded-sm mb-4 inline-block">
                                        New Arrival
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-light text-[#333e48] mb-2">
                                        Shop to <br /><span className="font-bold">Wow</span>
                                    </h2>
                                    <p className="text-gray-500 text-lg mb-6">
                                        The new standard for <br />high-performance setups.
                                    </p>
                                    <Button className="bg-[#fed700] text-[#333e48] hover:bg-[#e6c200] font-bold rounded-full px-8">
                                        Shop Now <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Side Banners (Stacked) */}
                        <div className="w-full md:w-1/3 flex flex-col gap-6">
                            <div className="flex-1 bg-[#333e48] rounded-lg overflow-hidden relative p-6 flex flex-col justify-center text-white group cursor-pointer">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fed700] rounded-bl-full z-0 opacity-20 group-hover:scale-110 transition-transform"></div>
                                <div className="relative z-10">
                                    <span className="text-[#fed700] text-xs font-bold uppercase mb-2 block">Weekly Deal</span>
                                    <h3 className="text-2xl font-light mb-1">Catch Big <br /><span className="font-bold">Deals</span></h3>
                                    <p className="text-gray-400 text-sm mb-4">On Cameras & Acces.</p>
                                    <span className="flex items-center text-sm font-bold hover:text-[#fed700] transition-colors">
                                        Shop Now <ChevronRight size={14} />
                                    </span>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300"
                                    className="absolute bottom-2 right-2 w-24 h-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    alt="Camera"
                                />
                            </div>

                            <div className="flex-1 bg-[#f4f4f4] border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative p-6 flex flex-col justify-center group cursor-pointer hover:border-[#fed700] transition-colors">
                                <div className="relative z-10">
                                    <span className="text-gray-500 text-xs font-bold uppercase mb-2 block">New Arrival</span>
                                    <h3 className="text-2xl font-light text-[#333e48] mb-1">Tablets & <br /><span className="font-bold">Phones</span></h3>
                                    <span className="flex items-center text-sm font-bold text-[#333e48] hover:underline mt-2">
                                        From ₹9,999 <ChevronRight size={14} />
                                    </span>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300"
                                    className="absolute bottom-0 right-0 w-32 h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" // Simulating transparent bg
                                    alt="Tablet"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* --- Promo Banners (New Section) --- */}
            <div className="container mx-auto px-4 lg:px-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Banner 1 */}
                    <div className="bg-[#f8f8f8] p-6 flex items-center justify-between group cursor-pointer hover:shadow-md transition-shadow">
                        <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=200&q=80" alt="Cameras" className="w-24 h-24 object-contain mix-blend-multiply" />
                        <div className="text-right">
                            <h3 className="text-gray-500 text-xs font-normal mb-1">CATCH THE HOTTEST</h3>
                            <h4 className="text-[#333e48] font-bold text-lg mb-2 leading-tight">DEALS <br /><span className="font-light">IN CAMERAS</span></h4>
                            <div className="flex items-center justify-end gap-2 text-sm font-bold text-[#333e48] hover:text-[#fed700] transition-colors">
                                Shop now <div className="bg-[#fed700] rounded-full p-1 text-[#333e48]"><ChevronRight size={12} strokeWidth={3} /></div>
                            </div>
                        </div>
                    </div>

                    {/* Banner 2 */}
                    <div className="bg-[#f8f8f8] p-6 flex items-center justify-between group cursor-pointer hover:shadow-md transition-shadow">
                        <img src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=200&q=80" alt="Desktop" className="w-24 h-24 object-contain mix-blend-multiply" />
                        <div className="text-right">
                            <h3 className="text-gray-500 text-xs font-normal mb-1">THE NEW</h3>
                            <h4 className="text-[#333e48] font-bold text-lg mb-0 leading-tight">WORKSTATIONS</h4>
                            <div className="text-gray-500 text-xs mb-2">FROM <span className="text-[#333e48] font-bold text-lg">$749<sup className="text-xs">99</sup></span></div>
                            <div className="flex items-center justify-end">
                                <div className="bg-[#fed700] rounded-full p-1 text-[#333e48]"><ChevronRight size={12} strokeWidth={3} /></div>
                            </div>
                        </div>
                    </div>

                    {/* Banner 3 */}
                    <div className="bg-[#f8f8f8] p-6 flex items-center justify-between group cursor-pointer hover:shadow-md transition-shadow">
                        <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=200&q=80" alt="Tablets" className="w-24 h-24 object-contain mix-blend-multiply" />
                        <div className="text-right">
                            <h4 className="text-[#333e48] font-light text-sm mb-1 uppercase">Tablets, <br />Smartphones</h4>
                            <h3 className="text-[#333e48] font-bold text-lg mb-2">AND MORE</h3>
                            <div className="flex items-center justify-end gap-1">
                                <span className="text-xs text-gray-500 uppercase">Up to</span>
                                <span className="text-[#333e48] font-bold text-xl">70%</span>
                                <div className="bg-[#fed700] rounded-full p-1 ml-1 text-[#333e48]"><ChevronRight size={12} strokeWidth={3} /></div>
                            </div>
                        </div>
                    </div>

                    {/* Banner 4 */}
                    <div className="bg-[#f8f8f8] p-6 flex items-center justify-between group cursor-pointer hover:shadow-md transition-shadow">
                        <img src="https://images.unsplash.com/photo-1599669661266-990db246066f?auto=format&fit=crop&w=200&q=80" alt="360 Cameras" className="w-24 h-24 object-contain mix-blend-multiply" />
                        <div className="text-right">
                            <h3 className="text-gray-500 text-xs font-normal mb-1">THE NEW</h3>
                            <h4 className="text-[#333e48] font-bold text-lg mb-2 leading-tight">360 CAMERAS</h4>
                            <div className="flex items-center justify-end gap-1">
                                <span className="text-xs text-gray-500 uppercase">Up to</span>
                                <span className="text-[#333e48] font-bold text-xl">70%</span>
                                <div className="bg-[#fed700] rounded-full p-1 ml-1 text-[#333e48]"><ChevronRight size={12} strokeWidth={3} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Benefits Strip --- */}
            <div className="container mx-auto px-4 lg:px-8 mb-8">
                <div className="bg-white rounded shadow-sm px-6 py-8 flex flex-wrap lg:flex-nowrap justify-between gap-6 divide-x divide-gray-100">
                    {[
                        { icon: RocketIcon, title: "Free Delivery", sub: "For all oders over ₹99" },
                        { icon: RefreshCcwIcon, title: "90 Days Return", sub: "If goods have problems" },
                        { icon: CreditCardIcon, title: "Secure Payment", sub: "100% secure payment" },
                        { icon: MessagesCircleIcon, title: "24/7 Support", sub: "Dedicated support" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 px-4 flex-1">
                            <item.icon className="text-[#fed700] w-10 h-10 flex-shrink-0" strokeWidth={1.5} />
                            <div>
                                <h4 className="font-bold text-[#333e48] text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Main Products Section with Sidebar --- */}
            <div className="container mx-auto px-4 lg:px-8 pb-12">
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
                    <h3 className="text-2xl font-light text-[#333e48]">
                        <span className="font-bold border-b-4 border-[#fed700] pb-4">Best Sellers</span>
                    </h3>
                </div>

                {/* Two Column Layout: Sidebar + Products */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* --- LEFT SIDEBAR (Sticky) --- */}
                    <div className="w-full lg:w-72 flex-shrink-0">
                        <div className="lg:sticky lg:top-36 space-y-6">

                            {/* Categories Filter */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-[#333e48] text-white px-5 py-4 font-bold flex items-center gap-2">
                                    <List size={18} /> Categories
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {TOP_CATEGORIES.map((cat, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedCategory(cat.name)}
                                            className={`w-full flex items-center justify-between px-5 py-3 text-sm transition-all hover:bg-gray-50 hover:pl-6 group ${selectedCategory === cat.name ? 'bg-[#fed700]/10 text-[#333e48] font-semibold border-l-4 border-[#fed700]' : 'text-gray-600'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <cat.icon size={16} className={`${selectedCategory === cat.name ? 'text-[#fed700]' : 'text-gray-400 group-hover:text-[#fed700]'}`} />
                                                <span>{cat.name}</span>
                                            </div>
                                            <ChevronRight size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-[#333e48] text-white px-5 py-4 font-bold flex items-center gap-2">
                                    <CreditCard size={18} /> Price Range
                                </div>
                                <div className="p-5 space-y-3">
                                    {[
                                        { label: "Under ₹1,000", value: "0-1000" },
                                        { label: "₹1,000 - ₹5,000", value: "1000-5000" },
                                        { label: "₹5,000 - ₹10,000", value: "5000-10000" },
                                        { label: "₹10,000 - ₹25,000", value: "10000-25000" },
                                        { label: "Above ₹25,000", value: "25000+" },
                                    ].map((range, idx) => (
                                        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-gray-300 text-[#fed700] focus:ring-[#fed700] cursor-pointer"
                                            />
                                            <span className="text-sm text-gray-600 group-hover:text-[#333e48] transition-colors">{range.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-[#333e48] text-white px-5 py-4 font-bold flex items-center gap-2">
                                    <Star size={18} /> Customer Rating
                                </div>
                                <div className="p-5 space-y-3">
                                    {[4, 3, 2, 1].map((rating) => (
                                        <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-gray-300 text-[#fed700] focus:ring-[#fed700] cursor-pointer"
                                            />
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        fill={i < rating ? "#facc15" : "none"}
                                                        className={i < rating ? "text-yellow-400" : "text-gray-300"}
                                                    />
                                                ))}
                                                <span className="text-sm text-gray-500 ml-1">& Up</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar Promo Banner */}
                            <div className="bg-gradient-to-br from-[#333e48] to-[#1a1f24] rounded-xl p-6 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#fed700] rounded-bl-full opacity-20"></div>
                                <span className="text-[#fed700] text-xs font-bold uppercase mb-2 block">Special Offer</span>
                                <h4 className="text-xl font-bold mb-2">Save 20% on First Order</h4>
                                <p className="text-gray-400 text-sm mb-4">Use code: ELECTRO20</p>
                                <Button className="bg-[#fed700] text-[#333e48] hover:bg-[#e6c200] font-bold text-sm rounded-full px-6">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: Scrollable Products Area --- */}
                    <div className="flex-1">
                        {/* Product Count & View Options */}
                        <div className="flex items-center justify-between mb-6 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                            <span className="text-sm text-gray-500">
                                Showing <span className="font-bold text-[#333e48]">{filteredProducts.length}</span> products
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-500 hidden sm:block">Sort by:</span>
                                <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#fed700]">
                                    <option>Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest First</option>
                                    <option>Best Rating</option>
                                </select>
                                <div className="flex gap-1 border border-gray-200 rounded-lg overflow-hidden">
                                    <button className="p-2 bg-[#fed700] text-[#333e48]">
                                        <Grid size={18} />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 text-gray-400 transition-colors">
                                        <List size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Products Container */}
                        <div className="max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {filteredProducts.map((product, idx) => {
                                    const productInCart = isInCart(product.id);
                                    return (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.03, duration: 0.3 }}
                                            className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group border ${productInCart ? 'border-green-400 ring-2 ring-green-100' : 'border-gray-100 hover:border-[#fed700]'}`}
                                        >
                                            {/* In Cart Badge */}
                                            {productInCart && (
                                                <div className="absolute top-3 left-3 z-20 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                                    <ShoppingCart size={10} /> In Cart
                                                </div>
                                            )}

                                            {/* Wishlist Button */}
                                            <button
                                                className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 transition-all duration-300 transform group-hover:scale-100 scale-75"
                                                onClick={(e) => { e.stopPropagation(); }}
                                            >
                                                <Heart size={16} />
                                            </button>

                                            {/* Product Image */}
                                            <div
                                                className="relative aspect-square p-4 bg-gradient-to-br from-gray-50 to-white cursor-pointer overflow-hidden"
                                                onClick={() => onProductClick(product)}
                                            >
                                                <img
                                                    src={product.image}
                                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                                    alt={product.name}
                                                />
                                                {/* Quick View Overlay */}
                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <span className="bg-white/90 backdrop-blur-sm text-[#333e48] text-xs font-bold px-4 py-2 rounded-full shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                        Quick View
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Product Info */}
                                            <div className="p-4 flex flex-col flex-1">
                                                {/* Category */}
                                                <span className="text-[10px] text-[#fed700] font-bold uppercase tracking-wider mb-1">
                                                    {product.category}
                                                </span>

                                                {/* Product Name */}
                                                <h4
                                                    className="text-sm font-medium text-[#333e48] mb-2 line-clamp-2 min-h-[2.5rem] cursor-pointer hover:text-[#0066c0] transition-colors"
                                                    onClick={() => onProductClick(product)}
                                                >
                                                    {product.name}
                                                </h4>

                                                {/* Rating */}
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                size={12}
                                                                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                                                className={i < Math.floor(product.rating) ? "" : "text-gray-300"}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-xs text-gray-400">({product.rating})</span>
                                                </div>

                                                {/* Price & Add to Cart */}
                                                <div className="mt-auto pt-3 border-t border-gray-100">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <div>
                                                            <div className="text-lg font-bold text-[#333e48]">
                                                                ₹{product.price.toLocaleString()}
                                                            </div>
                                                            {product.price > 1000 && (
                                                                <div className="text-xs text-gray-400 line-through">
                                                                    ₹{Math.round(product.price * 1.2).toLocaleString()}
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Add to Cart Button */}
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                onAddToCart(product);
                                                            }}
                                                            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-full font-bold text-xs transition-all duration-300 shadow-md hover:shadow-lg ${productInCart
                                                                ? 'bg-green-500 text-white hover:bg-green-600'
                                                                : 'bg-[#fed700] text-[#333e48] hover:bg-[#333e48] hover:text-white'
                                                                }`}
                                                        >
                                                            <ShoppingCart size={14} />
                                                            <span className="hidden xl:inline">
                                                                {productInCart ? 'Added' : 'Add'}
                                                            </span>
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Load More Button */}
                        {filteredProducts.length > 0 && (
                            <div className="flex justify-center mt-8">
                                <Button
                                    variant="outline"
                                    className="border-2 border-[#333e48] text-[#333e48] hover:bg-[#333e48] hover:text-white font-bold px-8 py-5 rounded-full transition-all duration-300"
                                >
                                    Load More Products <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* --- Bottom Banners (New Section) --- */}
            <div className="container mx-auto px-4 lg:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Laptop Banner */}
                    <div className="bg-[#f2f2f2] p-8 md:p-12 relative overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer h-64 md:h-72 flex flex-col justify-center">
                        <div className="relative z-10 max-w-[60%]">
                            <h3 className="text-[#333e48] text-3xl font-light mb-1">
                                G9 Laptops with <br /><strong>Ultra 4K</strong>
                            </h3>
                            <p className="text-gray-500 text-sm mb-4">and the fastest Intel Core i7 processor ever</p>
                            <span className="text-[#333e48] font-bold text-sm border-b border-[#333e48] pb-0.5 hover:text-[#fed700] hover:border-[#fed700] transition-colors inline-block">
                                Shop now
                            </span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=400&q=80"
                            alt="Laptop"
                            className="absolute right-0 bottom-0 top-0 h-full w-1/2 object-contain object-center mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Smart Watch Banner */}
                    <div className="bg-[#f6f6f6] p-8 md:p-12 relative overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer h-64 md:h-72 flex items-center justify-between">
                        <div className="relative z-10 pl-6">
                            <h3 className="text-[#333e48] text-4xl font-light mb-1">
                                smart<strong>G3</strong>
                            </h3>
                            <p className="text-gray-500 text-sm mb-0">Now with 4G</p>
                        </div>
                        <div className="relative z-10 flex flex-col items-center justify-center border-l border-gray-300 pl-8 pr-4">
                            <div className="text-gray-500 text-sm">from</div>
                            <div className="text-[#333e48] text-4xl font-bold">$129<sup className="text-lg">99</sup></div>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80"
                            alt="Smart Watch"
                            className="absolute right-0 top-0 bottom-0 h-full w-1/3 object-cover object-left mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

// Custom Icons Wrappers
function RocketIcon(props: any) { return <Truck {...props} /> } // Approximate
function RefreshCcwIcon(props: any) { return <RefreshCw {...props} /> }
function CreditCardIcon(props: any) { return <CreditCard {...props} /> }
function MessagesCircleIcon(props: any) { return <PhoneCall {...props} /> }

export default ElectronicsTheme;
