// Beauty / Cosmetics Brand Data
import { Brand, Product } from './mockBrands';

export const BEAUTY_BRANDS: Brand[] = [
    {
        id: 'beauty-1',
        name: 'Glow Luxe',
        slug: 'glow-luxe',
        logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
        description: 'Premium skincare and beauty products for radiant skin.',
        rating: 4.8,
        followers: '42.3K',
        deliveryTime: '24 hrs',
        verified: true,
        categories: ['beauty', 'skincare', 'premium'],
        tags: ['Skincare', 'Luxury', 'Natural'],
        products: [
            {
                id: 'bp1',
                name: 'Vitamin C Serum',
                description: 'Brightening vitamin C serum with hyaluronic acid.',
                price: 1499,
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
                category: 'Serums',
                rating: 4.9,
                reviews: 3456
            },
            {
                id: 'bp2',
                name: 'Hydrating Face Cream',
                description: 'Deep moisturizing cream for all skin types.',
                price: 999,
                image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80',
                category: 'Moisturizers',
                rating: 4.7,
                reviews: 2345
            },
            {
                id: 'bp3',
                name: 'Retinol Night Cream',
                description: 'Anti-aging retinol cream for overnight skin renewal.',
                price: 1899,
                image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=400&q=80',
                category: 'Anti-Aging',
                rating: 4.8,
                reviews: 1890
            },
            {
                id: 'bp4',
                name: 'SPF 50 Sunscreen',
                description: 'Lightweight sunscreen with broad spectrum protection.',
                price: 799,
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
                category: 'Sun Care',
                rating: 4.6,
                reviews: 4567
            },
            {
                id: 'bp13',
                name: 'Purifying Clay Mask',
                description: 'Detoxifying clay mask for deep pore cleansing.',
                price: 899,
                image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
                category: 'Masks',
                rating: 4.7,
                reviews: 890
            },
            {
                id: 'bp14',
                name: 'Gentle Exfoliating Scrub',
                description: 'Micro-bead free facial scrub for smooth skin.',
                price: 699,
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80',
                category: 'Cleansers',
                rating: 4.5,
                reviews: 560
            },
            {
                id: 'bp15',
                name: 'Rose Water Toner',
                description: 'Hydrating and balancing facial toner.',
                price: 499,
                image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80',
                category: 'Toners',
                rating: 4.8,
                reviews: 1120
            }
        ]
    },
    {
        id: 'beauty-2',
        name: 'Color Pop',
        slug: 'color-pop',
        logo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
        description: 'Vibrant makeup and cosmetics for bold expressions.',
        rating: 4.6,
        followers: '35.8K',
        deliveryTime: '2-3 days',
        verified: true,
        categories: ['beauty', 'makeup', 'cosmetics'],
        tags: ['Makeup', 'Colorful', 'Trendy'],
        products: [
            {
                id: 'bp5',
                name: 'Matte Lipstick Set',
                description: '6-piece long-lasting matte lipstick collection.',
                price: 1299,
                image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80',
                category: 'Lips',
                rating: 4.7,
                reviews: 2890
            },
            {
                id: 'bp6',
                name: 'Eyeshadow Palette',
                description: '18 shades shimmer and matte eyeshadow palette.',
                price: 1799,
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80',
                category: 'Eyes',
                rating: 4.8,
                reviews: 1567
            },
            {
                id: 'bp7',
                name: 'Foundation - Natural Finish',
                description: 'Medium coverage foundation for natural look.',
                price: 899,
                image: 'https://images.unsplash.com/photo-1557205465-f3762edea6d3?auto=format&fit=crop&w=400&q=80',
                category: 'Face',
                rating: 4.5,
                reviews: 3456
            },
            {
                id: 'bp8',
                name: 'Mascara Volume Boost',
                description: 'Volumizing mascara for dramatic lashes.',
                price: 599,
                image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=400&q=80',
                category: 'Eyes',
                rating: 4.6,
                reviews: 2345
            },
            {
                id: 'bp16',
                name: 'Liquid Eyeliner',
                description: 'Waterproof precision liquid eyeliner pen.',
                price: 450,
                image: 'https://images.unsplash.com/photo-1631214503951-4929a5c22535?auto=format&fit=crop&w=400&q=80',
                category: 'Eyes',
                rating: 4.6,
                reviews: 3200
            },
            {
                id: 'bp17',
                name: 'Blush & Highlight Duo',
                description: 'Pigmented blush and highlighter compact.',
                price: 999,
                image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=400&q=80',
                category: 'Face',
                rating: 4.7,
                reviews: 890
            }
        ]
    },
    {
        id: 'beauty-3',
        name: 'Natural Bliss',
        slug: 'natural-bliss',
        logo: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80',
        description: 'Organic and natural beauty products for conscious consumers.',
        rating: 4.7,
        followers: '28.4K',
        deliveryTime: '48 hrs',
        verified: true,
        categories: ['beauty', 'organic', 'natural'],
        tags: ['Organic', 'Cruelty-Free', 'Vegan'],
        products: [
            {
                id: 'bp9',
                name: 'Organic Face Oil',
                description: 'Cold-pressed organic face oil blend.',
                price: 1299,
                image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80',
                category: 'Oils',
                rating: 4.8,
                reviews: 1234
            },
            {
                id: 'bp10',
                name: 'Aloe Vera Gel',
                description: 'Pure aloe vera gel for skin and hair.',
                price: 399,
                image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=400&q=80',
                category: 'Multipurpose',
                rating: 4.6,
                reviews: 4567
            },
            {
                id: 'bp11',
                name: 'Herbal Hair Oil',
                description: 'Ayurvedic herbal hair oil for healthy hair.',
                price: 549,
                image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=400&q=80',
                category: 'Hair Care',
                rating: 4.7,
                reviews: 2345
            },
            {
                id: 'bp12',
                name: 'Natural Lip Balm Set',
                description: 'Set of 4 organic lip balms with shea butter.',
                price: 399,
                image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=400&q=80',
                category: 'Lips',
                rating: 4.5,
                reviews: 890
            },
            {
                id: 'bp18',
                name: 'Bamboo Toothbrush Set',
                description: 'Eco-friendly biodegradable bamboo toothbrushes.',
                price: 299,
                image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb6dc2d?auto=format&fit=crop&w=400&q=80',
                category: 'Tools',
                rating: 4.9,
                reviews: 450
            },
            {
                id: 'bp19',
                name: 'Lavender Soap Bar',
                description: 'Handmade organic soap with calming lavender.',
                price: 199,
                image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=400&q=80',
                category: 'Bath',
                rating: 4.8,
                reviews: 1250
            },
            {
                id: 'bp20',
                name: 'Aroma Diffuser Oil',
                description: 'Pure essential oil blend for diffusers.',
                price: 699,
                image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
                category: 'Wellness',
                rating: 4.6,
                reviews: 340
            }
        ]
    }
];
