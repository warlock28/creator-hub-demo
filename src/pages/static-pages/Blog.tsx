import { ArrowRight } from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/common";

const posts = [
  {
    title: "How to set pricing tiers without undercutting your creator partners",
    excerpt: "A four-step framework for aligning deliverables, exclusivity, and licensing with transparent rate cards.",
    tag: "Strategy",
    readTime: "7 min read",
  },
  {
    title: "Escrow playbook for finance teams",
    excerpt: "We break down RBI-compliant flows, GST-ready invoices, and how to keep procurement aligned.",
    tag: "Operations",
    readTime: "5 min read",
  },
  {
    title: "Designing briefs creators actually enjoy reading",
    excerpt: "Use the STORY grid to remove guesswork and give creators enough context to shine.",
    tag: "Creative",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-12">
        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="Blog"
            title="Signals from the AdPromoo studio"
            description="Stories, frameworks, and experiments from India’s most active creator marketplace."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <GlassCard key={post.title} className="space-y-4">
                <Badge variant="outline">{post.tag}</Badge>
                <div>
                  <h3 className="font-display text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.readTime}</span>
                  <Button variant="link" className="px-0 text-primary">
                    Read article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
