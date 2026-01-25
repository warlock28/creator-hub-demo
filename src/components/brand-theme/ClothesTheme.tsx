// Clothes Theme - Modern E-commerce UI
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, ShoppingBag, Heart, User, Star, Menu, X, Check,
    ChevronDown, ChevronUp, ChevronRight, ShieldCheck, RefreshCw, Truck, HeartHandshake,
    SlidersHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, Product } from "@/data/mockBrands";

interface ClothesThemeProps {
    brand: Brand;
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
    isInCart: (productId: string) => boolean;
}

// Hero Images
const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
];

// Filter Options
const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
const COLOR_OPTIONS = ['Black', 'White', 'Navy', 'Gray', 'Red', 'Green', 'Yellow', 'Pink'];
const FIT_OPTIONS = ['Oversized Fit', 'Regular Fit', 'Slim Fit', 'Super Loose Fit'];
const DESIGN_OPTIONS = ['Printed', 'Solid', 'Striped', 'Graphic', 'Typography'];

// Mobile Nav Links
const MOBILE_NAV_LINKS = ["MEN", "WOMEN", "WINTERWEAR", "PLUS SIZE", "ACCESSORIES"];

// Fandom Carousel Images
const FANDOM_IMAGES = [
    "https://images.unsplash.com/photo-1574719967279-3f3d969875b1?q=80&w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&h=600&fit=crop",
];

// Category Data
const CATEGORIES = [
    { name: "T-Shirts", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" },
    { name: "Boxers", img: "https://images.unsplash.com/photo-1555689537-1e6a993ed649?w=400&h=400&fit=crop" },
    { name: "Dresses", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
    { name: "Joggers", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop" },
    { name: "Covers", img: "https://images.unsplash.com/photo-1586942393507-1d221741ca67?w=400&h=400&fit=crop" },
    { name: "Pajamas", img: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=400&h=400&fit=crop" },
];

export function ClothesTheme({ brand, products, onAddToCart, onProductClick, isInCart }: ClothesThemeProps) {
    // Inject Fonts
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => { document.head.removeChild(link); };
    }, []);

    // State
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedFits, setSelectedFits] = useState<string[]>([]);
    const [selectedDesigns, setSelectedDesigns] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState("recommended");

    // Collapsible filter sections
    const [expandedFilters, setExpandedFilters] = useState({
        sizes: true,
        color: false,
        design: false,
        fit: false
    });

    // Toggle filter section
    const toggleFilterSection = (section: keyof typeof expandedFilters) => {
        setExpandedFilters(prev => ({ ...prev, [section]: !prev[section] }));
    };

    // Toggle filter selection
    const toggleFilter = (
        value: string,
        selected: string[],
        setSelected: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        if (selected.includes(value)) {
            setSelected(selected.filter(s => s !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    // Clear all filters
    const clearAllFilters = () => {
        setSelectedSizes([]);
        setSelectedColors([]);
        setSelectedFits([]);
        setSelectedDesigns([]);
    };

    // Count active filters
    const activeFilterCount = selectedSizes.length + selectedColors.length + selectedFits.length + selectedDesigns.length;

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = products.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Sort
        if (sortBy === "price-low") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, searchQuery, sortBy]);

    return (
        <div className="min-h-screen bg-white text-[#2d2d2d]" style={{ fontFamily: "'Montserrat', sans-serif" }}>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="max-w-[1200px] mx-auto px-4 h-16 md:h-[72px] flex items-center justify-between gap-4">
                    {/* Logo & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <h1 className="text-lg md:text-2xl font-extrabold tracking-tight text-black">
                            {brand.name.toLowerCase()}
                            <span className="text-[#FDD835]">.</span>
                        </h1>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full bg-gray-50 text-sm font-medium placeholder:text-gray-400 py-2.5 pl-11 pr-4 rounded-full border border-gray-100 focus:border-gray-200 focus:ring-2 focus:ring-gray-100 focus:outline-none transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <button className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors group">
                            <User size={18} strokeWidth={1.8} className="text-gray-600 group-hover:text-black" />
                            <span className="text-xs font-semibold text-gray-600 group-hover:text-black">Login</span>
                        </button>

                        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative group">
                            <Heart size={20} strokeWidth={1.8} className="text-gray-600 group-hover:text-black" />
                        </button>

                        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative group">
                            <ShoppingBag size={20} strokeWidth={1.8} className="text-gray-600 group-hover:text-black" />
                            <span className="absolute -top-0.5 -right-0.5 bg-[#FDD835] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>

                        <button className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <Search size={20} strokeWidth={1.8} className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-white w-[85%] max-w-[320px] h-full shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-100">
                                <span className="font-bold text-lg">Menu</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-4 space-y-1">
                                {MOBILE_NAV_LINKS.map(link => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="flex justify-between items-center py-3 px-2 text-sm font-semibold hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {link}
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="mt-1 md:mt-4">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-0 md:px-4">
                    <div className="md:col-span-1 h-[280px] md:h-[480px] overflow-hidden">
                        <img
                            src={HERO_IMAGES[0]}
                            alt="Hero 1"
                            className="w-full h-full object-cover object-top md:rounded-lg cursor-pointer hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="hidden md:flex md:col-span-1 h-[480px] bg-gradient-to-br from-[#fff9c4] to-[#fff59d] flex-col items-center justify-center text-center p-8 rounded-lg">
                        <h2 className="text-4xl font-black mb-4 tracking-tight leading-tight">OFFICIAL<br />MERCH</h2>
                        <p className="text-sm font-medium mb-8 text-gray-700 max-w-[220px]">Grab the coolest designs from your favorite universe</p>
                        <button className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest hover:bg-gray-900 transition-colors rounded-full">
                            EXPLORE NOW
                        </button>
                    </div>
                    <div className="hidden md:block md:col-span-1 h-[480px] overflow-hidden">
                        <img
                            src={HERO_IMAGES[1]}
                            alt="Hero 2"
                            className="w-full h-full object-cover object-top rounded-lg cursor-pointer hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Shop by Fandom Carousel */}
            <section className="py-10 overflow-hidden">
                <h3 className="text-center font-bold text-base md:text-lg tracking-widest mb-8 uppercase text-gray-800">
                    Shop by Fandom
                </h3>
                <div className="relative w-full">
                    <motion.div
                        className="flex gap-4 md:gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    >
                        {[...FANDOM_IMAGES, ...FANDOM_IMAGES].map((img, i) => (
                            <div
                                key={i}
                                className="w-[160px] h-[160px] md:w-[220px] md:h-[220px] shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
                            >
                                <img
                                    src={img}
                                    alt={`Fandom ${i}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Popular Categories */}
            <section className="py-8 max-w-[1200px] mx-auto px-4">
                <h3 className="text-center font-bold text-base md:text-lg tracking-widest mb-8 uppercase text-gray-800">
                    Popular Categories
                </h3>
                <div className="flex gap-6 md:gap-10 overflow-x-auto pb-4 no-scrollbar justify-start md:justify-center">
                    {CATEGORIES.map((cat, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
                            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#FDD835] transition-all duration-300 shadow-sm">
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-700 group-hover:text-black transition-colors">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Product Grid with Sidebar */}
            <section className="max-w-[1200px] mx-auto px-4 py-6 md:py-10">
                <div className="flex gap-8">

                    {/* Sidebar Filters - Desktop */}
                    <aside className="hidden md:block w-[260px] shrink-0">
                        <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-3 pb-8">

                            {/* Filter Header */}
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <SlidersHorizontal size={16} className="text-gray-600" />
                                    <span className="font-bold text-sm uppercase tracking-wider">
                                        Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                                    </span>
                                </div>
                                {activeFilterCount > 0 && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>

                            <div className="space-y-4">

                                {/* Sizes Filter */}
                                <div className="border-b border-gray-50 pb-4">
                                    <button
                                        onClick={() => toggleFilterSection('sizes')}
                                        className="flex justify-between items-center w-full py-2 group"
                                    >
                                        <span className="font-semibold text-sm text-gray-800 group-hover:text-black flex items-center gap-2">
                                            {selectedSizes.length > 0 && (
                                                <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
                                            )}
                                            Sizes
                                        </span>
                                        {expandedFilters.sizes ? (
                                            <ChevronUp size={16} className="text-gray-400" />
                                        ) : (
                                            <ChevronDown size={16} className="text-gray-400" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {expandedFilters.sizes && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-3 space-y-2.5">
                                                    {SIZE_OPTIONS.slice(0, 6).map(size => (
                                                        <button
                                                            key={size}
                                                            onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
                                                            className="flex items-center gap-3 w-full py-1 group/item"
                                                        >
                                                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${selectedSizes.includes(size)
                                                                    ? 'bg-[#FDD835] border-[#FDD835]'
                                                                    : 'border-gray-300 group-hover/item:border-gray-400'
                                                                }`}>
                                                                {selectedSizes.includes(size) && <Check size={10} strokeWidth={3} className="text-black" />}
                                                            </div>
                                                            <span className={`text-sm ${selectedSizes.includes(size)
                                                                    ? 'font-semibold text-black'
                                                                    : 'text-gray-600 group-hover/item:text-black'
                                                                }`}>
                                                                {size}
                                                            </span>
                                                        </button>
                                                    ))}
                                                    <button className="text-xs font-semibold text-emerald-600 hover:underline pt-1">
                                                        +2 more
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Color Filter */}
                                <div className="border-b border-gray-50 pb-4">
                                    <button
                                        onClick={() => toggleFilterSection('color')}
                                        className="flex justify-between items-center w-full py-2 group"
                                    >
                                        <span className="font-semibold text-sm text-gray-800 group-hover:text-black flex items-center gap-2">
                                            {selectedColors.length > 0 && (
                                                <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
                                            )}
                                            Color
                                        </span>
                                        {expandedFilters.color ? (
                                            <ChevronUp size={16} className="text-gray-400" />
                                        ) : (
                                            <ChevronDown size={16} className="text-gray-400" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {expandedFilters.color && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-3 space-y-2.5">
                                                    {COLOR_OPTIONS.slice(0, 5).map(color => (
                                                        <button
                                                            key={color}
                                                            onClick={() => toggleFilter(color, selectedColors, setSelectedColors)}
                                                            className="flex items-center gap-3 w-full py-1 group/item"
                                                        >
                                                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${selectedColors.includes(color)
                                                                    ? 'bg-[#FDD835] border-[#FDD835]'
                                                                    : 'border-gray-300 group-hover/item:border-gray-400'
                                                                }`}>
                                                                {selectedColors.includes(color) && <Check size={10} strokeWidth={3} className="text-black" />}
                                                            </div>
                                                            <span className={`text-sm ${selectedColors.includes(color)
                                                                    ? 'font-semibold text-black'
                                                                    : 'text-gray-600 group-hover/item:text-black'
                                                                }`}>
                                                                {color}
                                                            </span>
                                                        </button>
                                                    ))}
                                                    <button className="text-xs font-semibold text-emerald-600 hover:underline pt-1">
                                                        +3 more
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Design Filter */}
                                <div className="border-b border-gray-50 pb-4">
                                    <button
                                        onClick={() => toggleFilterSection('design')}
                                        className="flex justify-between items-center w-full py-2 group"
                                    >
                                        <span className="font-semibold text-sm text-gray-800 group-hover:text-black flex items-center gap-2">
                                            {selectedDesigns.length > 0 && (
                                                <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
                                            )}
                                            Design
                                        </span>
                                        {expandedFilters.design ? (
                                            <ChevronUp size={16} className="text-gray-400" />
                                        ) : (
                                            <ChevronDown size={16} className="text-gray-400" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {expandedFilters.design && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-3 space-y-2.5">
                                                    {DESIGN_OPTIONS.map(design => (
                                                        <button
                                                            key={design}
                                                            onClick={() => toggleFilter(design, selectedDesigns, setSelectedDesigns)}
                                                            className="flex items-center gap-3 w-full py-1 group/item"
                                                        >
                                                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${selectedDesigns.includes(design)
                                                                    ? 'bg-[#FDD835] border-[#FDD835]'
                                                                    : 'border-gray-300 group-hover/item:border-gray-400'
                                                                }`}>
                                                                {selectedDesigns.includes(design) && <Check size={10} strokeWidth={3} className="text-black" />}
                                                            </div>
                                                            <span className={`text-sm ${selectedDesigns.includes(design)
                                                                    ? 'font-semibold text-black'
                                                                    : 'text-gray-600 group-hover/item:text-black'
                                                                }`}>
                                                                {design}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Fit Filter */}
                                <div className="pb-4">
                                    <button
                                        onClick={() => toggleFilterSection('fit')}
                                        className="flex justify-between items-center w-full py-2 group"
                                    >
                                        <span className="font-semibold text-sm text-gray-800 group-hover:text-black flex items-center gap-2">
                                            {selectedFits.length > 0 && (
                                                <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
                                            )}
                                            Fit
                                        </span>
                                        {expandedFilters.fit ? (
                                            <ChevronUp size={16} className="text-gray-400" />
                                        ) : (
                                            <ChevronDown size={16} className="text-gray-400" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {expandedFilters.fit && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-3 space-y-2.5">
                                                    {FIT_OPTIONS.map(fit => (
                                                        <button
                                                            key={fit}
                                                            onClick={() => toggleFilter(fit, selectedFits, setSelectedFits)}
                                                            className="flex items-center gap-3 w-full py-1 group/item"
                                                        >
                                                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${selectedFits.includes(fit)
                                                                    ? 'bg-[#FDD835] border-[#FDD835]'
                                                                    : 'border-gray-300 group-hover/item:border-gray-400'
                                                                }`}>
                                                                {selectedFits.includes(fit) && <Check size={10} strokeWidth={3} className="text-black" />}
                                                            </div>
                                                            <span className={`text-sm ${selectedFits.includes(fit)
                                                                    ? 'font-semibold text-black'
                                                                    : 'text-gray-600 group-hover/item:text-black'
                                                                }`}>
                                                                {fit}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">

                        {/* Grid Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
                                    Design of the Week
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    {filteredProducts.length} Products
                                </p>
                            </div>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="text-sm font-medium bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-100 cursor-pointer"
                            >
                                <option value="recommended">Recommended</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative cursor-pointer"
                                >
                                    {/* Product Image */}
                                    <div
                                        className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100"
                                        onClick={() => onProductClick(product)}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Bestseller Tag */}
                                        <div className="absolute top-2 left-2 bg-[#FDD835] text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                                            Bestseller
                                        </div>

                                        {/* Wishlist Button */}
                                        <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white">
                                            <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
                                        </button>

                                        {/* Rating Badge */}
                                        <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1.5 text-xs font-bold shadow-sm">
                                            <Star size={12} className="text-[#FDD835] fill-[#FDD835]" />
                                            <span>4.5</span>
                                            <span className="text-gray-400 font-normal">|</span>
                                            <span className="text-gray-500 font-medium">2.1k</span>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="mt-3 px-1">
                                        <h3 className="font-bold text-sm text-gray-900 truncate">
                                            {brand.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5 truncate">
                                            {product.name}
                                        </p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-base font-bold text-black">
                                                ₹{product.price}
                                            </span>
                                            <span className="text-xs text-gray-400 line-through">
                                                ₹{Math.round(product.price * 2)}
                                            </span>
                                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                                50% OFF
                                            </span>
                                        </div>

                                        {/* TriBe Price */}
                                        <div className="bg-gray-50 px-2 py-1.5 rounded-lg mt-2">
                                            <p className="text-[10px] text-gray-600">
                                                <span className="font-bold text-black">₹{Math.round(product.price - 50)}</span>
                                                <span className="ml-1">for TriBe Members</span>
                                            </p>
                                        </div>

                                        {/* Mobile Add Button */}
                                        <div className="mt-3 md:hidden">
                                            <Button
                                                onClick={() => onAddToCart(product)}
                                                className="w-full h-9 bg-white border-2 border-black text-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all rounded-lg"
                                            >
                                                {isInCart(product.id) ? "Added" : "Add to Bag"}
                                            </Button>
                                        </div>

                                        {/* Desktop Add Button - Shows on Hover */}
                                        <div className="hidden md:block mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                onClick={() => onAddToCart(product)}
                                                className="w-full h-9 bg-black text-white text-xs font-bold uppercase hover:bg-gray-900 transition-all rounded-lg"
                                            >
                                                {isInCart(product.id) ? "✓ Added" : "Add to Bag"}
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Promise & Trust Section */}
            <section className="bg-gray-50 border-t border-gray-100 py-16 mt-16">
                <div className="max-w-[1200px] mx-auto px-4">

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
                        {[
                            { icon: ShieldCheck, title: "100% Secure", desc: "Secure payment with PEV" },
                            { icon: RefreshCw, title: "Easy Returns", desc: "No questions asked" },
                            { icon: Truck, title: "Fast Delivery", desc: "Across the country" },
                            { icon: HeartHandshake, title: "Official Brand", desc: "100% Original products" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-4 group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow">
                                    <item.icon size={24} className="text-[#FDD835]" />
                                </div>
                                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Brand Info */}
                    <div className="border-t border-gray-200 pt-10 text-center">
                        <h5 className="font-bold text-xl mb-4">{brand.name}</h5>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
                            We are an official merchandise partner for top creators and brands.
                            All our products are 100% original and crafted with love.
                            Experience the best of fashion with our premium collections.
                        </p>
                        <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                            © {new Date().getFullYear()} {brand.name}. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClothesTheme;
