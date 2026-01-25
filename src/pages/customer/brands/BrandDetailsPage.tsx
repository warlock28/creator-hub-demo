import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Clock, CheckCircle2, Search, Share2, Heart, Users, Package, TrendingUp, Check, UserPlus, UserCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { StarRating } from "@/components/ui/StarRating";
import { MOCK_BRANDS, Product, Brand } from "@/data/mockBrands";
import { GROCERY_BRANDS } from "@/data/groceryBrands";
import { ELECTRONICS_BRANDS } from "@/data/electronicsBrands";
import { CLOTHES_BRANDS } from "@/data/clothesBrands";
import { BEAUTY_BRANDS } from "@/data/beautyBrands";
import { SERVICES_BRANDS } from "@/data/servicesBrands";
import { useCart } from "@/contexts/CartContext";
import { useFollow } from "@/hooks/useFollow";
import { formatFollowerCount } from "@/utils/formatters";
import { toast } from "sonner";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
    GroceryTheme,
    ElectronicsTheme,
    ClothesTheme,
    BeautyTheme,
    ServicesTheme,
    getThemeByCategory
} from "@/components/brand-theme";

// Combine all brands with category info
interface ExtendedBrand extends Brand {
    themeCategory: string;
}

const ALL_BRANDS: ExtendedBrand[] = [
    ...MOCK_BRANDS.map(b => ({ ...b, themeCategory: 'general' })),
    ...GROCERY_BRANDS.map(b => ({ ...b, themeCategory: 'grocery' })),
    ...ELECTRONICS_BRANDS.map(b => ({ ...b, themeCategory: 'electronics' })),
    ...CLOTHES_BRANDS.map(b => ({ ...b, themeCategory: 'clothes' })),
    ...BEAUTY_BRANDS.map(b => ({ ...b, themeCategory: 'beauty' })),
    ...SERVICES_BRANDS.map(b => ({ ...b, themeCategory: 'services' })),
];

export default function BrandDetailsPage() {
    const { brandId } = useParams();
    const navigate = useNavigate();
    const { addToCart, items: cartItems, isInCart, removeFromCart } = useCart();
    const [activeTab, setActiveTab] = useState("all");
    const [isLiked, setIsLiked] = useState(false);

    // Find brand from ALL_BRANDS (includes all categories)
    const brand = ALL_BRANDS.find(b => b.id === brandId);

    // Initialize follow functionality
    const { isFollowing, followerCount, toggleFollow } = useFollow(
        brand?.id || '',
        brand?.followers ? parseInt(brand.followers.replace(/[^\d]/g, '')) : 0
    );

    if (!brand) {
        return (
            <PublicLayout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <h2 className="text-2xl font-bold mb-2">Brand not found</h2>
                    <Button onClick={() => navigate("/customer/brands")}>Back to Brands</Button>
                </div>
            </PublicLayout>
        );
    }

    // Handler functions for themed components
    const handleThemedAddToCart = (product: Product) => {
        if (isInCart(brand.id, product.id)) {
            removeFromCart(brand.id, product.id);
            toast.success(`${product.name} removed from bag`);
        } else {
            addToCart({
                serviceId: product.id,
                serviceName: product.name,
                creatorId: brand.id,
                price: product.price,
                deliveryDays: 3
            });
            toast.success(`${product.name} added to bag`);
        }
    };

    const handleThemedProductClick = (product: Product) => {
        navigate(`/customer/brands/${brand.id}/product/${product.id}`);
    };

    const checkIsInCart = (productId: string) => {
        return isInCart(brand.id, productId);
    };

    // Render themed component if brand has a special theme category
    const renderThemedContent = () => {
        const themeProps = {
            brand,
            products: brand.products,
            onAddToCart: handleThemedAddToCart,
            onProductClick: handleThemedProductClick,
            isInCart: checkIsInCart
        };

        switch (brand.themeCategory) {
            case 'grocery':
                return <GroceryTheme {...themeProps} />;
            case 'electronics':
                return <ElectronicsTheme {...themeProps} />;
            case 'clothes':
                return <ClothesTheme {...themeProps} />;
            case 'beauty':
                return <BeautyTheme {...themeProps} />;
            case 'services':
                return <ServicesTheme {...themeProps} />;
            default:
                return null; // Will render default layout
        }
    };

    // If brand has a themed category, render themed component
    if (brand.themeCategory && brand.themeCategory !== 'general') {
        const themedContent = renderThemedContent();
        if (themedContent) {
            return themedContent;
        }
    }

    // Group products by category
    const categories = ["all", ...new Set(brand.products.map(p => p.category.toLowerCase()))];
    const filteredProducts = activeTab === "all"
        ? brand.products
        : brand.products.filter(p => p.category.toLowerCase() === activeTab);

    const handleAddToCart = (product: Product) => {
        addToCart({
            serviceId: product.id,
            serviceName: product.name,
            creatorId: brand.id,
            price: product.price,
            deliveryDays: 3 // Default delivery time for products
        });
        toast.success(`${product.name} added to bag`);
    };

    return (
        <PublicLayout hideFooter>
            <div className="min-h-screen bg-white dark:bg-slate-950 pb-24">

                {/* Enhanced Sticky Header */}
                <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => navigate("/customer/brands")}
                                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="w-9 h-9 rounded-xl border-2 border-slate-200 dark:border-slate-700 object-cover"
                                    />
                                    {brand.verified && (
                                        <div className="absolute -bottom-0.5 -right-0.5 bg-blue-500 text-white p-0.5 rounded-full ring-2 ring-white dark:ring-slate-950">
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                    )}
                                </div>
                                <div className="hidden md:block">
                                    <h1 className="font-bold text-base text-slate-900 dark:text-white leading-tight">
                                        {brand.name}
                                    </h1>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <StarRating rating={brand.rating} size="sm" />
                                        <span className="font-medium">{brand.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <Search className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                    setIsLiked(!isLiked);
                                    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites');
                                }}
                                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <Heart className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <Share2 className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Professional Brand Hero Section */}
                <div className="relative w-full overflow-hidden">
                    {/* Cover Image with Gradient Overlay */}
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                        <img
                            src={brand.coverImage}
                            className="w-full h-full object-cover"
                            alt={`${brand.name} cover`}
                        />
                        {/* Strong gradient overlay for text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

                        {/* Brand Info Overlay - On Cover Image with Text Shadow */}
                        <div className="absolute inset-0 flex items-end">
                            <div className="container mx-auto px-4 pb-6">
                                <div className="flex flex-col md:flex-row md:items-end gap-5">

                                    {/* Brand Logo */}
                                    <div className="relative flex-shrink-0">
                                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white p-1.5 shadow-2xl">
                                            <img
                                                src={brand.logo}
                                                className="w-full h-full object-cover rounded-xl"
                                                alt={brand.name}
                                            />
                                        </div>
                                        {brand.verified && (
                                            <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1.5 rounded-full ring-2 ring-white shadow-lg">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Brand Details - With Text Shadow for visibility */}
                                    <div className="flex-1">
                                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                                            <div className="space-y-2">
                                                <h1
                                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                                                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}
                                                >
                                                    {brand.name}
                                                </h1>
                                                <p
                                                    className="text-base md:text-lg text-white/90 max-w-xl font-medium"
                                                    style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
                                                >
                                                    Premium quality products delivered with excellence
                                                </p>
                                            </div>

                                            {/* Follow Button */}
                                            <motion.div
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-shrink-0"
                                            >
                                                <Button
                                                    onClick={toggleFollow}
                                                    size="lg"
                                                    className={`rounded-full font-bold px-8 shadow-lg transition-all duration-300 ${isFollowing
                                                        ? 'bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm'
                                                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
                                                        }`}
                                                >
                                                    {isFollowing ? (
                                                        <>
                                                            <UserCheck className="w-5 h-5 mr-2" />
                                                            Following
                                                        </>
                                                    ) : (
                                                        <>
                                                            <UserPlus className="w-5 h-5 mr-2" />
                                                            Follow
                                                        </>
                                                    )}
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row - Below Cover Image on Clean Background */}
                    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
                                {/* Rating */}
                                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <StarRating rating={brand.rating} size="sm" />
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        {brand.rating}
                                    </span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                        (2.5K reviews)
                                    </span>
                                </div>

                                {/* Followers */}
                                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <Users className="w-4 h-4 text-blue-500" />
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        {formatFollowerCount(followerCount)}
                                    </span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                        followers
                                    </span>
                                </div>

                                {/* Products */}
                                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <Package className="w-4 h-4 text-purple-500" />
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        {brand.products.length}
                                    </span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                        products
                                    </span>
                                </div>

                                {/* Delivery Time */}
                                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <Clock className="w-4 h-4 text-green-500" />
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {brand.deliveryTime}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Left Sidebar (Categories) - Desktop */}
                        <div className="hidden lg:block w-64 space-y-4 sticky top-24 h-fit">
                            <h3 className="font-bold text-lg px-2">Categories</h3>
                            <div className="flex flex-col gap-1">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveTab(cat)}
                                        className={`text-left px-4 py-3 rounded-xl transition-colors capitalize font-medium flex justify-between items-center ${activeTab === cat
                                            ? 'bg-slate-100 dark:bg-slate-800 text-primary'
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                                            }`}
                                    >
                                        {cat}
                                        {activeTab === cat && <div className="w-2 h-2 rounded-full bg-primary" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">

                            {/* Mobile Category Tabs */}
                            <div className="lg:hidden mb-6 sticky top-[65px] z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur py-2 -mx-4 px-4 border-b border-slate-100 dark:border-slate-800">
                                <ScrollArea className="w-full whitespace-nowrap">
                                    <div className="flex gap-2 pb-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveTab(cat)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium capitalize border transition-all ${activeTab === cat
                                                    ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900'
                                                    : 'bg-white text-slate-600 border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => {
                                    const inCart = isInCart(brand.id, product.id);
                                    return (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            key={product.id}
                                            className="group bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-slate-300/30 dark:hover:shadow-black/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
                                        >
                                            <div
                                                className="h-48 rounded-2xl overflow-hidden mb-4 relative bg-slate-100 dark:bg-slate-800 cursor-pointer"
                                                onClick={() => navigate(`/customer/brands/${brand.id}/product/${product.id}`)}
                                            >
                                                <img
                                                    src={product.image}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    alt={product.name}
                                                />
                                                <button
                                                    className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-full text-slate-500 hover:text-red-500 hover:scale-110 transition-all shadow-lg z-10"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        // Handle wishlist logic here
                                                    }}
                                                >
                                                    <Heart className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mb-1">
                                                            {brand.name}
                                                        </p>
                                                        <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {product.name}
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs font-bold bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg border border-yellow-200 dark:border-yellow-700/30">
                                                        <Star className="w-3 h-3 fill-current" />
                                                        {product.rating}
                                                    </div>
                                                </div>

                                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 min-h-[2.5em]">
                                                    {product.description}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs text-slate-400 line-through">
                                                            ₹{(product.price * 1.2).toFixed(0)}
                                                        </span>
                                                        <span className="text-xl font-bold text-slate-900 dark:text-white">
                                                            ₹{product.price.toLocaleString()}
                                                        </span>
                                                    </div>
                                                    <motion.div whileTap={{ scale: 0.95 }}>
                                                        <Button
                                                            size="sm"
                                                            onClick={() => {
                                                                if (inCart) {
                                                                    removeFromCart(brand.id, product.id);
                                                                    toast.success(`${product.name} removed from bag`);
                                                                } else {
                                                                    handleAddToCart(product);
                                                                }
                                                            }}
                                                            className={`rounded-xl px-6 font-bold shadow-lg transition-all duration-300 ${inCart
                                                                ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/30'
                                                                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105'
                                                                }`}
                                                        >
                                                            {inCart ? (
                                                                <>
                                                                    <X className="w-4 h-4 mr-1.5" />
                                                                    Remove
                                                                </>
                                                            ) : (
                                                                'Add to Bag'
                                                            )}
                                                        </Button>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Cart Button (Mobile) */}
                {cartItems.length > 0 && (
                    <div className="fixed bottom-6 left-0 right-0 px-4 z-50 lg:hidden">
                        <Button
                            className="w-full h-14 rounded-2xl bg-primary text-white shadow-xl shadow-primary/25 flex items-center justify-between px-6 text-lg"
                            onClick={() => navigate('/cart')}
                        >
                            <div className="flex items-center gap-2">
                                <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-bold">{cartItems.length} ITEMS</span>
                                <span className="font-bold">₹{cartItems.reduce((a, b) => a + b.price, 0).toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2 font-bold text-sm">
                                View Cart <ArrowRight className="w-5 h-5" />
                            </div>
                        </Button>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
