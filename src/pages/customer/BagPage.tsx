import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trash2, ShoppingBag, ArrowRight, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { PublicLayout } from "@/components/layout/PublicLayout";

export default function BagPage() {
    const navigate = useNavigate();
    const { items, removeFromCart, getCartCount, clearCart } = useCart();
    const cartCount = getCartCount();

    // Calculate total price
    const totalAmount = items.reduce((sum, item) => sum + item.price, 0);
    const platformFee = totalAmount * 0.05; // 5% platform fee example
    const finalTotal = totalAmount + platformFee;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    if (cartCount === 0) {
        return (
            <PublicLayout hideFooter>
                <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center max-w-md w-full bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
                    >
                        <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="w-12 h-12 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your bag is empty</h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">
                            Looks like you haven't added any services yet. Explore our creators to find the perfect service for you.
                        </p>
                        <Button
                            onClick={() => navigate("/discover")}
                            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                        >
                            Explore Services
                        </Button>
                    </motion.div>
                </div>
            </PublicLayout>
        );
    }

    return (
        <PublicLayout hideFooter>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
                <div className="container mx-auto px-4 py-6 max-w-5xl">
                    {/* Header */}
                    <header className="flex items-center gap-4 mb-8">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate(-1)}
                            className="rounded-full hover:bg-white dark:hover:bg-slate-800"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Shopping Bag ({cartCount})</h1>
                    </header>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items List */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex-grow space-y-4"
                        >
                            <AnimatePresence mode="popLayout">
                                {items.map((item) => (
                                    <motion.div
                                        key={`${item.creatorId}-${item.serviceId}`}
                                        variants={itemVariants}
                                        layout
                                        exit={{ scale: 0.9, opacity: 0 }}
                                        className="group relative bg-white dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            {/* Service details */}
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 transition-colors">
                                                            {item.serviceName}
                                                        </h3>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                                                            Delivery in <span className="font-medium text-slate-700 dark:text-slate-300">{item.deliveryDays} days</span>
                                                        </p>
                                                    </div>
                                                    <span className="font-bold text-xl text-slate-900 dark:text-white">
                                                        ₹{item.price.toLocaleString()}
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                                        <span>Protected Payment</span>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.creatorId, item.serviceId)}
                                                        className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Order Summary Sidebar */}
                        <div className="lg:w-96 flex-shrink-0">
                            <div className="sticky top-24 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800"
                                >
                                    <h3 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">Order Summary</h3>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-slate-900 dark:text-slate-200">₹{totalAmount.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                            <span>Platform Fee (5%)</span>
                                            <span className="font-medium text-slate-900 dark:text-slate-200">₹{platformFee.toLocaleString()}</span>
                                        </div>
                                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className="block text-sm text-slate-500 dark:text-slate-400 mb-1">Total Amount</span>
                                                <span className="block text-3xl font-bold text-slate-900 dark:text-white">₹{finalTotal.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => navigate("/order")}
                                        className="w-full h-14 text-base rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-xl shadow-blue-500/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between px-6"
                                    >
                                        <span>Proceed to Order</span>
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </Button>

                                    <div className="mt-6 flex items-center justify-center gap-4 text-slate-400">
                                        <CreditCard className="w-5 h-5" />
                                        <span className="text-xs">Secure SSL Encryption</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
