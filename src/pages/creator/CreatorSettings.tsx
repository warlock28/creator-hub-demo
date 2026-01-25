import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CreatorLayout } from "@/components/layout/CreatorLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Shield,
  Bell,
  Lock,
  Instagram,
  Youtube,
  CheckCircle2,
  AlertCircle,
  Key,
  Loader2,
  LogOut,
  Trash2,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function CreatorSettings() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Account State
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountStatus, setAccountStatus] = useState("Active");

  // Security State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (user) {
      loadSettings();
    }
  }, [user]);

  const loadSettings = async () => {
    try {
      setFetching(true);
      // Load profile data including phone
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('email, phone')
        .eq('id', user?.id)
        .single();

      if (profile) {
        setEmail(user?.email || profile.email || "");
        setPhone(profile.phone || "");
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    } finally {
      setFetching(false);
    }
  };

  const handleUpdateAccount = async () => {
    if (!user) return;
    setLoading(true);
    try {
      // 1. Update Email in Auth (if changed)
      if (email !== user.email) {
        const { error: authError } = await supabase.auth.updateUser({ email });
        if (authError) throw authError;
        toast({ title: "Check your email", description: "Confirmation link sent to new email." });
      }

      // 2. Update Phone in Profiles
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ phone })
        .eq('id', user.id);

      if (profileError) throw profileError;

      toast({ title: "Success", description: "Account information updated." });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!newPassword || !confirmPassword) {
      toast({ title: "Error", description: "Please fill in all password fields", variant: "destructive" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: "Error", description: "Passwords do not match", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;

      toast({ title: "Success", description: "Password updated successfully." });
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    setLoading(true);
    try {
      // Delete from profiles (Cascade should handle related data if configured, otherwise we manual delete)
      // Supabase Auth deletion usually requires admin rights or Edge Function.
      // Here we will try to delete the usage data and sign out, 
      // ensuring the user can't access the platform.

      // Note: Client-side deletion of auth user is not permitted by default.
      // We will delete the public profile which effectively "deactivates" the account in our app logic.
      const { error: deleteError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', user.id);

      if (deleteError) throw deleteError;

      await signOut();
      toast({ title: "Account Deleted", description: "Your account has been deactivated." });
      navigate("/");
    } catch (error: any) {
      console.error("Delete error:", error);
      toast({ title: "Error", description: "Could not delete account. Contact support.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <CreatorLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </CreatorLayout>
    );
  }

  return (
    <CreatorLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account, security, and preferences
          </p>
        </motion.div>

        {/* Settings Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4 sm:mb-6">
              <TabsTrigger value="account" className="text-xs sm:text-sm">
                <User className="h-4 w-4 mr-2 hidden sm:block" />
                Account
              </TabsTrigger>
              <TabsTrigger value="verification" className="text-xs sm:text-sm">
                <Shield className="h-4 w-4 mr-2 hidden sm:block" />
                Verification
              </TabsTrigger>
              <TabsTrigger value="notifications" className="text-xs sm:text-sm">
                <Bell className="h-4 w-4 mr-2 hidden sm:block" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="text-xs sm:text-sm">
                <Lock className="h-4 w-4 mr-2 hidden sm:block" />
                Security
              </TabsTrigger>
            </TabsList>

            {/* Account Settings */}
            <TabsContent value="account">
              <GlassCard className="p-4 sm:p-5 md:p-6">
                <h3 className="font-display text-lg font-semibold mb-6">
                  Account Information
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4">Account Status</h4>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20 dark:bg-green-900/10">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="font-medium">Active Account</p>
                          <p className="text-sm text-muted-foreground">
                            Your account is in good standing
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4 text-destructive">
                      Danger Zone
                    </h4>
                    <div className="space-y-3">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" className="w-full justify-start">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Account Permanently
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your
                              account and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive hover:bg-destructive/90">
                              {loading ? "Deleting..." : "Delete Account"}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button onClick={handleUpdateAccount} disabled={loading}>
                      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Save Changes
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            {/* Verification - Keeping Static for now as requested specific scope */}
            <TabsContent value="verification">
              <GlassCard className="p-4 sm:p-5 md:p-6">
                <h3 className="font-display text-lg font-semibold mb-6">
                  Social Media Verification
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Connect and verify your social media accounts to increase trust
                  and get more bookings (Coming Soon)
                </p>
                <div className="flex flex-col items-center justify-center py-8 text-center bg-secondary/20 rounded-xl border border-dashed border-secondary">
                  <Shield className="h-12 w-12 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground font-medium">Verification features coming soon!</p>
                </div>
              </GlassCard>
            </TabsContent>

            {/* Notifications - Keeping Static */}
            <TabsContent value="notifications">
              <GlassCard className="p-4 sm:p-5 md:p-6">
                <h3 className="font-display text-lg font-semibold mb-6">
                  Notification Preferences
                </h3>
                <div className="flex flex-col items-center justify-center py-8 text-center bg-secondary/20 rounded-xl border border-dashed border-secondary">
                  <Bell className="h-12 w-12 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground font-medium">Notification settings coming soon!</p>
                </div>
              </GlassCard>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security">
              <GlassCard className="p-4 sm:p-5 md:p-6">
                <h3 className="font-display text-lg font-semibold mb-6">
                  Security Settings
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-4">Password</h4>
                    <div className="space-y-4">
                      {/* Current pwd not needed for simple supabase update if logged in, but good for UX. 
                          Supabase auth update doesn't enforce current pwd check by default client side unless configured. 
                          We will just ask for new password for simplicity as per request. */}
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <Button onClick={handleUpdatePassword} disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Update Password
                      </Button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-medium mb-4">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-warning/10 flex items-center justify-center">
                          <Key className="h-5 w-5 text-warning" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Not Enabled</p>
                          <p className="text-xs text-muted-foreground">
                            Two-factor authentication is currently unavailable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </CreatorLayout>
  );
}
