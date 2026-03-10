// Services Theme - Modern Professional Service Marketplace UI
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Search, ShoppingBag, Heart, User, Star, Eye,
    ArrowRight, Clock, Phone, Menu, X,
    ShieldCheck, Award, ThumbsUp, Zap,
    CheckCircle, Wrench, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, Product } from "@/data/mockBrands";

interface ServicesThemeProps {
    brand: Brand;
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
    isInCart: (productId: string) => boolean;
}

// Brand accent color
const ACCENT = "#0d9488"; // Teal-600
const ACCENT_DARK = "#0f766e";
const ACCENT_LIGHT = "#ccfbf1";

export function ServicesTheme({ brand, products, onAddToCart, onProductClick, isInCart }: ServicesThemeProps) {
    // Load Google Font
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => { document.head.removeChild(link); };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Derive categories from products
    const categories = useMemo(() => {
        const cats = new Set(products.map(p => p.category));
        return ["All", ...Array.from(cats)];
    }, [products]);

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const matchesSearch = !searchQuery ||
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [products, searchQuery, selectedCategory]);

    const topService = products[0];

    return (
        <div className="min-h-screen bg-[#f8fafb] text-[#1a1a2e]" style={{ fontFamily: "'Inter', sans-serif" }}>

            {/* ── Top Info Bar ── */}
            <div className="bg-[#0d9488] text-white hidden md:block">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs font-medium tracking-wide">
                    <div className="flex gap-6 items-center">
                        <span className="flex items-center gap-1.5"><Phone size={12} /> +91 98765 43210</span>
                        <span className="flex items-center gap-1.5"><MapPin size={12} /> Available in 50+ cities</span>
                    </div>
                    <div className="flex gap-6 items-center">
                        <span>Track Booking</span>
                        <span>Help & Support</span>
                    </div>
                </div>
            </div>

            {/* ── Sticky Header ── */}
            <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo & Brand */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-teal-100">
                                <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-bold text-gray-900 leading-tight">{brand.name}</h1>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Star size={10} className="fill-amber-400 text-amber-400" />
                                    <span className="font-semibold text-gray-700">{brand.rating}</span>
                                    <span>· {brand.followers} followers</span>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar – Desktop */}
                        <div className="hidden md:flex flex-1 max-w-lg relative">
                            <input
                                type="text"
                                placeholder="Search for services..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
                                <Search size={14} />
                            </button>
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <button className="hidden md:flex flex-col items-center gap-0.5 text-gray-500 hover:text-teal-600 transition-colors group p-2">
                                <User className="w-5 h-5" />
                            </button>
                            <button className="hidden md:flex flex-col items-center gap-0.5 text-gray-500 hover:text-teal-600 transition-colors group p-2">
                                <Heart className="w-5 h-5" />
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-teal-600 transition-colors group p-2 relative">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
                            </button>
                            <button className="md:hidden text-gray-600 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-3 pb-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 text-sm bg-gray-50"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* ── Hero Section ── */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-8 py-6 md:py-10">
                        {/* Left – Content */}
                        <div className="lg:col-span-2 flex flex-col justify-center py-6 lg:py-12">
                            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit mb-5">
                                <Zap size={12} className="fill-teal-600" />
                                Trusted Professionals
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                                {brand.name}
                            </h2>
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 max-w-md">
                                {brand.description || "Professional services at your doorstep. Licensed, insured, and quality guaranteed."}
                            </p>

                            {/* Stats row */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100">
                                    <Star size={16} className="fill-amber-400 text-amber-400" />
                                    <span className="font-bold text-gray-900">{brand.rating}</span>
                                    <span className="text-xs text-gray-500">Rating</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100">
                                    <CheckCircle size={16} className="text-teal-600" />
                                    <span className="font-bold text-gray-900">{brand.followers}</span>
                                    <span className="text-xs text-gray-500">Followers</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100">
                                    <Clock size={16} className="text-blue-600" />
                                    <span className="font-bold text-gray-900">{brand.deliveryTime}</span>
                                    <span className="text-xs text-gray-500">Response</span>
                                </div>
                            </div>

                            <Button
                                className="w-fit bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-teal-600/25 transition-all hover:shadow-teal-600/40 hover:scale-[1.02]"
                                onClick={() => {
                                    document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Explore Services
                                <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </div>

                        {/* Right – Cover Image */}
                        <div className="lg:col-span-3 relative rounded-2xl lg:rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-[420px] group shadow-xl">
                            <img
                                src={brand.coverImage}
                                alt={brand.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            {brand.verified && (
                                <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                                    <CheckCircle size={14} className="text-teal-600 fill-teal-100" />
                                    <span className="text-xs font-bold text-gray-800">Verified Provider</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Trust Badges ── */}
            <section className="border-y border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: ShieldCheck, title: "Verified Pros", desc: "Background-checked experts", color: "text-teal-600", bg: "bg-teal-50" },
                            { icon: Award, title: "Quality Guaranteed", desc: "100% satisfaction or refund", color: "text-blue-600", bg: "bg-blue-50" },
                            { icon: Clock, title: "On-Time Service", desc: "Punctual professionals", color: "text-amber-600", bg: "bg-amber-50" },
                            { icon: ThumbsUp, title: "Trusted by 50K+", desc: "Top-rated service provider", color: "text-purple-600", bg: "bg-purple-50" },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 group"
                            >
                                <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                                    <p className="text-xs text-gray-500">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured Service Highlight ── */}
            {topService && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                    <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 rounded-3xl p-6 md:p-0 overflow-hidden shadow-xl shadow-teal-900/20 flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                                    ⭐ TOP RATED
                                </div>
                                <span className="text-white/70 text-sm font-medium">Most booked service</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight">{topService.name}</h2>
                            <p className="text-white/80 mb-6 max-w-md text-sm md:text-base leading-relaxed">{topService.description}</p>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2 text-center">
                                    <div className="text-white font-bold text-xl">₹{topService.price}</div>
                                    <div className="text-white/60 text-[10px] uppercase font-medium">Starting at</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2 text-center">
                                    <div className="flex items-center gap-1 text-white font-bold text-xl">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        {topService.rating}
                                    </div>
                                    <div className="text-white/60 text-[10px] uppercase font-medium">{topService.reviews?.toLocaleString()} reviews</div>
                                </div>
                            </div>

                            <Button
                                onClick={() => onAddToCart(topService)}
                                className={`w-fit rounded-full px-10 py-6 text-base font-bold shadow-lg transition-all ${isInCart(topService.id)
                                        ? 'bg-red-500 hover:bg-red-600 text-white'
                                        : 'bg-white hover:bg-gray-100 text-teal-700'
                                    }`}
                            >
                                {isInCart(topService.id) ? 'Remove from Cart' : `Book Now — ₹${topService.price}`}
                            </Button>
                        </div>
                        <div className="md:w-1/2 relative min-h-[240px] md:min-h-0">
                            <img
                                src={topService.image}
                                alt={topService.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-700/50 to-transparent md:block hidden" />
                        </div>
                    </div>
                </section>
            )}

            {/* ── Category Tabs (Sticky) ── */}
            <section className="bg-white sticky top-[65px] z-40 border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="overflow-x-auto scrollbar-hide py-3">
                        <div className="flex gap-2 min-w-max">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedCategory === category
                                            ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-3">
                    <div>
                        <span className="text-teal-600 font-bold text-xs uppercase tracking-wider block mb-1">Our Services</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {selectedCategory === "All" ? "All Services" : selectedCategory}
                        </h2>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{filteredProducts.length} services available</span>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <Wrench className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600">No services found</h3>
                        <p className="text-sm text-gray-400 mt-1">Try adjusting your search or category filter.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((service, idx) => {
                            const inCart = isInCart(service.id);
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-teal-200 overflow-hidden transition-all duration-300">
                                        {/* Image */}
                                        <div className="relative h-44 overflow-hidden cursor-pointer" onClick={() => onProductClick(service)}>
                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />

                                            {/* Category Badge */}
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                                                {service.category}
                                            </div>

                                            {/* Floating Actions */}
                                            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                                <button
                                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-teal-600 hover:text-white shadow-md transition-colors"
                                                    title="Add to Wishlist"
                                                >
                                                    <Heart size={14} />
                                                </button>
                                                <button
                                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-teal-600 hover:text-white shadow-md transition-colors"
                                                    title="Quick View"
                                                    onClick={(e) => { e.stopPropagation(); onProductClick(service); }}
                                                >
                                                    <Eye size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            {/* Rating */}
                                            <div className="flex items-center gap-1.5 mb-2">
                                                <div className="flex items-center gap-0.5">
                                                    {[1, 2, 3, 4, 5].map(s => (
                                                        <Star key={s} size={11} className={`${s <= Math.floor(service.rating || 0) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-semibold text-gray-800">{service.rating}</span>
                                                {service.reviews && (
                                                    <span className="text-xs text-gray-400">({service.reviews.toLocaleString()})</span>
                                                )}
                                            </div>

                                            {/* Title & Description */}
                                            <h3
                                                className="font-bold text-gray-900 text-sm mb-1 line-clamp-1 group-hover:text-teal-700 transition-colors cursor-pointer"
                                                onClick={() => onProductClick(service)}
                                            >
                                                {service.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{service.description}</p>

                                            {/* Price & Action */}
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                                <div className="flex items-baseline gap-1.5">
                                                    <span className="text-lg font-extrabold text-gray-900">₹{service.price.toLocaleString()}</span>
                                                    <span className="text-xs text-gray-400 line-through">₹{Math.round(service.price * 1.3).toLocaleString()}</span>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => onAddToCart(service)}
                                                    className={`rounded-lg text-xs font-bold px-4 transition-all duration-200 ${inCart
                                                            ? 'bg-red-500 hover:bg-red-600 text-white'
                                                            : 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm shadow-teal-600/20'
                                                        }`}
                                                >
                                                    {inCart ? 'Remove' : 'Book Now'}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* ── Testimonial Section ── */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(13,148,136,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(13,148,136,0.2) 0%, transparent 50%)' }} />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 bg-teal-500/20 backdrop-blur rounded-2xl mx-auto flex items-center justify-center mb-8 rotate-3">
                            <span className="text-3xl text-teal-400">❝</span>
                        </div>
                        <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 text-white/90 max-w-2xl mx-auto">
                            "Absolutely professional service! The technician arrived on time, diagnosed the issue quickly, and fixed everything perfectly. Will definitely book again."
                        </p>
                        <div>
                            <h4 className="font-bold text-lg text-white">Rajesh Kumar</h4>
                            <p className="text-teal-400 text-sm font-medium">Verified Customer</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="bg-gray-900 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg overflow-hidden">
                                <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-lg">{brand.name}</span>
                        </div>
                        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ServicesTheme;
