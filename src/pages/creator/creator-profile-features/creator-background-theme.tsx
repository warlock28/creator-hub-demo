import { getThemeGradient } from "@/constants/profileThemes";

interface CreatorBackgroundThemeProps {
    themeId?: string;
    className?: string;
}

/**
 * CreatorBackgroundTheme Component
 * 
 * Displays the background theme for creator profiles.
 * Works with both gradient and SVG pattern themes.
 * Height covers the hero section up to profile header bottom.
 */
export function CreatorBackgroundTheme({
    themeId = 'sunset',
    className = ""
}: CreatorBackgroundThemeProps) {
    const background = getThemeGradient(themeId);

    return (
        <div
            className={`relative h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden ${className}`}
            style={{ background }}
        >
            {/* Minimal gradient overlays for smooth transition to content */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
    );
}

