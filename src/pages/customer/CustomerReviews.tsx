import { useState } from "react";
import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, ThumbsUp } from "lucide-react";

interface Review {
    id: string;
    creatorName: string;
    creatorAvatar: string;
    serviceName: string;
    rating: number;
    comment: string;
    date: string;
    helpful: number;
}

const mockReviews: Review[] = [
    {
        id: "1",
        creatorName: "Ananya Gupta",
        creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        serviceName: "Recipe Video",
        rating: 5,
        comment: "Amazing work! The recipe video was shot beautifully and the editing was top-notch. Highly recommend Ananya for food content.",
        date: "2025-12-22",
        helpful: 12,
    },
    {
        id: "2",
        creatorName: "Arjun Patel",
        creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        serviceName: "Workout Tutorial",
        rating: 4,
        comment: "Great content and very professional. The workout tutorial was detailed and easy to follow.",
        date: "2025-12-10",
        helpful: 8,
    },
];

export default function CustomerReviews() {
    return (
        <CustomerLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="font-display text-3xl font-bold mb-2">My Reviews</h1>
                    <p className="text-muted-foreground">
                        Reviews you've given to creators
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                                <Star className="h-6 w-6 text-white fill-white" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Total Reviews</p>
                                <p className="text-2xl font-bold">{mockReviews.length}</p>
                            </div>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                <ThumbsUp className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Helpful Votes</p>
                                <p className="text-2xl font-bold">
                                    {mockReviews.reduce((sum, r) => sum + r.helpful, 0)}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                                <Star className="h-6 w-6 text-white fill-white" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Avg Rating</p>
                                <p className="text-2xl font-bold">
                                    {(mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length).toFixed(1)}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                    {mockReviews.length === 0 ? (
                        <GlassCard className="p-12 text-center">
                            <p className="text-muted-foreground mb-4">You haven't left any reviews yet</p>
                            <Button>View Completed Bookings</Button>
                        </GlassCard>
                    ) : (
                        mockReviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6">
                                    <div className="flex gap-4">
                                        <img
                                            src={review.creatorAvatar}
                                            alt={review.creatorName}
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-lg">{review.serviceName}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {review.creatorName}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-4 w-4 ${i < review.rating
                                                                    ? "fill-yellow-500 text-yellow-500"
                                                                    : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="text-foreground leading-relaxed">{review.comment}</p>

                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{new Date(review.date).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <ThumbsUp className="h-4 w-4" />
                                                        <span>{review.helpful} found this helpful</span>
                                                    </div>
                                                </div>
                                                <Button size="sm" variant="ghost">
                                                    Edit Review
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </CustomerLayout>
    );
}
