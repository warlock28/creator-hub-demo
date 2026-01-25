// Beauty Theme - "Cosmika" Inspired UI
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, ShoppingBag, Heart, User, Star, Eye,
    ArrowRight, Sparkles, Clock, Truck, ShieldCheck, Phone,
    Menu, X, Facebook, Instagram, Twitter, Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brand, Product } from "@/data/mockBrands";

interface BeautyThemeProps {
    brand: Brand;
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
    isInCart: (productId: string) => boolean;
}

// Discount Countdown Timer Component
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex gap-3 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white rounded px-3 py-2 min-w-[60px] shadow-sm">
                    <div className="text-xl font-bold text-[#8a5da1] leading-none">{String(value).padStart(2, '0')}</div>
                    <div className="text-[10px] uppercase text-gray-500 font-medium">{unit}</div>
                </div>
            ))}
        </div>
    );
};

export function BeautyTheme({ brand, products, onAddToCart, onProductClick, isInCart }: BeautyThemeProps) {
    // Add Google Font
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => { document.head.removeChild(link); };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [products, searchQuery]);

    const bestSellers = products.slice(0, 8);
    const flashSaleProduct = products[0];

    return (
        <div className="min-h-screen bg-white text-[#1e1e1e]" style={{ fontFamily: "'Mulish', sans-serif" }}>

            {/* Top Bar */}
            <div className="bg-[#f8f9fa] border-b border-gray-100 py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs text-gray-500">
                    <div className="flex gap-4">
                        <span>📞 +1 234 567 8900</span>
                        <span>✉️ support@cosmika.com</span>
                    </div>
                    <div className="flex gap-4">
                        <span>Store Location</span>
                        <span>Track Order</span>
                        <span>Language: EN</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="w-10 h-10 bg-[#8a5da1] rounded-full flex items-center justify-center text-white">
                                <Sparkles size={20} />
                            </div>
                            <span className="text-2xl font-bold text-[#2d2d2d] tracking-tight">{brand.name}</span>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex flex-1 max-w-xl relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full bg-[#f8f9fa] border-none rounded-full py-3 px-6 pr-12 text-sm focus:ring-2 focus:ring-[#8a5da1]/20"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#8a5da1] text-white rounded-full flex items-center justify-center hover:bg-[#764d8a] transition-colors">
                                <Search size={14} />
                            </button>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-4 md:gap-6">
                            <button className="hidden md:flex flex-col items-center gap-1 text-gray-600 hover:text-[#8a5da1] group">
                                <User className="w-6 h-6" />
                                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Account</span>
                            </button>
                            <button className="hidden md:flex flex-col items-center gap-1 text-gray-600 hover:text-[#8a5da1] group">
                                <Heart className="w-6 h-6" />
                                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Wishlist</span>
                            </button>
                            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#8a5da1] group relative">
                                <div className="relative">
                                    <ShoppingBag className="w-6 h-6" />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8a5da1] text-white text-[10px] flex items-center justify-center rounded-full">2</span>
                                </div>
                                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Cart</span>
                            </button>
                            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="border-t border-gray-100 hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 py-3">
                        <a href="#" className="text-sm font-bold text-[#8a5da1] uppercase tracking-wide">Home</a>
                        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#8a5da1] uppercase tracking-wide relative group">
                            Skin Care
                            <span className="absolute -top-3 -right-4 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full">HOT</span>
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#8a5da1] uppercase tracking-wide">Make Up</a>
                        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#8a5da1] uppercase tracking-wide">Hair Care</a>
                        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#8a5da1] uppercase tracking-wide relative group">
                            Fragrance
                            <span className="absolute -top-3 -right-4 bg-[#8a5da1] text-white text-[8px] px-1.5 py-0.5 rounded-full">NEW</span>
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#8a5da1] uppercase tracking-wide">Tools</a>
                    </div>
                </div>
            </header>

            {/* Hero Grid Section */}
            <section className="max-w-7xl mx-auto px-4 py-6 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px] md:h-[600px]">
                    {/* Main Banner - Left (2/3 width on desktop) */}
                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden h-full group">
                        <img
                            src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop"
                            alt="Main Banner"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 max-w-sm">
                            <span className="block text-[#8a5da1] font-bold tracking-widest uppercase mb-4 text-sm bg-white/90 backdrop-blur px-3 py-1 rounded w-fit">New Collection</span>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-[#2d2d2d] mb-6 leading-tight">Organic <br /> Beauty Glow</h2>
                            <p className="text-gray-700 text-lg mb-8 font-medium">Discover nature's secret to radiant skin with our new organic range.</p>
                            <Button className="bg-[#8a5da1] hover:bg-[#764d8a] text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-purple-500/30">
                                SHOP NOW
                            </Button>
                        </div>
                    </div>

                    {/* Side Banners - Right (1/3 width) */}
                    <div className="flex flex-col gap-6 h-full">
                        <div className="relative flex-1 rounded-2xl overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop"
                                alt="Side Banner 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Summer Essentials</h3>
                                <span className="text-sm font-medium underline cursor-pointer hover:text-[#8a5da1] transition-colors">Shop Collection</span>
                            </div>
                        </div>
                        <div className="relative flex-1 rounded-2xl overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1571781535604-805277601395?q=80&w=1964&auto=format&fit=crop"
                                alt="Side Banner 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Perfumes</h3>
                                <span className="text-sm font-medium underline cursor-pointer hover:text-[#8a5da1] transition-colors">Discover Scents</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Bar */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-100 rounded-xl p-8 bg-white shadow-sm">
                    {[
                        { icon: RocketIcon, title: "Free Delivery", desc: "For all orders over $50" },
                        { icon: ShieldCheck, title: "Secure Payment", desc: "100% secure payment" },
                        { icon: Phone, title: "24/7 Support", desc: "Dedicated support" },
                        { icon: Clock, title: "Fast Returns", desc: "30 days return policy" },
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#8a5da1] group-hover:bg-[#8a5da1] group-hover:text-white transition-colors">
                                <feature.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#2d2d2d]">{feature.title}</h4>
                                <p className="text-xs text-gray-500">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Flash Sale Section */}
            {flashSaleProduct && (
                <section className="bg-[#f8f9fa] py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="bg-white rounded-3xl p-8 md:p-0 overflow-hidden shadow-sm flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">FLASH SALE</div>
                                    <span className="text-gray-500 text-sm font-medium">Ends in:</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#2d2d2d] mb-4">Deal of the Day</h2>
                                <p className="text-gray-600 mb-8 max-w-md">Get the best beauty products at an amazing price. Limited time offer, don't miss out!</p>

                                <div className="mb-8">
                                    <CountdownTimer targetDate={new Date(Date.now() + 86400000)} />
                                </div>

                                <Button
                                    className="w-fit bg-[#8a5da1] hover:bg-[#764d8a] text-white rounded-full px-10 py-6 text-base font-bold"
                                    onClick={() => onAddToCart(flashSaleProduct)}
                                >
                                    Add to Cart - ${flashSaleProduct.price}
                                </Button>
                            </div>
                            <div className="md:w-1/2 relative bg-[#f4eff6]">
                                <img
                                    src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop"
                                    alt="Flash Sale"
                                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Best Sellers Grid */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div className="text-center md:text-left">
                        <span className="text-[#8a5da1] font-bold text-sm uppercase tracking-wider block mb-2">Top Collection</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">Trending Products</h2>
                    </div>
                    <div className="flex gap-2">
                        {["All", "Skin Care", "Make Up", "Lipstick"].map((cat) => (
                            <button key={cat} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-[#8a5da1] hover:text-white hover:border-[#8a5da1] transition-all">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {bestSellers.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-xl mb-4 group-hover:shadow-lg transition-all duration-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-col gap-2">
                                    {idx % 3 === 0 && <span className="bg-[#8a5da1] text-white text-[10px] uppercase font-bold px-2 py-1 rounded">-20%</span>}
                                    {idx % 2 === 0 && <span className="bg-white text-[#2d2d2d] text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm">NEW</span>}
                                </div>

                                {/* Floating Actions */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-[#8a5da1] hover:text-white shadow-md transition-colors" title="Add to Wishlist">
                                        <Heart size={16} />
                                    </button>
                                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-[#8a5da1] hover:text-white shadow-md transition-colors" title="Quick View" onClick={() => onProductClick(product)}>
                                        <Eye size={16} />
                                    </button>
                                </div>

                                {/* Add to Cart - Slide Up */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button
                                        onClick={() => onAddToCart(product)}
                                        className={`w-full ${isInCart(product.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-[#2d2d2d] hover:bg-[#8a5da1]'} text-white font-bold h-10 rounded shadow-lg`}
                                    >
                                        {isInCart(product.id) ? 'Remove' : 'Add to Cart'}
                                    </Button>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                                <h3 className="text-base font-bold text-[#2d2d2d] hover:text-[#8a5da1] cursor-pointer transition-colors mb-2 line-clamp-1">{product.name}</h3>
                                <div className="flex justify-center items-center gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className={`${s <= 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />)}
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <span className="text-gray-400 text-sm line-through">${(product.price * 1.2).toFixed(2)}</span>
                                    <span className="text-[#8a5da1] font-bold text-lg">${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed relative py-20">
                <div className="absolute inset-0 bg-[#8a5da1]/90"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
                    <div className="mb-8">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full mx-auto flex items-center justify-center mb-6">
                            <span className="text-4xl">❝</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
                        <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
                            "I absolutely love the organic face serum! It has completely transformed my skin texture. The delivery was super fast and the packaging was beautiful."
                        </p>
                        <div>
                            <h4 className="font-bold text-lg">Sophia Williams</h4>
                            <p className="opacity-80 text-sm">Happy Customer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper icon component since Rocket isn't exported by default lucide-react in some versions, using Sparkles as fallback/example
const RocketIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
);

export default BeautyTheme;
