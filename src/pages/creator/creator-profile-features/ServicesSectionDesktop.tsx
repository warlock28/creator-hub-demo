import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    Zap,
    Clock,
    CheckCircle2,
    ShoppingCart,
    Shield,
    ShoppingBag,
    Compass,
} from "lucide-react";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";
import { useCart } from "@/contexts/CartContext";

interface ServicesSectionDesktopProps {
    creator: CreatorProfileType;
    selectedService: string | null;
    setSelectedService: (id: string) => void;
}

export function ServicesSectionDesktop({ creator, selectedService, setSelectedService }: ServicesSectionDesktopProps) {
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
                serviceName: service.title || service.name,
                price: service.price,
                deliveryDays: service.deliveryDays,
            });
        }
    };

    return (
        <div className="hidden lg:block lg:col-span-4">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="rounded-3xl border sticky top-24 overflow-hidden flex flex-col max-h-[calc(100vh-120px)]"
                style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF9 100%)',
                    borderColor: '#E7E5E4',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.06)'
                }}
            >
                {/* Header */}
                <div
                    className="relative z-10 p-5 border-b flex-shrink-0"
                    style={{
                        background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%)',
                        borderColor: '#F5E6D3'
                    }}
                >
                    <h2 className="font-display text-sm font-bold flex items-center gap-3">
                        <div
                            className="h-8 w-8 rounded-xl flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #C19A2E 100%)',
                                boxShadow: '0 4px 12px rgba(212, 175, 55, 0.35)'
                            }}
                        >
                            <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span style={{ color: '#1A1A1A', letterSpacing: '0.02em' }}>
                            Select a Package
                        </span>
                    </h2>
                </div>

                {/* Services List */}
                <div className="relative z-10 p-4 space-y-3 overflow-y-auto flex-1 services-scroll">
                    {creator.services.map((service) => (
                        <div
                            key={service.id}
                            className="group cursor-pointer rounded-2xl p-5 transition-all duration-200 relative overflow-hidden hover:translate-y-[-2px] hover:shadow-xl"
                            style={{
                                border: '2px solid #E5E7EB',
                                background: '#FFFFFF',
                                boxShadow: '0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 4px 16px -4px rgba(0, 0, 0, 0.04)',
                            }}
                        >
                            {/* Hover Overlay - adds accent theme on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                style={{
                                    border: '2px solid #D4AF37',
                                    background: 'linear-gradient(145deg, #FFFBF0 0%, #FFF8E7 100%)',
                                    boxShadow: '0 8px 24px -4px rgba(212, 175, 55, 0.2), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
                                }}
                            />

                            {/* 3D Edge Highlight */}
                            <div
                                className="absolute inset-0 rounded-2xl pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.02) 100%)',
                                }}
                            />

                            <div className="relative z-10">
                                {/* Service Title */}
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <h3
                                        className="font-bold text-lg leading-snug transition-colors duration-200"
                                        style={{
                                            color: '#1A1A1A',
                                            letterSpacing: '-0.01em'
                                        }}
                                    >
                                        {service.title || service.name}
                                    </h3>
                                    {/* Checkmark appears on hover */}
                                    <div
                                        className="opacity-0 group-hover:opacity-100 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity duration-200"
                                        style={{
                                            background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
                                            boxShadow: '0 2px 6px rgba(46, 125, 50, 0.4)'
                                        }}
                                    >
                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                    </div>
                                </div>

                                {/* Description */}
                                <p
                                    className="text-sm leading-relaxed line-clamp-2 mb-4 transition-colors duration-200"
                                    style={{
                                        color: '#666666'
                                    }}
                                >
                                    {service.description}
                                </p>

                                {/* Delivery & Price Card */}
                                <div
                                    className="relative flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-150"
                                    style={{
                                        background: '#F5F5F4',
                                        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.04)'
                                    }}
                                >
                                    {/* Hover effect for delivery/price card */}
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(135deg, #FFFBF0 0%, #FFF4E0 100%)',
                                        }}
                                    />

                                    <div className="flex flex-col gap-0.5 relative z-10">
                                        <span
                                            className="text-[9px] uppercase tracking-wider font-semibold"
                                            style={{ color: '#999999' }}
                                        >
                                            Delivery
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" style={{ color: '#999999' }} />
                                            <span
                                                className="text-xs font-bold"
                                                style={{ color: '#333333' }}
                                            >
                                                {service.deliveryDays} days
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-0.5 relative z-10">
                                        <span
                                            className="text-[9px] uppercase tracking-wider font-semibold"
                                            style={{ color: '#999999' }}
                                        >
                                            Price
                                        </span>
                                        <span
                                            className="font-bold text-lg number-display"
                                            style={{ color: '#D4AF37' }}
                                        >
                                            ₹{service.price.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Button - Always visible */}
                            <div className="relative z-10 mt-4">
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

                {/* Footer Buttons */}
                <div
                    className="relative z-10 p-4 border-t flex-shrink-0 grid grid-cols-2 gap-3"
                    style={{
                        borderColor: '#E7E5E4',
                        background: 'linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 100%)'
                    }}
                >
                    {/* Bag Button with Count */}
                    <button
                        onClick={() => navigate('/cart')}
                        className="relative z-10 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98]"
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
                                    className="absolute -top-2 -right-2 h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                                    style={{
                                        background: '#1A1A1A',
                                        color: '#FFFFFF',
                                        boxShadow: '0 2px 6px rgba(26, 26, 26, 0.3)'
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
                        className="relative z-10 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98]"
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
        </div>
    );
}
