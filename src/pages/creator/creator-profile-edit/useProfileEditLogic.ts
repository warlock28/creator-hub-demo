import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { ProfileData, Service, ItemWithId } from "./types";

export function useProfileEditLogic() {
    const { user, userProfile } = useAuth();
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("profile");

    // Form visibility states
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [showExperienceForm, setShowExperienceForm] = useState(false);
    const [showAchievementForm, setShowAchievementForm] = useState(false);
    const [showSpotlightForm, setShowSpotlightForm] = useState(false);
    const [showWorkForm, setShowWorkForm] = useState(false);

    // Profile data state
    const [profileData, setProfileData] = useState<ProfileData>({
        name: "",
        bio: "",
        location: "",
        niche: "",
        languages: "",
        profilePhoto: "",
        stats: {
            followers: "0",
            campaigns: "0",
            avgEngagement: "0%"
        },
        experience: [] as ItemWithId[],
        achievements: [] as ItemWithId[],
        spotlights: [] as ItemWithId[],
        recentWorks: [] as ItemWithId[],
    });

    const [services, setServices] = useState<Service[]>([]);

    // New item form states
    const [newService, setNewService] = useState({
        title: "",
        description: "",
        price: "",
        delivery_days: "",
        image: null as File | null,
    });

    const [newExperience, setNewExperience] = useState({
        role: "",
        company: "",
        period: "",
        description: "",
        logo: null as File | null,
    });

    const [newAchievement, setNewAchievement] = useState({
        title: "",
        date: "",
        description: "",
    });

    const [newSpotlight, setNewSpotlight] = useState({
        title: "",
        image: null as File | null,
        link: "",
    });

    const [newWork, setNewWork] = useState({
        title: "",
        category: "",
        date: "",
        description: "",
        image: null as File | null,
    });

    // --- No authentication - return empty data ---
    const fetchedData = { profile: null, services: [] };
    const loading = false;

    const [isInitialized, setIsInitialized] = useState(false);

    // Sync fetched data to local state
    // We only do this ONCE when data is first loaded to prevent overwriting local edits
    useEffect(() => {
        if (fetchedData && !isInitialized) {
            const { profile: creatorData, services: servicesData } = fetchedData;

            setProfileData({
                name: userProfile?.full_name || "",
                bio: creatorData?.bio || "",
                location: creatorData?.location || "",
                niche: creatorData?.niche || "",
                languages: Array.isArray(creatorData?.languages) ? creatorData.languages.join(", ") : "",
                profilePhoto: userProfile?.avatar_url || "",
                backgroundTheme: creatorData?.background_theme || 'sunset',
                stats: creatorData?.stats || { followers: "0", campaigns: "0", avgEngagement: "0%" },
                experience: creatorData?.experience || [],
                achievements: creatorData?.achievements || [],
                spotlights: creatorData?.spotlights || [],
                recentWorks: creatorData?.recent_works || [],
                theme: creatorData?.theme,
            });

            if (servicesData) setServices(servicesData);

            setIsInitialized(true);
        }
    }, [fetchedData, userProfile, isInitialized]);

    // --- Handlers ---

    const handleAvatarUpload = async (file: File) => {
        setSaving(true);
        try {
            // No storage - just show a placeholder
            const url = URL.createObjectURL(file);
            setProfileData(prev => ({ ...prev, profilePhoto: url }));
            toast({ title: "Demo Mode", description: "Profile photo upload is not available in demo mode" });
            return url;
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
            throw error;
        } finally {
            setSaving(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);

        try {
            // Demo mode - just show success
            toast({
                title: "Demo Mode",
                description: "Profile save is not available in demo mode"
            });
        } catch (error: any) {
            console.error("Error saving profile:", error);
            toast({
                title: "Save Failed",
                description: error.message || "Could not save your changes. Please try again.",
                variant: "destructive"
            });
        } finally {
            setSaving(false);
        }
    };

    const addItem = (field: keyof typeof profileData, item: any) => {
        // Generate truly unique ID using timestamp + random string + field prefix
        const newId = `${field}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        setProfileData(prev => ({
            ...prev,
            // @ts-ignore - Defensive check for undefined arrays
            [field]: [...(prev[field] || []), { ...item, id: newId }]
        }));
    };

    const removeItem = (field: keyof typeof profileData, id: string) => {
        setProfileData(prev => ({
            ...prev,
            // @ts-ignore
            [field]: prev[field].filter((i: any) => i.id !== id)
        }));
    };

    // Service Handlers
    const handleAddService = async () => {
        if (!newService.title || !newService.price) {
            toast({
                title: "Missing Information",
                description: "Please fill in service title and price (required fields)",
                variant: "destructive"
            });
            return;
        }

        try {
            // Demo mode - just add to local state
            const newData = {
                id: `service_${Date.now()}`,
                title: newService.title,
                description: newService.description,
                price: Number(newService.price),
                delivery_days: Number(newService.delivery_days) || 3,
            };
            setServices([...services, newData]);
            setNewService({ title: "", description: "", price: "", delivery_days: "", image: null });
            setShowServiceForm(false);
            toast({
                title: "Demo Mode",
                description: `Service added locally (not saved to database)`
            });
        } catch (error: any) {
            console.error('Service add error:', error);
            toast({
                title: "Failed to Add Service",
                description: error.message || "An unexpected error occurred",
                variant: "destructive"
            });
        }
    };

    const handleDeleteService = async (id: string) => {
        if (!confirm("Delete this service?")) return;
        try {
            setServices(services.filter(s => s.id !== id));
            toast({ title: "Service Deleted (Demo Mode)" });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    };

    // Experience Handlers
    const handleAddExperience = async () => {
        if (!newExperience.role || !newExperience.company) {
            toast({
                title: "Missing Information",
                description: "Please fill in role and company name (required fields)",
                variant: "destructive"
            });
            return;
        }

        try {
            addItem('experience', {
                role: newExperience.role,
                company: newExperience.company,
                period: newExperience.period,
                description: newExperience.description,
                logo: "",
            });

            setNewExperience({ role: "", company: "", period: "", description: "", logo: null });
            setShowExperienceForm(false);
            toast({
                title: "Demo Mode",
                description: `Experience added locally (not saved to database)`
            });
        } catch (error: any) {
            console.error('Experience add error:', error);
            toast({
                title: "Failed to Add Experience",
                description: error.message || "An unexpected error occurred",
                variant: "destructive"
            });
        }
    };

    // Achievement Handlers
    const handleAddAchievement = () => {
        if (!newAchievement.title) {
            toast({ title: "Error", description: "Please enter achievement title", variant: "destructive" });
            return;
        }

        addItem('achievements', {
            title: newAchievement.title,
            date: newAchievement.date || new Date().getFullYear().toString(),
            description: newAchievement.description,
        });

        setNewAchievement({ title: "", date: "", description: "" });
        setShowAchievementForm(false);
        toast({ title: "Achievement Added" });
    };

    // Spotlight Handlers
    const handleAddSpotlight = async () => {
        if (!user || !newSpotlight.title || !newSpotlight.image) {
            toast({
                title: "Missing Information",
                description: "Please provide both a title and an image for your spotlight",
                variant: "destructive"
            });
            return;
        }

        try {
            toast({ title: "Uploading spotlight image...", description: "Please wait" });
            const imageUrl = await uploadImage(newSpotlight.image, 'spotlights', user.id);

            addItem('spotlights', {
                title: newSpotlight.title,
                image: imageUrl,
                link: newSpotlight.link,
            });

            setNewSpotlight({ title: "", image: null, link: "" });
            setShowSpotlightForm(false);
            toast({
                title: "✓ Spotlight Added",
                description: `${newSpotlight.title} has been added. Don't forget to save your changes!`
            });
        } catch (error: any) {
            console.error('Spotlight add error:', error);
            toast({
                title: "Failed to Add Spotlight",
                description: error.message || "An unexpected error occurred",
                variant: "destructive"
            });
        }
    };

    // --- Editing States ---
    const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
    const [editingExperienceId, setEditingExperienceId] = useState<string | null>(null);
    const [editingAchievementId, setEditingAchievementId] = useState<string | null>(null);
    const [editingSpotlightId, setEditingSpotlightId] = useState<string | null>(null);
    const [editingWorkId, setEditingWorkId] = useState<string | null>(null);


    // Recent Work Handlers
    const handleAddWork = async () => {
        if (!user || !newWork.title || !newWork.image) {
            toast({
                title: "Missing Information",
                description: "Please provide both a project title and an image",
                variant: "destructive"
            });
            return;
        }

        try {
            toast({ title: "Uploading project image...", description: "Please wait" });
            const imageUrl = await uploadImage(newWork.image, 'portfolio', user.id);

            addItem('recentWorks', {
                title: newWork.title,
                category: newWork.category,
                image: imageUrl,
                date: newWork.date || new Date().toISOString().split('T')[0],
                description: newWork.description,
            });

            setNewWork({ title: "", category: "", date: "", description: "", image: null });
            setShowWorkForm(false);
            toast({
                title: "✓ Work Added",
                description: `${newWork.title} added to portfolio. Remember to save changes!`
            });
        } catch (error: any) {
            console.error('Work add error:', error);
            toast({
                title: "Failed to Add Work",
                description: error.message || "An unexpected error occurred",
                variant: "destructive"
            });
        }
    };

    // --- Update Handlers ---

    // 1. Service Update
    const handleEditService = (service: Service) => {
        setNewService({
            title: service.title,
            description: service.description,
            price: service.price.toString(),
            delivery_days: service.delivery_days.toString(),
            image: null
        });
        setEditingServiceId(service.id);
        setShowServiceForm(true);
    };

    const handleUpdateService = async () => {
        if (!user || !editingServiceId || !newService.title || !newService.price) return;

        try {
            let imageUrl = undefined;
            if (newService.image) {
                toast({ title: "Uploading image...", description: "Please wait" });
                imageUrl = await uploadImage(newService.image, 'services', user.id);
            }

            const updatePayload: any = {
                title: newService.title,
                description: newService.description,
                price: Number(newService.price),
                delivery_days: Number(newService.delivery_days),
            };
            if (imageUrl) updatePayload.image_url = imageUrl;

            const { data, error } = await supabase
                .from('services')
                .update(updatePayload)
                .eq('id', editingServiceId)
                .select()
                .single();

            if (error) throw error;

            setServices(services.map(s => s.id === editingServiceId ? data : s));
            setNewService({ title: "", description: "", price: "", delivery_days: "", image: null });
            setEditingServiceId(null);
            setShowServiceForm(false);
            toast({ title: "✓ Service Updated" });
        } catch (error: any) {
            toast({ title: "Update Failed", description: error.message, variant: "destructive" });
        }
    };

    // 2. Experience Update
    const handleEditExperience = (exp: any) => {
        setNewExperience({
            role: exp.role,
            company: exp.company,
            period: exp.period,
            description: exp.description,
            logo: null
        });
        setEditingExperienceId(exp.id);
        setShowExperienceForm(true);
    };

    const handleUpdateExperience = async () => {
        if (!editingExperienceId) return;

        try {
            let logoUrl = undefined;
            if (newExperience.logo && user) {
                toast({ title: "Uploading logo...", description: "Please wait" });
                logoUrl = await uploadImage(newExperience.logo, 'experience', user.id);
            }

            setProfileData(prev => ({
                ...prev,
                experience: prev.experience.map(item => {
                    if (item.id === editingExperienceId) {
                        return {
                            ...item,
                            role: newExperience.role,
                            company: newExperience.company,
                            period: newExperience.period,
                            description: newExperience.description,
                            logo: logoUrl || item.logo // Keep existing logo if no new one
                        };
                    }
                    return item;
                })
            }));

            setNewExperience({ role: "", company: "", period: "", description: "", logo: null });
            setEditingExperienceId(null);
            setShowExperienceForm(false);
            toast({ title: "Experience Updated", description: "Remember to save changes!" });
        } catch (error: any) {
            toast({ title: "Update Failed", description: error.message, variant: "destructive" });
        }
    };

    // 3. Achievement Update
    const handleEditAchievement = (ach: any) => {
        setNewAchievement({
            title: ach.title,
            date: ach.date,
            description: ach.description,
        });
        setEditingAchievementId(ach.id);
        setShowAchievementForm(true);
    };

    const handleUpdateAchievement = () => {
        if (!editingAchievementId) return;

        setProfileData(prev => ({
            ...prev,
            achievements: prev.achievements.map(item => {
                if (item.id === editingAchievementId) {
                    return {
                        ...item,
                        title: newAchievement.title,
                        date: newAchievement.date,
                        description: newAchievement.description,
                    };
                }
                return item;
            })
        }));

        setNewAchievement({ title: "", date: "", description: "" });
        setEditingAchievementId(null);
        setShowAchievementForm(false);
        toast({ title: "Achievement Updated" });
    };

    // 4. Spotlight Update
    const handleEditSpotlight = (spot: any) => {
        setNewSpotlight({
            title: spot.title,
            link: spot.link,
            image: null
        });
        setEditingSpotlightId(spot.id);
        setShowSpotlightForm(true);
    };

    const handleUpdateSpotlight = async () => {
        if (!editingSpotlightId) return;

        try {
            let imageUrl = undefined;
            if (newSpotlight.image && user) {
                toast({ title: "Uploading image...", description: "Please wait" });
                imageUrl = await uploadImage(newSpotlight.image, 'spotlights', user.id);
            }

            setProfileData(prev => ({
                ...prev,
                spotlights: prev.spotlights.map(item => {
                    if (item.id === editingSpotlightId) {
                        return {
                            ...item,
                            title: newSpotlight.title,
                            link: newSpotlight.link,
                            image: imageUrl || item.image
                        };
                    }
                    return item;
                })
            }));

            setNewSpotlight({ title: "", image: null, link: "" });
            setEditingSpotlightId(null);
            setShowSpotlightForm(false);
            toast({ title: "Spotlight Updated", description: "Remember to save changes!" });
        } catch (error: any) {
            toast({ title: "Update Failed", description: error.message, variant: "destructive" });
        }
    };

    // 5. Work Update
    const handleEditWork = (work: any) => {
        setNewWork({
            title: work.title,
            category: work.category,
            date: work.date,
            description: work.description,
            image: null
        });
        setEditingWorkId(work.id);
        setShowWorkForm(true);
    };

    const handleUpdateWork = async () => {
        if (!editingWorkId) return;

        try {
            let imageUrl = undefined;
            if (newWork.image && user) {
                toast({ title: "Uploading image...", description: "Please wait" });
                imageUrl = await uploadImage(newWork.image, 'portfolio', user.id);
            }

            setProfileData(prev => ({
                ...prev,
                recentWorks: prev.recentWorks.map(item => {
                    if (item.id === editingWorkId) {
                        return {
                            ...item,
                            title: newWork.title,
                            category: newWork.category,
                            date: newWork.date,
                            description: newWork.description,
                            image: imageUrl || item.image // Keep existing or update
                        };
                    }
                    return item;
                })
            }));

            setNewWork({ title: "", category: "", date: "", description: "", image: null });
            setEditingWorkId(null);
            setShowWorkForm(false);
            toast({ title: "Work Updated", description: "Remember to save changes!" });
        } catch (error: any) {
            toast({ title: "Update Failed", description: error.message, variant: "destructive" });
        }
    };


    return {
        // State
        loading,
        saving,
        activeTab,
        setActiveTab,
        profileData,
        setProfileData,
        services,

        // Form visibility
        showServiceForm,
        setShowServiceForm,
        showExperienceForm,
        setShowExperienceForm,
        showAchievementForm,
        setShowAchievementForm,
        showSpotlightForm,
        setShowSpotlightForm,
        showWorkForm,
        setShowWorkForm,

        // Form data
        newService,
        setNewService,
        newExperience,
        setNewExperience,
        newAchievement,
        setNewAchievement,
        newSpotlight,
        setNewSpotlight,
        newWork,
        setNewWork,

        // Handlers
        handleSave,
        handleAvatarUpload,
        handleAddService,
        handleEditService,
        handleUpdateService,
        editingServiceId,

        handleDeleteService,

        handleAddExperience,
        handleEditExperience,
        handleUpdateExperience,
        editingExperienceId,

        handleAddAchievement,
        handleEditAchievement,
        handleUpdateAchievement,
        editingAchievementId,

        handleAddSpotlight,
        handleEditSpotlight,
        handleUpdateSpotlight,
        editingSpotlightId,

        handleAddWork,
        handleEditWork,
        handleUpdateWork,
        editingWorkId,

        removeItem,
    };
}
