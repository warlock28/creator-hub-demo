/**
 * Format large numbers into human-readable strings
 * @example formatFollowerCount(1234) => "1.2K"
 * @example formatFollowerCount(5678900) => "5.7M"
 */
export function formatFollowerCount(count: number): string {
    if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
}

/**
 * Format price with Indian currency symbol
 */
export function formatPrice(price: number): string {
    return `₹${price.toLocaleString('en-IN')}`;
}

/**
 * Generate star rating array for visual display
 * @returns Array of 'full', 'half', or 'empty' for each star position
 */
export function getStarRating(rating: number): ('full' | 'half' | 'empty')[] {
    const stars: ('full' | 'half' | 'empty')[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push('full');
        } else if (i === fullStars && hasHalfStar) {
            stars.push('half');
        } else {
            stars.push('empty');
        }
    }

    return stars;
}
