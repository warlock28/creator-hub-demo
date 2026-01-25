import { useState, useEffect } from 'react';
import { toast } from 'sonner';

/**
 * Custom hook to manage follow/unfollow state for brands
 * Uses localStorage for persistence (no backend integration yet)
 */
export function useFollow(brandId: string, initialFollowerCount: number) {
    const storageKey = `follow_${brandId}`;

    // Initialize from localStorage
    const [isFollowing, setIsFollowing] = useState<boolean>(() => {
        const stored = localStorage.getItem(storageKey);
        return stored === 'true';
    });

    const [followerCount, setFollowerCount] = useState<number>(() => {
        const storedCount = localStorage.getItem(`${storageKey}_count`);
        if (storedCount) {
            return parseInt(storedCount, 10);
        }
        // If user was already following, count should already include them
        const wasFollowing = localStorage.getItem(storageKey) === 'true';
        return wasFollowing ? initialFollowerCount : initialFollowerCount;
    });

    // Persist to localStorage whenever follow state changes
    useEffect(() => {
        localStorage.setItem(storageKey, isFollowing.toString());
        localStorage.setItem(`${storageKey}_count`, followerCount.toString());
    }, [isFollowing, followerCount, storageKey]);

    const toggleFollow = () => {
        setIsFollowing(prev => {
            const newValue = !prev;

            // Update follower count optimistically
            setFollowerCount(current => newValue ? current + 1 : current - 1);

            // Show feedback
            if (newValue) {
                toast.success('Following brand!', {
                    description: 'You\'ll see updates from this brand',
                });
            } else {
                toast.info('Unfollowed', {
                    description: 'You won\'t see updates from this brand',
                });
            }

            return newValue;
        });
    };

    return {
        isFollowing,
        followerCount,
        toggleFollow,
    };
}
