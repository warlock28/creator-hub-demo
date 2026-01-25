import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CreatorLayout } from "@/components/layout/CreatorLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { StatusBadge, type BookingStatus } from "@/components/common/StatusBadge";
import {
  TrendingUp,
  Calendar,
  DollarSign,
  Eye,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Users,
  Inbox,
} from "lucide-react";

export default function CreatorDashboard() {
  const { user, userProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [creatorProfile, setCreatorProfile] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (!user) return;

      try {
        setLoading(true);
        // Fetch creator profile details
        const { data: profile, error: profileError } = await supabase
          .from('creator_profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;
        setCreatorProfile(profile);

        // Fetch orders (requests and bookings)
        const { data: ordersData, error: ordersError } = await supabase
          .from('orders')
          .select(`
            *,
            customer:profiles!customer_id (full_name, avatar_url),
            service:services!service_id (title)
          `)
          .eq('creator_id', user.id)
          .order('created_at', { ascending: false });

        if (ordersError) throw ordersError;
        setOrders(ordersData || []);

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [user]);

  // Derived state
  const pendingRequests = orders.filter(o => o.status === 'pending');
  const activeBookings = orders.filter(o => o.status === 'in_progress');

  // Calculate verified status based on creation (for now, or db field)
  const isVerified = creatorProfile?.is_verified;

  // Mock stats for now (as we don't have earnings table yet)
  const stats = [
    {
      label: "New Requests",
      value: pendingRequests.length.toString(),
      change: "0",
      trend: "neutral",
      icon: Inbox,
      color: "primary" as const,
    },
    {
      label: "Active Campaigns",
      value: activeBookings.length.toString(),
      change: "0",
      trend: "neutral",
      icon: TrendingUp,
      color: "success" as const,
    },
    {
      label: "Total Earnings",
      value: "₹0", // Placeholder until we sum authorized payments
      change: "+₹0",
      trend: "neutral",
      icon: DollarSign,
      color: "warning" as const,
    },
    {
      label: "Profile Views",
      value: "0",
      change: "0%",
      trend: "neutral",
      icon: Eye,
      color: "accent" as const,
    },
  ];

  return (
    <CreatorLayout>
      <div className="space-y-6 md:space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-3">
                Welcome back, {userProfile?.full_name?.split(' ')[0] || 'Creator'} 👋
                {isVerified && (
                  <Badge variant="success" className="text-sm">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Verified
                  </Badge>
                )}
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your creator profile today.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <GlassCard className="p-3 sm:p-4 md:p-5">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div
                    className={`h-10 w-10 md:h-11 md:w-11 rounded-xl flex items-center justify-center ${stat.color === "primary"
                      ? "bg-primary/10"
                      : stat.color === "success"
                        ? "bg-success/10"
                        : stat.color === "warning"
                          ? "bg-warning/10"
                          : "bg-accent/10"
                      }`}
                  >
                    <stat.icon
                      className={`h-5 w-5 ${stat.color === "primary"
                        ? "text-primary"
                        : stat.color === "success"
                          ? "text-success"
                          : stat.color === "warning"
                            ? "text-warning"
                            : "text-accent"
                        }`}
                    />
                  </div>
                  <div className="flex items-center gap-0.5 text-xs font-medium text-success">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </div>
                </div>
                <p className="font-display text-xl md:text-2xl font-bold">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* New Requests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                New Requests
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Customers looking to collaborate with you
              </p>
            </div>
          </div>

          {pendingRequests.length === 0 ? (
            <GlassCard className="p-12 text-center" hover={false}>
              <div className="max-w-sm mx-auto">
                <div className="h-20 w-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                  <Inbox className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  No New Requests
                </h3>
                <p className="text-sm text-muted-foreground">
                  When customers book your services, they'll appear here for you to review.
                </p>
              </div>
            </GlassCard>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {pendingRequests.map((order, index) => (
                <GlassCard key={order.id} className="p-3 sm:p-4 md:p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={order.customer?.avatar_url || "https://github.com/shadcn.png"} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">{order.customer?.full_name}</p>
                      <p className="text-xs text-muted-foreground">ordered {order.service?.title}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold">₹{order.amount}</span>
                    <Badge variant="outline">{order.status}</Badge>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </motion.div>

        {/* Confirmed Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <GlassCard className="p-3 sm:p-4 md:p-6" hover={false}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-base sm:text-lg md:text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Active Campaigns
              </h2>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {activeBookings.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No active campaigns at the moment.
              </div>
            ) : (
              <div className="space-y-4">
                {activeBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <img
                      src={booking.customer?.avatar_url || "https://github.com/shadcn.png"}
                      alt={booking.customer?.full_name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium truncate">{booking.customer?.full_name}</p>
                        <StatusBadge status={booking.status} size="sm" />
                      </div>
                      <p className="text-sm text-muted-foreground">{booking.service?.title}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold">₹{booking.amount?.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(booking.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </CreatorLayout>
  );
}
