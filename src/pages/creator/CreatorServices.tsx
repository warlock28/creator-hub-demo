import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ShoppingBag, CheckCircle2, Star, MapPin } from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";
import { useCreatorProfile } from "@/hooks/useCreatorProfile";
import { ProfileHeader } from "./creator-profile-features/ProfileHeader";

export default function CreatorServices() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart, isInCart, removeFromCart, getCartCount } = useCart();
    const cartCount = getCartCount();

    const { data: creator, isLoading: loading } = useCreatorProfile(id);

    if (loading) {
        return (
            <PublicLayout hideFooter>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900">
                    <div className="container mx-auto px-4 py-6">
                        <Skeleton className="h-9 w-32 mb-6" />
                        <div className="bg-card rounded-3xl p-6 shadow-sm mb-6 border border-border/50 flex flex-col sm:flex-row gap-4">
                            <Skeleton className="h-16 w-16 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-6 w-48" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>

                        <Skeleton className="h-20 w-full mb-8 rounded-xl" />

                        <div className="space-y-8">
                            {[1, 2].map((i) => (
                                <div key={i} className="space-y-3">
                                    <Skeleton className="h-6 w-32" />
                                    <div className="flex gap-4 overflow-hidden">
                                        <Skeleton className="h-72 w-72 rounded-3xl flex-shrink-0" />
                                        <Skeleton className="h-72 w-72 rounded-3xl flex-shrink-0" />
                                        <Skeleton className="h-72 w-72 rounded-3xl flex-shrink-0" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    if (!creator) {
        return (
            <PublicLayout hideFooter>
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Creator not found</h1>
                    <Button onClick={() => navigate("/discover")}>Back to Discover</Button>
                </div>
            </PublicLayout>
        );
    }

    const handleToggleCart = (service: typeof creator.services[0]) => {
        if (isInCart(creator.id, service.id)) {
            removeFromCart(creator.id, service.id);
        } else {
            addToCart({
                creatorId: creator.id,
                serviceId: service.id,
                serviceName: service.title,
                price: service.price,
                deliveryDays: service.deliveryDays,
            });
        }
    };

    return (
        <PublicLayout hideFooter>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900">
                <div className="container mx-auto px-4 py-6">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        onClick={() => navigate(`/creator/${creator.id}`)}
                        className="mb-6 hover:bg-white/50 dark:hover:bg-slate-800/50"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Profile
                    </Button>

                    {/* Profile Header */}
                    <ProfileHeader creator={creator} />

                    {/* Sticky Cart Actions Section */}
                    <div className="sticky top-16 sm:top-20 z-20 mt-6 mb-6">
                        <div className="relative flex items-center justify-between gap-3 p-3 sm:p-4 backdrop-blur-xl rounded-xl border" style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(148, 163, 184, 0.4)',
                            boxShadow: '0 10px 25px -12px rgba(15, 23, 42, 0.15)'
                        }}>
                            <div className="absolute inset-0 hidden dark:block rounded-xl" style={{
                                background: 'rgba(15, 23, 42, 0.95)',
                                border: '1px solid rgba(51, 65, 85, 0.4)'
                            }} />

                            <div className="relative z-10">
                                <h2 className="text-sm sm:text-base font-semibold" style={{ color: '#0F172A' }}>
                                    <span className="dark:hidden">All Services ({creator.services.length})</span>
                                    <span className="hidden dark:inline" style={{ color: '#F1F5F9' }}>All Services ({creator.services.length})</span>
                                </h2>
                            </div>

                            <div className="relative z-10 flex items-center gap-3">
                                {/* Bag Button with Count */}
                                <button
                                    onClick={() => navigate('/cart')}
                                    className="flex items-center gap-1 sm:gap-2 h-8 sm:h-9 px-3 sm:px-5 rounded-full font-medium text-[10px] sm:text-sm transition-all hover:scale-105 active:scale-95"
                                    style={{
                                        background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
                                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    <div className="relative">
                                        <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                                        {cartCount > 0 && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute -top-2 -right-2 h-4 w-4 sm:h-5 sm:w-5 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold"
                                                style={{
                                                    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                                                    color: '#FFFFFF',
                                                    boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)'
                                                }}
                                            >
                                                {cartCount}
                                            </motion.span>
                                        )}
                                    </div>
                                    <span>Bag</span>
                                </button>

                                {/* Proceed Button */}
                                <button
                                    onClick={() => navigate('/cart')}
                                    disabled={cartCount === 0}
                                    className="flex items-center gap-1 sm:gap-2 h-8 sm:h-9 px-3 sm:px-5 rounded-full font-medium text-[10px] sm:text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{
                                        background: cartCount === 0 ? '#94A3B8' : 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
                                        boxShadow: cartCount === 0 ? 'none' : '0 4px 12px rgba(236, 72, 153, 0.25)',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    Proceed
                                    <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 rotate-180" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Services - Horizontal Scrolling Rows */}
                    <div className="space-y-4 pb-12">
                        {/* Split services into rows of 4 */}
                        {Array.from({ length: Math.ceil(creator.services.length / 4) }, (_, rowIndex) => {
                            const rowServices = creator.services.slice(rowIndex * 4, (rowIndex + 1) * 4);

                            return (
                                <div key={rowIndex} className="w-full">

                                    {/* Horizontal Scrolling Container for mobile, Grid for desktop */}
                                    <div className="flex gap-4 overflow-x-auto lg:overflow-visible pb-3 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory lg:snap-none scrollbar-hide lg:flex-wrap lg:justify-start">
                                        {rowServices.map((service, index) => {
                                            const inCart = isInCart(creator.id, service.id);
                                            const globalIndex = rowIndex * 4 + index;

                                            return (
                                                <motion.div
                                                    key={service.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: globalIndex * 0.05, duration: 0.3 }}
                                                    className="flex-shrink-0 w-72 sm:w-80 lg:w-[calc(25%-12px)] snap-center"
                                                >
                                                    <div
                                                        className="group h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:translate-y-[-4px] relative cursor-pointer"
                                                        style={{
                                                            background: '#FFFFFF',
                                                            border: '2px solid #E5E7EB',
                                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 25px 50px -12px rgba(0, 0, 0, 0.04)',
                                                        }}
                                                    >
                                                        {/* Hover Overlay - adds blue theme on hover */}
                                                        <div
                                                            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                            style={{
                                                                border: '2px solid #3B82F6',
                                                                background: 'linear-gradient(145deg, #EFF6FF 0%, #F8FAFC 100%)',
                                                                boxShadow: '0 8px 24px -4px rgba(59, 130, 246, 0.2), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
                                                            }}
                                                        />

                                                        {/* Service Content */}
                                                        <div className="p-4 flex flex-col flex-grow relative z-10">
                                                            {/* Checkmark appears on hover */}
                                                            <div
                                                                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 h-6 w-6 rounded-full flex items-center justify-center transition-opacity duration-200"
                                                                style={{
                                                                    background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                                                                    boxShadow: '0 2px 6px rgba(59, 130, 246, 0.4)'
                                                                }}
                                                            >
                                                                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                                                            </div>

                                                            {inCart && (
                                                                <Badge className="absolute top-2 right-2 bg-green-500 text-white shadow-lg text-[10px] px-2 py-0.5 group-hover:hidden">
                                                                    In Cart
                                                                </Badge>
                                                            )}
                                                            {/* Service Header */}
                                                            <div className="mb-3">
                                                                <h3
                                                                    className="text-base font-bold line-clamp-2"
                                                                    style={{
                                                                        color: '#2563EB',
                                                                    }}
                                                                >
                                                                    {service.title}
                                                                </h3>
                                                            </div>

                                                            {/* Description */}
                                                            <p className="text-xs mb-4 flex-grow line-clamp-3 leading-relaxed" style={{ color: '#6B7280' }}>
                                                                {service.description}
                                                            </p>

                                                            {/* Service Details - Combined Delivery & Price */}
                                                            <div
                                                                className="py-3 px-3 rounded-xl mb-4 relative"
                                                                style={{ background: '#F3F4F6' }}
                                                            >
                                                                {/* Hover effect for delivery/price card */}
                                                                <div
                                                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                                                                    style={{
                                                                        background: 'linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)',
                                                                    }}
                                                                />
                                                                <div className="flex items-center justify-between relative z-10">
                                                                    <div className="flex flex-col gap-0.5">
                                                                        <span className="text-[9px] uppercase tracking-wider font-semibold" style={{ color: '#6B7280' }}>
                                                                            Delivery
                                                                        </span>
                                                                        <div className="flex items-center gap-1">
                                                                            <Clock className="h-3 w-3" style={{ color: '#374151' }} />
                                                                            <span className="text-xs font-bold" style={{ color: '#1C1917' }}>
                                                                                {service.deliveryDays} days
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col items-end gap-0.5">
                                                                        <span className="text-[9px] uppercase tracking-wider font-semibold" style={{ color: '#6B7280' }}>
                                                                            Price
                                                                        </span>
                                                                        <span className="font-bold text-lg number-display" style={{ color: '#1C1917' }}>
                                                                            ₹{service.price.toLocaleString()}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Add to Cart Button */}
                                                            <button
                                                                onClick={() => handleToggleCart(service)}
                                                                className="w-full h-10 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] mt-auto"
                                                                style={{
                                                                    background: inCart
                                                                        ? 'transparent'
                                                                        : 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                                                                    border: inCart
                                                                        ? '2px solid #2563EB'
                                                                        : 'none',
                                                                    color: inCart
                                                                        ? '#2563EB'
                                                                        : '#FFFFFF',
                                                                    boxShadow: inCart
                                                                        ? 'none'
                                                                        : '0 4px 14px rgba(37, 99, 235, 0.3)'
                                                                }}
                                                            >
                                                                {inCart ? (
                                                                    <>
                                                                        <CheckCircle2 className="h-4 w-4" />
                                                                        Remove from Cart
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <ShoppingBag className="h-4 w-4" />
                                                                        Add to Cart
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Empty State */}
                    {creator.services.length === 0 && (
                        <div className="text-center py-20">
                            <GlassCard className="inline-block p-12 max-w-md mx-auto">
                                <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                                    <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">No Services Available</h3>
                                <p className="text-muted-foreground mb-6">
                                    This creator hasn't added any services yet. Check back soon!
                                </p>
                                <Button onClick={() => navigate(`/creator/${creator.id}`)}>
                                    View Profile
                                </Button>
                            </GlassCard>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
