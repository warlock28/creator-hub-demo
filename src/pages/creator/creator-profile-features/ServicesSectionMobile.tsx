import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    Zap,
    ArrowRight,
    Clock,
    CheckCircle2,
    ShoppingCart,
    Shield,
    ShoppingBag,
    Compass,
} from "lucide-react";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";
import { useCart } from "@/contexts/CartContext";

interface ServicesSectionMobileProps {
    creator: CreatorProfileType;
    selectedService: string | null;
    setSelectedService: (id: string) => void;
}

export function ServicesSectionMobile({ creator, selectedService, setSelectedService }: ServicesSectionMobileProps) {
    const { getCartCount, addToCart, isInCart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const cartCount = getCartCount();

    const handleAddToCart = (service: typeof creator.services[0]) => {
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <div
                        className="h-6 w-6 rounded-lg flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(135deg, #D4AF37 0%, #C19A2E 100%)',
                            boxShadow: '0 3px 10px rgba(212, 175, 55, 0.35)'
                        }}
                    >
                        <Zap className="h-3 w-3 text-white" />
                    </div>
                    <span style={{ color: '#1A1A1A' }}>Services</span>
                </h3>
                <span className="text-[10px] flex items-center gap-1" style={{ color: '#78716C' }}>
                    <ArrowRight className="h-3 w-3" />
                    Scroll for more
                </span>
            </div>

            {/* Services Cards */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
                {creator.services.map((service) => (
                    <div
                        key={service.id}
                        className="flex-shrink-0 w-[270px] sm:w-[290px] snap-center rounded-2xl p-5 relative overflow-hidden hover:shadow-xl transition-all duration-200"
                        style={{
                            background: '#FFFFFF',
                            border: '2px solid #E5E7EB',
                            boxShadow: '0 4px 16px -4px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
                        }}
                    >
                        {/* 3D Edge Highlight */}
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 50%, rgba(0,0,0,0.02) 100%)',
                            }}
                        />

                        <div className="relative z-10">
                            {/* Title */}
                            <div className="flex justify-between items-start gap-2 mb-3">
                                <h3
                                    className="font-bold text-lg leading-snug"
                                    style={{
                                        color: '#1A1A1A',
                                        letterSpacing: '-0.01em'
                                    }}
                                >
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed line-clamp-2 mb-4"
                                style={{ color: '#666666' }}
                            >
                                {service.description}
                            </p>

                            {/* Delivery & Price Card */}
                            <div
                                className="py-3 px-4 rounded-xl mb-4"
                                style={{
                                    background: '#F3F4F6',
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#999999' }}>
                                            Delivery
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5" style={{ color: '#999999' }} />
                                            <span className="text-sm font-bold" style={{ color: '#333333' }}>
                                                {service.deliveryDays} days
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-0.5">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#999999' }}>
                                            Price
                                        </span>
                                        <span className="font-bold text-lg number-display" style={{ color: '#D4AF37' }}>
                                            ₹{service.price.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Button - Always visible on mobile */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleAddToCart(service);
                                }}
                                className="w-full h-10 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
                                style={{
                                    background: isInCart(creator.id, service.id)
                                        ? 'transparent'
                                        : 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
                                    border: isInCart(creator.id, service.id)
                                        ? '2px solid #2E7D32'
                                        : 'none',
                                    color: isInCart(creator.id, service.id)
                                        ? '#2E7D32'
                                        : '#FFFFFF',
                                    boxShadow: isInCart(creator.id, service.id)
                                        ? 'none'
                                        : '0 4px 14px rgba(46, 125, 50, 0.35)'
                                }}
                            >
                                {isInCart(creator.id, service.id) ? (
                                    <>
                                        <CheckCircle2 className="h-4 w-4" />
                                        Remove from Cart
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="h-4 w-4" />
                                        Add to Cart
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Buttons - Mobile/Tablet */}
            <div className="mt-4 flex justify-between gap-3 px-1">
                {/* Bag Button with Count */}
                <button
                    onClick={() => navigate('/cart')}
                    className="flex-1 flex items-center justify-center gap-2 h-10 rounded-xl font-semibold text-xs transition-all duration-150 active:scale-[0.98]"
                    style={{
                        background: 'linear-gradient(135deg, #D4AF37 0%, #C19A2E 100%)',
                        boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)',
                        color: '#FFFFFF'
                    }}
                >
                    <div className="relative">
                        <ShoppingBag className="h-4 w-4" />
                        {cartCount > 0 && (
                            <span
                                className="absolute -top-2 -right-2 h-4 w-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                                style={{
                                    background: '#1A1A1A',
                                    color: '#FFFFFF'
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <span>Bag</span>
                </button>

                {/* Explore Button */}
                <button
                    onClick={() => navigate(`/creator/${creator.id}/services`)}
                    className="flex-1 flex items-center justify-center gap-2 h-10 rounded-xl font-semibold text-xs transition-all duration-150 active:scale-[0.98]"
                    style={{
                        background: 'linear-gradient(135deg, #1A1A1A 0%, #000000 100%)',
                        boxShadow: '0 4px 14px rgba(26, 26, 26, 0.3)',
                        color: '#FFFFFF'
                    }}
                >
                    <Compass className="h-4 w-4" />
                    <span>Explore</span>
                </button>
            </div>
        </motion.div>
    );
}
