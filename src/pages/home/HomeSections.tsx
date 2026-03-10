import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Star,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Award,
  Lock,
  CheckCircle2,
  Play,
  Heart,
  IndianRupee,
  Verified
} from "lucide-react";

// ============================================
// HERO SECTION - REFINED & UNIQUE
// ============================================

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const trustPoints = [
    { icon: Verified, text: "12K+ Verified Creators" },
    { icon: Shield, text: "100% Secure Payments" },
    { icon: IndianRupee, text: "Zero Commission" },
  ];

  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-16 pb-4 md:pt-20 md:pb-6">
      {/* Background - using scoped variable */}
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-4 md:py-8">
        <div className="max-w-6xl mx-auto">

          {/* Top Badge - Animated */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <Badge className="bg-accent text-primary border-accent-border px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent/80">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              India's #1 Creator Marketplace
              <TrendingUp className="w-4 h-4 ml-2 text-primary" />
            </Badge>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
                Connect with
                <span className="block mt-1 text-foreground">
                  Verified Creators
                </span>
                <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground">
                  Directly. Safely. Affordably.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed">
                Skip expensive agencies. Find and book <span className="font-semibold text-gray-900">influencers, bloggers, and content creators</span> for your brand campaigns with escrow-protected payments.
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
                {trustPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                      <point.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <Link to="/discover">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group px-6 h-12"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    <span className="font-semibold">Find Creators</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/join">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border border-input bg-background hover:bg-muted text-foreground transition-all duration-300 group px-6 h-12 font-semibold"
                  >
                    <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform text-primary" />
                    Join as Creator
                  </Button>
                </Link>
              </motion.div>

              {/* Creator Avatars with Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-5 flex items-center gap-3 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&h=60&fit=crop&crop=face",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Creator"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold shadow-md">
                    +12K
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">4.9</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">50K+ collaborations</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main Creator Card */}
              <div className="relative">
                {/* Simplified Blur Effect */}
                <div className="absolute -inset-4 bg-gray-200/50 rounded-3xl blur-2xl" />

                <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
                    alt="Creator working"
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
                          alt="Creator"
                          className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-foreground">Priya Sharma</h3>
                            <Verified className="w-5 h-5 text-blue-500" />
                          </div>
                          <p className="text-sm text-muted-foreground">Tech & Lifestyle Creator</p>
                        </div>
                      </div>
                      <Badge className="bg-accent text-primary border-0">Available</Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-secondary rounded-xl">
                        <p className="text-lg font-bold text-foreground">245K</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                      </div>
                      <div className="text-center p-3 bg-secondary rounded-xl">
                        <p className="text-lg font-bold text-foreground">8.2%</p>
                        <p className="text-xs text-muted-foreground">Engagement</p>
                      </div>
                      <div className="text-center p-3 bg-secondary rounded-xl">
                        <p className="text-lg font-bold text-amber-500">4.9★</p>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting from</p>
                        <p className="text-xl font-light text-foreground">₹---<span className="text-sm font-normal text-muted-foreground">/post</span></p>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Simplified Colors */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Escrow Protected</p>
                      <p className="font-bold text-primary">100% Safe</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-gray-600" />
                    </div>
                    {/* Removed extra text for cleaner look on small float */}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CATEGORIES MARQUEE SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 py-6 md:py-8"
      >
        <p className="text-center text-sm md:text-base text-muted-foreground mb-5 font-medium px-4">
          Explore creators across <span className="text-primary font-semibold">50+ categories</span>
        </p>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-violet-50 via-violet-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-violet-50 via-violet-50/90 to-transparent z-10 pointer-events-none" />

          {/* First Row */}
          <div className="flex gap-3 md:gap-4 animate-category-marquee mb-3">
            {[
              { name: "Tech & Gadgets", icon: "💻", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
              { name: "Fashion & Lifestyle", icon: "👗", bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
              { name: "Food & Cooking", icon: "🍕", bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
              { name: "Fitness & Health", icon: "💪", bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
              { name: "Beauty & Skincare", icon: "💄", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
              { name: "Finance & Business", icon: "📈", bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
              { name: "Travel & Adventure", icon: "✈️", bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
              { name: "Gaming & Esports", icon: "🎮", bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
              { name: "Photography", icon: "📷", bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" },
              { name: "Tech & Gadgets", icon: "💻", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
              { name: "Fashion & Lifestyle", icon: "👗", bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
              { name: "Food & Cooking", icon: "🍕", bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
              { name: "Fitness & Health", icon: "💪", bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
              { name: "Beauty & Skincare", icon: "💄", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
              { name: "Finance & Business", icon: "📈", bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
              { name: "Travel & Adventure", icon: "✈️", bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
              { name: "Gaming & Esports", icon: "🎮", bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
              { name: "Photography", icon: "📷", bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" },
            ].map((cat, i) => (
              <div
                key={`row1-${i}`}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full ${cat.bg} ${cat.text} border ${cat.border} text-xs md:text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap`}
              >
                <span className="text-sm md:text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex gap-3 md:gap-4 animate-category-marquee-reverse">
            {[
              { name: "Education & Learning", icon: "📚", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
              { name: "Parenting & Family", icon: "👨‍👩‍👧", bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
              { name: "Entertainment", icon: "🎬", bg: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-200" },
              { name: "Art & Design", icon: "🎨", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
              { name: "Music & Dance", icon: "🎵", bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
              { name: "Pets & Animals", icon: "🐕", bg: "bg-lime-50", text: "text-lime-700", border: "border-lime-200" },
              { name: "Home & Decor", icon: "🏠", bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
              { name: "Motivation", icon: "🌟", bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
              { name: "Comedy & Memes", icon: "😂", bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
              { name: "Education & Learning", icon: "📚", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
              { name: "Parenting & Family", icon: "👨‍👩‍👧", bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
              { name: "Entertainment", icon: "🎬", bg: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-200" },
              { name: "Art & Design", icon: "🎨", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
              { name: "Music & Dance", icon: "🎵", bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
              { name: "Pets & Animals", icon: "🐕", bg: "bg-lime-50", text: "text-lime-700", border: "border-lime-200" },
              { name: "Home & Decor", icon: "🏠", bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
              { name: "Motivation", icon: "🌟", bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
              { name: "Comedy & Memes", icon: "😂", bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
            ].map((cat, i) => (
              <div
                key={`row2-${i}`}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full ${cat.bg} ${cat.text} border ${cat.border} text-xs md:text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap`}
              >
                <span className="text-sm md:text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CSS for marquee animations */}
        <style>{`
          @keyframes category-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes category-marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-category-marquee {
            animation: category-marquee 25s linear infinite;
          }
          .animate-category-marquee-reverse {
            animation: category-marquee-reverse 25s linear infinite;
          }
          .animate-category-marquee:hover,
          .animate-category-marquee-reverse:hover {
            animation-play-state: paused;
          }
          @media (max-width: 640px) {
            .animate-category-marquee {
              animation-duration: 18s;
            }
            .animate-category-marquee-reverse {
              animation-duration: 18s;
            }
          }
        `}</style>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-400"
      >
        <ChevronRight className="h-5 w-5 rotate-90" />
      </motion.div>
    </section>
  );
}

// ============================================
// CTA SECTION - REFINED
// ============================================

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-foreground">

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 hover:bg-white/20">
            <Sparkles className="h-4 w-4 mr-2" />
            Limited Time: Zero Commission for Early Users
          </Badge>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <br />
            <span className="text-white/90">Creator Collaborations?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join <span className="font-bold">12,000+ creators</span> and <span className="font-bold">5,000+ brands</span> already growing together on India's most trusted creator marketplace
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/join">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl transition-all duration-300 group px-8 h-14 font-bold"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/discover">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 group px-8 h-14 font-semibold"
              >
                <Users className="mr-2 h-5 w-5" />
                Explore Creators
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-10 border-t border-white/20">
            {[
              { icon: Shield, label: "100% Secure" },
              { icon: Award, label: "Verified Only" },
              { icon: Zap, label: "Instant Setup" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <item.icon className="h-7 w-7 text-white/90" />
                <p className="text-sm text-white/80 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
