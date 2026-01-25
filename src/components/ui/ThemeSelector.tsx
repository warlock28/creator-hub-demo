import { Check } from "lucide-react";
import { PROFILE_THEMES } from "@/constants/profileThemes";
import { motion } from "framer-motion";

interface ThemeSelectorProps {
    selectedTheme?: string;
    onThemeChange: (themeId: string) => void;
}

export function ThemeSelector({ selectedTheme, onThemeChange }: ThemeSelectorProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PROFILE_THEMES.map((theme) => (
                <motion.button
                    key={theme.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onThemeChange(theme.id)}
                    type="button"
                    className={`relative rounded-xl p-3 border-2 transition-all ${selectedTheme === theme.id
                            ? 'border-primary shadow-lg ring-2 ring-primary/20'
                            : 'border-border hover:border-primary/50'
                        }`}
                >
                    {/* Preview Rectangle */}
                    <div
                        className="w-full aspect-[3/2] rounded-lg mb-2 shadow-sm"
                        style={{ background: theme.preview }}
                    />

                    {/* Theme Name */}
                    <p className="text-xs font-medium text-center truncate">
                        {theme.name}
                    </p>

                    {/* Selected Indicator */}
                    {selectedTheme === theme.id && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-lg"
                        >
                            <Check className="h-4 w-4 text-white" />
                        </motion.div>
                    )}
                </motion.button>
            ))}
        </div>
    );
}
