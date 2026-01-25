import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Sparkles,
  Users,
  Briefcase,
  Code2,
  Palette,
  TrendingUp,
  HeartHandshake,
  Globe,
  Zap,
  Coffee,
  Heart,
  GraduationCap,
  ArrowRight,
  Search,
  Building2,
  ChevronDown,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Department definitions
const departments = [
  { id: "all", label: "All Departments", icon: Building2 },
  { id: "engineering", label: "Engineering", icon: Code2 },
  { id: "design", label: "Design", icon: Palette },
  { id: "product", label: "Product", icon: Briefcase },
  { id: "marketing", label: "Marketing", icon: TrendingUp },
  { id: "operations", label: "Operations", icon: Users },
];

// Job listings with detailed requirements
const jobs = [
  {
    id: "1",
    title: "Senior Full-Stack Engineer",
    department: "engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    remote: "Hybrid",
    experience: "4-7 years",
    salary: "₹25-40 LPA",
    posted: "2 days ago",
    description: "Build and scale our creator marketplace platform serving thousands of brands and creators daily.",
    requirements: [
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with PostgreSQL and Redis",
      "Understanding of microservices architecture",
      "API design and optimization experience",
    ],
    benefits: ["Equity", "Remote-friendly", "Learning budget"],
  },
  {
    id: "2",
    title: "Senior Product Designer",
    department: "design",
    location: "Bengaluru, India",
    type: "Full-time",
    remote: "Hybrid",
    experience: "5+ years",
    salary: "₹22-35 LPA",
    posted: "3 days ago",
    description: "Own the end-to-end design experience for creator onboarding, messaging, and campaign analytics.",
    requirements: [
      "Expert in Figma and design systems",
      "Strong portfolio with B2B/marketplace products",
      "Experience with user research and testing",
      "Motion design and prototyping skills",
    ],
    benefits: ["Equity", "Design tools budget", "Conference travel"],
  },
  {
    id: "3",
    title: "Product Manager - Growth",
    department: "product",
    location: "Remote, India",
    type: "Full-time",
    remote: "Remote",
    experience: "3-6 years",
    salary: "₹20-32 LPA",
    posted: "1 week ago",
    description: "Drive creator acquisition and retention through data-driven experiments and feature development.",
    requirements: [
      "Experience in B2C or marketplace products",
      "Strong analytical and SQL skills",
      "Track record of shipping growth features",
      "Excellent stakeholder communication",
    ],
    benefits: ["Equity", "Flexible hours", "Health insurance"],
  },
  {
    id: "4",
    title: "Creator Success Manager",
    department: "operations",
    location: "Mumbai, India",
    type: "Full-time",
    remote: "Onsite",
    experience: "2-4 years",
    salary: "₹10-18 LPA",
    posted: "5 days ago",
    description: "Partner with top creators to ensure successful campaigns and build long-term relationships.",
    requirements: [
      "Experience in influencer marketing or creator economy",
      "Excellent communication in Hindi and English",
      "Strong relationship management skills",
      "Understanding of social media platforms",
    ],
    benefits: ["Performance bonus", "Creator meetups", "Travel allowance"],
  },
  {
    id: "5",
    title: "Performance Marketing Lead",
    department: "marketing",
    location: "Bengaluru, India",
    type: "Full-time",
    remote: "Hybrid",
    experience: "4-6 years",
    salary: "₹18-28 LPA",
    posted: "1 week ago",
    description: "Scale our paid acquisition channels and optimize CAC across Google, Meta, and emerging platforms.",
    requirements: [
      "Proven track record with ₹1Cr+ monthly ad spend",
      "Expert in Google Ads, Meta Ads, and analytics",
      "Experience with attribution and funnel optimization",
      "A/B testing and experimentation mindset",
    ],
    benefits: ["Equity", "Performance bonus", "Learning budget"],
  },
  {
    id: "6",
    title: "Frontend Engineer",
    department: "engineering",
    location: "Remote, India",
    type: "Full-time",
    remote: "Remote",
    experience: "2-4 years",
    salary: "₹15-25 LPA",
    posted: "4 days ago",
    description: "Craft beautiful, performant user interfaces for our creator and brand dashboards.",
    requirements: [
      "Expert in React and TypeScript",
      "Experience with Tailwind CSS and modern styling",
      "Understanding of accessibility and performance",
      "Eye for design and attention to detail",
    ],
    benefits: ["Equity", "Remote-first", "Home office setup"],
  },
];

// Company values
const values = [
  {
    icon: Zap,
    title: "Ship Fast, Learn Faster",
    description: "We deploy multiple times a day and iterate based on real feedback.",
  },
  {
    icon: HeartHandshake,
    title: "Creator-First Mindset",
    description: "Every decision starts with 'How does this help creators succeed?'",
  },
  {
    icon: Globe,
    title: "Build for Bharat",
    description: "We're creating tools for India's diverse, multilingual creator economy.",
  },
  {
    icon: Users,
    title: "Ownership Culture",
    description: "Everyone owns outcomes, not just tasks. High trust, high accountability.",
  },
];

// Perks and benefits
const perks = [
  { icon: Coffee, title: "Flexible Work", description: "Remote-friendly + quarterly team retreats" },
  { icon: GraduationCap, title: "Learning Budget", description: "₹1L/year for courses, books, and conferences" },
  { icon: Heart, title: "Health Coverage", description: "Comprehensive insurance for you + family" },
  { icon: TrendingUp, title: "Equity & Bonuses", description: "Employee stock options + performance bonuses" },
];

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <PublicLayout>
      <div className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 mb-6">
                🚀 We're Hiring!
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build the Future of India's{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Creator Economy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join a small, product-obsessed team shipping weekly. We're looking for
                ambitious builders who want high ownership and fast feedback loops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  View Open Roles
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Our Culture
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "50+", label: "Team Members" },
              { value: "₹15Cr", label: "Funding Raised" },
              { value: "10K+", label: "Creators Onboarded" },
              { value: "4.8★", label: "Glassdoor Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center p-6">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-3">Our Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide how we build, ship, and grow together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-4 lg:px-8 mb-16" id="jobs">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-3">Open Positions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find your next role and help us shape the creator economy.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept.id}
                  variant={selectedDepartment === dept.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept.id)}
                  className="gap-2"
                >
                  <dept.icon className="h-4 w-4" />
                  {dept.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <GlassCard className="text-center py-12">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">No positions found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </GlassCard>
            ) : (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard className="group hover:border-primary/30 transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                      {/* Job Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                          </Badge>
                          {job.remote === "Remote" && (
                            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                              Remote
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4" />
                            {job.experience}
                          </span>
                        </div>
                      </div>

                      {/* Salary & CTA */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3">
                        <div className="text-right">
                          <p className="font-display text-lg font-bold text-primary">{job.salary}</p>
                          <p className="text-xs text-muted-foreground">{job.posted}</p>
                        </div>
                        <Button className="gap-2">
                          Apply Now
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Requirements Preview */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Key Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                          >
                            {req.split(" ").slice(0, 4).join(" ")}...
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))
            )}
          </div>

          {/* Show count */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Showing {filteredJobs.length} of {jobs.length} open positions
          </p>
        </section>

        {/* Perks & Benefits */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-100">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                  Why Join Us?
                </p>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Perks That Help You Thrive
                </h2>
                <p className="text-muted-foreground mb-6">
                  We believe in taking care of our team so they can focus on building
                  amazing products. Here's what you can expect.
                </p>
                <Button size="lg">
                  Explore All Benefits
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {perks.map((perk) => (
                  <div
                    key={perk.title}
                    className="p-4 rounded-2xl bg-white/80 border border-white shadow-sm"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <perk.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1">{perk.title}</h4>
                    <p className="text-sm text-muted-foreground">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[36px] bg-gradient-to-r from-violet-600 to-purple-600 text-white p-10 lg:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              We're always looking for exceptional talent. Send us your resume and
              tell us how you'd like to contribute to the creator economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Send General Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Follow Us on LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
