import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/common";

const policies = [
  {
    title: "Data we collect",
    details:
      "Contact info, campaign context, payment details, and analytics data generated inside AdPromoo. We never collect unnecessary personal data.",
  },
  {
    title: "How we use your data",
    details:
      "To verify creator identities, match briefs, process escrow payouts, and improve product performance. Aggregated insights may be shared anonymously.",
  },
  {
    title: "Storage & security",
    details:
      "Data is stored in Supabase/Postgres clusters located in Mumbai with automated backups and encryption at rest. All secrets use env-specific key management.",
  },
  {
    title: "Third-party processors",
    details:
      "We integrate with Razorpay, AWS, and analytics tools that comply with GDPR and Indian data protection laws. Vendors are audited annually.",
  },
  {
    title: "Your rights",
    details:
      "Email privacy@adpromoo.in to request data export, correction, or deletion. We respond within 7 business days.",
  },
];

export default function Privacy() {
  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-10">
        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="Privacy"
            title="Privacy Policy"
            description="We design AdPromoo with privacy-by-default so your campaigns stay compliant."
            align="left"
          />
          <div className="space-y-5">
            {policies.map((policy) => (
              <article key={policy.title} className="space-y-2">
                <h3 className="font-display text-xl">{policy.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{policy.details}</p>
              </article>
            ))}
            <p className="text-sm text-muted-foreground">Need a signed DPA? We can provide one for paid plans.</p>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
