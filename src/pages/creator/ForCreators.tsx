import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Lock,
  CheckCircle2,
  DollarSign,
  Zap,
  Users,
  TrendingUp,
  Eye,
  Clock,
  Heart,
  Award,
  Gift,
  Star,
  ShieldCheck,
  BadgeCheck,
  MessageCircle,
  X,
  Check,
  Sparkles,
  Camera,
  Video,
  Image,
  Play,
  IndianRupee,
  UserCheck,
  Ban,
  AlertTriangle,
  ShieldAlert,
  Shirt,
  Coffee,
  Package,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Why creators choose platform
const whyChooseUs = [
  { text: "Get 3x more promotion deals and increase your daily income", icon: TrendingUp },
  { text: "Get real brand work without agents or middlemen", icon: Users },
  { text: "Set your own pricing and work on your own terms", icon: DollarSign },
  { text: "Guaranteed payments — no chasing brands", icon: CheckCircle2 },
  { text: "No sharing personal contact details", icon: Lock },
  { text: "No risk of fraud, scams, or phishing", icon: Shield },
  { text: "Focus only on content — platform handles safety & money", icon: Sparkles },
];

// Payment protection points
const paymentProtection = [
  "Brands must pay first to confirm any booking",
  "Brand money is held securely by the platform",
  "You start work only after payment confirmation",
];

const paymentReleaseConditions = [
  "Work is completed",
  "Timeline ends without complaint",
  "No brand can delay or deny payment",
];

// Independent services benefits
const independentBenefits = [
  "Full pricing control",
  "Direct bookings",
  "No negotiation stress",
  "Safe, verified customers",
  "Ideal for steady monthly income",
];

const independentServices = [
  { name: "Reels", icon: Video },
  { name: "Posts", icon: Image },
  { name: "Stories", icon: Camera },
  { name: "YouTube videos", icon: Play },
];

// Dependent services benefits
const dependentBenefits = [
  "Access to bigger budgets",
  "Professional brand exposure",
  "Less coordination work",
  "Ideal for creators who want serious brand growth",
];

const dependentSelection = [
  "Content quality",
  "Audience relevance",
  "Performance history",
];

// Rewards
const monthlyRewards = [
  { name: "Monthly bonuses", icon: IndianRupee },
  { name: "Creator merchandise", icon: Shirt },
  { name: "Special gifts & surprises", icon: Gift },
  { name: "Priority visibility", icon: Star },
];

const merchandise = ["Bags", "T-shirts", "Caps", "Bottles"];

// Privacy points
const privacyProtected = [
  "Phone number",
  "Email",
  "Personal social DMs",
];

const privacyPrevents = [
  { text: "Fraud", icon: AlertTriangle },
  { text: "Phishing", icon: ShieldAlert },
  { text: "Fake brand traps", icon: Ban },
  { text: "Data misuse", icon: Lock },
];

// What you show
const whatYouShow = [
  "Content niche",
  "Platform (Instagram, YouTube, etc.)",
  "Sample work",
  "Pricing",
  "City (optional)",
];

// Agency comparison
const agencyComparison = [
  { agency: "Agencies take high cuts", platform: "We don't" },
  { agency: "Agencies delay payments", platform: "We don't" },
  { agency: "Agencies push unsafe deals", platform: "We don't" },
  { agency: "Agencies ignore creator safety", platform: "We don't" },
];

// Long-term gains
const longTermGains = [
  { text: "Stable income", icon: IndianRupee },
  { text: "Trusted brand collaborations", icon: UserCheck },
  { text: "Better reputation", icon: Award },
  { text: "Verified status support", icon: BadgeCheck },
  { text: "Growth opportunities", icon: TrendingUp },
  { text: "Recognition & rewards", icon: Gift },
];

// Final CTA steps
const ctaSteps = [
  "Create your profile",
  "Set your own prices",
  "Get verified",
  "Start earning safely",
  "Grow with confidence",
];

export default function ForCreators() {
  return (
    <PublicLayout>
      <div className="pt-20 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-violet-50" />
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&h=1080&fit=crop"
              alt="Content creator"
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
                <Badge className="bg-gradient-to-r from-pink-500 to-violet-600 text-white border-0 px-4 py-2 text-sm font-medium">
                  🌟 Built for Indian Creators
                </Badge>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  You <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">create</span>.
                  <br />We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">protect</span>.
                  <br />You get <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">paid</span>.
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Safely and on time. Get 3x more promotion deals, set your own prices, and earn without agents or middlemen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/join">
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white shadow-xl shadow-pink-500/30 px-8 py-6 text-lg">
                      Join as Creator
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/how-it-works">
                    <Button size="lg" variant="outline" className="border-2 border-pink-200 hover:bg-pink-50 px-8 py-6 text-lg">
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
                    src="https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&h=600&fit=crop"
                    alt="Creator earning"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-2xl font-bold">10,000+ Creators</p>
                    <p className="text-white/80">Earning safely every month</p>
                  </div>
                </div>

                {/* Floating Cards */}
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
                      <p className="text-sm text-gray-500">Payment Protected</p>
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
                    <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">3x</p>
                      <p className="text-sm text-gray-500">More Deals</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Creators Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-pink-100 text-pink-700 border-pink-200 mb-4">
                Why Creators Choose Us
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to <span className="text-pink-600">Succeed</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all group"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-100 to-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Protect Creators - MOST IMPORTANT */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                🔹 How We Protect Creators — MOST IMPORTANT
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                You Create. We Protect. You Get <span className="text-green-600">Paid</span>.
              </h2>
              <p className="text-xl text-gray-600">Safely and on time. Always.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Payment Protection */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Lock className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Secure Payment Process</h3>
                <ul className="space-y-3 mb-6">
                  {paymentProtection.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-3 text-gray-900">Payment Released Automatically When:</h4>
                <ul className="space-y-2">
                  {paymentReleaseConditions.map((condition, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{condition}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                  alt="Secure payments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-3xl font-bold">₹32,500</p>
                    <p className="text-green-200">Average booking value</p>
                  </div>
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
                👉 Zero Payment Risk for Creators
              </h3>
              <p className="text-green-100 text-lg">
                Your earnings are 100% protected. Always.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Two Earning Models */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">
                🔹 Two Earning Models for Creators
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Choose How You Want to Earn
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Independent Services */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-violet-100 rounded-bl-full opacity-50" />

                <Badge className="bg-pink-600 text-white border-0 mb-4">1️⃣ Independent Services</Badge>
                <h3 className="text-2xl font-bold mb-2">You Decide. Customers Choose.</h3>
                <p className="text-gray-500 mb-6 italic">(You decide your price. Customers choose you.)</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">You List Your Services:</h4>
                  <div className="flex flex-wrap gap-3">
                    {independentServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full">
                        <service.icon className="h-4 w-4 text-pink-600" />
                        <span className="text-pink-700 text-sm font-medium">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">How It Works:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 font-bold">1.</span>
                      You set your own pricing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 font-bold">2.</span>
                      Customers choose you based on budget, location, niche
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 font-bold">3.</span>
                      Platform handles communication & payment
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Creator Benefits:</h4>
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
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=250&fit=crop"
                  alt="Independent creator"
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
                <h3 className="text-2xl font-bold mb-2">High-Value Campaigns</h3>
                <p className="text-violet-200 mb-6 italic">(High-value campaigns, managed by platform.)</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">How It Works:</h4>
                  <ul className="space-y-2 text-violet-100 text-sm">
                    <li>• Customer shares campaign goals</li>
                    <li>• Platform builds a complete marketing plan</li>
                    <li>• Right creators are selected based on:</li>
                    <div className="ml-4 flex flex-wrap gap-2 mt-2">
                      {dependentSelection.map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-xs">{item}</span>
                      ))}
                    </div>
                    <li className="mt-2">• Platform manages coordination & reporting</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Creator Benefits:</h4>
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
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=250&fit=crop"
                  alt="Professional campaign"
                  className="w-full h-40 object-cover rounded-2xl opacity-90"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reward System */}
        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                🔹 Reward System for Creators — VERY POWERFUL
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                We Grow <span className="text-amber-600">With</span> You, Not <span className="text-gray-400">From</span> You
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* First Booking Reward */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <BadgeCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">🎉 First Successful Booking Reward</p>
                    <h3 className="text-xl font-bold">Meta Verified Badge Support</h3>
                  </div>
                </div>

                <p className="text-blue-100 mb-4">When you complete your first successful paid booking:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span>Platform supports you with Meta verified badge cost assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span>Helps you get Facebook / Instagram verified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span>Builds instant trust with future customers</span>
                  </li>
                </ul>

                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm font-medium mb-2">👉 This increases:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Profile credibility</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Booking chances</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Pricing power</span>
                  </div>
                </div>
              </motion.div>

              {/* Monthly Rewards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Gift className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-600">🎁 Monthly Rewards & Recognition</p>
                    <h3 className="text-xl font-bold text-gray-900">Continuous Booking Rewards</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">If you get continuous bookings, the platform rewards you with:</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {monthlyRewards.map((reward, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl">
                      <reward.icon className="h-5 w-5 text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">{reward.name}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Creator Merchandise Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {merchandise.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Privacy & Safety Section */}
        <section className="py-20 bg-gradient-to-b from-red-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">
                🔹 Privacy & Personal Safety — CRITICAL
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Your Personal Details Are <span className="text-red-600">Always Protected</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* What We Never Share */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                  <Ban className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">No Sharing Of:</h3>
                <ul className="space-y-3">
                  {privacyProtected.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-500" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Platform Safety */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">All Communication:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Stays inside the platform</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">No outside payments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">No direct contact pressure</span>
                  </li>
                </ul>
              </motion.div>

              {/* This Prevents */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="h-14 w-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">👉 This Prevents:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {privacyPrevents.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <item.icon className="h-4 w-4 text-violet-600" />
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Girls Safety - CRITICAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-white/20 text-white border-white/30 mb-4">
                    🚨 GIRLS' SAFETY — READ CAREFULLY
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    This Platform is a Safe Space for Female Creators
                  </h3>
                  <p className="text-pink-100 mb-6">
                    This platform is built with female creators' safety as a priority
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>You never need to share personal contact details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>No direct calls or DMs outside the platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Brand identity is verified before booking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Payment is secured before work starts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Platform support available in case of discomfort or misuse</span>
                    </li>
                  </ul>

                  <p className="text-pink-100 italic">
                    You are here to grow, not to compromise your safety.
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-lg mb-4">Our Promise to Girl Influencers</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-pink-300" />
                      <span>Respect comes first</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-pink-300" />
                      <span>Safety is non-negotiable</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-pink-300" />
                      <span>Your comfort matters more than money</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pink-300" />
                      <span>You can block, report, or exit safely at any time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You Show to Customers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200 mb-4">
                🔹 What You Show to Customers
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Only What's Required
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      What's Visible
                    </h4>
                    <ul className="space-y-2">
                      {whatYouShow.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <Check className="h-4 w-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                      <X className="h-5 w-5" />
                      Never Visible
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-600">
                        <X className="h-4 w-4 text-red-500" />
                        No personal data
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <X className="h-4 w-4 text-red-500" />
                        No phone number
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <X className="h-4 w-4 text-red-500" />
                        No email visible
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Better Than Agencies */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">
                🔹 Why This Platform is Better Than Agencies
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
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
                  <div className="text-left font-medium text-gray-700 text-sm">{item.agency.replace('Agencies ', '')}</div>
                  <div className="flex items-center justify-center gap-2 text-red-600">
                    <X className="h-5 w-5" />
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

        {/* Long-term Gains */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
                🔹 What Creators Gain Long-term
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Build a Sustainable Creator Career
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {longTermGains.map((gain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center flex-shrink-0">
                    <gain.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <span className="font-medium text-gray-700">{gain.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Promise */}
        <section className="py-20 bg-gradient-to-br from-pink-600 via-violet-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                🔹 Simple Creator Promise
              </Badge>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
                Your content deserves <span className="text-yellow-300">respect</span>, <span className="text-yellow-300">safety</span>, and <span className="text-yellow-300">fair payment</span>.
              </h2>
              <p className="text-2xl text-violet-200">
                This platform makes sure you get all three.
              </p>
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
                  src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=1920&h=600&fit=crop"
                  alt="Creator success"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <Sparkles className="h-16 w-16 text-pink-400 mx-auto mb-6" />

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                  Ready to Start Your Creator Journey?
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {ctaSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                      <span className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/join">
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white shadow-xl px-10 py-6 text-lg">
                      Join as Creator
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/discover">
                    <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg">
                      View Success Stories
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
