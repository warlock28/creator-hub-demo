import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Briefcase, User, Mail, Lock, Eye, EyeOff, UserCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const signupSchema = z.object({
  role: z.enum(["customer", "creator"]),
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

type SignupValues = z.infer<typeof signupSchema>;

export default function Signup() {
  const navigate = useNavigate();
  const { signUp, signInWithGoogle, signInWithGithub } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user, userProfile } = useAuth();

  useEffect(() => {
    if (user && userProfile) {
      if (userProfile.role === 'creator') {
        navigate("/creator/dashboard");
      } else {
        navigate("/customer/dashboard");
      }
    }
  }, [user, userProfile, navigate]);



  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: "customer",
      fullName: "",
      email: "",
      password: "",
    },
  });




  const handleSubmit = async (values: SignupValues) => {
    setLoading(true);
    setError(null);

    try {
      const { user, session } = await signUp(values.email, values.password, values.fullName, values.role);

      // Check if email confirmation is required - REMOVED per user request
      // We assume email verification is disabled in Supabase console for immediate login


      // Navigate to appropriate dashboard after successful signup
      // Give a moment for the profile trigger to run and local state to update
      setTimeout(() => {
        if (values.role === "creator") {
          navigate("/creator/dashboard");
        } else {
          navigate("/customer/dashboard");
        }
      }, 500);
    } catch (err: any) {
      console.error("Signup error FULL OBJECT:", err); // Debug log
      // Clean up Supabase error messages
      let message = err.message || "Failed to create account. Please try again.";
      if (message.includes("User already registered")) {
        message = "This email is already registered. Please sign in instead.";
      }
      if (message.includes("rate limit")) message = "Too many requests. Please try again later.";
      toast.error(message);
    } finally {
      if (!error) setLoading(false);
    }
  };

  const signUpWithProvider = async (provider: "google" | "github") => {
    setLoading(true);
    try {
      const role = form.getValues("role");
      if (provider === "google") {
        await signInWithGoogle(role);
      } else {
        await signInWithGithub(role);
      }
    } catch (err: any) {
      console.error(`${provider} sign up error:`, err);
      toast.error(err.message || "Failed to sign up with provider.");
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      heroImage="/join-hero.png"
      heroTitle="Join the Creator Economy"
      heroSubtitle="Connect with top brands, monetize your content, and grow your influence. Start your journey with thousands of successful creators."
      variant="join"
    >


      {/* Header */}
      <div className="mb-5">
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-1 leading-tight">
          Create Your
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Account</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Join as a creator or customer and start connecting
        </p>
      </div>

      {/* Role Selection - Compact */}
      <div className="mb-4">
        <p className="text-xs font-medium mb-2 text-muted-foreground">I want to join as:</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => form.setValue("role", "customer")}
            className={`p-3 rounded-xl border-2 transition-all hover:border-primary/50 ${form.watch("role") === "customer"
              ? "border-primary bg-primary/5"
              : "border-border"
              }`}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`h-9 w-9 rounded-lg flex items-center justify-center ${form.watch("role") === "customer"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
                  }`}
              >
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm">Customer</p>
                <p className="text-[10px] text-muted-foreground">Hire creators</p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => form.setValue("role", "creator")}
            className={`p-3 rounded-xl border-2 transition-all hover:border-primary/50 ${form.watch("role") === "creator"
              ? "border-primary bg-primary/5"
              : "border-border"
              }`}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`h-9 w-9 rounded-lg flex items-center justify-center ${form.watch("role") === "creator"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
                  }`}
              >
                <User className="h-4 w-4" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm">Creator</p>
                <p className="text-[10px] text-muted-foreground">Get hired</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Signup Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Full name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="John Doe"
                      className="pl-10 h-10 rounded-xl"
                      {...field}
                    />
                  </div>
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
                <FormLabel className="text-xs">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 h-10 rounded-xl"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="pl-10 pr-10 h-10 rounded-xl"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-[10px] text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>

          <Button type="submit" size="default" className="w-full rounded-xl h-10" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
            {!loading && <ArrowRight className="h-4 w-4 ml-2" />}
          </Button>

          {error && (
            <div className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg p-3 mt-2">
              {error}
            </div>
          )}
        </form>
      </Form>

      {/* Divider */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-xs text-muted-foreground">
            or sign up with
          </span>
        </div>
      </div>

      {/* Social Signup */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className="h-10 rounded-xl text-xs"
          onClick={() => signUpWithProvider("google")}
          disabled={loading}
          type="button"
        >
          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          variant="outline"
          className="h-10 rounded-xl text-xs"
          onClick={() => signUpWithProvider("github")}
          disabled={loading}
          type="button"
        >
          <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Button>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
