import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PostNeedBundleDialog, type NeedBundleFormData } from "@/components/common/PostNeedBundleDialog";
import { StatusBadge, type BookingStatus } from "@/components/common/StatusBadge";
import {
  TrendingUp,
  Clock,
  CheckCircle2,
  Sparkles,
  Plus,
  Calendar,
  DollarSign,
  MessageCircle,
  Inbox,
  CreditCard,
  Eye,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
// Placeholder for requirements until backend table is added
const MOCK_REQUIREMENTS = [
  {
    id: "req1",
    description: "Looking for a tech reviewer to create an Instagram reel showcasing our new wireless earbuds. Need someone with strong engagement in Delhi/NCR region.",
    platform: "Instagram",
    budgetRange: "₹12,000 - ₹15,000",
    timeline: "Within 5 days",
    postedAt: "2 hours ago",
    status: "pending_creator_approval" as BookingStatus,
    interestedCreators: 3,
  }
];

export default function CustomerDashboard() {
  const { userProfile, user } = useAuth();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requirements, setRequirements] = useState(MOCK_REQUIREMENTS);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    pending: 0,
    active: 0,
    spent: 0
  });

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          creator:creator_profiles!creator_id(
            *,
            profiles:profiles!id(full_name, avatar_url)
          ),
          service:services!service_id(title)
        `)
        .eq('customer_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        setOrders(data);

        // Calculate stats
        const pending = data.filter(o => o.status === 'pending').length;
        const active = data.filter(o => o.status === 'in_progress').length;
        const spent = data
          .filter(o => o.status === 'completed' || o.status === 'in_progress')
          .reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

        setStats({ pending, active, spent });
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostNeedBundle = async (data: NeedBundleFormData) => {
    // TODO: Implement actual requirement posting when backend is ready
    const newRequirement = {
      id: `req${Date.now()}`,
      description: data.description,
      platform: data.platform,
      budgetRange: data.budgetRange,
      timeline: data.timeline,
      postedAt: "Just now",
      status: "pending_creator_approval" as BookingStatus,
      interestedCreators: 0,
    };
    setRequirements((prev) => [newRequirement, ...prev]);
  };

  const handleProceedToPayment = (requirementId: string) => {
    console.log("Proceeding to payment for:", requirementId);
  };

  const activeBookings = orders.filter(o => o.status === 'in_progress');

  return (
    <CustomerLayout>
      <div className="space-y-6 md:space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                Welcome back, {userProfile?.full_name?.split(' ')[0] || 'Customer'} 👋
              </h1>
              <p className="text-muted-foreground">
                Manage your campaigns and profile
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-4 md:p-5">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 bg-warning/10">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-warning" />
              </div>
              <p className="font-display text-xl md:text-2xl font-bold">{stats.pending}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-tight">Pending Orders</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <GlassCard className="p-4 md:p-5">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 bg-success/10">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-success" />
              </div>
              <p className="font-display text-xl md:text-2xl font-bold">{stats.active}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-tight">Active Campaigns</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-4 md:p-5">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 bg-primary/10">
                <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <p className="font-display text-xl md:text-2xl font-bold">₹{(stats.spent / 1000).toFixed(1)}K</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-tight">Total Spent</p>
            </GlassCard>
          </motion.div>
        </div>

        {/* My Requirements (Mock for now) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                My Requirements
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Track your posted requirements and creator responses
              </p>
            </div>
          </div>

          {requirements.length === 0 ? (
            <GlassCard className="p-12 text-center" hover={false}>
              <div className="max-w-sm mx-auto">
                <div className="h-20 w-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                  <Inbox className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  No Requirements Posted Yet
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Post your first requirement to start connecting with creators
                </p>
                <Button
                  onClick={() => setDialogOpen(true)}
                  className="bg-gradient-to-r from-violet-600 to-purple-600"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Post Requirement
                </Button>
              </div>
            </GlassCard>
          ) : (
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <GlassCard
                    className={`p-5 md:p-6 ${req.status === "approved_waiting_payment"
                      ? "border-2 border-success/30"
                      : ""
                      }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <StatusBadge status={req.status} size="sm" />
                          <Badge variant="secondary" className="text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            {req.interestedCreators} interested
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed mb-3">
                          {req.description}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                          {req.platform && (
                            <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded">
                              <MessageCircle className="h-3 w-3" />
                              {req.platform}
                            </span>
                          )}
                          {req.budgetRange && (
                            <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded">
                              <DollarSign className="h-3 w-3" />
                              {req.budgetRange}
                            </span>
                          )}
                          {req.timeline && (
                            <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded">
                              <Calendar className="h-3 w-3" />
                              {req.timeline}
                            </span>
                          )}
                          <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded">
                            <Clock className="h-3 w-3" />
                            {req.postedAt}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Active Bookings (Real Data) */}
        {activeBookings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="p-5 md:p-6" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg md:text-xl font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Active Campaigns
                </h2>
              </div>
              <div className="space-y-4">
                {activeBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <img
                      src={booking.creator?.profiles?.avatar_url || 'https://github.com/shadcn.png'}
                      alt={booking.creator?.profiles?.full_name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium truncate">{booking.creator?.profiles?.full_name}</p>
                        <StatusBadge status={booking.status} size="sm" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {booking.service?.title || 'Custom Service'}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold">
                          ₹{booking.amount?.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(booking.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Floating Action Button (Mobile Alternative) */}
        <motion.div
          className="fixed bottom-6 right-6 md:hidden z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <Button
            onClick={() => setDialogOpen(true)}
            size="lg"
            className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:scale-110 transition-transform"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>

      {/* Post Need Bundle Dialog */}
      <PostNeedBundleDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handlePostNeedBundle}
      />
    </CustomerLayout>
  );
}
