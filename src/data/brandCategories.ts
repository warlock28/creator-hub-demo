// Brand Categories Index - Export all brand data
import { Brand } from './mockBrands';
import { GROCERY_BRANDS } from './groceryBrands';
import { ELECTRONICS_BRANDS } from './electronicsBrands';
import { CLOTHES_BRANDS } from './clothesBrands';
import { BEAUTY_BRANDS } from './beautyBrands';
import { SERVICES_BRANDS, ServiceProvider } from './servicesBrands';

// Category definitions with icons
export const BRAND_CATEGORIES = [
    {
        id: 'all',
        name: 'All',
        icon: 'LayoutGrid',
        color: 'slate',
        description: 'Browse all categories'
    },
    {
        id: 'grocery',
        name: 'Grocery & Vegetables',
        icon: 'Apple',
        color: 'green',
        description: 'Fresh fruits, vegetables, and daily essentials'
    },
    {
        id: 'electronics',
        name: 'Electronics',
        icon: 'Laptop',
        color: 'blue',
        description: 'Gadgets, devices, and smart home products'
    },
    {
        id: 'clothes',
        name: 'Fashion & Clothing',
        icon: 'Shirt',
        color: 'purple',
        description: 'Trendy fashion and apparel for everyone'
    },
    {
        id: 'beauty',
        name: 'Beauty & Cosmetics',
        icon: 'Sparkles',
        color: 'pink',
        description: 'Skincare, makeup, and personal care'
    },
    {
        id: 'services',
        name: 'Home Services',
        icon: 'Wrench',
        color: 'orange',
        description: 'Electricians, plumbers, mechanics, and more'
    },
];

// Get all brands combined
export const getAllBrands = (): Brand[] => {
    return [
        ...GROCERY_BRANDS,
        ...ELECTRONICS_BRANDS,
        ...CLOTHES_BRANDS,
        ...BEAUTY_BRANDS,
        ...SERVICES_BRANDS,
    ];
};

// Get brands by category
export const getBrandsByCategory = (categoryId: string): Brand[] => {
    switch (categoryId) {
        case 'grocery':
            return GROCERY_BRANDS;
        case 'electronics':
            return ELECTRONICS_BRANDS;
        case 'clothes':
            return CLOTHES_BRANDS;
        case 'beauty':
            return BEAUTY_BRANDS;
        case 'services':
            return SERVICES_BRANDS;
        case 'all':
        default:
            return getAllBrands();
    }
};

// Get service providers (for services category)
export const getServiceProviders = (): ServiceProvider[] => {
    return SERVICES_BRANDS;
};

// Get featured brands (one from each category)
export const getFeaturedBrands = (): Brand[] => {
    return [
        GROCERY_BRANDS[0],
        ELECTRONICS_BRANDS[0],
        CLOTHES_BRANDS[0],
        BEAUTY_BRANDS[0],
        SERVICES_BRANDS[0],
    ];
};

// Get brand by ID from all categories
export const getBrandById = (brandId: string): Brand | undefined => {
    const allBrands = getAllBrands();
    return allBrands.find(brand => brand.id === brandId);
};

// Get category info by brand ID
export const getCategoryByBrandId = (brandId: string): string => {
    if (GROCERY_BRANDS.some(b => b.id === brandId)) return 'grocery';
    if (ELECTRONICS_BRANDS.some(b => b.id === brandId)) return 'electronics';
    if (CLOTHES_BRANDS.some(b => b.id === brandId)) return 'clothes';
    if (BEAUTY_BRANDS.some(b => b.id === brandId)) return 'beauty';
    if (SERVICES_BRANDS.some(b => b.id === brandId)) return 'services';
    return 'all';
};

// Re-export individual brand arrays
export {
    GROCERY_BRANDS,
    ELECTRONICS_BRANDS,
    CLOTHES_BRANDS,
    BEAUTY_BRANDS,
    SERVICES_BRANDS,
};

// Export types
export type { ServiceProvider };
