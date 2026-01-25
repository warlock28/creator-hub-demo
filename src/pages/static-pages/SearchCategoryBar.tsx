import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface Category {
    id: string;
    name: string;
    icon: LucideIcon;
}

export interface ThemeColor {
    bg: string;
    text: string;
    border?: string;
    badge?: string;
}

interface SearchCategoryBarProps {
    // Search props
    searchQuery: string;
    onSearchChange: (value: string) => void;
    searchPlaceholder?: string;

    // Filter toggle props
    showFilters: boolean;
    onToggleFilters: () => void;

    // Category props
    categories: Category[];
    selectedCategory: string;
    onCategoryChange: (categoryId: string) => void;

    // Theme colors for categories (optional)
    themeColors?: Record<string, ThemeColor>;

    // Active gradient for selected category
    activeGradient?: string;

    // Layout variant: "combined" (Brand style) or "separated" (Creator style)
    variant?: "combined" | "separated";
}

export function SearchCategoryBar({
    searchQuery,
    onSearchChange,
    searchPlaceholder = "Search...",
    showFilters,
    onToggleFilters,
    categories,
    selectedCategory,
    onCategoryChange,
    themeColors,
    activeGradient = "from-violet-600 to-purple-600",
    variant = "combined",
}: SearchCategoryBarProps) {

    // SEPARATED LAYOUT (Creator style) - Search bar separate from categories
    if (variant === "separated") {
        return (
            <div className="sticky top-14 sm:top-16 z-40 py-2 sm:py-3">
                <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-slate-800">

                    {/* Search Bar */}
                    <div className="relative mb-4 sm:mb-5">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder={searchPlaceholder}
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="pl-11 sm:pl-12 pr-12 h-11 sm:h-12 rounded-xl text-sm sm:text-base border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus-visible:ring-1 focus-visible:ring-primary/50"
                        />
                        <Button
                            variant={showFilters ? "default" : "ghost"}
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg h-8 w-8 sm:h-9 sm:w-9"
                            onClick={onToggleFilters}
                        >
                            <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </div>

                    {/* Categories Label */}
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3">
                        Categories
                    </h3>

                    {/* Category Chips */}
                    <div className="overflow-x-auto scrollbar-hide -mx-1 px-1">
                        <div className="flex gap-2 sm:gap-2.5 min-w-max">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                const isActive = selectedCategory === category.id;
                                const themeGradient = themeColors?.[category.id]?.bg || activeGradient;
                                const themeText = themeColors?.[category.id]?.text || "text-primary";

                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => onCategoryChange(category.id)}
                                        className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap border ${isActive
                                            ? `bg-gradient-to-r ${themeGradient} text-white shadow-md border-transparent`
                                            : "bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-slate-600"
                                            }`}
                                    >
                                        <Icon
                                            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive ? "text-white" : themeText}`}
                                        />
                                        <span>{category.name}</span>
                                    </button>
                                );
                            })}

                            {/* Clear button when filter active */}
                            {selectedCategory !== categories[0]?.id && (
                                <button
                                    onClick={() => onCategoryChange(categories[0]?.id || "all")}
                                    className="flex items-center gap-1 px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border border-red-200 dark:border-red-800"
                                >
                                    <X className="h-3.5 w-3.5" />
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // COMBINED LAYOUT (Brand style) - Everything in one compact box
    return (
        <div className="sticky top-14 sm:top-16 z-40 py-2 sm:py-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-slate-800">

                {/* Search Bar Row */}
                <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-9 pr-10 h-9 sm:h-10 rounded-lg text-sm border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus-visible:ring-1 focus-visible:ring-primary/50"
                    />
                    <Button
                        variant={showFilters ? "default" : "ghost"}
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md h-7 w-7 sm:h-8 sm:w-8"
                        onClick={onToggleFilters}
                    >
                        <SlidersHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                </div>

                {/* Category Chips Row */}
                <div className="overflow-x-auto scrollbar-hide -mx-1 px-1">
                    <div className="flex gap-1.5 sm:gap-2 min-w-max">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            const isActive = selectedCategory === category.id;
                            const themeGradient = themeColors?.[category.id]?.bg || activeGradient;
                            const themeText = themeColors?.[category.id]?.text || "text-primary";

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => onCategoryChange(category.id)}
                                    className={`group flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${isActive
                                        ? `bg-gradient-to-r ${themeGradient} text-white shadow-md`
                                        : "bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300"
                                        }`}
                                >
                                    <Icon
                                        className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${isActive ? "text-white" : themeText}`}
                                    />
                                    <span>{category.name}</span>
                                </button>
                            );
                        })}

                        {/* Clear button when filter active */}
                        {selectedCategory !== categories[0]?.id && (
                            <button
                                onClick={() => onCategoryChange(categories[0]?.id || "all")}
                                className="flex items-center gap-1 px-2 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            >
                                <X className="h-3 w-3" />
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
