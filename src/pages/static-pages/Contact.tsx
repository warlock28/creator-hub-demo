import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/common";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a little more"),
});

type ContactValues = z.infer<typeof contactSchema>;

const touchpoints = [
  { icon: Mail, label: "Email", value: "hello@adpromoo.in" },
  { icon: Phone, label: "Phone", value: "+91 80471 00281" },
  { icon: MapPin, label: "Studio", value: "Koramangala, Bengaluru" },
];

export default function Contact() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const handleSubmit = (values: ContactValues) => {
    console.info("Contact form submitted", values);
  };

  return (
    <PublicLayout>
      <div className="pt-28 pb-20 space-y-12">
        <section className="container mx-auto px-4 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s plan your next creator launch"
            description="Fill out the form and our strategy team will respond within one business day."
            align="left"
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard>
              <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Aarav Sharma" className="h-12 rounded-2xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@brand.com" className="h-12 rounded-2xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Brand or agency" className="h-12 rounded-2xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea rows={4} placeholder="Share campaign goals, timelines, or platform focus" className="rounded-2xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full rounded-2xl">
                    Send message
                  </Button>
                </form>
              </Form>
            </GlassCard>
            <div className="space-y-6">
              {touchpoints.map((touch) => (
                <GlassCard key={touch.label} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <touch.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">{touch.label}</p>
                    <p className="font-display text-xl">{touch.value}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
