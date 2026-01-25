import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/common";

const cookieTypes = [
  { title: "Essential cookies", details: "Required for authentication, session persistence, and basic routing. These cannot be disabled." },
  { title: "Analytics cookies", details: "Help us measure feature adoption. We sample anonymized data and never sell it to third parties." },
  { title: "Preference cookies", details: "Store your theme choice, saved filters, and recently viewed creators." },
  { title: "Marketing cookies", details: "Only set when you opt in to receive AdPromoo updates or remarketing campaigns." },
];

export default function Cookies() {
  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-10">
        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="Cookies"
            title="Cookie Policy"
            description="AdPromoo uses cookies to deliver secure, personalized experiences. Adjust your preferences anytime."
            align="left"
          />
          <div className="space-y-5">
            {cookieTypes.map((cookie) => (
              <article key={cookie.title} className="space-y-2">
                <h3 className="font-display text-xl">{cookie.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cookie.details}</p>
              </article>
            ))}
            <p className="text-sm text-muted-foreground">
              Update your consent preferences inside Settings → Privacy. Questions? Email cookies@adpromoo.in.
            </p>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
