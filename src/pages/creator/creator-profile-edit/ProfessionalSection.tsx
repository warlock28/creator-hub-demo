import { motion, AnimatePresence } from "framer-motion";
import { Tag, Plus, X, Trash2, Briefcase, Trophy, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProfileData, Service, ItemWithId } from "./types";
import { Dispatch, SetStateAction } from "react";

interface ProfessionalSectionProps {
    // Services
    services: Service[];
    showServiceForm: boolean;
    setShowServiceForm: Dispatch<SetStateAction<boolean>>;
    newService: {
        title: string;
        description: string;
        price: string | number;
        delivery_days: string | number;
        image: File | null;
    };
    setNewService: Dispatch<SetStateAction<{
        title: string;
        description: string;
        price: string | number;
        delivery_days: string | number;
        image: File | null;
    }>>;
    handleAddService: () => void;
    handleEditService: (service: Service) => void;
    handleUpdateService: () => void;
    editingServiceId: string | null;
    handleDeleteService: (id: string) => void;

    // Experience
    profileData: ProfileData;
    showExperienceForm: boolean;
    setShowExperienceForm: Dispatch<SetStateAction<boolean>>;
    newExperience: {
        role: string;
        company: string;
        period: string;
        description: string;
        logo: File | null;
    };
    setNewExperience: Dispatch<SetStateAction<{
        role: string;
        company: string;
        period: string;
        description: string;
        logo: File | null;
    }>>;
    handleAddExperience: () => void;
    handleEditExperience: (exp: any) => void;
    handleUpdateExperience: () => void;
    editingExperienceId: string | null;

    // Achievements
    showAchievementForm: boolean;
    setShowAchievementForm: Dispatch<SetStateAction<boolean>>;
    newAchievement: {
        title: string;
        date: string;
        description: string;
    };
    setNewAchievement: Dispatch<SetStateAction<{
        title: string;
        date: string;
        description: string;
    }>>;
    handleAddAchievement: () => void;
    handleEditAchievement: (ach: any) => void;
    handleUpdateAchievement: () => void;
    editingAchievementId: string | null;

    // Common
    removeItem: (field: keyof ProfileData, id: string) => void;
}

export function ProfessionalSection({
    services,
    showServiceForm,
    setShowServiceForm,
    newService,
    setNewService,
    handleAddService,
    handleEditService,
    handleUpdateService,
    editingServiceId,
    handleDeleteService,
    profileData,
    showExperienceForm,
    setShowExperienceForm,
    newExperience,
    setNewExperience,
    handleAddExperience,
    handleEditExperience,
    handleUpdateExperience,
    editingExperienceId,
    showAchievementForm,
    setShowAchievementForm,
    newAchievement,
    setNewAchievement,
    handleAddAchievement,
    handleEditAchievement,
    handleUpdateAchievement,
    editingAchievementId,
    removeItem,
}: ProfessionalSectionProps) {
    return (
        <div className="space-y-6">
            {/* Services Section */}
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/30">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 flex items-center justify-center">
                                <Tag className="h-5 w-5 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold">Services</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">What you offer to brands and clients</p>
                            </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                onClick={() => setShowServiceForm(!showServiceForm)}
                                className={showServiceForm
                                    ? "bg-muted hover:bg-muted/80 text-foreground"
                                    : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                                }
                            >
                                {showServiceForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                {showServiceForm ? "Cancel" : "Add Service"}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Add Service Form */}
                    <AnimatePresence>
                        {showServiceForm && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Service Title *</Label>
                                            <Input
                                                value={newService.title}
                                                onChange={(e) => setNewService(prev => ({ ...prev, title: e.target.value }))}
                                                placeholder="e.g., Instagram Post Collaboration"
                                                className="focus:ring-2 focus:ring-emerald-500/20"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-2">
                                                <Label className="text-sm font-medium">Price (₹) *</Label>
                                                <Input
                                                    type="number"
                                                    value={newService.price}
                                                    onChange={(e) => setNewService(prev => ({ ...prev, price: e.target.value }))}
                                                    placeholder="5000"
                                                    className="focus:ring-2 focus:ring-emerald-500/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-sm font-medium">Delivery Days</Label>
                                                <Input
                                                    type="number"
                                                    value={newService.delivery_days}
                                                    onChange={(e) => setNewService(prev => ({ ...prev, delivery_days: e.target.value }))}
                                                    placeholder="3"
                                                    className="focus:ring-2 focus:ring-emerald-500/20"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Description</Label>
                                        <Textarea
                                            value={newService.description}
                                            onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                                            placeholder="Describe what this service includes..."
                                            rows={2}
                                            className="focus:ring-2 focus:ring-emerald-500/20 resize-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Service Image (optional)</Label>
                                        <div className="max-w-[240px]">
                                            <ImageUpload
                                                onUpload={async (file) => {
                                                    setNewService(prev => ({ ...prev, image: file }));
                                                    return "";
                                                }}
                                                aspectRatio="video"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            onClick={editingServiceId ? handleUpdateService : handleAddService}
                                            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                                        >
                                            {editingServiceId ? <Tag className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                            {editingServiceId ? "Update Service" : "Add Service"}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setShowServiceForm(false);
                                                setNewService({ title: "", description: "", price: "", delivery_days: "", image: null });
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Services List */}
                    {services.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative p-4 rounded-xl border border-border/50 bg-card/50 hover:border-emerald-500/30 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex gap-4">
                                        {service.image_url ? (
                                            <img src={service.image_url} alt={service.title} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0" />
                                        ) : (
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center flex-shrink-0">
                                                <Tag className="h-6 w-6 text-emerald-500/50" />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-sm sm:text-base truncate">{service.title}</h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-1">{service.description || "No description"}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">₹{service.price}</span>
                                                <span className="text-xs text-muted-foreground">• {service.delivery_days} days</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10"
                                            onClick={() => handleEditService(service)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                            onClick={() => handleDeleteService(service.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mb-4">
                                <Tag className="h-8 w-8 text-emerald-500/50" />
                            </div>
                            <h4 className="text-lg font-medium text-foreground mb-2">No services yet</h4>
                            <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                                Add services you offer to brands and clients
                            </p>
                            <Button
                                onClick={() => setShowServiceForm(true)}
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                            >
                                <Plus className="h-4 w-4 mr-2" /> Add Your First Service
                            </Button>
                        </div>
                    )}
                </div>
            </GlassCard>

            {/* Experience Section */}
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/30">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 flex items-center justify-center">
                                <Briefcase className="h-5 w-5 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold">Experience</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">Past roles and collaborations</p>
                            </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                onClick={() => setShowExperienceForm(!showExperienceForm)}
                                className={showExperienceForm
                                    ? "bg-muted hover:bg-muted/80 text-foreground"
                                    : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                                }
                            >
                                {showExperienceForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                {showExperienceForm ? "Cancel" : "Add Experience"}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Add Experience Form */}
                    <AnimatePresence>
                        {showExperienceForm && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/20 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Role/Position *</Label>
                                            <Input
                                                value={newExperience.role}
                                                onChange={(e) => setNewExperience(prev => ({ ...prev, role: e.target.value }))}
                                                placeholder="e.g., Brand Ambassador"
                                                className="focus:ring-2 focus:ring-blue-500/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Company *</Label>
                                            <Input
                                                value={newExperience.company}
                                                onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
                                                placeholder="e.g., Nike"
                                                className="focus:ring-2 focus:ring-blue-500/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Period</Label>
                                            <Input
                                                value={newExperience.period}
                                                onChange={(e) => setNewExperience(prev => ({ ...prev, period: e.target.value }))}
                                                placeholder="e.g., 2021-2023"
                                                className="focus:ring-2 focus:ring-blue-500/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Company Logo</Label>
                                            <div className="w-20">
                                                <ImageUpload
                                                    onUpload={async (file) => {
                                                        setNewExperience(prev => ({ ...prev, logo: file }));
                                                        return "";
                                                    }}
                                                    aspectRatio="square"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Description</Label>
                                        <Textarea
                                            value={newExperience.description}
                                            onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
                                            placeholder="Describe your role and achievements..."
                                            rows={2}
                                            className="focus:ring-2 focus:ring-blue-500/20 resize-none"
                                        />
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            onClick={editingExperienceId ? handleUpdateExperience : handleAddExperience}
                                            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                                        >
                                            {editingExperienceId ? <Briefcase className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                            {editingExperienceId ? "Update Experience" : "Add Experience"}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setShowExperienceForm(false);
                                                setNewExperience({ role: "", company: "", period: "", description: "", logo: null });
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Experience List */}
                    {profileData.experience.length > 0 ? (
                        <div className="space-y-3">
                            {profileData.experience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
                                >
                                    {exp.logo ? (
                                        <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-xl object-cover flex-shrink-0 border border-border/50" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                            <Briefcase className="h-5 w-5 text-blue-500/50" />
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-sm sm:text-base">{exp.role}</h4>
                                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                                        {exp.description && (
                                            <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{exp.description}</p>
                                        )}

                                    </div>
                                    <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 flex-shrink-0"
                                            onClick={() => handleEditExperience(exp)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 flex-shrink-0"
                                            onClick={() => removeItem('experience', exp.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-4">
                                <Briefcase className="h-8 w-8 text-blue-500/50" />
                            </div>
                            <h4 className="text-lg font-medium text-foreground mb-2">No experience added</h4>
                            <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                                Add your past roles and collaborations
                            </p>
                            <Button
                                onClick={() => setShowExperienceForm(true)}
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                            >
                                <Plus className="h-4 w-4 mr-2" /> Add Your First Experience
                            </Button>
                        </div>
                    )}
                </div>
            </GlassCard>

            {/* Achievements Section */}
            <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/30">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-yellow-500/15 to-orange-500/15 flex items-center justify-center">
                                <Trophy className="h-5 w-5 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold">Achievements</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">Awards and recognitions</p>
                            </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                onClick={() => setShowAchievementForm(!showAchievementForm)}
                                className={showAchievementForm
                                    ? "bg-muted hover:bg-muted/80 text-foreground"
                                    : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg shadow-yellow-500/20"
                                }
                            >
                                {showAchievementForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                {showAchievementForm ? "Cancel" : "Add Achievement"}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Add Achievement Form */}
                    <AnimatePresence>
                        {showAchievementForm && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Achievement Title *</Label>
                                            <Input
                                                value={newAchievement.title}
                                                onChange={(e) => setNewAchievement(prev => ({ ...prev, title: e.target.value }))}
                                                placeholder="e.g., Creator of the Year 2023"
                                                className="focus:ring-2 focus:ring-yellow-500/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Year/Date</Label>
                                            <Input
                                                value={newAchievement.date}
                                                onChange={(e) => setNewAchievement(prev => ({ ...prev, date: e.target.value }))}
                                                placeholder="e.g., 2023"
                                                className="focus:ring-2 focus:ring-yellow-500/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Description</Label>
                                        <Textarea
                                            value={newAchievement.description}
                                            onChange={(e) => setNewAchievement(prev => ({ ...prev, description: e.target.value }))}
                                            placeholder="Describe this achievement..."
                                            rows={2}
                                            className="focus:ring-2 focus:ring-yellow-500/20 resize-none"
                                        />
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            onClick={editingAchievementId ? handleUpdateAchievement : handleAddAchievement}
                                            className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                                        >
                                            {editingAchievementId ? <Trophy className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                                            {editingAchievementId ? "Update Achievement" : "Add Achievement"}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setShowAchievementForm(false);
                                                setNewAchievement({ title: "", date: "", description: "" });
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Achievements List */}
                    {profileData.achievements.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profileData.achievements.map((ach, index) => (
                                <motion.div
                                    key={ach.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-yellow-500/30 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                                        <Trophy className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-sm sm:text-base">{ach.title}</h4>
                                        <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">{ach.date}</p>
                                        {ach.description && (
                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{ach.description}</p>
                                        )}

                                    </div>
                                    <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground hover:text-yellow-500 hover:bg-yellow-500/10 flex-shrink-0"
                                            onClick={() => handleEditAchievement(ach)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 flex-shrink-0"
                                            onClick={() => removeItem('achievements', ach.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 flex items-center justify-center mb-4">
                                <Trophy className="h-8 w-8 text-yellow-500/50" />
                            </div>
                            <h4 className="text-lg font-medium text-foreground mb-2">No achievements yet</h4>
                            <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                                Add awards, recognitions, and milestones
                            </p>
                            <Button
                                onClick={() => setShowAchievementForm(true)}
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                            >
                                <Plus className="h-4 w-4 mr-2" /> Add Your First Achievement
                            </Button>
                        </div>
                    )}
                </div>
            </GlassCard>
        </div>
    );
}
