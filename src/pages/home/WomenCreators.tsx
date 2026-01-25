import { motion } from "framer-motion";
import { Shield, Lock, MessageCircleOff, Wallet, BadgeCheck, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const safetyFeatures = [
    {
        icon: Lock,
        title: "Private Communication",
        description: "No personal phone numbers or social handles shared. All conversations happen securely inside the platform.",
        color: "from-violet-500 to-purple-600",
    },
    {
        icon: Shield,
        title: "Verified Brands Only",
        description: "Every brand is verified before they can connect with you. We filter out scammers and fake accounts.",
        color: "from-pink-500 to-rose-600",
    },
    {
        icon: Wallet,
        title: "Secure Escrow Payments",
        description: "Get paid on time, every time. Our escrow system ensures your payment is protected before work begins.",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: MessageCircleOff,
        title: "Zero Harassment Policy",
        description: "Report any inappropriate behavior instantly. We take immediate action to keep our community safe.",
        color: "from-emerald-500 to-teal-600",
    },
];

const stats = [
    { value: "65%", label: "Women Creators" },
    { value: "100%", label: "Safe Transactions" },
    { value: "24/7", label: "Support Available" },
    { value: "Zero", label: "Tolerance for Harassment" },
];

export function WomenCreatorsSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50/50 via-white to-violet-50/30 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-100/20 to-transparent rounded-full" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            top: `${15 + i * 20}%`,
                            left: `${5 + i * 25}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Heart className={`w-4 h-4 ${i % 2 === 0 ? 'text-pink-300' : 'text-violet-300'} opacity-40`} />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        A <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-violet-600">Safe Space</span> for Women Influencers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We understand the unique challenges women creators face. That's why we've built a platform where you can focus on what you love — creating amazing content.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
                    {/* Left: Image Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20">
                            {/* Main Image */}
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=face"
                                alt="Confident woman creator"
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex -space-x-3">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                                            +5K
                                        </div>
                                    </div>
                                </div>
                                <p className="text-white font-semibold text-lg">Join 5,000+ women creators</p>
                                <p className="text-white/80 text-sm">Building their dreams safely on AdPromoo</p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right: Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-5"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                Your Safety is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">Priority</span>
                            </h3>
                            <p className="text-gray-600">
                                We've built multiple layers of protection so you can collaborate with brands confidently.
                            </p>
                        </div>

                        {safetyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-pink-200 transition-all duration-300"
                            >
                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-pink-100 text-center hover:shadow-xl hover:border-pink-200 transition-all cursor-default"
                        >
                            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}

            </div>
        </section>
    );
}
