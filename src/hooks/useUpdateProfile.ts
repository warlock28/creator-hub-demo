import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface UpdateProfileData {
    full_name?: string;
    // Creator-specific fields
    bio?: string;
    avatar_url?: string;
    niche?: string;
    location?: string;
    // Customer-specific fields
    company_name?: string;
    industry?: string;
}

/**
 * Hook to update user profile
 * Uses local storage for mock profile updates
 */
export function useUpdateProfile() {
    const { userProfile } = useAuth();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: UpdateProfileData) => {
            if (!userProfile) {
                throw new Error("User not authenticated");
            }

            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Get current auth data from localStorage
            const STORAGE_KEY = "career_hub_auth";
            const storedAuth = localStorage.getItem(STORAGE_KEY);

            if (!storedAuth) {
                throw new Error("No session found");
            }

            const authData = JSON.parse(storedAuth);
            const { full_name, ...profileData } = data;

            // Update full_name in userProfile if provided
            if (full_name) {
                authData.userProfile.full_name = full_name;
            }

            // Update role-specific profile fields
            if (Object.keys(profileData).length > 0 && authData.userProfile.profile) {
                authData.userProfile.profile = {
                    ...authData.userProfile.profile,
                    ...profileData,
                };
            }

            // Save back to localStorage
            localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));

            return data;
        },
        onSuccess: () => {
            // Invalidate profile query to refetch updated data
            queryClient.invalidateQueries({ queryKey: ["profile", userProfile?.id] });
            toast.success("Profile updated successfully");
        },
        onError: (error: any) => {
            console.error("Profile update error:", error);
            toast.error(error.message || "Failed to update profile");
        },
    });
}
