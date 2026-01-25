
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/common";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type UpdatePasswordValues = z.infer<typeof schema>;

export default function UpdatePassword() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [sessionInfo, setSessionInfo] = useState<any>(null);

    const form = useForm<UpdatePasswordValues>({
        resolver: zodResolver(schema),
        defaultValues: { password: "", confirmPassword: "" },
    });

    useEffect(() => {
        // No authentication in demo mode
        setSessionInfo(null);
    }, []);

    const handleSubmit = async (values: UpdatePasswordValues) => {
        setLoading(true);
        try {
            // No authentication - just show message and redirect
            toast.info("Password update is not available in demo mode");
            navigate("/login");
        } catch (err) {
            console.error(err);
            toast.error("An unexpected error occurred.");
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
                        title="Set new password"
                        description="Your new password must be different to previously used passwords."
                        align="left"
                    />
                    <GlassCard>
                        <Form {...form}>
                            <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>New Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                    <Input type="password" placeholder="••••••••" className="pl-10 h-10 rounded-xl" {...field} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <CheckCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                    <Input type="password" placeholder="••••••••" className="pl-10 h-10 rounded-xl" {...field} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" size="lg" className="w-full rounded-2xl" disabled={loading}>
                                    {loading ? "Updating..." : "Update password"}
                                    {!loading && <ArrowRight className="h-5 w-5 ml-2" />}
                                </Button>
                            </form>
                        </Form>
                    </GlassCard>
                </section>
            </div>
        </PublicLayout>
    );
}
