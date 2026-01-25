import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  description?: string;
  delay?: number;
  className?: string;
}

export function StatCard({ label, value, description, delay = 0, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className={cn("rounded-3xl bg-card text-card-foreground border border-border/60 p-6 shadow-sm", className)}
    >
      <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">{label}</p>
      <p className="font-display text-3xl md:text-4xl font-semibold">{value}</p>
      {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
    </motion.div>
  );
}
