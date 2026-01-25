import { useQuery } from "@tanstack/react-query";
import type { CreatorProfile as CreatorProfileType } from "@/types/creator";
import { creators } from "@/data/creators";

export function useCreatorProfile(id: string | undefined) {
    return useQuery({
        queryKey: ['creator-profile', id],
        queryFn: async () => {
            if (!id) throw new Error("No ID provided");

            // Find creator in local data
            const creator = creators.find(c => c.id === id);
            
            if (!creator) throw new Error("Creator not found");

            // Return the creator data directly from local storage
            return creator as CreatorProfileType;
        },
        enabled: !!id,
        staleTime: 5 * 60 * 1000, // 5 minutes cache
        refetchOnWindowFocus: false,
    });
}
