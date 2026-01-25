import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  step: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function TimelineItem({ step, title, description, align = "left", className }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("relative pl-10", className)}
    >
      <div className="absolute left-0 top-1 h-7 w-7 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs">
        {step}
      </div>
      <div className={cn("space-y-1", align === "center" ? "text-center" : "text-left")}>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{`Phase ${step}`}</p>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
