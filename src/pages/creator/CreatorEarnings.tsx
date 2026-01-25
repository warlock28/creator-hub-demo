import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CreatorLayout } from "@/components/layout/CreatorLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  Loader2
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";

interface Transaction {
  id: string;
  type: "earning" | "withdrawal";
  amount: number;
  status: string;
  date: string;
  description: string;
  customer_name?: string;
}

interface EarningsData {
  total_earned: number;
  pending_balance: number;
  available_balance: number;
}

export default function CreatorEarnings() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [earnings, setEarnings] = useState<EarningsData>({
    total_earned: 0,
    pending_balance: 0,
    available_balance: 0
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        setLoading(true);

        // Fetch Earnings
        const { data: earningsData, error: earningsError } = await supabase
          .from('creator_earnings')
          .select('*')
          .eq('creator_id', user.id)
          .single();

        if (earningsData) {
          setEarnings(earningsData);
        }

        // Fetch Transactions
        const { data: transactionsData, error: transactionsError } = await supabase
          .from('transactions')
          .select('*')
          .eq('creator_id', user.id)
          .order('date', { ascending: false });

        if (transactionsData) {
          setTransactions(transactionsData as any);
        }

      } catch (error) {
        console.error("Error fetching earnings data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const earningTransactions = transactions.filter(t => t.type === "earning");
  const withdrawalTransactions = transactions.filter(t => t.type === "withdrawal");

  if (loading) {
    return (
      <CreatorLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </CreatorLayout>
    )
  }

  return (
    <CreatorLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Earnings & Wallet
          </h1>
          <p className="text-muted-foreground">
            Track your earnings and manage withdrawals
          </p>
        </motion.div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-4 sm:p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <p className="font-display text-2xl font-bold">
                    ₹{earnings.total_earned.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>Lifetime Earnings</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <GlassCard className="p-4 sm:p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Available Balance</p>
                  <p className="font-display text-2xl font-bold">
                    ₹{earnings.available_balance.toLocaleString()}
                  </p>
                </div>
              </div>
              <Button className="w-full" size="sm" disabled={earnings.available_balance <= 0}>
                <Download className="h-4 w-4 mr-2" />
                Withdraw Funds
              </Button>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-4 sm:p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending Payments</p>
                  <p className="font-display text-2xl font-bold">
                    ₹{earnings.pending_balance.toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Payment clearing time: ~7 days
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-4 sm:p-5 md:p-6">
            <h2 className="font-display text-lg font-semibold mb-6">Transaction History</h2>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4 sm:mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
                <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3">
                {transactions.length === 0 && <p className="text-center text-muted-foreground py-8">No transactions yet.</p>}
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors gap-3 sm:gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-11 w-11 rounded-xl flex items-center justify-center ${transaction.type === "earning"
                          ? "bg-success/10"
                          : "bg-primary/10"
                          }`}
                      >
                        {transaction.type === "earning" ? (
                          <ArrowDownRight className="h-5 w-5 text-success rotate-180" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{format(new Date(transaction.date), 'MMM dd, yyyy')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold text-lg ${transaction.type === "earning" ? "text-success" : ""
                        }`}>
                        {transaction.type === "earning" ? "+" : "-"}₹{Number(transaction.amount).toLocaleString()}
                      </p>
                      <Badge
                        variant={
                          transaction.status === "completed" ? "success" :
                            transaction.status === "processing" ? "default" : "warning"
                        }
                        className="text-xs"
                      >
                        {transaction.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="earnings" className="space-y-3">
                {earningTransactions.length === 0 && <p className="text-center text-muted-foreground py-8">No earning transactions yet.</p>}
                {earningTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-xl bg-success/10 flex items-center justify-center">
                        <ArrowDownRight className="h-5 w-5 text-success rotate-180" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{format(new Date(transaction.date), 'MMM dd, yyyy')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg text-success">
                        +₹{Number(transaction.amount).toLocaleString()}
                      </p>
                      <Badge
                        variant={transaction.status === "completed" ? "success" : "warning"}
                        className="text-xs"
                      >
                        {transaction.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="withdrawals" className="space-y-3">
                {withdrawalTransactions.length === 0 && <p className="text-center text-muted-foreground py-8">No withdrawal transactions yet.</p>}
                {withdrawalTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <ArrowUpRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{format(new Date(transaction.date), 'MMM dd, yyyy')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">
                        -₹{Number(transaction.amount).toLocaleString()}
                      </p>
                      <Badge
                        variant={transaction.status === "completed" ? "success" : "default"}
                        className="text-xs"
                      >
                        {transaction.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </GlassCard>
        </motion.div>
      </div>
    </CreatorLayout>
  );
}
