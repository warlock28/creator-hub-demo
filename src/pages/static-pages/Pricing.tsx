import { useState } from "react";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Check,
  X,
  Sparkles,
  Users,
  Shield,
  BarChart3,
  Clock,
  Star,
  Zap,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Independent Plan",
    tagline: "DIY Creator Collaboration",
    price: "Free",
    period: "Forever",
    description: "Perfect for brands who want full control over creator selection",
    popular: false,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#667eea",
    features: [
      { text: "Browse unlimited verified creators", included: true },
      { text: "Direct messaging with creators", included: true },
      { text: "Pay only for completed work", included: true },
      { text: "Choose creators based on your budget", included: true },
      { text: "Filter by location, niche, and platform", included: true },
      { text: "View creator portfolios and reviews", included: true },
      { text: "Basic booking management", included: true },
      { text: "Platform curated matches", included: false },
      { text: "Campaign monitoring & analytics", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Performance tracking dashboard", included: false },
    ],
    cta: "Get Started Free",
    ctaLink: "/join",
  },
  {
    name: "Managed Plan",
    tagline: "AI-Powered Creator Matching",
    price: "₹14,999",
    period: "per campaign",
    description: "Let our platform find the perfect creator match for your requirements",
    popular: true,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#f5576c",
    trial: "7 days free trial",
    features: [
      { text: "Everything in Independent Plan", included: true },
      { text: "AI-powered creator recommendations", included: true },
      { text: "Platform curates best matches", included: true },
      { text: "Match based on budget, location & niche", included: true },
      { text: "Campaign monitoring & analytics", included: true },
      { text: "Real-time performance tracking", included: true },
      { text: "14-day campaign management", included: true },
      { text: "Digital analysis reports", included: true },
      { text: "Engagement metrics dashboard", included: true },
      { text: "ROI tracking & insights", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority customer support", included: true },
    ],
    cta: "Start 7-Day Free Trial",
    ctaLink: "/join?plan=managed",
  },
];

const comparisonFeatures = [
  {
    category: "Creator Selection",
    features: [
      { name: "Browse creator marketplace", independent: true, managed: true },
      { name: "AI-powered matching", independent: false, managed: true },
      { name: "Platform curated recommendations", independent: false, managed: true },
      { name: "Custom requirement matching", independent: false, managed: true },
    ],
  },
  {
    category: "Campaign Management",
    features: [
      { name: "Basic booking system", independent: true, managed: true },
      { name: "Campaign monitoring", independent: false, managed: true },
      { name: "Performance analytics", independent: false, managed: true },
      { name: "14-day managed service", independent: false, managed: true },
    ],
  },
  {
    category: "Analytics & Reporting",
    features: [
      { name: "Basic creator reviews", independent: true, managed: true },
      { name: "Digital analysis reports", independent: false, managed: true },
      { name: "ROI tracking", independent: false, managed: true },
      { name: "Engagement metrics", independent: false, managed: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Email support", independent: true, managed: true },
      { name: "Dedicated account manager", independent: false, managed: true },
      { name: "Priority support", independent: false, managed: true },
    ],
  },
];

export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Flexible Pricing Options
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Whether you want full control or expert guidance, we've got you covered
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge
                      className="bg-gradient-to-r from-violet-600 to-pink-600 text-white px-4 py-1"
                    >
                      <Star className="h-3 w-3 mr-1 fill-white" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <GlassCard
                  className={`p-8 h-full flex flex-col ${plan.popular ? "ring-2 ring-violet-500/50 shadow-xl shadow-violet-500/20" : ""
                    }`}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                      style={{ background: plan.gradient }}
                    >
                      {index === 0 ? (
                        <Users className="h-6 w-6 text-white" />
                      ) : (
                        <Zap className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground">/ {plan.period}</span>
                      )}
                    </div>
                    {plan.trial && (
                      <Badge variant="outline" className="mt-3">
                        <Clock className="h-3 w-3 mr-1" />
                        {plan.trial}
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  {/* Features */}
                  <div className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <div
                            className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: plan.gradient }}
                          >
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="h-3 w-3 text-muted-foreground" />
                          </div>
                        )}
                        <span
                          className={
                            feature.included ? "text-foreground" : "text-muted-foreground line-through"
                          }
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={plan.ctaLink}>
                    <Button
                      className="w-full"
                      size="lg"
                      style={
                        plan.popular
                          ? {
                            background: plan.gradient,
                            color: "white",
                          }
                          : undefined
                      }
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Toggle Comparison */}
          <div className="text-center mb-8">
            <Button
              variant="outline"
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison ? "Hide" : "Show"} Detailed Comparison
            </Button>
          </div>

          {/* Comparison Table */}
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-5xl mx-auto"
            >
              <GlassCard className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-center">
                  Feature Comparison
                </h3>
                <div className="space-y-8">
                  {comparisonFeatures.map((category) => (
                    <div key={category.category}>
                      <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        {category.category}
                      </h4>
                      <div className="space-y-2">
                        {category.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="grid grid-cols-3 gap-4 py-3 border-b border-border/50 last:border-0"
                          >
                            <span className="text-sm col-span-1">{feature.name}</span>
                            <div className="flex justify-center">
                              {feature.independent ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex justify-center">
                              {feature.managed ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I switch between plans?",
                a: "Yes! You can upgrade from Independent to Managed plan anytime. The Managed plan features apply to individual campaigns.",
              },
              {
                q: "What happens after the 7-day free trial?",
                a: "After your trial ends, you'll be charged ₹4,999 per campaign for the Managed plan. You can cancel anytime during the trial with no charges.",
              },
              {
                q: "How does payment work in the Independent plan?",
                a: "You pay creators directly based on their quoted prices. AdPromoo facilitates the connection but doesn't process payments.",
              },
              {
                q: "What's included in the 14-day campaign management?",
                a: "Our team monitors your campaign, provides analytics, tracks performance metrics, and gives you detailed reports for 14 days after campaign launch.",
              },
            ].map((faq, i) => (
              <GlassCard key={i} className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of brands already collaborating with creators on AdPromoo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-pink-600 text-white">
                  Start Free Independent Plan
                </Button>
              </Link>
              <Link to="/join?plan=managed">
                <Button size="lg" variant="outline">
                  Try Managed Plan Free
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </PublicLayout>
  );
}
