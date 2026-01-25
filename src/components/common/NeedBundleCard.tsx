import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge, type BookingStatus } from "./StatusBadge";
import {
    Calendar,
    DollarSign,
    MapPin,
    Sparkles,
    CheckCircle2,
    XCircle,
    MessageCircle,
    Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface NeedBundle {
    id: string;
    customerId: string;
    customerName: string;
    customerAvatar?: string;
    description: string; // The actual "Need Bundle" text
    platform?: string; // Instagram, YouTube, etc.
    budgetRange?: string; // e.g., "₹5,000 - ₹10,000"
    timeline?: string; // e.g., "Within 1 week"
    createdAt: string; // e.g., "2 hours ago"
    status: BookingStatus;
    bookingId?: string;
}

interface NeedBundleCardProps {
    needBundle: NeedBundle;
    role: "creator" | "customer";
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
    onViewDetails?: (id: string) => void;
    className?: string;
}

export function NeedBundleCard({
    needBundle,
    role,
    onApprove,
    onReject,
    onViewDetails,
    className,
}: NeedBundleCardProps) {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleApprove = async () => {
        setIsProcessing(true);
        await onApprove?.(needBundle.id);
        setIsProcessing(false);
    };

    const handleReject = async () => {
        setIsProcessing(true);
        await onReject?.(needBundle.id);
        setIsProcessing(false);
    };

    const canTakeAction =
        role === "creator" && needBundle.status === "pending_creator_approval";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
        >
            <GlassCard
                className={cn(
                    "p-5 md:p-6 border-2 hover:border-primary/30 transition-all duration-300",
                    className
                )}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarImage src={needBundle.customerAvatar} />
                            <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-500 text-white font-semibold">
                                {needBundle.customerName.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                {needBundle.customerName}
                                {role === "creator" && (
                                    <Badge variant="secondary" className="text-xs">
                                        Customer
                                    </Badge>
                                )}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {needBundle.createdAt}
                            </p>
                        </div>
                    </div>
                    <StatusBadge status={needBundle.status} size="sm" />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <p className="text-sm font-medium text-muted-foreground">
                            Requirement
                        </p>
                    </div>
                    <p className="text-sm leading-relaxed bg-secondary/30 rounded-xl p-3 border border-border/50">
                        {needBundle.description}
                    </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {needBundle.platform && (
                        <div className="flex items-center gap-2 text-sm bg-background/50 rounded-lg p-2">
                            <MessageCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground truncate">
                                {needBundle.platform}
                            </span>
                        </div>
                    )}
                    {needBundle.budgetRange && (
                        <div className="flex items-center gap-2 text-sm bg-background/50 rounded-lg p-2">
                            <DollarSign className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="text-muted-foreground truncate">
                                {needBundle.budgetRange}
                            </span>
                        </div>
                    )}
                    {needBundle.timeline && (
                        <div className="flex items-center gap-2 text-sm bg-background/50 rounded-lg p-2">
                            <Calendar className="h-4 w-4 text-warning flex-shrink-0" />
                            <span className="text-muted-foreground truncate">
                                {needBundle.timeline}
                            </span>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border/50">
                    {canTakeAction ? (
                        <>
                            <Button
                                onClick={handleApprove}
                                disabled={isProcessing}
                                className="flex-1 bg-gradient-to-r from-success to-emerald-600 hover:from-success/90 hover:to-emerald-600/90"
                                size="sm"
                            >
                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                Approve
                            </Button>
                            <Button
                                onClick={handleReject}
                                disabled={isProcessing}
                                variant="outline"
                                className="flex-1 border-destructive/50 text-destructive hover:bg-destructive/10"
                                size="sm"
                            >
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => onViewDetails?.(needBundle.id)}
                            variant="outline"
                            className="w-full"
                            size="sm"
                        >
                            View Details
                        </Button>
                    )}
                </div>
            </GlassCard>
        </motion.div>
    );
}
