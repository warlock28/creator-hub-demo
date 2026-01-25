import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/common";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const schema = z.object({
  email: z.string().email("Enter the email linked to your AdPromoo account"),
});

type ForgotValues = z.infer<typeof schema>;

export default function ForgotPassword() {
  const form = useForm<ForgotValues>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: ForgotValues) => {
    setLoading(true);
    try {
      // No authentication - just show message
      toast.info("Password reset is not available in demo mode");
      form.reset();
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="pt-28 pb-20">
        <section className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-10">
          <SectionHeader
            eyebrow="Security"
            title="Reset your password"
            description="We’ll send a secure link to your inbox. The link expires in 15 minutes for your safety."
            align="left"
          />
          <GlassCard>
            <Form {...form}>
              <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
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
                <Button type="submit" size="lg" className="w-full rounded-2xl" disabled={loading}>
                  {loading ? "Sending..." : "Send reset link"}
                  {!loading && <ArrowRight className="h-5 w-5 ml-2" />}
                </Button>
              </form>
            </Form>
            <p className="text-xs text-muted-foreground flex items-center gap-2 mt-4">
              <Lock className="h-3 w-3" />
              If you no longer have access to this inbox, email support@adpromoo.in from your registered phone number.
            </p>
          </GlassCard>
        </section>
      </div>
    </PublicLayout>
  );
}
