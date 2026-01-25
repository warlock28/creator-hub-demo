import { useMemo, useState } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader, StatCard } from "@/components/common";

type SegmentFilter = "all" | "beauty" | "fintech" | "wellness" | "saas";

interface StoryMetric {
  label: string;
  value: string;
  helper?: string;
}

interface CaseStudy {
  id: string;
  brand: string;
  industry: string;
  goal: string;
  summary: string;
  quote: string;
  creator: string;
  creatorRole: string;
  metrics: StoryMetric[];
  impact?: StoryMetric[];
  deliverables: string[];
  timeline: string;
  segment: Exclude<SegmentFilter, "all">;
}

const segmentFilters: { id: SegmentFilter; label: string }[] = [
  { id: "all", label: "All industries" },
  { id: "beauty", label: "Beauty & Lifestyle" },
  { id: "fintech", label: "Fintech" },
  { id: "wellness", label: "Health & Fitness" },
  { id: "saas", label: "B2B / SaaS" },
];

const featuredCaseStudy: CaseStudy = {
  id: "nyra-beauty",
  brand: "Nyra Beauty",
  industry: "Beauty & Wellness",
  goal: "Launch clean skincare with Gen-Z trust",
  summary: "Clean, clinically-backed skincare entering 120 new stores needed instant social proof with Gen-Z shoppers.",
  quote:
    "The AdPromoo workflow shaved two weeks off our usual approval cycle. Every reel matched the brief on the first cut.",
  creator: "Priya Sharma",
  creatorRole: "Lead Skinfluencer",
  metrics: [
    { label: "Reach", value: "8.4M" },
    { label: "Conversion lift", value: "+27%" },
  ],
  impact: [
    { label: "Creator acceptance", value: "93%", helper: "24 shortlisted" },
    { label: "Approved assets", value: "48", helper: "UGC + live streams" },
    { label: "Cycle time", value: "-14 days", helper: "vs last launch" },
  ],
  deliverables: ["Live shopping sprint", "Creator diaries", "Escrow payouts"],
  timeline: "6-week sprint",
  segment: "beauty",
};

const caseStudies: CaseStudy[] = [
  featuredCaseStudy,
  {
    id: "swiftpay",
    brand: "SwiftPay",
    industry: "Fintech",
    goal: "Acquire SMB merchants in tier-2 cities",
    summary: "Regulated fintech scale-up pairing micro-influencers with multilingual explainers and WhatsApp lead funnels.",
    quote:
      "Hyper-local creators understood the product nuance. Escrow plus milestone reminders kept everyone accountable.",
    creator: "Rahul Verma",
    creatorRole: "Regional creator, Jaipur",
    metrics: [
      { label: "Signups", value: "12K" },
      { label: "CAC improvement", value: "-34%" },
    ],
    deliverables: ["12 vernacular reels", "Creator AMAs", "WhatsApp handoffs"],
    timeline: "8-week pod",
    segment: "fintech",
  },
  {
    id: "pulsefit",
    brand: "PulseFit",
    industry: "Health & Fitness",
    goal: "Drive subscription renewals for connected fitness",
    summary: "Retention squad activated alumni instructors plus quantified social proof for 45-day win-back push.",
    quote:
      "We synced our CRM with AdPromoo to re-engage dormant users. The dashboards gave us live pulse on every collaboration.",
    creator: "Ananya Gupta",
    creatorRole: "Wellness creator & physiotherapist",
    metrics: [
      { label: "Renewals", value: "3.1x" },
      { label: "NPS", value: "71" },
    ],
    deliverables: ["Accountability challenge", "Progress check-ins", "Wearable integrations"],
    timeline: "45-day sprint",
    segment: "wellness",
  },
  {
    id: "ledgerloop",
    brand: "LedgerLoop",
    industry: "B2B SaaS",
    goal: "Shorten sales cycles for finance automation",
    summary: "Customer marketing paired CFO creators with snackable case breakdowns aimed at Series B startups.",
    quote:
      "Finance leaders trusted peers over ads. AdPromoo let us swap compliance notes and creative in one secure workspace.",
    creator: "Meera Iyer",
    creatorRole: "Fractional CFO & creator",
    metrics: [
      { label: "Pipeline influenced", value: "$4.2M" },
      { label: "Demo-to-close", value: "-22%" },
    ],
    deliverables: ["Founder fireside", "Workflow teardown", "Interactive notion kit"],
    timeline: "90-day cohort",
    segment: "saas",
  },
];

const socialProof = [
  {
    label: "Creators rated 4.8+",
    value: "98%",
    description: "Multi-step briefs lift quality and reduce reshoots.",
  },
  {
    label: "Cities covered",
    value: "50+",
    description: "Local creator benches across metros & tier-2 hubs.",
  },
  {
    label: "Campaigns delivered",
    value: "12,400",
    description: "Every project tracked inside escrow-backed workflows.",
  },
];

const playbookPillars = [
  { title: "Creator CRM sync", detail: "Auto-matched 24 skincare specialists with availability + rates." },
  { title: "Escrow milestones", detail: "Assets approved per stage; payouts unlocked without back-and-forth." },
  { title: "Outcome dashboards", detail: "Creative, spend, and CRM metrics surfaced live for sales + marketing." },
];

export default function Stories() {
  const [activeSegment, setActiveSegment] = useState<SegmentFilter>("all");

  const filteredStories = useMemo(
    () => (activeSegment === "all" ? caseStudies : caseStudies.filter((story) => story.segment === activeSegment)),
    [activeSegment],
  );

  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-20">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Success Stories"
            title="Brands grow faster when the right creators tell the story"
            description="From fintech to beauty, AdPromoo pairs you with vetted voices, escrow-backed workflows, and transparent analytics so every brief ships on schedule."
            align="left"
          />
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <GlassCard
              hover={false}
              className="relative overflow-hidden bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-primary-foreground/70">Featured case</p>
                  <h3 className="font-display text-3xl font-semibold mt-1">{featuredCaseStudy.brand}</h3>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed mt-2">{featuredCaseStudy.summary}</p>
                </div>
                <Badge variant="outline" className="border-white/30 text-white/90">
                  {featuredCaseStudy.timeline}
                </Badge>
              </div>

              <p className="text-sm text-primary-foreground/80 leading-relaxed mt-6">
                <Quote className="mr-2 inline-block h-4 w-4 text-primary-foreground" />
                {featuredCaseStudy.quote}
              </p>

              <div className="grid gap-4 mt-6 sm:grid-cols-3">
                {featuredCaseStudy.impact?.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-wide text-white/70">{metric.label}</p>
                    <p className="font-display text-2xl font-semibold">{metric.value}</p>
                    {metric.helper && <p className="text-xs text-white/70 mt-1">{metric.helper}</p>}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {featuredCaseStudy.deliverables.map((item) => (
                  <Badge key={item} variant="secondary" className="bg-white/15 text-white">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold">{featuredCaseStudy.creator}</p>
                <p className="text-sm text-white/70">{featuredCaseStudy.creatorRole}</p>
              </div>
            </GlassCard>

            <GlassCard hover={false} className="flex h-full flex-col gap-6 bg-secondary/40">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Playbook</p>
                <h3 className="font-display text-2xl font-semibold">Why this collaboration worked</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  Every case study is backed by operational guardrails—automations that keep creators, legal, and finance
                  aligned.
                </p>
              </div>
              <div className="space-y-4">
                {playbookPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border border-border/60 bg-background/80 p-4">
                    <p className="text-sm font-semibold">{pillar.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{pillar.detail}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-secondary/60 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Need this for your team?</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <Button size="lg">Book a walkthrough</Button>
                  <Button size="lg" variant="ghost" className="text-foreground hover:text-primary">
                    Download brief template
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Industry snapshots</p>
              <h3 className="font-display text-2xl font-semibold mt-2">Filter proven playbooks by campaign focus</h3>
              <p className="text-muted-foreground text-sm">
                Choose an industry to see the metrics and deliverables brands shipped inside AdPromoo.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {segmentFilters.map((filter) => (
                <Button
                  key={filter.id}
                  size="sm"
                  variant={activeSegment === filter.id ? "default" : "ghost"}
                  className={activeSegment === filter.id ? "" : "border border-border"}
                  onClick={() => setActiveSegment(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredStories.map((story) => (
              <GlassCard key={story.id} className="flex h-full flex-col gap-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{story.industry}</p>
                    <h4 className="font-display text-xl font-semibold mt-1">{story.brand}</h4>
                    <p className="text-sm text-muted-foreground">{story.goal}</p>
                  </div>
                  <Badge variant="outline" className="bg-secondary/40">
                    {story.timeline}
                  </Badge>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{story.summary}</p>

                <p className="text-sm text-muted-foreground">
                  <Quote className="mr-2 inline-block h-4 w-4 text-primary" />
                  {story.quote}
                </p>

                <div className="flex flex-wrap gap-2">
                  {story.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary" className="rounded-full bg-secondary/60">
                      {deliverable}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {story.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-secondary/40 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                      <p className="font-display text-2xl font-semibold">{metric.value}</p>
                      {metric.helper && <p className="text-xs text-muted-foreground mt-1">{metric.helper}</p>}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-border/60 p-4">
                  <div>
                    <p className="text-sm font-semibold">{story.creator}</p>
                    <p className="text-xs text-muted-foreground">{story.creatorRole}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View brief
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 space-y-10">
          <div className="grid gap-6 md:grid-cols-3">
            {socialProof.map((item, index) => (
              <StatCard key={item.label} label={item.label} value={item.value} description={item.description} delay={index * 0.1} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[40px] gradient-primary text-primary-foreground p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">Next Chapter</p>
              <h2 className="font-display text-3xl font-semibold mt-2">Write your own success story</h2>
              <p className="text-primary-foreground/80 mt-2 max-w-2xl">
                Share your brief, match with verified creators, and measure outcomes in one workspace. Export ready-to-use case
                studies for sales, growth, and investor updates.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="glass" className="text-primary">
                Book a walkthrough
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground">
                Download case studies
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
