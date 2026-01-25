import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Shield,
  Users,
  Workflow,
  Search,
  FileText,
  CreditCard,
  MessageSquare,
  BarChart3,
  Lock,
  RefreshCcw,
  Eye,
  Target,
  Zap,
  Award,
  TrendingUp,
  Heart,
  Building2,
  ShoppingBag,
  Rocket,
  Camera,
  Play,
  Image,
  BadgeCheck,
  UserCheck,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// For Customers Journey
const customerJourney = [
  {
    step: "01",
    title: "Post Your Requirement",
    description: "Share your marketing goals, target audience, budget, and preferred platforms. Our smart templates make it easy.",
    icon: FileText,
    color: "violet",
  },
  {
    step: "02",
    title: "Discover & Choose Creators",
    description: "Browse verified creators filtered by niche, location, platform, audience size, and pricing. Review their work samples.",
    icon: Search,
    color: "pink",
  },
  {
    step: "03",
    title: "Secure Payment",
    description: "Pay securely to the platform. Your money is held in escrow until work is completed and approved.",
    icon: CreditCard,
    color: "green",
  },
  {
    step: "04",
    title: "Collaborate & Communicate",
    description: "Chat directly with creators inside the platform. Share briefs, provide feedback, and approve content.",
    icon: MessageSquare,
    color: "blue",
  },
  {
    step: "05",
    title: "Track & Approve",
    description: "Monitor campaign progress in real-time. Approve deliverables and release payment automatically.",
    icon: BarChart3,
    color: "amber",
  },
];

// For Creators Journey
const creatorJourney = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Set up your creator profile with your niche, platforms, sample work, and pricing packages.",
    icon: UserCheck,
    color: "pink",
  },
  {
    step: "02",
    title: "Get Discovered",
    description: "Customers find you through our discovery system. Receive booking requests that match your niche.",
    icon: Eye,
    color: "violet",
  },
  {
    step: "03",
    title: "Accept & Start Work",
    description: "Review briefs, accept bookings, and start creating. Payment is already secured before you begin.",
    icon: Play,
    color: "green",
  },
  {
    step: "04",
    title: "Deliver & Get Paid",
    description: "Submit your content, get approval, and receive payment automatically. No chasing clients.",
    icon: DollarSign,
    color: "amber",
  },
];

// Platform Features
const platformFeatures = [
  {
    title: "Verified Profiles",
    description: "Every creator and brand is verified for authenticity and quality assurance.",
    icon: BadgeCheck,
  },
  {
    title: "Escrow Protection",
    description: "All payments are held securely until work is delivered and approved.",
    icon: Lock,
  },
  {
    title: "Real-time Tracking",
    description: "Monitor every step of your campaign with live updates and notifications.",
    icon: Eye,
  },
  {
    title: "Direct Communication",
    description: "Chat directly with creators or brands inside the platform safely.",
    icon: MessageSquare,
  },
  {
    title: "Smart Matching",
    description: "AI-powered recommendations based on your requirements and past success.",
    icon: Target,
  },
  {
    title: "Instant Refunds",
    description: "100% refund within 24 hours if work isn't delivered as agreed.",
    icon: RefreshCcw,
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance, engagement, and ROI with detailed reports.",
    icon: BarChart3,
  },
  {
    title: "Secure Payments",
    description: "Multiple payment options with bank-grade security and encryption.",
    icon: CreditCard,
  },
];

// Service Models
const serviceModels = [
  {
    title: "Independent Services",
    subtitle: "You Choose. We Protect.",
    description: "Browse creators, select who you want to work with, and manage your campaigns directly. Perfect for hands-on marketers.",
    features: [
      "Full control over creator selection",
      "Set your own budget and timeline",
      "Direct communication with creators",
      "100% payment protection",
    ],
    bestFor: ["Small businesses", "Startups", "Local brands", "Short campaigns"],
    color: "violet",
  },
  {
    title: "Dependent Services",
    subtitle: "You Relax. We Handle Everything.",
    description: "Share your goals and let our team manage everything from creator selection to campaign execution and reporting.",
    features: [
      "Expert campaign management",
      "Strategic creator selection",
      "Full coordination & reporting",
      "Higher success rates",
    ],
    bestFor: ["Growing businesses", "Performance-focused brands", "High-impact campaigns", "Limited time businesses"],
    color: "purple",
  },
];

// Trust Points
const trustPoints = [
  {
    title: "Zero Payment Risk",
    description: "Money is released only after work completion and your approval.",
    icon: Shield,
    stat: "100%",
    statLabel: "Protected",
  },
  {
    title: "Fast Execution",
    description: "Average campaign starts within 48 hours of booking confirmation.",
    icon: Zap,
    stat: "48hrs",
    statLabel: "Avg. Start",
  },
  {
    title: "Verified Quality",
    description: "Every creator is vetted for content quality and professionalism.",
    icon: Award,
    stat: "4.8/5",
    statLabel: "Avg. Rating",
  },
  {
    title: "Support Available",
    description: "Dedicated support team to help resolve any issues quickly.",
    icon: Heart,
    stat: "24/7",
    statLabel: "Available",
  },
];

// Who Should Use
const whoShouldUse = {
  customers: [
    { title: "Local Businesses", icon: Building2, description: "Grow local presence with regional creators" },
    { title: "E-commerce Brands", icon: ShoppingBag, description: "Drive sales with product showcases" },
    { title: "Startups", icon: Rocket, description: "Build brand awareness from scratch" },
    { title: "App Launches", icon: Play, description: "Create buzz and drive downloads" },
  ],
  creators: [
    { title: "Instagram Creators", icon: Camera, description: "Monetize your reels and posts" },
    { title: "YouTube Creators", icon: Play, description: "Get paid for brand integrations" },
    { title: "Content Creators", icon: Image, description: "Earn from your creative skills" },
    { title: "Micro-Influencers", icon: Users, description: "Grow with consistent brand work" },
  ],
};

// FAQs
const faqs = [
  {
    question: "How does payment protection work?",
    answer: "When a customer books a creator, the payment is held securely by the platform. The creator only receives payment after the work is delivered and approved. If there's an issue, customers can raise a complaint for a full refund.",
  },
  {
    question: "How long does it take to start a campaign?",
    answer: "Most campaigns start within 24-48 hours of booking confirmation. Creators typically respond to requests within a few hours during working hours.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "You can request revisions as per the agreed terms. If the work doesn't meet the brief, you can raise a complaint and receive a 100% refund within 24 hours.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes! We never share your personal contact details. All communication happens inside the platform, protected and documented.",
  },
  {
    question: "What commission does the platform take?",
    answer: "Creators keep 100% of their earnings. The platform charges a small service fee to customers, which is shown transparently before booking.",
  },
  {
    question: "Can I work with specific creators repeatedly?",
    answer: "Absolutely! You can save favorite creators, view your booking history, and easily rebook creators you've worked with before.",
  },
];

export default function HowItWorks() {
  return (
    <PublicLayout>
      <div className="pt-20 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-pink-50" />
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="bg-gradient-to-r from-violet-600 to-pink-600 text-white border-0 px-4 py-2 text-sm font-medium mb-6">
                Transparent • Secure • Simple
              </Badge>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                How <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">AdPromoo</span> Works
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                A simple, transparent process that connects brands with verified creators.
                Secure payments, clear communication, and guaranteed results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-xl shadow-violet-500/30 px-8 py-6 text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/discover">
                  <Button size="lg" variant="outline" className="border-2 border-violet-200 hover:bg-violet-50 px-8 py-6 text-lg">
                    Browse Creators
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* For Customers Journey */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">
                For Customers & Brands
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Your Journey to Successful Campaigns
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From posting your requirement to tracking results — everything in 5 simple steps.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-200 via-pink-200 to-amber-200 transform -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {customerJourney.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-violet-200 hover:shadow-xl transition-all group"
                  >
                    <div className={`absolute -top-4 left-6 h-8 w-8 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-white flex items-center justify-center text-sm font-bold shadow-lg`}>
                      {item.step}
                    </div>
                    <div className="pt-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6 text-violet-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For Creators Journey */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-pink-100 text-pink-700 border-pink-200 mb-4">
                For Creators & Influencers
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Your Journey to Earning Safely
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Set your prices, get discovered, deliver great content, and get paid on time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creatorJourney.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all group"
                >
                  <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-100 to-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Models */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-gray-100 text-gray-700 border-gray-200 mb-4">
                Two Ways to Work
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Choose Your Level of Control
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {serviceModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-3xl p-8 shadow-xl ${index === 0 ? 'bg-white border-2 border-violet-200' : 'bg-gradient-to-br from-violet-600 to-purple-700 text-white'}`}
                >
                  <Badge className={index === 0 ? 'bg-violet-100 text-violet-700 border-violet-200' : 'bg-white/20 text-white border-white/30'}>
                    {model.title}
                  </Badge>
                  <h3 className="text-2xl font-bold mt-4 mb-2">{model.subtitle}</h3>
                  <p className={`mb-6 ${index === 0 ? 'text-gray-600' : 'text-violet-100'}`}>{model.description}</p>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${index === 0 ? 'text-gray-900' : 'text-white'}`}>Features:</h4>
                    <ul className="space-y-2">
                      {model.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <CheckCircle2 className={`h-5 w-5 ${index === 0 ? 'text-green-500' : 'text-green-400'}`} />
                          <span className={index === 0 ? 'text-gray-600' : 'text-violet-100'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-3 ${index === 0 ? 'text-gray-900' : 'text-white'}`}>Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.bestFor.map((item, bIndex) => (
                        <span key={bIndex} className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-violet-50 text-violet-700' : 'bg-white/20 text-white'}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                Platform Features
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Everything You Need in One Platform
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-violet-200 hover:shadow-xl transition-all group"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-violet-600" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Points */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                Why Trust Us
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Built for Safety & Success
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                      <point.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-700">{point.stat}</p>
                      <p className="text-xs text-green-600">{point.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Use */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                Who Is This For?
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Built for Everyone Who Wants to Grow
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* For Customers */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-violet-600" />
                  For Brands & Businesses
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whoShouldUse.customers.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:border-violet-200 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-violet-100 flex items-center justify-center mb-3">
                        <item.icon className="h-5 w-5 text-violet-600" />
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-pink-600" />
                  For Creators & Influencers
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whoShouldUse.creators.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:border-pink-200 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center mb-3">
                        <item.icon className="h-5 w-5 text-pink-600" />
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-gray-100 text-gray-700 border-gray-200 mb-4">
                Frequently Asked Questions
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Common Questions Answered
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-violet-50 transition-colors"
                >
                  <h3 className="font-bold mb-3 flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Sparkles className="h-16 w-16 text-yellow-300 mx-auto mb-6" />

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>

              <p className="text-xl text-violet-100 mb-8">
                Join thousands of brands and creators already growing with AdPromoo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100 shadow-xl px-10 py-6 text-lg font-semibold">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/for-customers">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
