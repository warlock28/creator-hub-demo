import { useState } from "react";
import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Calendar,
    Clock,
    Search,
    MessageCircle,
    XCircle,
    CheckCircle,
    Filter,
    Eye,
} from "lucide-react";

interface Booking {
    id: string;
    creatorName: string;
    creatorAvatar: string;
    serviceName: string;
    bookingDate: string;
    deliveryDate: string;
    status: "pending" | "in-progress" | "completed" | "cancelled";
    price: number;
    creatorId: string;
}

const mockBookings: Booking[] = [
    {
        id: "1",
        creatorName: "Priya Sharma",
        creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        serviceName: "Instagram Reel",
        bookingDate: "2026-01-01",
        deliveryDate: "2026-01-06",
        status: "in-progress",
        price: 15000,
        creatorId: "1",
    },
    {
        id: "2",
        creatorName: "Rahul Verma",
        creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        serviceName: "Destination Vlog",
        bookingDate: "2025-12-28",
        deliveryDate: "2026-01-09",
        status: "pending",
        price: 40000,
        creatorId: "2",
    },
    {
        id: "3",
        creatorName: "Ananya Gupta",
        creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        serviceName: "Recipe Video",
        bookingDate: "2025-12-15",
        deliveryDate: "2025-12-22",
        status: "completed",
        price: 18000,
        creatorId: "3",
    },
];

const statusConfig = {
    pending: { color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", label: "Pending" },
    "in-progress": { color: "bg-blue-500/10 text-blue-600 border-blue-500/20", label: "In Progress" },
    completed: { color: "bg-green-500/10 text-green-600 border-green-500/20", label: "Completed" },
    cancelled: { color: "bg-red-500/10 text-red-600 border-red-500/20", label: "Cancelled" },
};

export default function CustomerBookings() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");

    const filteredBookings = mockBookings.filter((booking) => {
        const matchesSearch =
            booking.creatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.serviceName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === "all" || booking.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const stats = {
        total: mockBookings.length,
        pending: mockBookings.filter((b) => b.status === "pending").length,
        inProgress: mockBookings.filter((b) => b.status === "in-progress").length,
        completed: mockBookings.filter((b) => b.status === "completed").length,
    };

    return (
        <CustomerLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="font-display text-3xl font-bold mb-2">My Bookings</h1>
                    <p className="text-muted-foreground">
                        Track and manage your creator collaborations
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <GlassCard className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
                        <p className="text-2xl font-bold">{stats.total}</p>
                    </GlassCard>
                    <GlassCard className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">Pending</p>
                        <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                    </GlassCard>
                    <GlassCard className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">In Progress</p>
                        <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
                    </GlassCard>
                    <GlassCard className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">Completed</p>
                        <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                    </GlassCard>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search bookings..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={filterStatus === "all" ? "default" : "outline"}
                            onClick={() => setFilterStatus("all")}
                        >
                            All
                        </Button>
                        <Button
                            variant={filterStatus === "pending" ? "default" : "outline"}
                            onClick={() => setFilterStatus("pending")}
                        >
                            Pending
                        </Button>
                        <Button
                            variant={filterStatus === "in-progress" ? "default" : "outline"}
                            onClick={() => setFilterStatus("in-progress")}
                        >
                            Active
                        </Button>
                        <Button
                            variant={filterStatus === "completed" ? "default" : "outline"}
                            onClick={() => setFilterStatus("completed")}
                        >
                            Completed
                        </Button>
                    </div>
                </div>

                {/* Bookings List */}
                <div className="space-y-4">
                    {filteredBookings.length === 0 ? (
                        <GlassCard className="p-12 text-center">
                            <p className="text-muted-foreground mb-4">No bookings found</p>
                            <Button>Discover Creators</Button>
                        </GlassCard>
                    ) : (
                        filteredBookings.map((booking, index) => (
                            <motion.div
                                key={booking.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        {/* Creator Info */}
                                        <div className="flex items-start gap-4 flex-1">
                                            <img
                                                src={booking.creatorAvatar}
                                                alt={booking.creatorName}
                                                className="w-16 h-16 rounded-xl object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-lg mb-1">
                                                    {booking.serviceName}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    by {booking.creatorName}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>Booked: {new Date(booking.bookingDate).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>Delivery: {new Date(booking.deliveryDate).toLocaleDateString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status & Price */}
                                        <div className="flex flex-col items-end gap-3">
                                            <Badge className={statusConfig[booking.status].color}>
                                                {statusConfig[booking.status].label}
                                            </Badge>
                                            <p className="text-2xl font-bold">
                                                ₹{booking.price.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                                        <Button size="sm" variant="outline">
                                            <Eye className="h-4 w-4 mr-2" />
                                            View Details
                                        </Button>
                                        {booking.status === "completed" && (
                                            <Button size="sm" variant="outline">
                                                Leave Review
                                            </Button>
                                        )}
                                        {booking.status === "in-progress" && (
                                            <Button size="sm" variant="outline">
                                                <MessageCircle className="h-4 w-4 mr-2" />
                                                Message Creator
                                            </Button>
                                        )}
                                        {booking.status === "pending" && (
                                            <Button size="sm" variant="destructive">
                                                <XCircle className="h-4 w-4 mr-2" />
                                                Cancel Booking
                                            </Button>
                                        )}
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
