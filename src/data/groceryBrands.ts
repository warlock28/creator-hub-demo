// Grocery / Vegetables / Fruits Brand Data
import { Brand, Product } from './mockBrands';

export const GROCERY_BRANDS: Brand[] = [
    {
        id: 'grocery-1',
        name: 'FreshMart',
        slug: 'freshmart',
        logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
        description: 'Farm-fresh vegetables and fruits delivered to your doorstep daily.',
        rating: 4.8,
        followers: '25.3K',
        deliveryTime: '30 mins',
        verified: true,
        categories: ['grocery', 'vegetables', 'fruits'],
        tags: ['Fresh', 'Organic', 'Daily Delivery'],
        products: [
            {
                id: 'gp1',
                name: 'Organic Tomatoes',
                description: 'Fresh farm-picked organic tomatoes, pesticide-free.',
                price: 60,
                image: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb8?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.7,
                reviews: 890
            },
            {
                id: 'gp2',
                name: 'Fresh Spinach Bundle',
                description: 'Crisp and green spinach leaves, rich in iron.',
                price: 35,
                image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.6,
                reviews: 456
            },
            {
                id: 'gp3',
                name: 'Alphonso Mangoes (1kg)',
                description: 'Premium Ratnagiri Alphonso mangoes, naturally ripened.',
                price: 450,
                image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.9,
                reviews: 1234
            },
            {
                id: 'gp4',
                name: 'Red Apples (500g)',
                description: 'Crunchy Shimla apples, hand-picked for quality.',
                price: 120,
                image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.5,
                reviews: 678
            },
            {
                id: 'gp13',
                name: 'Green Capsicum (500g)',
                description: 'Fresh and crunchy green capsicums, perfect for salads and cooking.',
                price: 45,
                image: 'https://images.unsplash.com/photo-1563565375-f3fdf5cd2d9d?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.6,
                reviews: 320
            },
            {
                id: 'gp14',
                name: 'Fresh Carrots (1kg)',
                description: 'Sweet and orange Ooty carrots, rich in Vitamin A.',
                price: 60,
                image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.7,
                reviews: 410
            },
            {
                id: 'gp15',
                name: 'Fresh Strawberries (200g)',
                description: 'Juicy and sweet strawberries, seasonal delight.',
                price: 120,
                image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.9,
                reviews: 550
            },
            {
                id: 'gp21',
                name: 'Fresh Oranges (1kg)',
                description: 'Juicy and sweet Nagpur oranges, rich in Vitamin C.',
                price: 80,
                image: 'https://images.unsplash.com/photo-1547514354-33038a87cc81?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.8,
                reviews: 620
            },
            {
                id: 'gp22',
                name: 'New Potatoes (1kg)',
                description: 'Fresh harvest potatoes, perfect for fries and curries.',
                price: 35,
                image: 'https://images.unsplash.com/photo-1518977676605-dc96f3f77ab6?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.5,
                reviews: 450
            },
            {
                id: 'gp23',
                name: 'Red Onions (1kg)',
                description: 'Pungent and flavorful red onions for daily cooking.',
                price: 40,
                image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa829?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.6,
                reviews: 510
            },
            {
                id: 'gp24',
                name: 'Black Grapes (500g)',
                description: 'Sweet seedless black grapes, fresh from the vine.',
                price: 90,
                image: 'https://images.unsplash.com/photo-1537640538965-17562965c009?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.9,
                reviews: 380
            },
            {
                id: 'gp33',
                name: 'Organic Button Mushrooms (200g)',
                description: 'Fresh white button mushrooms, perfect for curries.',
                price: 55,
                image: 'https://images.unsplash.com/photo-1504449622976-18e388c3a886?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.5,
                reviews: 210
            },
            {
                id: 'gp34',
                name: 'Fresh Pineapple (1 pc)',
                description: 'Sweet and tangy ripe pineapple.',
                price: 90,
                image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.7,
                reviews: 340
            }
        ]
    },
    {
        id: 'grocery-2',
        name: 'Nature\'s Basket',
        slug: 'natures-basket',
        logo: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
        description: 'Premium organic produce and gourmet groceries.',
        rating: 4.7,
        followers: '18.9K',
        deliveryTime: '45 mins',
        verified: true,
        categories: ['grocery', 'organic', 'gourmet'],
        tags: ['Organic', 'Premium', 'Healthy'],
        products: [
            {
                id: 'gp5',
                name: 'Organic Bananas (6 pcs)',
                description: 'Sweet and nutritious organic bananas.',
                price: 55,
                image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.6,
                reviews: 567
            },
            {
                id: 'gp6',
                name: 'Mixed Vegetables Pack',
                description: 'Assorted fresh vegetables combo pack.',
                price: 150,
                image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.8,
                reviews: 345
            },
            {
                id: 'gp7',
                name: 'Fresh Coriander Bundle',
                description: 'Aromatic fresh coriander leaves for garnishing.',
                price: 15,
                image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80',
                category: 'Herbs',
                rating: 4.5,
                reviews: 234
            },
            {
                id: 'gp8',
                name: 'Pomegranates (500g)',
                description: 'Juicy and sweet pomegranates, rich in antioxidants.',
                price: 180,
                image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.7,
                reviews: 456
            },
            {
                id: 'gp16',
                name: 'Organic Avocados (2 pcs)',
                description: 'Creamy and buttery organic avocados, imported.',
                price: 250,
                image: 'https://images.unsplash.com/photo-1523049673856-4287b9381f94?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.8,
                reviews: 210
            },
            {
                id: 'gp17',
                name: 'Cherry Tomatoes (200g)',
                description: 'Sweet and tangy organic cherry tomatoes.',
                price: 80,
                image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.7,
                reviews: 180
            },
            {
                id: 'gp18',
                name: 'Exotic Kiwis (3 pcs)',
                description: 'Tangy and healthy green kiwis, rich in Vitamin C.',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.6,
                reviews: 340
            },
            {
                id: 'gp25',
                name: 'Fresh Blueberries (125g)',
                description: 'Antioxidant-rich organic blueberries.',
                price: 250,
                image: 'https://images.unsplash.com/photo-1498557853362-e1c51a44e546?auto=format&fit=crop&w=400&q=80',
                category: 'Fruits',
                rating: 4.8,
                reviews: 290
            },
            {
                id: 'gp26',
                name: 'Organic Broccoli (1 pc)',
                description: 'Fresh green broccoli head, rich in nutrients.',
                price: 65,
                image: 'https://images.unsplash.com/photo-1459411621453-7b03960f4745?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.7,
                reviews: 340
            },
            {
                id: 'gp27',
                name: 'Iceberg Lettuce (1 pc)',
                description: 'Crunchy and fresh iceberg lettuce for salads.',
                price: 55,
                image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.6,
                reviews: 210
            },
            {
                id: 'gp28',
                name: 'Green Zucchini (2 pcs)',
                description: 'Tender and fresh green zucchini.',
                price: 75,
                image: 'https://images.unsplash.com/photo-1566843972054-2774d5310067?auto=format&fit=crop&w=400&q=80',
                category: 'Vegetables',
                rating: 4.7,
                reviews: 180
            },
            {
                id: 'gp35',
                name: 'Greek Yogurt (400g)',
                description: 'Creamy high-protein plain Greek yogurt.',
                price: 120,
                image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80',
                category: 'Dairy',
                rating: 4.8,
                reviews: 450
            },
            {
                id: 'gp36',
                name: 'Almond Milk (1L)',
                description: 'Dairy-free unsweetened almond milk.',
                price: 290,
                image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80',
                category: 'Dairy',
                rating: 4.6,
                reviews: 320
            },
            {
                id: 'gp37',
                name: 'Organic Quinoa (500g)',
                description: 'Gluten-free superfood, rich in protein.',
                price: 350,
                image: 'https://images.unsplash.com/photo-1506330682801-a6720f46c4a1?auto=format&fit=crop&w=400&q=80',
                category: 'Staples',
                rating: 4.7,
                reviews: 280
            }
        ]
    },
    {
        id: 'grocery-3',
        name: 'Daily Needs Store',
        slug: 'daily-needs',
        logo: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
        description: 'Your one-stop shop for daily essentials and pantry staples.',
        rating: 4.5,
        followers: '32.1K',
        deliveryTime: '20 mins',
        verified: true,
        categories: ['grocery', 'daily-essentials'],
        tags: ['Essentials', 'Quick Delivery', 'Budget'],
        products: [
            {
                id: 'gp9',
                name: 'Basmati Rice (5kg)',
                description: 'Premium aged basmati rice, aromatic and fluffy.',
                price: 450,
                image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
                category: 'Staples',
                rating: 4.8,
                reviews: 1890
            },
            {
                id: 'gp10',
                name: 'Whole Wheat Atta (10kg)',
                description: 'Stone-ground whole wheat flour for healthy rotis.',
                price: 380,
                image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
                category: 'Staples',
                rating: 4.6,
                reviews: 1234
            },
            {
                id: 'gp11',
                name: 'Refined Oil (5L)',
                description: 'Pure and healthy cooking oil for everyday use.',
                price: 650,
                image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80',
                category: 'Cooking',
                rating: 4.4,
                reviews: 890
            },
            {
                id: 'gp12',
                name: 'Sugar (2kg)',
                description: 'Fine grain white sugar for all your needs.',
                price: 90,
                image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=400&q=80',
                category: 'Staples',
                rating: 4.5,
                reviews: 567
            },
            {
                id: 'gp19',
                name: 'Toor Dal (1kg)',
                description: 'Unpolished and high-protein Toor Dal.',
                price: 130,
                image: 'https://images.unsplash.com/photo-1585996614457-1262eb4da74b?auto=format&fit=crop&w=400&q=80',
                category: 'Staples',
                rating: 4.7,
                reviews: 890
            },
            {
                id: 'gp20',
                name: 'Tata Salt (1kg)',
                description: 'Iodized vacuum evaporated salt for healthy cooking.',
                price: 25,
                image: 'https://images.unsplash.com/photo-1626139576127-4c46c4f74d08?auto=format&fit=crop&w=400&q=80',
                category: 'Staples',
                rating: 4.8,
                reviews: 1200
            },
            {
                id: 'gp29',
                name: 'Mustard Oil (1L)',
                description: 'Pure Kachi Ghani mustard oil for authentic taste.',
                price: 180,
                image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80',
                category: 'Cooking',
                rating: 4.6,
                reviews: 450
            },
            {
                id: 'gp30',
                name: 'Premium Tea Powder (500g)',
                description: 'Strong and aromatic Assam tea blend.',
                price: 240,
                image: 'https://images.unsplash.com/photo-1552345842-b88339cd5ac4?auto=format&fit=crop&w=400&q=80',
                category: 'Beverages',
                rating: 4.8,
                reviews: 890
            },
            {
                id: 'gp31',
                name: 'Filter Coffee Powder (250g)',
                description: 'Freshly ground arabica coffee blend.',
                price: 190,
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80',
                category: 'Beverages',
                rating: 4.9,
                reviews: 560
            },
            {
                id: 'gp32',
                name: 'Turmeric Powder (200g)',
                description: 'Organic turmeric powder with high curcumin.',
                price: 65,
                image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80',
                category: 'Spices',
                rating: 4.8,
                reviews: 420
            },
            {
                id: 'gp38',
                name: 'Red Chili Powder (200g)',
                description: 'Spicy and vibrant red chili powder.',
                price: 75,
                image: 'https://images.unsplash.com/photo-1621689539314-7f13768393e8?auto=format&fit=crop&w=400&q=80',
                category: 'Spices',
                rating: 4.5,
                reviews: 560
            },
            {
                id: 'gp39',
                name: 'Cumin Seeds (100g)',
                description: 'Aromatic whole cumin seeds for tempering.',
                price: 60,
                image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80',
                category: 'Spices',
                rating: 4.7,
                reviews: 390
            },
            {
                id: 'gp40',
                name: 'Whole Moong Dal (1kg)',
                description: 'Protein-rich whole green gram.',
                price: 140,
                image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80',
                category: 'Staples',
                rating: 4.8,
                reviews: 670
            }
        ]
    }
];
