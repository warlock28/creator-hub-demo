import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Loader2,
  DollarSign,
  Shield,
  Ban,
  Hourglass,
} from "lucide-react";

// Booking Status Types
export type BookingStatus =
  | "draft"
  | "pending_creator_approval"
  | "approved_waiting_payment"
  | "rejected"
  | "confirmed"
  | "in_progress"
  | "completed"
  | "cancelled"
  | "disputed";

// Payment Status Types
export type PaymentStatus =
  | "pending"
  | "held_in_escrow"
  | "released"
  | "refunded";

interface StatusBadgeProps {
  status: BookingStatus | PaymentStatus;
  size?: "sm" | "default" | "lg";
  showIcon?: boolean;
  className?: string;
}

const bookingStatusConfig: Record<
  BookingStatus,
  {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
    icon: typeof Clock;
    color: string;
  }
> = {
  draft: {
    label: "Draft",
    variant: "secondary",
    icon: AlertCircle,
    color: "text-muted-foreground",
  },
  pending_creator_approval: {
    label: "Pending Approval",
    variant: "warning",
    icon: Clock,
    color: "text-warning",
  },
  approved_waiting_payment: {
    label: "Awaiting Payment",
    variant: "default",
    icon: DollarSign,
    color: "text-primary",
  },
  rejected: {
    label: "Rejected",
    variant: "destructive",
    icon: XCircle,
    color: "text-destructive",
  },
  confirmed: {
    label: "Confirmed",
    variant: "success",
    icon: CheckCircle2,
    color: "text-success",
  },
  in_progress: {
    label: "In Progress",
    variant: "default",
    icon: Loader2,
    color: "text-primary",
  },
  completed: {
    label: "Completed",
    variant: "success",
    icon: CheckCircle2,
    color: "text-success",
  },
  cancelled: {
    label: "Cancelled",
    variant: "secondary",
    icon: Ban,
    color: "text-muted-foreground",
  },
  disputed: {
    label: "Disputed",
    variant: "destructive",
    icon: AlertCircle,
    color: "text-destructive",
  },
};

const paymentStatusConfig: Record<
  PaymentStatus,
  {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
    icon: typeof Clock;
    color: string;
  }
> = {
  pending: {
    label: "Payment Pending",
    variant: "warning",
    icon: Hourglass,
    color: "text-warning",
  },
  held_in_escrow: {
    label: "In Escrow",
    variant: "default",
    icon: Shield,
    color: "text-primary",
  },
  released: {
    label: "Payment Released",
    variant: "success",
    icon: CheckCircle2,
    color: "text-success",
  },
  refunded: {
    label: "Refunded",
    variant: "secondary",
    icon: DollarSign,
    color: "text-muted-foreground",
  },
};

export function StatusBadge({
  status,
  size = "default",
  showIcon = true,
  className,
}: StatusBadgeProps) {
  const isBookingStatus = status in bookingStatusConfig;
  const config = isBookingStatus
    ? bookingStatusConfig[status as BookingStatus]
    : paymentStatusConfig[status as PaymentStatus];

  const Icon = config.icon;
  const isAnimated = status === "in_progress";

  return (
    <Badge
      variant={config.variant}
      className={cn(
        "font-medium transition-all duration-300",
        size === "sm" && "text-xs px-2 py-0.5",
        size === "lg" && "text-sm px-4 py-2",
        className
      )}
    >
      {showIcon && (
        <Icon
          className={cn(
            "mr-1.5",
            size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
            config.color,
            isAnimated && "animate-spin"
          )}
        />
      )}
      {config.label}
    </Badge>
  );
}
