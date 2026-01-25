import { motion } from "framer-motion";
import { CreatorLayout } from "@/components/layout/CreatorLayout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, User, Sparkles, Briefcase, Image as ImageIcon } from "lucide-react";
import { ProfileInfoSection } from "./ProfileInfoSection";
import { HighlightsSection } from "./HighlightsSection";
import { ProfessionalSection } from "./ProfessionalSection";
import { PortfolioSection } from "./PortfolioSection";
import { useProfileEditLogic } from "./useProfileEditLogic";

export default function CreatorProfileEdit() {
    const hook = useProfileEditLogic();

    if (hook.loading) {
        return (
            <CreatorLayout>
                <div className="space-y-6 max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 rounded-2xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-8 w-40" />
                                <Skeleton className="h-4 w-60" />
                            </div>
                        </div>
                        <Skeleton className="h-11 w-32 rounded-md" />
                    </div>

                    <div className="space-y-6">
                        <Skeleton className="h-12 w-full rounded-2xl" />
                        <div className="grid grid-cols-1 gap-6">
                            <Skeleton className="h-[200px] w-full rounded-3xl" />
                            <Skeleton className="h-[300px] w-full rounded-3xl" />
                        </div>
                    </div>
                </div>
            </CreatorLayout>
        );
    }

    return (
        <CreatorLayout>
            <div className="space-y-6 max-w-5xl mx-auto">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/50"
                >
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <User className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                                Edit Profile
                            </h1>
                            <p className="text-sm text-muted-foreground">Customize your public presence</p>
                        </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            onClick={hook.handleSave}
                            disabled={hook.saving}
                            size="lg"
                            className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20 transition-all duration-300"
                        >
                            <Save className="h-4 w-4 mr-2" />
                            {hook.saving ? "Saving..." : "Save Changes"}
                        </Button>
                    </motion.div>
                </motion.div>

                <Tabs value={hook.activeTab} onValueChange={hook.setActiveTab} className="space-y-4 sm:space-y-6">
                    <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full h-auto sm:h-12 gap-1 p-1 bg-muted/50 rounded-2xl">
                        <TabsTrigger value="profile" className="text-xs sm:text-sm py-2.5 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
                            <User className="h-4 w-4 mr-1.5 hidden sm:inline" />
                            Profile Info
                        </TabsTrigger>
                        <TabsTrigger value="media" className="text-xs sm:text-sm py-2.5 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
                            <Sparkles className="h-4 w-4 mr-1.5 hidden sm:inline" />
                            Highlights
                        </TabsTrigger>
                        <TabsTrigger value="professional" className="text-xs sm:text-sm py-2.5 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
                            <Briefcase className="h-4 w-4 mr-1.5 hidden sm:inline" />
                            Professional
                        </TabsTrigger>
                        <TabsTrigger value="portfolio" className="text-xs sm:text-sm py-2.5 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
                            <ImageIcon className="h-4 w-4 mr-1.5 hidden sm:inline" />
                            Portfolio
                        </TabsTrigger>
                    </TabsList>

                    {/* PROFILE TAB */}
                    <TabsContent value="profile" className="space-y-6">
                        <ProfileInfoSection
                            profileData={hook.profileData}
                            setProfileData={hook.setProfileData}
                            handleAvatarUpload={hook.handleAvatarUpload}
                        />
                    </TabsContent>

                    {/* MEDIA TAB */}
                    <TabsContent value="media" className="space-y-6">
                        <HighlightsSection
                            profileData={hook.profileData}
                            showSpotlightForm={hook.showSpotlightForm}
                            setShowSpotlightForm={hook.setShowSpotlightForm}
                            newSpotlight={hook.newSpotlight}
                            setNewSpotlight={hook.setNewSpotlight}
                            handleAddSpotlight={hook.handleAddSpotlight}
                            handleEditSpotlight={hook.handleEditSpotlight}
                            handleUpdateSpotlight={hook.handleUpdateSpotlight}
                            editingSpotlightId={hook.editingSpotlightId}
                            removeItem={hook.removeItem}
                        />
                    </TabsContent>

                    {/* PROFESSIONAL TAB */}
                    <TabsContent value="professional" className="space-y-6">
                        <ProfessionalSection
                            services={hook.services}
                            showServiceForm={hook.showServiceForm}
                            setShowServiceForm={hook.setShowServiceForm}
                            newService={hook.newService}
                            setNewService={hook.setNewService}
                            handleAddService={hook.handleAddService}
                            handleEditService={hook.handleEditService}
                            handleUpdateService={hook.handleUpdateService}
                            editingServiceId={hook.editingServiceId}
                            handleDeleteService={hook.handleDeleteService}
                            profileData={hook.profileData}
                            showExperienceForm={hook.showExperienceForm}
                            setShowExperienceForm={hook.setShowExperienceForm}
                            newExperience={hook.newExperience}
                            setNewExperience={hook.setNewExperience}
                            handleAddExperience={hook.handleAddExperience}
                            handleEditExperience={hook.handleEditExperience}
                            handleUpdateExperience={hook.handleUpdateExperience}
                            editingExperienceId={hook.editingExperienceId}
                            showAchievementForm={hook.showAchievementForm}
                            setShowAchievementForm={hook.setShowAchievementForm}
                            newAchievement={hook.newAchievement}
                            setNewAchievement={hook.setNewAchievement}
                            handleAddAchievement={hook.handleAddAchievement}
                            handleEditAchievement={hook.handleEditAchievement}
                            handleUpdateAchievement={hook.handleUpdateAchievement}
                            editingAchievementId={hook.editingAchievementId}
                            removeItem={hook.removeItem}
                        />
                    </TabsContent>

                    {/* PORTFOLIO TAB */}
                    <TabsContent value="portfolio" className="space-y-6">
                        <PortfolioSection
                            profileData={hook.profileData}
                            showWorkForm={hook.showWorkForm}
                            setShowWorkForm={hook.setShowWorkForm}
                            newWork={hook.newWork}
                            setNewWork={hook.setNewWork}
                            handleAddWork={hook.handleAddWork}
                            handleEditWork={hook.handleEditWork}
                            handleUpdateWork={hook.handleUpdateWork}
                            editingWorkId={hook.editingWorkId}
                            removeItem={hook.removeItem}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </CreatorLayout>
    );
}
