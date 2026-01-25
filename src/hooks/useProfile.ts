import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Hook to fetch the current user's complete profile
 * Includes base user data + role-specific profile (creator or customer)
 */
export function useProfile() {
    const { user, userProfile, loading: authLoading } = useAuth();

    const query = useQuery({
        queryKey: ["profile", user?.id],
        queryFn: async () => {
            if (!userProfile) {
                throw new Error("No user profile found");
            }
            return userProfile;
        },
        enabled: !!user && !authLoading,
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    return {
        ...query,
        profile: query.data,
        isLoading: authLoading || query.isLoading,
    };
}
