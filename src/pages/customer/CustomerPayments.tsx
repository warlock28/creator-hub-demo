import { useState } from "react";
import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    CreditCard,
    Download,
    Search,
    Calendar,
    CheckCircle2,
    XCircle,
    Clock,
    Filter,
} from "lucide-react";

interface Payment {
    id: string;
    transactionId: string;
    creatorName: string;
    serviceName: string;
    amount: number;
    date: string;
    status: "completed" | "pending" | "failed" | "refunded";
    paymentMethod: string;
}

const mockPayments: Payment[] = [
    {
        id: "1",
        transactionId: "TXN20260101001",
        creatorName: "Priya Sharma",
        serviceName: "Instagram Reel",
        amount: 15000,
        date: "2026-01-01",
        status: "completed",
        paymentMethod: "UPI",
    },
    {
        id: "2",
        transactionId: "TXN20251228002",
        creatorName: "Rahul Verma",
        serviceName: "Destination Vlog",
        amount: 40000,
        date: "2025-12-28",
        status: "completed",
        paymentMethod: "Credit Card",
    },
    {
        id: "3",
        transactionId: "TXN20251215003",
        creatorName: "Ananya Gupta",
        serviceName: "Recipe Video",
        amount: 18000,
        date: "2025-12-15",
        status: "completed",
        paymentMethod: "Debit Card",
    },
    {
        id: "4",
        transactionId: "TXN20251210004",
        creatorName: "Arjun Patel",
        serviceName: "Workout Tutorial",
        amount: 12000,
        date: "2025-12-10",
        status: "refunded",
        paymentMethod: "UPI",
    },
];

const statusConfig = {
    completed: {
        color: "bg-green-500/10 text-green-600 border-green-500/20",
        label: "Completed",
        icon: CheckCircle2,
    },
    pending: {
        color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
        label: "Pending",
        icon: Clock,
    },
    failed: {
        color: "bg-red-500/10 text-red-600 border-red-500/20",
        label: "Failed",
        icon: XCircle,
    },
    refunded: {
        color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
        label: "Refunded",
        icon: CheckCircle2,
    },
};

export default function CustomerPayments() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");

    const filteredPayments = mockPayments.filter((payment) => {
        const matchesSearch =
            payment.creatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === "all" || payment.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const totalSpent = mockPayments
        .filter((p) => p.status === "completed")
        .reduce((sum, p) => sum + p.amount, 0);

    return (
        <CustomerLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="font-display text-3xl font-bold mb-2">Payment History</h1>
                    <p className="text-muted-foreground">
                        Track your transactions and download invoices
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                <CreditCard className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Total Spent</p>
                                <p className="text-2xl font-bold">₹{totalSpent.toLocaleString()}</p>
                            </div>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Completed</p>
                                <p className="text-2xl font-bold">
                                    {mockPayments.filter((p) => p.status === "completed").length}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                                <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">This Month</p>
                                <p className="text-2xl font-bold">
                                    {
                                        mockPayments.filter(
                                            (p) => new Date(p.date).getMonth() === new Date().getMonth()
                                        ).length
                                    }
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search by creator, service or transaction ID..."
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
                            variant={filterStatus === "completed" ? "default" : "outline"}
                            onClick={() => setFilterStatus("completed")}
                        >
                            Completed
                        </Button>
                        <Button
                            variant={filterStatus === "refunded" ? "default" : "outline"}
                            onClick={() => setFilterStatus("refunded")}
                        >
                            Refunded
                        </Button>
                    </div>
                </div>

                {/* Payments List */}
                <div className="space-y-4">
                    {filteredPayments.length === 0 ? (
                        <GlassCard className="p-12 text-center">
                            <p className="text-muted-foreground">No payments found</p>
                        </GlassCard>
                    ) : (
                        filteredPayments.map((payment, index) => {
                            const StatusIcon = statusConfig[payment.status].icon;
                            return (
                                <motion.div
                                    key={payment.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <GlassCard className="p-6">
                                        <div className="flex flex-col lg:flex-row gap-6">
                                            {/* Payment Info */}
                                            <div className="flex-1 space-y-3">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-lg mb-1">
                                                            {payment.serviceName}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {payment.creatorName}
                                                        </p>
                                                    </div>
                                                    <Badge className={statusConfig[payment.status].color}>
                                                        <StatusIcon className="h-3 w-3 mr-1" />
                                                        {statusConfig[payment.status].label}
                                                    </Badge>
                                                </div>

                                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{new Date(payment.date).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <CreditCard className="h-4 w-4" />
                                                        <span>{payment.paymentMethod}</span>
                                                    </div>
                                                    <span className="text-xs font-mono bg-secondary/50 px-2 py-1 rounded">
                                                        {payment.transactionId}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Amount & Actions */}
                                            <div className="flex flex-col items-end gap-3">
                                                <p className="text-2xl font-bold">
                                                    ₹{payment.amount.toLocaleString()}
                                                </p>
                                                <Button size="sm" variant="outline">
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Invoice
                                                </Button>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </div>
        </CustomerLayout>
    );
}
