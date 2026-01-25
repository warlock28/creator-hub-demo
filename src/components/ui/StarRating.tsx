import { Star } from 'lucide-react';
import { getStarRating } from '@/utils/formatters';
import { cn } from '@/lib/utils';

interface StarRatingProps {
    rating: number;
    size?: 'sm' | 'md' | 'lg';
    showValue?: boolean;
    className?: string;
}

export function StarRating({ rating, size = 'md', showValue = false, className }: StarRatingProps) {
    const stars = getStarRating(rating);

    const sizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
    };

    const iconSize = sizeClasses[size];

    return (
        <div className={cn('flex items-center gap-1', className)}>
            {stars.map((star, index) => (
                <div key={index} className="relative">
                    {star === 'full' && (
                        <Star className={cn(iconSize, 'fill-yellow-400 text-yellow-400')} />
                    )}
                    {star === 'half' && (
                        <>
                            <Star className={cn(iconSize, 'text-yellow-400')} />
                            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                                <Star className={cn(iconSize, 'fill-yellow-400 text-yellow-400')} />
                            </div>
                        </>
                    )}
                    {star === 'empty' && (
                        <Star className={cn(iconSize, 'text-slate-300 dark:text-slate-600')} />
                    )}
                </div>
            ))}
            {showValue && (
                <span className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
}
