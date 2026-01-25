import { motion } from 'framer-motion';
import {
    Instagram,
    Youtube,
    Camera,
    Users,
    MessageSquare,
    Star,
    ArrowRight,
    Sparkles,
    TrendingUp,
    Heart
} from 'lucide-react';

// Platform services for AdPromoo
const services = [
    {
        id: 'influencer-marketing',
        title: "Influencer Marketing",
        description: "Connect with verified creators for authentic brand campaigns across Instagram, YouTube, and more.",
        icon: TrendingUp,
        color: 'violet',
        stats: '500+ Campaigns',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format'
    },
    {
        id: 'content-creation',
        title: "Content Creation",
        description: "Professional photos, videos, and reels crafted by talented creators for your brand.",
        icon: Camera,
        color: 'pink',
        stats: '10K+ Contents',
        image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop&auto=format'
    },
    {
        id: 'ugc-campaigns',
        title: "UGC Campaigns",
        description: "User-generated content that builds trust and drives engagement with real audiences.",
        icon: Users,
        color: 'purple',
        stats: '2M+ Reach',
        image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop&auto=format'
    },
    {
        id: 'brand-collabs',
        title: "Brand Collaborations",
        description: "Long-term partnerships with creators who truly understand and represent your brand values.",
        icon: Heart,
        color: 'rose',
        stats: '200+ Brands',
        image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=300&fit=crop&auto=format'
    },
    {
        id: 'product-reviews',
        title: "Product Reviews",
        description: "Honest, detailed reviews from trusted creators that convert viewers into customers.",
        icon: Star,
        color: 'amber',
        stats: '5K+ Reviews',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&auto=format'
    },
    {
        id: 'social-takeovers',
        title: "Social Takeovers",
        description: "Let creators take over your social channels for fresh perspectives and new audiences.",
        icon: MessageSquare,
        color: 'cyan',
        stats: '50+ Takeovers',
        image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop&auto=format'
    }
];

// Get gradient classes based on color
function getGradient(color: string) {
    const gradients: Record<string, string> = {
        violet: 'from-violet-500 to-purple-600',
        pink: 'from-pink-500 to-rose-600',
        purple: 'from-purple-500 to-indigo-600',
        rose: 'from-rose-500 to-pink-600',
        amber: 'from-amber-500 to-orange-600',
        cyan: 'from-cyan-500 to-blue-600',
    };
    return gradients[color] || gradients.violet;
}

function getBgLight(color: string) {
    const bgs: Record<string, string> = {
        violet: 'bg-violet-100',
        pink: 'bg-pink-100',
        purple: 'bg-purple-100',
        rose: 'bg-rose-100',
        amber: 'bg-amber-100',
        cyan: 'bg-cyan-100',
    };
    return bgs[color] || bgs.violet;
}

function getTextColor(color: string) {
    const texts: Record<string, string> = {
        violet: 'text-violet-600',
        pink: 'text-pink-600',
        purple: 'text-purple-600',
        rose: 'text-rose-600',
        amber: 'text-amber-600',
        cyan: 'text-cyan-600',
    };
    return texts[color] || texts.violet;
}

// Service Card Component
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer"
        >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${getGradient(service.color)} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`h-6 w-6 ${getTextColor(service.color)}`} />
                </div>

                {/* Stats badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                    {service.stats}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-violet-700 transition-colors">
                    {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getBgLight(service.color)} ${getTextColor(service.color)}`}>
                        Learn More
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getGradient(service.color)} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                        <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                </div>
            </div>

            {/* Hover border glow */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-violet-300 transition-all duration-300 pointer-events-none`} />
        </motion.div>
    );
}

export function Services() {
    return (
        <section id="services" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">

            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-violet-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-pink-200/40 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/30">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <div className="relative">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-violet-600">Services</span>
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-transparent to-pink-500" />
                            <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-violet-500" />
                            <div className="h-1 w-12 rounded-full bg-gradient-to-l from-transparent to-violet-500" />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Everything you need to run successful creator campaigns, from discovery to delivery
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="/for-customers"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/how-it-works"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-violet-300 text-violet-700 font-semibold rounded-full hover:bg-violet-50 transition-all duration-300"
                        >
                            How It Works
                        </a>
                    </div>

                    <p className="text-sm text-gray-500 mt-6 max-w-lg mx-auto">
                        Join 500+ brands already using AdPromoo to run successful influencer campaigns
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Services;
