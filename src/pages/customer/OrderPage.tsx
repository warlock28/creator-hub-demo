import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, ShieldCheck, Wallet, CheckCircle2, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/contexts/AuthContext";

export default function OrderPage() {
    const navigate = useNavigate();
    const { items, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("card");
    const { user } = useAuth();

    // Redirect if cart is empty
    useEffect(() => {
        if (items.length === 0) {
            navigate("/discover");
        }
    }, [items, navigate]);

    const totalAmount = items.reduce((sum, item) => sum + item.price, 0);
    const platformFee = totalAmount * 0.05;
    const finalTotal = totalAmount + platformFee;

    const handlePlaceOrder = async () => {
        if (!user) {
            toast.error("Please login to place an order.");
            return;
        }

        setLoading(true);

        try {
            // Simulate Payment Processing delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // --- REAL DATABASE LOGGING START ---

            // 1. Create Orders for each item
            for (const item of items) {
                const { error: orderError } = await supabase
                    .from('orders')
                    .insert({
                        customer_id: user.id,
                        creator_id: item.creatorId,
                        service_id: item.serviceId,
                        amount: item.price,
                        status: 'completed'
                    });

                if (orderError) throw orderError;

                // 2. Record Transaction for Creator
                const { error: transactionError } = await supabase
                    .from('transactions')
                    .insert({
                        creator_id: item.creatorId,
                        amount: item.price,
                        type: 'earning',
                        status: 'completed',
                        description: `Service Purchase: ${item.serviceName}`,
                        customer_name: user.user_metadata?.full_name || 'Customer'
                    });

                if (transactionError) throw transactionError;

                // 3. Update Creator Earnings
                const { data: earningsData, error: fetchEarningsError } = await supabase
                    .from('creator_earnings')
                    .select('*')
                    .eq('creator_id', item.creatorId)
                    .single();

                if (fetchEarningsError && fetchEarningsError.code !== 'PGRST116') {
                    throw fetchEarningsError;
                }

                if (!earningsData) {
                    await supabase.from('creator_earnings').insert({
                        creator_id: item.creatorId,
                        total_earned: item.price,
                        pending_balance: item.price,
                        available_balance: 0
                    });
                } else {
                    await supabase
                        .from('creator_earnings')
                        .update({
                            total_earned: (Number(earningsData.total_earned) || 0) + item.price,
                            pending_balance: (Number(earningsData.pending_balance) || 0) + item.price,
                        })
                        .eq('creator_id', item.creatorId);
                }
            }
            // --- REAL DATABASE LOGGING END ---

            clearCart();
            toast.success("Order placed successfully!", {
                description: "You will receive a confirmation email shortly."
            });
            navigate("/customer/bookings");

        } catch (error) {
            console.error("Order processing error:", error);
            toast.error("Failed to process order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) return null;

    return (
        <PublicLayout hideFooter>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
                <div className="container mx-auto px-4 py-6 max-w-4xl">
                    {/* Header */}
                    <header className="flex items-center gap-4 mb-8">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate("/cart")}
                            className="rounded-full hover:bg-white dark:hover:bg-slate-800"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Secure Checkout</h1>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content - Payment & Billing */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Payment Methods */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
                            >
                                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <Wallet className="w-5 h-5 text-blue-600" />
                                    Payment Method
                                </h2>

                                <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="space-y-4">
                                    {/* Credit Card */}
                                    <div className={`relative flex items-center space-x-4 rounded-xl border-2 p-4 transition-all cursor-pointer ${selectedMethod === 'card' ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200'}`}>
                                        <RadioGroupItem value="card" id="card" />
                                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                                                        <CreditCard className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold block text-slate-900 dark:text-white">Credit / Debit Card</span>
                                                        <span className="text-xs text-slate-500">Visa, Mastercard, Amex</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Label>
                                    </div>

                                    {/* UPI */}
                                    <div className={`relative flex items-center space-x-4 rounded-xl border-2 p-4 transition-all cursor-pointer ${selectedMethod === 'upi' ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200'}`}>
                                        <RadioGroupItem value="upi" id="upi" />
                                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                                                        <span className="font-bold text-xs text-slate-700 dark:text-slate-300">UPI</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold block text-slate-900 dark:text-white">UPI / Netbanking</span>
                                                        <span className="text-xs text-slate-500">Google Pay, PhonePe, Paytm</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Label>
                                    </div>
                                </RadioGroup>

                                {/* Card Details Form (Conditional) */}
                                {selectedMethod === 'card' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="mt-6 space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800"
                                    >
                                        <div className="space-y-2">
                                            <Label>Card Number</Label>
                                            <div className="relative">
                                                <CreditCard className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                <Input className="pl-9" placeholder="0000 0000 0000 0000" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Expiry Date</Label>
                                                <Input placeholder="MM/YY" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>CVC</Label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                    <Input className="pl-9" placeholder="123" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Cardholder Name</Label>
                                            <Input placeholder="Name on card" />
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800"
                                >
                                    <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Order Details</h3>

                                    <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                        {items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between text-sm group">
                                                <span className="text-slate-600 dark:text-slate-400 line-clamp-1 flex-1 pr-4 group-hover:text-blue-600 transition-colors">
                                                    {item.serviceName}
                                                </span>
                                                <span className="font-medium text-slate-900 dark:text-slate-200">
                                                    ₹{item.price.toLocaleString()}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-slate-100 dark:border-slate-800 my-4" />

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-slate-900 dark:text-slate-200">₹{totalAmount.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                            <span>Platform Fee</span>
                                            <span className="font-medium text-slate-900 dark:text-slate-200">₹{platformFee.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-lg font-bold text-slate-900 dark:text-white pt-2 border-t border-slate-100 dark:border-slate-800">
                                            <span>Total</span>
                                            <span>₹{finalTotal.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handlePlaceOrder}
                                        disabled={loading}
                                        className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Pay ₹{finalTotal.toLocaleString()}
                                                <ShieldCheck className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-slate-400 mt-4 px-4 leading-relaxed">
                                        secure payment gateway by Stripe
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
