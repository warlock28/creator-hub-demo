import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, X, ImageIcon, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProfileData } from "./types";
import { Dispatch, SetStateAction } from "react";

interface HighlightsSectionProps {
    profileData: ProfileData;
    showSpotlightForm: boolean;
    setShowSpotlightForm: Dispatch<SetStateAction<boolean>>;
    newSpotlight: {
        title: string;
        image: File | null;
        link: string;
    };
    setNewSpotlight: Dispatch<SetStateAction<{
        title: string;
        image: File | null;
        link: string;
    }>>;
    handleAddSpotlight: () => void;
    handleEditSpotlight: (spot: any) => void;
    handleUpdateSpotlight: () => void;
    editingSpotlightId: string | null;
    removeItem: (field: keyof ProfileData, id: string) => void;
}

export function HighlightsSection({
    profileData,
    showSpotlightForm,
    setShowSpotlightForm,
    newSpotlight,
    setNewSpotlight,
    handleAddSpotlight,
    handleEditSpotlight,
    handleUpdateSpotlight,
    editingSpotlightId,
    removeItem,
}: HighlightsSectionProps) {
    return (
        <div className="space-y-6">
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/30">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-amber-500/15 to-pink-500/15 flex items-center justify-center">
                                <Sparkles className="h-5 w-5 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold">Highlights & Spotlights</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">Showcase your best moments and achievements</p>
                            </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                onClick={() => setShowSpotlightForm(!showSpotlightForm)}
                                className={showSpotlightForm
                                    ? "bg-muted hover:bg-muted/80 text-foreground"
                                    : "bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white shadow-lg shadow-amber-500/20"
                                }
                            >
                                {showSpotlightForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                {showSpotlightForm ? "Cancel" : "Add Spotlight"}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Add Form */}
                    <AnimatePresence>
                        {showSpotlightForm && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-amber-500/5 to-pink-500/5 border border-amber-500/20 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Spotlight Title *</Label>
                                            <Input
                                                value={newSpotlight.title}
                                                onChange={(e) => setNewSpotlight(prev => ({ ...prev, title: e.target.value }))}
                                                placeholder="e.g., Featured in Forbes"
                                                className="focus:ring-2 focus:ring-amber-500/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Link (optional)</Label>
                                            <Input
                                                value={newSpotlight.link}
                                                onChange={(e) => setNewSpotlight(prev => ({ ...prev, link: e.target.value }))}
                                                placeholder="https://..."
                                                className="focus:ring-2 focus:ring-amber-500/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Spotlight Image *</Label>
                                        <p className="text-xs text-muted-foreground mb-2">Portrait format (3:4) recommended for best display</p>
                                        <div className="max-w-[200px]">
                                            <ImageUpload
                                                onUpload={async (file) => {
                                                    setNewSpotlight(prev => ({ ...prev, image: file }));
                                                    return "";
                                                }}
                                                aspectRatio="portrait"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            onClick={editingSpotlightId ? handleUpdateSpotlight : handleAddSpotlight}
                                            className="flex-1 bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white"
                                        >
                                            {editingSpotlightId ? <Sparkles className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                            {editingSpotlightId ? "Update Spotlight" : "Add Spotlight"}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setShowSpotlightForm(false);
                                                setNewSpotlight({ title: "", image: null, link: "" });
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Spotlights Grid */}
                    {profileData.spotlights.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {profileData.spotlights.map((spotlight, index) => (
                                <motion.div
                                    key={spotlight.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="relative group"
                                >
                                    <div className="aspect-[3/4] rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-amber-500/30 group-hover:-translate-y-1">
                                        {spotlight.image ? (
                                            <img
                                                src={spotlight.image}
                                                alt={spotlight.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-amber-500/10 to-pink-500/10 flex items-center justify-center">
                                                <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                                            </div>
                                        )}
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {/* Title */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3">
                                            <p className="text-sm font-medium text-white truncate opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                {spotlight.title}
                                            </p>
                                        </div>
                                        {/* Edit Button */}
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="absolute top-2 right-12 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                            onClick={() => handleEditSpotlight(spotlight)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        {/* Delete Button */}
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                            onClick={() => removeItem('spotlights', spotlight.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="py-12 sm:py-16 text-center">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/10 to-pink-500/10 flex items-center justify-center mb-4">
                                <Sparkles className="h-8 w-8 text-amber-500/50" />
                            </div>
                            <h4 className="text-lg font-medium text-foreground mb-2">No spotlights yet</h4>
                            <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                                Add your best moments, achievements, or featured collaborations to catch attention
                            </p>
                            <Button
                                onClick={() => setShowSpotlightForm(true)}
                                className="bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white"
                            >
                                <Plus className="h-4 w-4 mr-2" /> Add Your First Spotlight
                            </Button>
                        </div>
                    )}
                </div>
            </GlassCard>
        </div>
    );
}
