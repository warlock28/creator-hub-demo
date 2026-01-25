import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Sparkles,
    MessageCircle,
    DollarSign,
    Calendar,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PostNeedBundleDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (data: NeedBundleFormData) => void;
}

export interface NeedBundleFormData {
    description: string;
    platform?: string;
    budgetRange?: string;
    timeline?: string;
}

const platforms = [
    { value: "instagram", label: "Instagram", icon: "📸" },
    { value: "youtube", label: "YouTube", icon: "🎥" },
    { value: "twitter", label: "Twitter/X", icon: "🐦" },
    { value: "linkedin", label: "LinkedIn", icon: "💼" },
    { value: "blog", label: "Blog/Article", icon: "📝" },
    { value: "other", label: "Other", icon: "✨" },
];

const MIN_DESCRIPTION_LENGTH = 50;

export function PostNeedBundleDialog({
    open,
    onOpenChange,
    onSubmit,
}: PostNeedBundleDialogProps) {
    const [description, setDescription] = useState("");
    const [platform, setPlatform] = useState<string | undefined>();
    const [budgetRange, setBudgetRange] = useState("");
    const [timeline, setTimeline] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const characterCount = description.length;
    const isDescriptionValid = characterCount >= MIN_DESCRIPTION_LENGTH;
    const canSubmit = isDescriptionValid && description.trim().length > 0;

    const handleSubmit = () => {
        if (!canSubmit) return;

        const formData: NeedBundleFormData = {
            description: description.trim(),
            platform,
            budgetRange: budgetRange || undefined,
            timeline: timeline || undefined,
        };

        onSubmit(formData);
        setIsSubmitted(true);

        // Show success state for 2 seconds, then reset and close
        setTimeout(() => {
            setDescription("");
            setPlatform(undefined);
            setBudgetRange("");
            setTimeline("");
            setIsSubmitted(false);
            onOpenChange(false);
        }, 2000);
    };

    if (isSubmitted) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="sm:max-w-lg">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-success to-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-success/30">
                            <CheckCircle2 className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2">
                            Requirement Posted! 🎉
                        </h3>
                        <p className="text-muted-foreground max-w-sm">
                            We'll notify you within 2 hours when creators respond to your
                            requirement.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                            <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <DialogTitle className="text-xl">Post Your Requirement</DialogTitle>
                            <DialogDescription>
                                Describe what you need. We'll connect you with the right creators.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Description */}
                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-base font-semibold flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-primary" />
                            What do you need? *
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Example: I need an Instagram reel promoting my fashion startup. Looking for a creator with strong engagement in Delhi/NCR. The reel should showcase our products in a trendy, youthful style..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={cn(
                                "min-h-[140px] resize-none",
                                isDescriptionValid && "border-success"
                            )}
                        />
                        <div className="flex items-center justify-between text-sm">
                            <p className="text-muted-foreground">
                                Hindi, English, or Hinglish — all accepted
                            </p>
                            <Badge
                                variant={isDescriptionValid ? "success" : "secondary"}
                                className="font-mono"
                            >
                                {characterCount}/{MIN_DESCRIPTION_LENGTH}
                            </Badge>
                        </div>
                        {!isDescriptionValid && characterCount > 0 && (
                            <p className="text-xs text-warning flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                Minimum {MIN_DESCRIPTION_LENGTH} characters required
                            </p>
                        )}
                    </div>

                    {/* Platform */}
                    <div className="space-y-2">
                        <Label htmlFor="platform" className="text-base font-semibold flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-primary" />
                            Platform (Optional)
                        </Label>
                        <Select value={platform} onValueChange={setPlatform}>
                            <SelectTrigger id="platform">
                                <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                                {platforms.map((p) => (
                                    <SelectItem key={p.value} value={p.value}>
                                        <span className="flex items-center gap-2">
                                            <span>{p.icon}</span>
                                            {p.label}
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-2">
                        <Label htmlFor="budget" className="text-base font-semibold flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-success" />
                            Budget Range (Optional)
                        </Label>
                        <Input
                            id="budget"
                            type="text"
                            placeholder="e.g., ₹5,000 - ₹10,000"
                            value={budgetRange}
                            onChange={(e) => setBudgetRange(e.target.value)}
                        />
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-base font-semibold flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-warning" />
                            Timeline (Optional)
                        </Label>
                        <Input
                            id="timeline"
                            type="text"
                            placeholder="e.g., Within 1 week, By Dec 31"
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                        />
                    </div>

                    {/* Info Box */}
                    <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
                        <p className="text-sm text-muted-foreground flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                                <strong className="text-foreground">What happens next?</strong>
                                <br />
                                Interested creators will review your requirement and respond. You'll
                                receive notifications when they approve. No payment needed until you
                                confirm a creator.
                            </span>
                        </p>
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                    >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Post Requirement
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
