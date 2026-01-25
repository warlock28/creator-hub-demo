import { useState } from "react";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    User,
    Bell,
    Lock,
    Mail,
    Phone,
    MapPin,
    Camera,
    Save,
} from "lucide-react";

export default function CustomerSettings() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [marketingEmails, setMarketingEmails] = useState(false);

    return (
        <CustomerLayout>
            <div className="space-y-6 max-w-4xl">
                {/* Header */}
                <div>
                    <h1 className="font-display text-3xl font-bold mb-2">Settings</h1>
                    <p className="text-muted-foreground">
                        Manage your account settings and preferences
                    </p>
                </div>

                {/* Profile Settings */}
                <GlassCard className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <User className="h-5 w-5 text-primary" />
                        <h2 className="font-semibold text-xl">Profile Information</h2>
                    </div>

                    <div className="space-y-6">
                        {/* Profile Picture */}
                        <div className="flex items-center gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop"
                                alt="Profile"
                                className="w-20 h-20 rounded-xl object-cover"
                            />
                            <Button variant="outline">
                                <Camera className="h-4 w-4 mr-2" />
                                Change Photo
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" defaultValue="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" defaultValue="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="email" type="email" defaultValue="john@example.com" className="pl-10" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="phone" type="tel" defaultValue="+91 98765 43210" className="pl-10" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="location" defaultValue="Mumbai, India" className="pl-10" />
                            </div>
                        </div>

                        <Button>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                        </Button>
                    </div>
                </GlassCard>

                {/* Notification Settings */}
                <GlassCard className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Bell className="h-5 w-5 text-primary" />
                        <h2 className="font-semibold text-xl">Notifications</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Email Notifications</p>
                                <p className="text-sm text-muted-foreground">
                                    Receive booking updates via email
                                </p>
                            </div>
                            <Switch
                                checked={emailNotifications}
                                onCheckedChange={setEmailNotifications}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Push Notifications</p>
                                <p className="text-sm text-muted-foreground">
                                    Receive push notifications for important updates
                                </p>
                            </div>
                            <Switch
                                checked={pushNotifications}
                                onCheckedChange={setPushNotifications}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Marketing Emails</p>
                                <p className="text-sm text-muted-foreground">
                                    Receive promotional offers and updates
                                </p>
                            </div>
                            <Switch
                                checked={marketingEmails}
                                onCheckedChange={setMarketingEmails}
                            />
                        </div>
                    </div>
                </GlassCard>

                {/* Security Settings */}
                <GlassCard className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Lock className="h-5 w-5 text-primary" />
                        <h2 className="font-semibold text-xl">Security</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input id="currentPassword" type="password" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input id="confirmPassword" type="password" />
                        </div>

                        <Button>Update Password</Button>
                    </div>
                </GlassCard>

                {/* Danger Zone */}
                <GlassCard className="p-6 border-destructive/50">
                    <h2 className="font-semibold text-xl text-destructive mb-4">Danger Zone</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive" size="sm">
                        Delete Account
                    </Button>
                </GlassCard>
            </div>
        </CustomerLayout>
    );
}
