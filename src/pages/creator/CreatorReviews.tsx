import { motion } from "framer-motion";
import { CreatorLayout } from "@/components/layout/CreatorLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Star,
  Shield,
  CheckCircle2,
  TrendingUp,
  Award,
  ThumbsUp,
} from "lucide-react";

interface Review {
  id: string;
  customer: string;
  customerAvatar: string;
  rating: number;
  date: string;
  comment: string;
  campaign: string;
}

export default function CreatorReviews() {
  const overallRating = 4.8;
  const totalReviews = 47;
  const ratingBreakdown = [
    { stars: 5, count: 38, percentage: 81 },
    { stars: 4, count: 6, percentage: 13 },
    { stars: 3, count: 2, percentage: 4 },
    { stars: 2, count: 1, percentage: 2 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  const trustBadges = [
    {
      id: "1",
      title: "Verified Creator",
      description: "Identity and social accounts verified",
      icon: CheckCircle2,
      color: "primary",
      earned: true,
    },
    {
      id: "2",
      title: "Top Rated",
      description: "Maintains 4.5+ rating",
      icon: Star,
      color: "warning",
      earned: true,
    },
    {
      id: "3",
      title: "Trusted Pro",
      description: "Completed 50+ successful campaigns",
      icon: Shield,
      color: "success",
      earned: false,
    },
    {
      id: "4",
      title: "Rising Star",
      description: "Consistent growth and positive feedback",
      icon: TrendingUp,
      color: "accent",
      earned: true,
    },
  ];

  const reviews: Review[] = [
    {
      id: "1",
      customer: "TechBrand India",
      customerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop",
      rating: 5,
      date: "2 days ago",
      comment: "Outstanding work! Priya delivered an amazing Instagram Reel that exceeded our expectations. Professional, creative, and great communication throughout.",
      campaign: "Instagram Reel - Smartphone Review",
    },
    {
      id: "2",
      customer: "GadgetWorld",
      customerAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop",
      rating: 5,
      date: "1 week ago",
      comment: "Excellent YouTube review! Very detailed and engaging. Our product sales increased significantly after her review went live.",
      campaign: "YouTube Video - Earbuds Review",
    },
    {
      id: "3",
      customer: "StartupX",
      customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great blog post with excellent SEO optimization. Would have loved a bit more visual content, but overall very satisfied.",
      campaign: "Blog Post - Productivity Apps",
    },
    {
      id: "4",
      customer: "FashionHub",
      customerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      rating: 5,
      date: "3 weeks ago",
      comment: "Perfect Instagram Stories series! Her styling tips resonated well with our audience. Definitely booking again!",
      campaign: "Instagram Story Series",
    },
    {
      id: "5",
      customer: "HealthFirst",
      customerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
      rating: 5,
      date: "1 month ago",
      comment: "Professional and reliable. Delivered high-quality content on time with minimal revisions needed.",
      campaign: "Wellness Blog Post",
    },
  ];

  return (
    <CreatorLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Reviews & Trust
          </h1>
          <p className="text-muted-foreground">
            Your ratings, reviews, and trust credentials
          </p>
        </motion.div>

        {/* Rating Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-4 sm:p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-warning/10 mb-4">
                <Star className="h-10 w-10 text-warning fill-warning" />
              </div>
              <div className="font-display text-5xl font-bold mb-2">
                {overallRating}
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= Math.floor(overallRating)
                        ? "text-warning fill-warning"
                        : "text-muted-foreground"
                      }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Based on {totalReviews} reviews
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-4 sm:p-5 md:p-6">
              <h3 className="font-semibold mb-4">Rating Breakdown</h3>
              <div className="space-y-3">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-16">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Star className="h-3 w-3 text-warning fill-warning" />
                    </div>
                    <Progress value={item.percentage} className="h-2 flex-1" />
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-4 sm:p-5 md:p-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Trust Badges</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-2xl border-2 transition-all ${badge.earned
                        ? "border-primary/50 bg-primary/5"
                        : "border-border bg-secondary/30 opacity-60"
                      }`}
                  >
                    <div
                      className={`inline-flex items-center justify-center h-12 w-12 rounded-xl mb-3 ${badge.earned
                          ? `bg-${badge.color}/10`
                          : "bg-secondary"
                        }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${badge.earned ? `text-${badge.color}` : "text-muted-foreground"
                          }`}
                      />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{badge.title}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                    {badge.earned && (
                      <Badge variant="success" className="mt-3 text-xs">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Earned
                      </Badge>
                    )}
                    {!badge.earned && (
                      <Badge variant="secondary" className="mt-3 text-xs">
                        Not yet earned
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Reviews List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <GlassCard className="p-4 sm:p-5 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">Recent Reviews</h2>
              <Badge variant="secondary">{reviews.length} reviews</Badge>
            </div>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="pb-6 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3">
                    <img
                      src={review.customerAvatar}
                      alt={review.customer}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{review.customer}</h4>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= review.rating
                                ? "text-warning fill-warning"
                                : "text-muted-foreground"
                              }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {review.comment}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {review.campaign}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </CreatorLayout>
  );
}
