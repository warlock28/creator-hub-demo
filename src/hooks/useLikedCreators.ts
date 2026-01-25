import { useState, useEffect } from 'react';

export function useLikedCreators() {
    const [likedCreators, setLikedCreators] = useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('likedCreators');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Failed to load liked creators", e);
            return [];
        }
    });

    // Listen for changes from other components/tabs
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent | CustomEvent) => {
            if ((e instanceof StorageEvent && e.key === 'likedCreators') || e instanceof CustomEvent) {
                try {
                    const saved = localStorage.getItem('likedCreators');
                    if (saved) {
                        setLikedCreators(JSON.parse(saved));
                    }
                } catch (e) {
                    console.error("Failed to parse liked creators", e);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('likedCreatorsUpdated', handleStorageChange as EventListener);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('likedCreatorsUpdated', handleStorageChange as EventListener);
        };
    }, []);

    const toggleLike = (id: string) => {
        setLikedCreators(prev => {
            const newLiked = prev.includes(id)
                ? prev.filter(creatorId => creatorId !== id)
                : [...prev, id];

            localStorage.setItem('likedCreators', JSON.stringify(newLiked));
            window.dispatchEvent(new Event('likedCreatorsUpdated'));
            return newLiked;
        });
    };

    const isLiked = (id: string) => likedCreators.includes(id);

    return { likedCreators, toggleLike, isLiked };
}
