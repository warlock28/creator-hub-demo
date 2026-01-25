import { Download, FileText, PlayCircle } from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/common";

const resources = [
  {
    title: "2026 Creator Economy Playbook",
    type: "Report",
    format: "PDF · 48 pages",
    description: "Benchmarks for CPMs, performance metrics, and pricing ladders across Indian cities.",
    action: "Download PDF",
  },
  {
    title: "Brief Builder Templates",
    type: "Template",
    format: "Figma + Google Docs",
    description: "Plug-and-play question sets to capture brand tone, deliverables, and approval flows.",
    action: "Get template",
  },
  {
    title: "Escrow & Compliance Guide",
    type: "Guide",
    format: "Notion",
    description: "Everything legal and finance teams need before rolling out creator payments at scale.",
    action: "Open guide",
  },
  {
    title: "AdPromoo Office Hours",
    type: "Webinar",
    format: "Video · 35 min",
    description: "Product walkthrough plus Q&A on building sustainable creator partnerships.",
    action: "Watch replay",
  },
];

export default function Resources() {
  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-16">
        <section className="container mx-auto px-4 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="Resources"
            title="Playbooks and templates built from 12,000+ collaborations"
            description="Download ready-to-use frameworks, reports, and office hours to level up your creator ops."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <GlassCard key={resource.title} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{resource.type}</Badge>
                  <p className="text-xs text-muted-foreground">{resource.format}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{resource.description}</p>
                </div>
                <div className="mt-auto">
                  <Button variant="ghost" className="px-0">
                    {resource.action}
                    {resource.type === "Webinar" ? (
                      <PlayCircle className="h-4 w-4 ml-2" />
                    ) : resource.type === "Template" ? (
                      <FileText className="h-4 w-4 ml-2" />
                    ) : (
                      <Download className="h-4 w-4 ml-2" />
                    )}
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
