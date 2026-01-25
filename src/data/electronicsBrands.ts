// Electronics Brand Data
import { Brand, Product } from './mockBrands';

export const ELECTRONICS_BRANDS: Brand[] = [
    {
        id: 'electronics-1',
        name: 'TechZone Pro',
        slug: 'techzone-pro',
        logo: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
        description: 'Premium electronics and cutting-edge technology products.',
        rating: 4.9,
        followers: '45.6K',
        deliveryTime: '24 hrs',
        verified: true,
        categories: ['electronics', 'gadgets', 'tech'],
        tags: ['Premium', 'Latest Tech', 'Warranty'],
        products: [
            {
                id: 'ep1',
                name: 'Wireless Noise Cancelling Headphones',
                description: 'Premium ANC headphones with 40hr battery, Hi-Res audio certified.',
                price: 18999,
                image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
                category: 'Audio',
                rating: 4.8,
                reviews: 2456
            },
            {
                id: 'ep2',
                name: 'Smart Watch Pro',
                description: 'Advanced health tracking, AMOLED display, 7-day battery.',
                price: 24999,
                image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80',
                category: 'Wearables',
                rating: 4.7,
                reviews: 1890
            },
            {
                id: 'ep3',
                name: 'Mechanical Gaming Keyboard',
                description: 'RGB backlit mechanical keyboard with Cherry MX switches.',
                price: 8999,
                image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80',
                category: 'Peripherals',
                rating: 4.9,
                reviews: 3456
            },
            {
                id: 'ep4',
                name: 'Portable Power Bank 20000mAh',
                description: 'Fast charging power bank with PD and QC 3.0 support.',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.6,
                reviews: 4567
            },
            {
                id: 'ep13',
                name: 'UltraWide Gaming Monitor',
                description: '34-inch curved gaming monitor, 144Hz refresh rate, 1ms response.',
                price: 45999,
                image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80',
                category: 'Gaming',
                rating: 4.9,
                reviews: 890
            },
            {
                id: 'ep14',
                name: 'Pro Tab Ultra',
                description: '12.9-inch Liquid Retina display, M1 chip for professionals.',
                price: 79999,
                image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',
                category: 'Tablets',
                rating: 4.8,
                reviews: 1200
            },
            {
                id: 'ep15',
                name: 'Pro Camera Drone',
                description: '4K camera drone with 3-axis gimbal and 30min flight time.',
                price: 65000,
                image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=400&q=80',
                category: 'Drones',
                rating: 4.7,
                reviews: 560
            },
            {
                id: 'ep16',
                name: 'VR Headset Elite',
                description: 'Immersive VR headset with high-resolution display and controllers.',
                price: 34999,
                image: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&w=400&q=80',
                category: 'Gaming',
                rating: 4.6,
                reviews: 430
            },
            {
                id: 'ep21',
                name: 'Pro Gaming Mouse',
                description: 'High-precision 25K DPI sensor, RGB lighting, lightweight design.',
                price: 5999,
                image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=400&q=80',
                category: 'Gaming',
                rating: 4.8,
                reviews: 2300
            },
            {
                id: 'ep22',
                name: 'DSLR Camera Kit',
                description: '24.2MP DSLR with 18-55mm lens and accessory bundle.',
                price: 54999,
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80',
                category: 'Cameras',
                rating: 4.9,
                reviews: 670
            }
        ]
    },
    {
        id: 'electronics-2',
        name: 'Digital Dreams',
        slug: 'digital-dreams',
        logo: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80',
        description: 'Smart home solutions and connected devices for modern living.',
        rating: 4.7,
        followers: '28.4K',
        deliveryTime: '48 hrs',
        verified: true,
        categories: ['electronics', 'smart-home'],
        tags: ['Smart Home', 'IoT', 'Connected'],
        products: [
            {
                id: 'ep5',
                name: 'Smart LED Bulb (4 Pack)',
                description: 'WiFi enabled RGB smart bulbs, voice control compatible.',
                price: 2999,
                image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=400&q=80',
                category: 'Smart Home',
                rating: 4.5,
                reviews: 1234
            },
            {
                id: 'ep6',
                name: 'Smart Security Camera',
                description: '1080p HD camera with night vision and 2-way audio.',
                price: 3499,
                image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
                category: 'Security',
                rating: 4.6,
                reviews: 890
            },
            {
                id: 'ep7',
                name: 'Smart Door Lock',
                description: 'Fingerprint and app-controlled smart door lock.',
                price: 12999,
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
                category: 'Security',
                rating: 4.8,
                reviews: 567
            },
            {
                id: 'ep8',
                name: 'Smart Thermostat',
                description: 'AI-powered thermostat for energy-efficient climate control.',
                price: 8999,
                image: 'https://images.unsplash.com/photo-1567473030492-533b30c5494c?auto=format&fit=crop&w=400&q=80',
                category: 'Smart Home',
                rating: 4.7,
                reviews: 345
            },
            {
                id: 'ep17',
                name: 'Smart Home Speaker',
                description: 'Voice-controlled smart speaker with premium sound.',
                price: 4999,
                image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=400&q=80',
                category: 'Smart Home',
                rating: 4.5,
                reviews: 2100
            },
            {
                id: 'ep23',
                name: 'Smart Body Scale',
                description: 'Wi-Fi smart scale with 13 body composition measurements.',
                price: 3499,
                image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=400&q=80',
                category: 'Smart Home',
                rating: 4.6,
                reviews: 1500
            },
            {
                id: 'ep24',
                name: 'Smart WiFi Plug (2-Pack)',
                description: 'Control appliances from anywhere, voice control compatible.',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1563458421869-7d0d0f558112?auto=format&fit=crop&w=400&q=80',
                category: 'Smart Home',
                rating: 4.5,
                reviews: 890
            }
        ]
    },
    {
        id: 'electronics-3',
        name: 'GadgetHub',
        slug: 'gadgethub',
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
        description: 'Affordable gadgets and accessories for everyone.',
        rating: 4.4,
        followers: '52.8K',
        deliveryTime: '2-3 days',
        verified: true,
        categories: ['electronics', 'accessories'],
        tags: ['Budget', 'Accessories', 'Mobile'],
        products: [
            {
                id: 'ep9',
                name: 'Wireless Earbuds',
                description: 'True wireless earbuds with touch controls and 24hr battery.',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
                category: 'Audio',
                rating: 4.3,
                reviews: 5678
            },
            {
                id: 'ep10',
                name: 'Phone Holder Car Mount',
                description: 'Magnetic car mount with wireless charging support.',
                price: 899,
                image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.4,
                reviews: 2345
            },
            {
                id: 'ep11',
                name: 'USB-C Hub 7-in-1',
                description: 'Multi-port USB-C hub with HDMI, SD card, USB 3.0 ports.',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1625723044792-44de16e36fd9?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.5,
                reviews: 1567
            },
            {
                id: 'ep12',
                name: 'Laptop Stand Adjustable',
                description: 'Ergonomic aluminum laptop stand with adjustable height.',
                price: 1499,
                image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.6,
                reviews: 890
            },
            {
                id: 'ep18',
                name: 'Fast Wireless Charger',
                description: '15W fast wireless charging pad for all Qi-enabled devices.',
                price: 1299,
                image: 'https://images.unsplash.com/photo-1622445272461-c9589c8b955a?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.4,
                reviews: 1500
            },
            {
                id: 'ep19',
                name: '4K Action Camera',
                description: 'Waterproof action camera with stabilization and 4K recording.',
                price: 15999,
                image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
                category: 'Cameras',
                rating: 4.6,
                reviews: 890
            },
            {
                id: 'ep20',
                name: 'Compact Soundbar',
                description: 'Bluetooth soundbar with deep bass for TV and PC.',
                price: 5499,
                image: 'https://images.unsplash.com/photo-1617983053315-bc44a7f050ce?auto=format&fit=crop&w=400&q=80',
                category: 'Audio',
                rating: 4.5,
                reviews: 670
            },
            {
                id: 'ep25',
                name: 'Streaming HD Webcam',
                description: '1080p 60fps webcam with ring light for streaming.',
                price: 4500,
                image: 'https://images.unsplash.com/photo-1627931308365-1d441dd82d49?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.4,
                reviews: 1200
            },
            {
                id: 'ep26',
                name: 'Portable Bluetooth Speaker',
                description: 'Waterproof outdoor speaker with 20hr playtime.',
                price: 3999,
                image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80',
                category: 'Audio',
                rating: 4.7,
                reviews: 3400
            },
            {
                id: 'ep27',
                name: 'Studio USB Microphone',
                description: 'Professional condenser microphone for podcasting and recording.',
                price: 6999,
                image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80',
                category: 'Audio',
                rating: 4.8,
                reviews: 980
            },
            {
                id: 'ep28',
                name: 'Digital Drawing Tablet',
                description: 'Graphics tablet with battery-free stylus for artists.',
                price: 5999,
                image: 'https://images.unsplash.com/photo-1569766956276-883398c8c257?auto=format&fit=crop&w=400&q=80',
                category: 'Creative',
                rating: 4.6,
                reviews: 1560
            }
        ]
    }
];
