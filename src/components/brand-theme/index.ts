// Brand Theme Components Index
// Each theme provides a unique category-specific UI design

export { GroceryTheme } from './GroceryTheme';
export { ElectronicsTheme } from './ElectronicsTheme';
export { ClothesTheme } from './ClothesTheme';
export { BeautyTheme } from './BeautyTheme';
export { ServicesTheme } from './ServicesTheme';

// Theme selector helper
export const THEME_MAP = {
    grocery: 'GroceryTheme',
    electronics: 'ElectronicsTheme',
    clothes: 'ClothesTheme',
    fashion: 'ClothesTheme',
    beauty: 'BeautyTheme',
    services: 'ServicesTheme',
    default: 'ElectronicsTheme'
} as const;

// Get theme name by category
export const getThemeByCategory = (category: string): string => {
    const normalizedCategory = category.toLowerCase();

    if (normalizedCategory.includes('grocery') || normalizedCategory.includes('vegetable') || normalizedCategory.includes('fruit') || normalizedCategory.includes('food')) {
        return 'grocery';
    }
    if (normalizedCategory.includes('electronic') || normalizedCategory.includes('tech') || normalizedCategory.includes('gadget')) {
        return 'electronics';
    }
    if (normalizedCategory.includes('cloth') || normalizedCategory.includes('fashion') || normalizedCategory.includes('apparel')) {
        return 'clothes';
    }
    if (normalizedCategory.includes('beauty') || normalizedCategory.includes('cosmetic') || normalizedCategory.includes('skincare')) {
        return 'beauty';
    }
    if (normalizedCategory.includes('service') || normalizedCategory.includes('technician') || normalizedCategory.includes('mechanic') || normalizedCategory.includes('electric') || normalizedCategory.includes('plumb')) {
        return 'services';
    }

    return 'default';
};
