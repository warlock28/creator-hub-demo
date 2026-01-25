import { Users, Rocket, HeartHandshake, Globe } from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader, StatCard } from "@/components/common";

const values = [
  {
    icon: Users,
    title: "Human-first",
    copy: "We protect creators and brand teams with fair payouts, transparent timelines, and RLS-ready data policies.",
  },
  {
    icon: Rocket,
    title: "Ship fast",
    copy: "We release product upgrades every Friday so campaigns keep moving, no matter the sprint.",
  },
  {
    icon: HeartHandshake,
    title: "Earn trust",
    copy: "Escrow safeguards and clear contracts mean fewer surprises, more long-term partnerships.",
  },
  {
    icon: Globe,
    title: "Build locally, scale globally",
    copy: "Our HQ is in Bengaluru, but we support campaigns in 50+ cities (and expanding to SEA soon).",
  },
];

const leadership = [
  { name: "Simran Kaur", role: "Co-founder & CEO", bio: "Previously led creator monetization at a top OTT platform." },
  { name: "Aman Mehta", role: "Co-founder & CTO", bio: "Built payment infra for India’s largest fintech startups." },
  { name: "Neha Kulkarni", role: "Head of Creator Success", bio: "Scaled 1,000+ creator relationships across APAC." },
];

const stats = [
  { label: "Campaign volume (2025)", value: "₹120Cr" },
  { label: "Creators verified", value: "10,000+" },
  { label: "Team members", value: "48" },
];

export default function About() {
  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-16">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="About"
            title="We’re building the operating system for India’s creator economy"
            description="AdPromoo was born so marketers and creators could work together without spreadsheets, gatekeepers, or delayed payments."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} delay={index * 0.1} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <GlassCard key={value.title} className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.copy}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="Team"
            title="Leadership that understands creators and brands"
            description="We blend product, payments, and storytelling expertise to build software that feels bespoke."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader) => (
              <GlassCard key={leader.name} className="space-y-3 text-center">
                <div className="mx-auto h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center font-display text-2xl text-primary">
                  {leader.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="font-display text-xl">{leader.name}</h3>
                <p className="text-sm text-primary font-semibold">{leader.role}</p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
