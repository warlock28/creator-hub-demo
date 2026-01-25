import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Trash2, Image as ImageIcon, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProfileData } from "./types";
import { Dispatch, SetStateAction } from "react";

interface PortfolioSectionProps {
    profileData: ProfileData;
    showWorkForm: boolean;
    setShowWorkForm: Dispatch<SetStateAction<boolean>>;
    newWork: {
        title: string;
        description: string;
        image: File | null;
        category: string;
        date: string;
    };
    setNewWork: Dispatch<SetStateAction<{
        title: string;
        description: string;
        image: File | null;
        category: string;
        date: string;
    }>>;
    handleAddWork: () => void;
    handleEditWork: (work: any) => void;
    handleUpdateWork: () => void;
    editingWorkId: string | null;
    removeItem: (field: keyof ProfileData, id: string) => void;
}

export function PortfolioSection({
    profileData,
    showWorkForm,
    setShowWorkForm,
    newWork,
    setNewWork,
    handleAddWork,
    handleEditWork,
    handleUpdateWork,
    editingWorkId,
    removeItem,
}: PortfolioSectionProps) {
    return (
        <div className="space-y-6">
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/30">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-violet-500/15 to-purple-500/15 flex items-center justify-center">
                                <ImageIcon className="h-5 w-5 text-violet-500" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold">Portfolio & Recent Works</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">Showcase your best projects and collaborations</p>
                            </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                onClick={() => setShowWorkForm(!showWorkForm)}
                                className={showWorkForm
                                    ? "bg-muted hover:bg-muted/80 text-foreground"
                                    : "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/20"
                                }
                            >
                                {showWorkForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                {showWorkForm ? "Cancel" : "Add Work"}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Add Work Form */}
                    <AnimatePresence>
                        {showWorkForm && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-violet-500/5 to-purple-500/5 border border-violet-500/20 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="sm:col-span-2 space-y-2">
                                            <Label className="text-sm font-medium">Project Title *</Label>
                                            <Input
                                                value={newWork.title}
                                                onChange={(e) => setNewWork(prev => ({ ...prev, title: e.target.value }))}
                                                placeholder="e.g., Nike Campaign 2023"
                                                className="focus:ring-2 focus:ring-violet-500/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Category</Label>
                                            <Input
                                                value={newWork.category}
                                                onChange={(e) => setNewWork(prev => ({ ...prev, category: e.target.value }))}
                                                placeholder="e.g., Fashion"
                                                className="focus:ring-2 focus:ring-violet-500/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Date</Label>
                                            <Input
                                                type="date"
                                                value={newWork.date}
                                                onChange={(e) => setNewWork(prev => ({ ...prev, date: e.target.value }))}
                                                className="focus:ring-2 focus:ring-violet-500/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Description</Label>
                                            <Textarea
                                                value={newWork.description}
                                                onChange={(e) => setNewWork(prev => ({ ...prev, description: e.target.value }))}
                                                placeholder="Briefly describe this project..."
                                                rows={1}
                                                className="focus:ring-2 focus:ring-violet-500/20 resize-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Project Image *</Label>
                                        <p className="text-xs text-muted-foreground mb-2">Square format (1:1) recommended for best display</p>
                                        <div className="max-w-[180px]">
                                            <ImageUpload
                                                onUpload={async (file) => {
                                                    setNewWork(prev => ({ ...prev, image: file }));
                                                    return "";
                                                }}
                                                aspectRatio="square"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            onClick={editingWorkId ? handleUpdateWork : handleAddWork}
                                            className="flex-1 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
                                        >
                                            {editingWorkId ? <ImageIcon className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                            {editingWorkId ? "Update Project" : "Add Project"}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setShowWorkForm(false);
                                                setNewWork({ title: "", category: "", date: "", description: "", image: null });
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Works Grid */}
                    {profileData.recentWorks.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {profileData.recentWorks.map((work, index) => (
                                <motion.div
                                    key={work.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="relative group"
                                >
                                    <div className="aspect-square rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-violet-500/30 group-hover:-translate-y-1">
                                        {work.image ? (
                                            <img
                                                src={work.image}
                                                alt={work.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center">
                                                <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                                            </div>
                                        )}
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3">
                                            <p className="text-xs font-medium text-white/80 mb-0.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                                {work.category}
                                            </p>
                                            <p className="text-sm font-medium text-white truncate opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                {work.title}
                                            </p>
                                        </div>
                                        {/* Edit Button */}
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="absolute top-2 right-12 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                            onClick={() => handleEditWork(work)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        {/* Delete Button */}
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                            onClick={() => removeItem('recentWorks', work.id)}
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
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                                <ImageIcon className="h-8 w-8 text-violet-500/50" />
                            </div>
                            <h4 className="text-lg font-medium text-foreground mb-2">No projects yet</h4>
                            <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                                Add your recent works, campaigns, or portfolio items
                            </p>
                            <Button
                                onClick={() => setShowWorkForm(true)}
                                className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
                            >
                                <Plus className="h-4 w-4 mr-2" /> Add Your First Work
                            </Button>
                        </div>
                    )}
                </div>
            </GlassCard>
        </div>
    );
}
