import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/common";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How do payouts work?",
    answer:
      "Brands deposit funds into an escrow wallet. Once both parties approve deliverables, payouts are triggered instantly to the creator’s verified bank account.",
  },
  {
    question: "Can I invite existing creators?",
    answer:
      "Yes. Send an invite from your dashboard and they’ll onboard with the same contracts, milestone tracking, and messaging threads as marketplace creators.",
  },
  {
    question: "Do you support agencies?",
    answer:
      "Agency workspaces support multiple seats, approval hierarchies, and client-specific billing so you can manage every campaign in one place.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Starter is forever free. Studio and Enterprise plans include a 14-day pilot with guided onboarding so you can ship your first collaboration risk-free.",
  },
];

export default function FAQs() {
  return (
    <PublicLayout>
      <div className="pt-28 pb-16 space-y-16">
        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="FAQs"
            title="Answers before you even start your first campaign"
            description="Still stuck? Slide into our WhatsApp line or book a 15-minute walkthrough."
          />
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border border-border rounded-2xl px-4">
                <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="container mx-auto px-4 lg:px-8">
          <GlassCard className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Need help?</p>
              <h3 className="font-display text-2xl font-semibold mt-2">Our creator success team responds in under 5 minutes.</h3>
              <p className="text-muted-foreground mt-2">Available 9am-10pm IST across WhatsApp, Slack Connect, and email.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <Button className="flex-1 lg:flex-none">Chat on WhatsApp</Button>
              <Button variant="outline" className="flex-1 lg:flex-none">
                Schedule a call
              </Button>
            </div>
          </GlassCard>
        </section>
      </div>
    </PublicLayout>
  );
}
