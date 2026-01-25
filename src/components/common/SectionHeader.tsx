import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={cn("space-y-3", align === "center" ? "text-center" : "text-left", className)}
    >
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl font-semibold">{title}</h2>
      {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  );
}
