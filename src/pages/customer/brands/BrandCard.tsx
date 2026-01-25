import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, CheckCircle2, ShoppingBag, ArrowRight, Apple, Laptop, Shirt, Sparkles, Wrench, LucideIcon } from "lucide-react";

// Brand type definition
export interface Brand {
    id: string;
    name: string;
    logo: string;
    coverImage: string;
    rating: number;
    followers: string;
    description: string;
    tags: string[];
    deliveryTime: string;
    verified?: boolean;
    themeCategory: string;
}

// Categories with icons
const BRAND_CATEGORIES: { id: string; name: string; icon: LucideIcon; color: string }[] = [
    { id: 'all', name: 'All', icon: ShoppingBag, color: 'slate' },
    { id: 'grocery', name: 'Grocery', icon: Apple, color: 'green' },
    { id: 'electronics', name: 'Electronics', icon: Laptop, color: 'blue' },
    { id: 'clothes', name: 'Fashion', icon: Shirt, color: 'purple' },
    { id: 'beauty', name: 'Beauty', icon: Sparkles, color: 'pink' },
    { id: 'services', name: 'Services', icon: Wrench, color: 'orange' },
];

// Theme colors for cards
export const THEME_COLORS: Record<string, { bg: string; border: string; badge: string; text: string }> = {
    grocery: { bg: 'from-green-500 to-emerald-600', border: 'border-green-200 dark:border-green-800', badge: 'bg-green-500', text: 'text-green-600' },
    electronics: { bg: 'from-blue-600 to-indigo-700', border: 'border-blue-200 dark:border-blue-800', badge: 'bg-blue-600', text: 'text-blue-600' },
    clothes: { bg: 'from-purple-500 to-pink-600', border: 'border-purple-200 dark:border-purple-800', badge: 'bg-purple-500', text: 'text-purple-600' },
    beauty: { bg: 'from-pink-500 to-rose-600', border: 'border-pink-200 dark:border-pink-800', badge: 'bg-pink-500', text: 'text-pink-600' },
    services: { bg: 'from-orange-500 to-amber-600', border: 'border-orange-200 dark:border-orange-800', badge: 'bg-orange-500', text: 'text-orange-600' },
};

interface BrandCardProps {
    brand: Brand;
    index?: number;
}

export function BrandCard({ brand, index = 0 }: BrandCardProps) {
    const themeColor = THEME_COLORS[brand.themeCategory] || THEME_COLORS.electronics;
    const categoryInfo = BRAND_CATEGORIES.find(c => c.id === brand.themeCategory);
    const CategoryIcon = categoryInfo?.icon || ShoppingBag;

    return (
        <Link to={`/customer/brands/${brand.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border ${themeColor.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}
            >
                {/* Wide Cover Image */}
                <div className="h-36 sm:h-40 w-full overflow-hidden relative">
                    <img
                        src={brand.coverImage}
                        alt={brand.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${themeColor.bg} opacity-30 group-hover:opacity-40 transition-opacity`} />

                    {/* Category Badge - Top Right */}
                    <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full ${themeColor.badge} text-white text-[10px] font-bold shadow-lg`}>
                        <CategoryIcon className="w-3 h-3" />
                        {categoryInfo?.name || 'Store'}
                    </div>

                    {/* Delivery Time - Bottom Right */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium">
                        <Clock className="w-3 h-3 text-yellow-400" />
                        {brand.deliveryTime}
                    </div>
                </div>

                {/* Content Section with Logo on Left */}
                <div className="p-4 flex-1 flex flex-col">
                    {/* Header Row - Logo Left, Info Right */}
                    <div className="flex gap-4 mb-3">
                        {/* Logo - Left Side */}
                        <div className="relative shrink-0 -mt-12">
                            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white dark:bg-slate-800 p-1.5 shadow-xl border-2 ${themeColor.border}`}>
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            {brand.verified && (
                                <div className={`absolute -bottom-1 -right-1 ${themeColor.badge} text-white p-1.5 rounded-full shadow-md ring-2 ring-white dark:ring-slate-900`}>
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                            )}
                        </div>

                        {/* Brand Info - Right of Logo */}
                        <div className="flex-1 min-w-0 pt-1">
                            <h3 className="font-bold text-base text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">
                                {brand.name}
                            </h3>
                            <div className="flex items-center gap-2 text-xs mt-1">
                                <div className="flex items-center gap-0.5 text-yellow-500">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    <span className="font-bold">{brand.rating}</span>
                                </div>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-500 truncate">{brand.followers} followers</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3 flex-1">
                        {brand.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {brand.tags.slice(0, 3).map((tag, idx) => (
                            <span
                                key={idx}
                                className={`text-[10px] px-2 py-0.5 rounded-full ${idx === 0 ? `${themeColor.badge}/10 ${themeColor.text}` : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'} font-medium`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA Row */}
                    <div className={`pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between`}>
                        <span className={`${themeColor.text} font-bold text-sm`}>Visit Store</span>
                        <div className={`p-1.5 rounded-full ${themeColor.badge}/10 group-hover:${themeColor.badge} transition-colors`}>
                            <ArrowRight className={`w-4 h-4 ${themeColor.text} group-hover:text-white group-hover:translate-x-0.5 transition-all`} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export default BrandCard;
