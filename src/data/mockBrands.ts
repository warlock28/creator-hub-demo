export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    gallery?: string[];
    category: string;
    rating: number;
    reviews: number;
    tags?: string[];
}

export interface Brand {
    id: string;
    name: string;
    slug: string;
    logo: string;
    coverImage: string;
    description: string;
    rating: number;
    followers: string;
    deliveryTime: string;
    verified: boolean;
    categories: string[];
    products: Product[];
    tags: string[];
}

export const CATEGORIES = [
    { id: 'all', name: 'All', icon: 'LayoutGrid' },
    { id: 'fashion', name: 'Fashion', icon: 'Shirt' },
    { id: 'tech', name: 'Tech', icon: 'Laptop' },
    { id: 'food', name: 'Food', icon: 'Pizza' },
    { id: 'beauty', name: 'Beauty', icon: 'Sparkles' },
    { id: 'home', name: 'Home', icon: 'Home' },
];

export const MOCK_BRANDS: Brand[] = [
    {
        id: '1',
        name: 'TechNova Systems',
        slug: 'technova',
        logo: 'https://images.unsplash.com/photo-1620288627223-53748222d48d?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
        description: 'Premium tech solutions and gadgets for the modern professional.',
        rating: 4.8,
        followers: '12.5K',
        deliveryTime: '24 hrs',
        verified: true,
        categories: ['tech', 'gadgets'],
        tags: ['Electronics', 'Smart Home', 'Accessories'],
        products: [
            {
                id: 'p1',
                name: 'Ultra Wireless Buds',
                description: 'Noise cancelling earbuds with 24h battery life.',
                price: 4999,
                image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
                category: 'Audio',
                rating: 4.7,
                reviews: 128
            },
            {
                id: 'p2',
                name: 'Smart Home Hub',
                description: 'Control your entire home implementation from one device.',
                price: 8999,
                image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=400&q=80',
                category: 'Smart Home',
                rating: 4.9,
                reviews: 85
            },
            {
                id: 'p3',
                name: 'Ergo Mechanical Keyboard',
                description: 'Designed for coders and creators.',
                price: 12999,
                image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80',
                category: 'Peripherals',
                rating: 4.6,
                reviews: 210
            }
        ]
    },
    {
        id: '2',
        name: 'Urban Threads',
        slug: 'urban-threads',
        logo: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
        description: 'Sustainable fashion for the conscious urbanite.',
        rating: 4.5,
        followers: '8.2K',
        deliveryTime: '2-3 days',
        verified: true,
        categories: ['fashion', 'lifestyle'],
        tags: ['Clothing', 'Sustainable', 'Unisex'],
        products: [
            {
                id: 'p4',
                name: 'Organic Cotton Tee',
                description: '100% organic cotton, breathable and soft.',
                price: 999,
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
                category: 'Apparel',
                rating: 4.5,
                reviews: 320
            },
            {
                id: 'p5',
                name: 'Denim Jacket',
                description: 'Classic vintage wash denim jacket.',
                price: 3499,
                image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=400&q=80',
                category: 'Apparel',
                rating: 4.7,
                reviews: 154
            }
        ]
    },
    {
        id: '3',
        name: 'Gourmet Express',
        slug: 'gourmet-express',
        logo: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
        description: 'Artisanal snacks and coffee delivered fresh.',
        rating: 4.9,
        followers: '15.1K',
        deliveryTime: '45 mins',
        verified: true,
        categories: ['food', 'beverages'],
        tags: ['Coffee', 'Snacks', 'Bakery'],
        products: [
            {
                id: 'p6',
                name: 'Artisan Dark Roast Coffee',
                description: 'Single origin beans from Coorg.',
                price: 650,
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
                category: 'Beverages',
                rating: 4.9,
                reviews: 512
            },
            {
                id: 'p7',
                name: 'Sourdough Bread Loaf',
                description: 'Freshly baked daily.',
                price: 250,
                image: 'https://images.unsplash.com/photo-1585476644321-b9125fbe7929?auto=format&fit=crop&w=400&q=80',
                category: 'Bakery',
                rating: 4.8,
                reviews: 89
            }
        ]
    },
    {
        id: '4',
        name: 'Luxe Interiors',
        slug: 'luxe-interiors',
        logo: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1200&q=80',
        description: 'Transforming spaces with modern minimalism.',
        rating: 4.6,
        followers: '5.4K',
        deliveryTime: '3-4 days',
        verified: false,
        categories: ['home', 'decor'],
        tags: ['Furniture', 'Decor', 'Lighting'],
        products: [
            {
                id: 'p8',
                name: 'Minimalist Lamp',
                description: 'Warm ambient lighting for your desk.',
                price: 2200,
                image: 'https://images.unsplash.com/photo-1507473888900-52e1adad5474?auto=format&fit=crop&w=400&q=80',
                category: 'Lighting',
                rating: 4.6,
                reviews: 45
            }
        ]
    }
];
