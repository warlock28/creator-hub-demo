import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Shield,
    Lock,
    CheckCircle2,
    RefreshCcw,
    Zap,
    Users,
    Target,
    TrendingUp,
    Eye,
    FileText,
    Clock,
    Building2,
    Rocket,
    ShoppingBag,
    Smartphone,
    Briefcase,
    Heart,
    Award,
    BarChart3,
    MessageCircle,
    X,
    Check,
    Sparkles,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Payment Protection Points
const paymentProtectionPoints = [
    "Payment is mandatory to confirm any service (Independent or Dependent)",
    "Your money is never transferred directly to the creator",
    "Payment is held securely by the platform during the entire work timeline",
];

const paymentReleaseConditions = [
    "Work is delivered as agreed",
    "You confirm satisfaction",
    "Or the agreed timeline ends without any complaint",
];

const refundGuarantees = [
    { text: "Work is paused immediately", icon: Clock },
    { text: "Platform reviews the issue", icon: Eye },
    { text: "100% refund processed within 24 hours", icon: RefreshCcw },
    { text: "No delays", icon: Zap },
    { text: "No negotiation pressure", icon: MessageCircle },
    { text: "No money loss", icon: Shield },
];

// Independent Services
const independentBenefits = [
    "Full control over creator selection",
    "Clear pricing & expectations",
    "Direct communication with creators",
    "100% refund protection",
    "Faster execution without agencies",
];

const independentBestFor = [
    "Small businesses",
    "Startups",
    "Local brands",
    "One-time or short campaigns",
];

// Dependent Services
const dependentServices = [
    "Understanding your business model",
    "Studying your product or service",
    "Analyzing your brand stage and growth goals",
    "Selecting the right creators, not random ones",
    "Choosing the right platforms (Instagram, Facebook, YouTube)",
    "Targeting the right audience, not just views",
    "Planning content formats, timelines, and campaigns",
    "Monitoring performance during execution",
    "Providing post-campaign analysis and insights",
];

const dependentBenefits = [
    "No need to manage creators",
    "No need to understand influencer marketing deeply",
    "Professionally planned campaigns",
    "Better content quality & consistency",
    "Higher trust and brand positioning",
];

const dependentBestFor = [
    "Growing businesses",
    "Performance-focused brands",
    "Businesses with limited time or expertise",
    "High-impact marketing goals",
];

// Results
const expectedResults = [
    { metric: "Higher brand visibility", icon: Eye },
    { metric: "Better audience trust", icon: Heart },
    { metric: "Stronger online reputation", icon: Award },
    { metric: "Up to 3× improvement in engagement", icon: TrendingUp },
];

// Transparency Features
const transparencyFeatures = [
    { title: "Track booking and campaign status", description: "Real-time updates on every step", icon: Eye },
    { title: "See creator responses and approvals", description: "Full visibility into communications", icon: MessageCircle },
    { title: "Monitor execution timelines", description: "Never miss a deadline", icon: Clock },
    { title: "Access reports, invoices, and records", description: "Anytime, anywhere", icon: FileText },
];

// Agency Comparison
const agencyComparison = [
    { agency: "Take high commissions", platform: "We don't" },
    { agency: "Push their creators", platform: "We choose what fits you" },
    { agency: "Demand advance payments", platform: "We protect your money" },
    { agency: "Lock contracts", platform: "We give flexibility" },
    { agency: "Are slow", platform: "We move fast" },
];

// Ideal Customers
const idealCustomers = [
    { title: "Local Businesses", icon: Building2, description: "Grow your local presence" },
    { title: "Startups & Founders", icon: Rocket, description: "Launch with impact" },
    { title: "E-commerce Brands", icon: ShoppingBag, description: "Drive online sales" },
    { title: "Service Providers", icon: Briefcase, description: "Build trust & credibility" },
    { title: "App & Product Launches", icon: Smartphone, description: "Create buzz & downloads" },
    { title: "Safe Growth Seekers", icon: Shield, description: "No experiments, just results" },
];

export default function ForCustomers() {
    return (
        <PublicLayout>
            <div className="pt-20 pb-20 overflow-hidden">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50" />
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1920&h=1080&fit=crop"
                            alt="Marketing team collaboration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <Badge className="bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0 px-4 py-2 text-sm font-medium">
                                    🛡️ Zero Financial Risk for Customers
                                </Badge>

                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Your money is <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">safe</span>.
                                    <br />Your campaign is <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">managed</span>.
                                    <br />Your brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">grows</span>.
                                </h1>

                                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                    Choose how much control you want. Pay securely without risk. Launch campaigns with confidence.
                                    Grow sales, trust, and reputation — faster.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/join">
                                        <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-xl shadow-violet-500/30 px-8 py-6 text-lg">
                                            Get Started Free
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link to="/how-it-works">
                                        <Button size="lg" variant="outline" className="border-2 border-violet-200 hover:bg-violet-50 px-8 py-6 text-lg">
                                            See How It Works
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                                        alt="Business growth"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <p className="text-2xl font-bold">Trusted by 500+ businesses</p>
                                        <p className="text-white/80">Growing with confidence every day</p>
                                    </div>
                                </div>

                                {/* Floating Stats Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                            <Shield className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">100%</p>
                                            <p className="text-sm text-gray-500">Money Protected</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center">
                                            <TrendingUp className="h-6 w-6 text-violet-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">3x</p>
                                            <p className="text-sm text-gray-500">Avg. Engagement</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Payment Protection Section */}
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                                🔹 Payment Protection & Money Safety
                            </Badge>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Your money is always <span className="text-green-600">protected</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We hold your payment securely until you're completely satisfied with the work delivered.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-16">
                            {/* How Payment Works */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                                    <Lock className="h-7 w-7 text-violet-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">How Payment Works</h3>
                                <ul className="space-y-3">
                                    {paymentProtectionPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Creator Gets Paid When */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Creator Receives Payment Only After</h3>
                                <ul className="space-y-3">
                                    {paymentReleaseConditions.map((condition, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{condition}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* If Something Goes Wrong */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-lg border border-red-100"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                                    <RefreshCcw className="h-7 w-7 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">🔁 If Something Goes Wrong</h3>
                                <p className="text-gray-600 mb-4">If you raise a valid issue within the timeline:</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {refundGuarantees.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <item.icon className="h-4 w-4 text-red-500 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Zero Risk Banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-center text-white shadow-xl"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                👉 Zero Financial Risk for Customers
                            </h3>
                            <p className="text-green-100 text-lg">
                                Your payment is 100% protected. No exceptions.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Two Service Models Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">
                                🔹 Two Service Models
                            </Badge>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Choose Your Level of Control
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Whether you want full control or want us to handle everything — we've got you covered.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Independent Services */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-violet-200 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-purple-100 rounded-bl-full opacity-50" />

                                <Badge className="bg-violet-600 text-white border-0 mb-4">1️⃣ Independent Services</Badge>
                                <h3 className="text-2xl font-bold mb-2">You Choose. We Protect.</h3>
                                <p className="text-gray-500 mb-6 italic">(You choose the creator. We protect your money.)</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {independentBestFor.map((item, index) => (
                                            <span key={index} className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">How It Works:</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-violet-500 font-bold">1.</span>
                                            Post your requirement or browse creators
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-violet-500 font-bold">2.</span>
                                            Choose creators based on budget, location, platform, content type
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-violet-500 font-bold">3.</span>
                                            Pay the full amount to the platform
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-violet-500 font-bold">4.</span>
                                            Creator starts work only after payment confirmation
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-violet-500 font-bold">5.</span>
                                            Money is released only when you're satisfied
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Customer Benefits:</h4>
                                    <ul className="space-y-2">
                                        {independentBenefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-600">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=300&fit=crop"
                                    alt="Business owner selecting creators"
                                    className="w-full h-40 object-cover rounded-2xl"
                                />
                            </motion.div>

                            {/* Dependent Services */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-8 shadow-xl text-white overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />

                                <Badge className="bg-white/20 text-white border-white/30 mb-4">2️⃣ Dependent Services</Badge>
                                <h3 className="text-2xl font-bold mb-2">You Relax. We Handle Everything.</h3>
                                <p className="text-violet-200 mb-6 italic">(You relax. We do everything for you.)</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">Best For:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {dependentBestFor.map((item, index) => (
                                            <span key={index} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">What We Do For You:</h4>
                                    <p className="text-violet-200 text-sm mb-3">The platform becomes your marketing partner. We take responsibility for:</p>
                                    <ul className="grid grid-cols-1 gap-2 text-sm max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                        {dependentServices.map((service, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-violet-100">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">Customer Benefits:</h4>
                                    <ul className="space-y-2">
                                        {dependentBenefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                                <span className="text-violet-100">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop"
                                    alt="Marketing team planning campaign"
                                    className="w-full h-40 object-cover rounded-2xl opacity-90"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop"
                            alt="Growth analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                                🔹 Results You Can Expect
                            </Badge>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Real Growth. Measurable Impact.
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                With the right creators, proper planning, and consistent execution, customers typically experience:
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {expectedResults.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl hover:-translate-y-1 transition-all"
                                >
                                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <result.icon className="h-8 w-8 text-violet-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{result.metric}</h3>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 text-center text-white shadow-xl"
                        >
                            <p className="text-xl md:text-2xl font-medium">
                                👉 This is not random promotion — it's <span className="font-bold">structured digital growth</span>.
                            </p>
                            <p className="text-violet-200 mt-2 text-sm">
                                (Results vary by business type, budget, and niche)
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Transparency Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200 mb-4">
                                🔹 Transparency & Full Control
                            </Badge>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Everything Documented. Nothing Verbal.
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {transparencyFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-violet-200 transition-colors"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                                        <feature.icon className="h-6 w-6 text-cyan-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Better Than Agencies */}
                <section className="py-20 bg-gradient-to-b from-red-50 to-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">
                                🔹 Why This Platform is Safer Than Agencies
                            </Badge>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Agencies vs AdPromoo
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                        >
                            <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-center">
                                <div></div>
                                <div className="text-red-600">Agencies</div>
                                <div className="text-green-600">AdPromoo</div>
                            </div>
                            {agencyComparison.map((item, index) => (
                                <div key={index} className={`grid grid-cols-3 p-4 items-center text-center ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                                    <div className="text-left font-medium text-gray-700">{item.agency.replace('Agencies ', '').replace('Agency ', '')}</div>
                                    <div className="flex items-center justify-center gap-2 text-red-600">
                                        <X className="h-5 w-5" />
                                        <span className="text-sm">{item.agency}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-green-600">
                                        <Check className="h-5 w-5" />
                                        <span className="text-sm">{item.platform}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Ideal For Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                                🔹 Who This Platform is Ideal For
                            </Badge>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Built for Businesses Like Yours
                            </h2>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {idealCustomers.map((customer, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-violet-200 hover:shadow-xl transition-all group"
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <customer.icon className="h-7 w-7 text-violet-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{customer.title}</h3>
                                    <p className="text-gray-600">{customer.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Promise */}
                <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <Badge className="bg-white/20 text-white border-white/30 mb-6">
                                🔹 Simple Customer Promise
                            </Badge>

                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                                Your money is <span className="text-yellow-300">safe</span>.
                                <br />Your campaign is <span className="text-yellow-300">managed</span>.
                                <br />Your brand grows with <span className="text-yellow-300">confidence</span>.
                            </h2>

                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
                                    <Shield className="h-6 w-6 text-yellow-300" />
                                    <span className="font-medium">100% Money Protection</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
                                    <Users className="h-6 w-6 text-yellow-300" />
                                    <span className="font-medium">Expert Campaign Management</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
                                    <TrendingUp className="h-6 w-6 text-yellow-300" />
                                    <span className="font-medium">Guaranteed Growth</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[40px] p-10 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=600&fit=crop"
                                    alt="Success team"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="relative z-10">
                                <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-6" />

                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                    Ready to Grow Your Brand?
                                </h2>

                                <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10 text-lg text-gray-300">
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                                        Choose how much control you want
                                    </li>
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                                        Pay securely without risk
                                    </li>
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                                        Launch campaigns with confidence
                                    </li>
                                </ul>

                                <p className="text-xl text-gray-300 mb-8">
                                    Grow sales, trust, and reputation — <span className="text-yellow-400 font-semibold">faster</span>
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/join">
                                        <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-xl px-10 py-6 text-lg">
                                            Get Started Free
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link to="/discover">
                                        <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg">
                                            Browse Creators
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
