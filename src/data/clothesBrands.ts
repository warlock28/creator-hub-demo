// Clothes / Fashion Brand Data
import { Brand, Product } from './mockBrands';

export const CLOTHES_BRANDS: Brand[] = [
    {
        id: 'clothes-1',
        name: 'Urban Style',
        slug: 'urban-style',
        logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
        description: 'Contemporary streetwear and casual fashion for the urban lifestyle.',
        rating: 4.7,
        followers: '38.2K',
        deliveryTime: '2-3 days',
        verified: true,
        categories: ['fashion', 'streetwear', 'casual'],
        tags: ['Trendy', 'Streetwear', 'Unisex'],
        products: [
            {
                id: 'cp1',
                name: 'Classic Hoodie',
                description: 'Premium cotton blend hoodie with kangaroo pocket.',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80',
                category: 'Hoodies',
                rating: 4.8,
                reviews: 2345
            },
            {
                id: 'cp2',
                name: 'Slim Fit Jeans',
                description: 'Stretch denim slim fit jeans with comfortable waistband.',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80',
                category: 'Jeans',
                rating: 4.6,
                reviews: 1890
            },
            {
                id: 'cp3',
                name: 'Graphic Print T-Shirt',
                description: 'Unique graphic print on soft cotton t-shirt.',
                price: 899,
                image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80',
                category: 'T-Shirts',
                rating: 4.5,
                reviews: 3456
            },
            {
                id: 'cp4',
                name: 'Cargo Pants',
                description: 'Relaxed fit cargo pants with multiple pockets.',
                price: 2199,
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80',
                category: 'Pants',
                rating: 4.7,
                reviews: 1234
            },
            {
                id: 'cp13',
                name: 'Oversized Knit Sweater',
                description: 'Cozy oversized knit sweater for chilly days.',
                price: 2799,
                image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80',
                category: 'Sweaters',
                rating: 4.8,
                reviews: 980
            },
            {
                id: 'cp14',
                name: 'Vintage Denim Jacket',
                description: 'Classic denim jacket with vintage wash.',
                price: 3499,
                image: 'https://images.unsplash.com/photo-1523205595296-6dbf3e7d1b74?auto=format&fit=crop&w=400&q=80',
                category: 'Jackets',
                rating: 4.7,
                reviews: 1450
            },
            {
                id: 'cp15',
                name: 'High-Top Sneakers',
                description: 'Canvas high-top sneakers with durable rubber sole.',
                price: 1899,
                image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80',
                category: 'Footwear',
                rating: 4.6,
                reviews: 2100
            },
            {
                id: 'cp21',
                name: 'Streetwear Bomber Jacket',
                description: 'Nylon bomber jacket with contrast lining and patches.',
                price: 4999,
                image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80',
                category: 'Jackets',
                rating: 4.8,
                reviews: 1650
            },
            {
                id: 'cp22',
                name: 'Urban Bucket Hat',
                description: 'Cotton twill bucket hat with embroidered logo.',
                price: 899,
                image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.5,
                reviews: 420
            }
        ]
    },
    {
        id: 'clothes-2',
        name: 'Elite Formals',
        slug: 'elite-formals',
        logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
        description: 'Premium formal wear for the modern professional.',
        rating: 4.8,
        followers: '22.5K',
        deliveryTime: '3-4 days',
        verified: true,
        categories: ['fashion', 'formal', 'business'],
        tags: ['Formal', 'Business', 'Premium'],
        products: [
            {
                id: 'cp5',
                name: 'Tailored Blazer',
                description: 'Slim fit wool blend blazer with notch lapels.',
                price: 8999,
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80',
                category: 'Blazers',
                rating: 4.9,
                reviews: 890
            },
            {
                id: 'cp6',
                name: 'Formal Dress Shirt',
                description: 'Crisp cotton formal shirt with French cuffs.',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80',
                category: 'Shirts',
                rating: 4.7,
                reviews: 1567
            },
            {
                id: 'cp7',
                name: 'Wool Trousers',
                description: 'Classic fit wool trousers with permanent crease.',
                price: 4999,
                image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80',
                category: 'Trousers',
                rating: 4.8,
                reviews: 678
            },
            {
                id: 'cp8',
                name: 'Silk Tie',
                description: 'Italian silk tie with elegant patterns.',
                price: 1499,
                image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.6,
                reviews: 456
            },
            {
                id: 'cp16',
                name: 'Tailored Pencil Skirt',
                description: 'Sleek pencil skirt perfect for the office.',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1577660002965-0ae92cff826a?auto=format&fit=crop&w=400&q=80',
                category: 'Skirts',
                rating: 4.7,
                reviews: 560
            },
            {
                id: 'cp17',
                name: 'Slim Chino Trousers',
                description: 'Versatile chinos that work for casual or formal.',
                price: 2299,
                image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=400&q=80',
                category: 'Trousers',
                rating: 4.5,
                reviews: 890
            },
            {
                id: 'cp18',
                name: 'Business Leather Bag',
                description: 'Genuine leather messenger bag for laptops.',
                price: 8999,
                image: 'https://images.unsplash.com/photo-1553064615-c23861c3ded1?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.9,
                reviews: 340
            },
            {
                id: 'cp23',
                name: 'Classic Trench Coat',
                description: 'Double-breasted trench coat in water-resistant cotton.',
                price: 7499,
                image: 'https://images.unsplash.com/photo-1548142723-a265bb6ebdad?auto=format&fit=crop&w=400&q=80',
                category: 'Coats',
                rating: 4.9,
                reviews: 310
            },
            {
                id: 'cp24',
                name: 'Premium Leather Belt',
                description: 'Full-grain leather belt with brushed metal buckle.',
                price: 1599,
                image: 'https://images.unsplash.com/photo-1624223354534-036e56bdfa7f?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.7,
                reviews: 890
            },
            {
                id: 'cp25',
                name: 'Formal Waistcoat',
                description: 'Tailored waistcoat to complete your three-piece suit.',
                price: 2999,
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80',
                category: 'Suits',
                rating: 4.8,
                reviews: 230
            }
        ]
    },
    {
        id: 'clothes-3',
        name: 'Ethnic Essence',
        slug: 'ethnic-essence',
        logo: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1583391099995-0e67401bf8f7?auto=format&fit=crop&w=1200&q=80',
        description: 'Traditional and fusion ethnic wear for all occasions.',
        rating: 4.6,
        followers: '19.8K',
        deliveryTime: '3-5 days',
        verified: true,
        categories: ['fashion', 'ethnic', 'traditional'],
        tags: ['Ethnic', 'Traditional', 'Festive'],
        products: [
            {
                id: 'cp9',
                name: 'Embroidered Kurta',
                description: 'Handcrafted cotton kurta with traditional embroidery.',
                price: 2999,
                image: 'https://images.unsplash.com/photo-1583391099995-0e67401bf8f7?auto=format&fit=crop&w=400&q=80',
                category: 'Kurtas',
                rating: 4.7,
                reviews: 1234
            },
            {
                id: 'cp10',
                name: 'Designer Saree',
                description: 'Elegant designer saree with intricate border work.',
                price: 5999,
                image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
                category: 'Sarees',
                rating: 4.8,
                reviews: 890
            },
            {
                id: 'cp11',
                name: 'Nehru Jacket',
                description: 'Classic Nehru jacket with mandarin collar.',
                price: 3499,
                image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80',
                category: 'Jackets',
                rating: 4.6,
                reviews: 567
            },
            {
                id: 'cp12',
                name: 'Palazzo Pants Set',
                description: 'Comfortable palazzo pants with matching kurta.',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80',
                category: 'Sets',
                rating: 4.5,
                reviews: 789
            },
            {
                id: 'cp19',
                name: 'Floral Maxi Dress',
                description: 'Flowy maxi dress with vibrant floral prints.',
                price: 3599,
                image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80',
                category: 'Dresses',
                rating: 4.8,
                reviews: 1120
            },
            {
                id: 'cp20',
                name: 'Silk Scarf',
                description: 'Luxurious silk scarf to accent any outfit.',
                price: 1299,
                image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=400&q=80',
                category: 'Accessories',
                rating: 4.6,
                reviews: 670
            },
            {
                id: 'cp26',
                name: 'Royal Wedding Sherwani',
                description: 'Velvet sherwani with heavy gold zardosi work.',
                price: 15999,
                image: 'https://images.unsplash.com/photo-1583391099995-0e67401bf8f7?auto=format&fit=crop&w=400&q=80',
                category: 'Sherwanis',
                rating: 5.0,
                reviews: 150
            },
            {
                id: 'cp27',
                name: 'Anarkali Gown',
                description: 'Floor-length flowy anarkali with net dupatta.',
                price: 8499,
                image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
                category: 'Dresses',
                rating: 4.9,
                reviews: 430
            },
            {
                id: 'cp28',
                name: 'Traditional Mojari',
                description: 'Handcrafted leather mojari with ethnic motifs.',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80',
                category: 'Footwear',
                rating: 4.6,
                reviews: 560
            }
        ]
    }
];
