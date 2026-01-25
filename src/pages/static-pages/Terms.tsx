import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/common";

const sections = [
  {
    title: "1. Acceptance",
    body:
      "By accessing AdPromoo you agree to these Terms, the Privacy Policy, and any product-specific agreements. If you’re acting on behalf of an organization, you confirm you have authority to bind that entity.",
  },
  {
    title: "2. Platform access",
    body:
      "We provide software-as-a-service tools that connect brands and creators. We may modify features, but we’ll always give reasonable notice for changes that materially impact your workflow.",
  },
  {
    title: "3. Payment & escrow",
    body:
      "Brands must preload milestones into escrow before creators begin work. Funds are released once both parties approve deliverables. If there’s a dispute, our success team mediates and can refund or reassign milestones.",
  },
  {
    title: "4. Intellectual property",
    body:
      "Creators retain ownership of their original content unless stated otherwise in the brief. Brands receive usage rights described in each milestone (e.g., platform, duration, geography). Please document variations inside the dashboard.",
  },
  {
    title: "5. Prohibited use",
    body:
      "No spam, fraudulent reviews, hate speech, or illegal products. Accounts violating these rules may be suspended without refund.",
  },
];

export default function Terms() {
  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-10">
        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="Legal"
            title="Terms of Service"
            description="Last updated: 25 December 2025. AdPromoo is a product of Aurum Labs Pvt. Ltd."
            align="left"
          />
          <div className="space-y-6">
            {sections.map((section) => (
              <article key={section.title} className="space-y-2">
                <h3 className="font-display text-xl">{section.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
              </article>
            ))}
            <p className="text-sm text-muted-foreground">
              Questions? Reach out at legal@adpromoo.in. We’re happy to walk you through specific clauses or provide a signed copy.
            </p>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
