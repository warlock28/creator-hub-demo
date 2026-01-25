import { useState } from "react";
import { motion } from "framer-motion";
import { CreatorLayout } from "@/components/layout/CreatorLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Eye,
  MessageCircle,
  DollarSign,
  FileText,
  Package,
  TrendingUp,
} from "lucide-react";

interface Booking {
  id: string;
  customer: string;
  customerAvatar: string;
  service: string;
  amount: number;
  status: "pending" | "active" | "completed" | "rejected";
  date: string;
  deadline?: string;
  brief?: string;
  deliverables?: string[];
  progress?: number;
}

export default function CreatorBookings() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const bookings: Booking[] = [
    {
      id: "1",
      customer: "TechBrand India",
      customerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop",
      service: "Instagram Reel",
      amount: 15000,
      status: "pending",
      date: "Today, 10:30 AM",
      brief: "Create an engaging 60-second Instagram Reel showcasing our new smartphone. Highlight camera features, design, and performance. Use trending audio and include product shots.",
      deliverables: ["1 Instagram Reel (60 seconds)", "Raw footage", "Caption and hashtags"],
      deadline: "5 days",
    },
    {
      id: "2",
      customer: "GadgetWorld",
      customerAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop",
      service: "YouTube Video",
      amount: 35000,
      status: "pending",
      date: "Yesterday, 3:45 PM",
      brief: "Comprehensive review of our wireless earbuds. Cover unboxing, sound quality, battery life, and comparison with competitors. Target 10-12 minute video.",
      deliverables: ["YouTube video (10-12 min)", "Thumbnail design", "Description & tags"],
      deadline: "7 days",
    },
    {
      id: "3",
      customer: "StartupX",
      customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      service: "Blog Post",
      amount: 12000,
      status: "active",
      date: "3 days ago",
      brief: "Write an SEO-optimized blog post about productivity apps for remote workers. Include screenshots, pros/cons, and pricing comparison.",
      deliverables: ["Blog post (1500+ words)", "Featured image", "Meta description"],
      deadline: "2 days",
      progress: 60,
    },
    {
      id: "4",
      customer: "FashionHub",
      customerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      service: "Instagram Story Series",
      amount: 18000,
      status: "active",
      date: "5 days ago",
      brief: "Create a 5-story series showcasing our summer collection. Include try-on, styling tips, and swipe-up links.",
      deliverables: ["5 Instagram Stories", "Story highlights cover"],
      deadline: "1 day",
      progress: 80,
    },
    {
      id: "5",
      customer: "TechBrand India",
      customerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop",
      service: "Instagram Reel",
      amount: 15000,
      status: "completed",
      date: "1 week ago",
      brief: "Product launch announcement reel for smartwatch.",
      deliverables: ["1 Instagram Reel", "Raw footage"],
    },
    {
      id: "6",
      customer: "HealthFirst",
      customerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
      service: "Blog Post",
      amount: 12000,
      status: "completed",
      date: "2 weeks ago",
      brief: "Wellness tips blog post with expert interviews.",
      deliverables: ["Blog post", "Images"],
    },
  ];

  const pendingBookings = bookings.filter(b => b.status === "pending");
  const activeBookings = bookings.filter(b => b.status === "active");
  const completedBookings = bookings.filter(b => b.status === "completed");

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setDialogOpen(true);
  };

  const handleAccept = (bookingId: string) => {
    console.log("Accepted booking:", bookingId);
    // Handle accept logic
  };

  const handleReject = (bookingId: string) => {
    console.log("Rejected booking:", bookingId);
    // Handle reject logic
  };

  const BookingCard = ({ booking }: { booking: Booking }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <GlassCard className="p-3 sm:p-4 md:p-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={booking.customerAvatar}
              alt={booking.customer}
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <h3 className="font-semibold">{booking.customer}</h3>
              <p className="text-sm text-muted-foreground">{booking.service}</p>
            </div>
          </div>
          <Badge
            variant={
              booking.status === "pending" ? "warning" :
                booking.status === "active" ? "default" :
                  booking.status === "completed" ? "success" : "destructive"
            }
            className="capitalize"
          >
            {booking.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
            {booking.status === "active" && <TrendingUp className="h-3 w-3 mr-1" />}
            {booking.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
            {booking.status}
          </Badge>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{booking.date}</span>
          </div>
          {booking.deadline && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{booking.deadline} deadline</span>
            </div>
          )}
        </div>

        {booking.progress !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{booking.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${booking.progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="font-semibold text-base sm:text-lg">
            ₹{booking.amount.toLocaleString()}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleViewDetails(booking)}
            >
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
            {booking.status === "pending" && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleReject(booking.id)}
                >
                  <XCircle className="h-4 w-4 mr-1" />
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleAccept(booking.id)}
                >
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  Accept
                </Button>
              </>
            )}
            {booking.status === "active" && (
              <Button size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                Message
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );

  return (
    <CreatorLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Bookings
          </h1>
          <p className="text-muted-foreground">
            Manage your booking requests and active campaigns
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <GlassCard className="p-3 sm:p-4 md:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">New Requests</p>
                  <p className="font-display text-2xl font-bold">{pendingBookings.length}</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-3 sm:p-4 md:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Campaigns</p>
                  <p className="font-display text-2xl font-bold">{activeBookings.length}</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-3 sm:p-4 md:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completed</p>
                  <p className="font-display text-2xl font-bold">{completedBookings.length}</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Bookings Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="new" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4 sm:mb-6">
              <TabsTrigger value="new" className="relative text-xs sm:text-sm">
                New Requests
                {pendingBookings.length > 0 && (
                  <Badge variant="destructive" className="ml-2 h-5 px-1.5 text-xs">
                    {pendingBookings.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="active" className="text-xs sm:text-sm">Active</TabsTrigger>
              <TabsTrigger value="completed" className="text-xs sm:text-sm">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="new" className="space-y-4">
              {pendingBookings.length > 0 ? (
                pendingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <GlassCard className="p-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold text-lg mb-2">No pending requests</h3>
                  <p className="text-muted-foreground">
                    New booking requests will appear here
                  </p>
                </GlassCard>
              )}
            </TabsContent>

            <TabsContent value="active" className="space-y-4">
              {activeBookings.length > 0 ? (
                activeBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <GlassCard className="p-12 text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold text-lg mb-2">No active campaigns</h3>
                  <p className="text-muted-foreground">
                    Accepted bookings will appear here
                  </p>
                </GlassCard>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedBookings.length > 0 ? (
                completedBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <GlassCard className="p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold text-lg mb-2">No completed bookings</h3>
                  <p className="text-muted-foreground">
                    Finished campaigns will appear here
                  </p>
                </GlassCard>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Booking Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Booking Details</DialogTitle>
            <DialogDescription>
              Complete campaign information and requirements
            </DialogDescription>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-6 py-4">
              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={selectedBooking.customerAvatar}
                  alt={selectedBooking.customer}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{selectedBooking.customer}</h3>
                  <p className="text-sm text-muted-foreground">{selectedBooking.service}</p>
                </div>
              </div>

              {/* Brief */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Campaign Brief</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  {selectedBooking.brief}
                </p>
              </div>

              {/* Deliverables */}
              {selectedBooking.deliverables && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Deliverables</h4>
                  </div>
                  <ul className="space-y-2 pl-7">
                    {selectedBooking.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/30">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Budget</p>
                  <p className="font-semibold text-lg">₹{selectedBooking.amount.toLocaleString()}</p>
                </div>
                {selectedBooking.deadline && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Deadline</p>
                    <p className="font-semibold text-lg">{selectedBooking.deadline}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              {selectedBooking.status === "pending" && (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      handleReject(selectedBooking.id);
                      setDialogOpen(false);
                    }}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject Booking
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => {
                      handleAccept(selectedBooking.id);
                      setDialogOpen(false);
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Accept Booking
                  </Button>
                </div>
              )}
              {selectedBooking.status === "active" && (
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Button className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Customer
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Package className="h-4 w-4 mr-2" />
                    Submit Deliverables
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </CreatorLayout>
  );
}
