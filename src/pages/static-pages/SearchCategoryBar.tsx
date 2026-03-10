import { Search, SlidersHorizontal, X, MapPin, Star, DollarSign, ChevronDown, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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

// Filter options
const LOCATIONS = [
    "All Locations",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
];

const PRICE_RANGES = [
    { id: "all", label: "All Prices" },
    { id: "budget", label: "Budget Friendly" },
    { id: "mid", label: "Mid Range" },
    { id: "premium", label: "Premium" },
];

const RATINGS = [
    { id: "all", label: "All Ratings" },
    { id: "4+", label: "4+ Stars" },
    { id: "3+", label: "3+ Stars" },
];

// Custom Dropdown Component
interface CustomDropdownProps {
    value: string;
    options: { id: string; label: string }[];
    onChange: (value: string) => void;
    icon: LucideIcon;
    label: string;
}

function CustomDropdown({ value, options, onChange, icon: Icon, label }: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.id === value);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                <Icon className="h-3.5 w-3.5" />
                {label}
            </label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-10 px-3 pr-8 rounded-xl text-sm border text-left flex items-center justify-between transition-all ${isOpen
                        ? "border-primary ring-2 ring-primary/20 bg-white dark:bg-slate-800"
                        : "border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-500"
                    } text-gray-700 dark:text-gray-300`}
            >
                <span className="truncate">{selectedOption?.label || value}</span>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1.5 py-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                                onChange(option.id);
                                setIsOpen(false);
                            }}
                            className={`w-full px-3 py-2 text-sm text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${value === option.id
                                    ? "text-primary font-medium bg-primary/5"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
                        >
                            <span>{option.label}</span>
                            {value === option.id && <Check className="h-4 w-4 text-primary" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
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
    // Local filter state
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [selectedPriceRange, setSelectedPriceRange] = useState("all");
    const [selectedRating, setSelectedRating] = useState("all");

    const hasActiveFilters = selectedLocation !== "All Locations" || selectedPriceRange !== "all" || selectedRating !== "all";

    const clearAllFilters = () => {
        setSelectedLocation("All Locations");
        setSelectedPriceRange("all");
        setSelectedRating("all");
    };

    // Convert locations to options format
    const locationOptions = LOCATIONS.map(loc => ({ id: loc, label: loc }));

    // Filter Panel Component (reusable for both variants)
    const FilterPanel = () => (
        <div className="pt-4 border-t border-gray-100 dark:border-slate-700 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Location Filter */}
                <CustomDropdown
                    value={selectedLocation}
                    options={locationOptions}
                    onChange={setSelectedLocation}
                    icon={MapPin}
                    label="Location"
                />

                {/* Price Range Filter */}
                <CustomDropdown
                    value={selectedPriceRange}
                    options={PRICE_RANGES}
                    onChange={setSelectedPriceRange}
                    icon={DollarSign}
                    label="Price Range"
                />

                {/* Rating Filter */}
                <CustomDropdown
                    value={selectedRating}
                    options={RATINGS}
                    onChange={setSelectedRating}
                    icon={Star}
                    label="Rating"
                />
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={clearAllFilters}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border border-red-200 dark:border-red-800"
                    >
                        <X className="h-3.5 w-3.5" />
                        Clear All Filters
                    </button>
                </div>
            )}
        </div>
    );

    // SEPARATED LAYOUT (Creator style) - Search bar separate from categories
    if (variant === "separated") {
        return (
            <div className="sticky top-14 sm:top-16 z-40 py-2 sm:py-3">
                <div className="bg-white dark:bg-slate-900 rounded-2xl px-3 sm:px-4 py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-slate-800">

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
                        <button
                            type="button"
                            className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-xl flex items-center justify-center transition-colors ${showFilters
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"
                                }`}
                            onClick={onToggleFilters}
                        >
                            <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </div>

                    {/* Filter Panel */}
                    {showFilters && <FilterPanel />}

                    {/* Categories Label */}
                    <h3 className={`text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3 ${showFilters ? "mt-4" : ""}`}>
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
                                        className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap border ${isActive
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
                                    className="flex items-center gap-1 px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border border-red-200 dark:border-red-800"
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
        <div className="sticky top-[52px] sm:top-[60px] z-40 -mt-1 pt-1">
            <div className="bg-white dark:bg-slate-900 rounded-2xl px-3 sm:px-4 py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-slate-800">

                {/* Search Bar Row */}
                <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-9 pr-11 h-9 sm:h-10 rounded-xl text-sm border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus-visible:ring-1 focus-visible:ring-primary/50"
                    />
                    <button
                        type="button"
                        className={`absolute right-1.5 top-1/2 -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7 rounded-lg flex items-center justify-center transition-colors ${showFilters
                                ? "bg-primary text-white"
                                : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"
                            }`}
                        onClick={onToggleFilters}
                    >
                        <SlidersHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                </div>

                {/* Filter Panel */}
                {showFilters && <FilterPanel />}

                {/* Category Chips Row */}
                <div className={`overflow-x-auto scrollbar-hide -mx-1 px-1 ${showFilters ? "mt-4" : ""}`}>
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
                                    className={`group flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${isActive
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
                                className="flex items-center gap-1 px-2 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
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
