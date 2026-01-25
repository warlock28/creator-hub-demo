// Instant Physical Services (Technician, Mechanic, Electrician) Data
import { Brand, Product } from './mockBrands';

// Extended interface for service providers
export interface ServiceProvider extends Brand {
    serviceType: 'technician' | 'mechanic' | 'electrician' | 'plumber' | 'carpenter' | 'cleaner';
    experience: string;
    completedJobs: number;
    responseTime: string;
    availability: string;
}

export interface Service extends Product {
    duration: string;
    serviceType: string;
    includes: string[];
}

export const SERVICES_BRANDS: ServiceProvider[] = [
    {
        id: 'service-1',
        name: 'QuickFix Electricians',
        slug: 'quickfix-electricians',
        logo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
        description: 'Professional electrical services for homes and offices. Licensed and insured electricians.',
        rating: 4.9,
        followers: '15.6K',
        deliveryTime: '30 mins',
        verified: true,
        categories: ['services', 'electrical', 'home'],
        tags: ['Electrician', '24/7', 'Emergency'],
        serviceType: 'electrician',
        experience: '10+ years',
        completedJobs: 5420,
        responseTime: '30 minutes',
        availability: '24/7 Available',
        products: [
            {
                id: 'sp1',
                name: 'Electrical Wiring Repair',
                description: 'Complete wiring inspection and repair for faulty connections.',
                price: 499,
                image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80',
                category: 'Electrical',
                rating: 4.9,
                reviews: 1234
            },
            {
                id: 'sp2',
                name: 'Fan Installation',
                description: 'Ceiling fan installation with wiring and testing.',
                price: 299,
                image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.8,
                reviews: 890
            },
            {
                id: 'sp3',
                name: 'MCB/Fuse Box Repair',
                description: 'Electrical panel inspection and MCB replacement.',
                price: 599,
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.9,
                reviews: 567
            },
            {
                id: 'sp4',
                name: 'Complete Home Rewiring',
                description: 'Full house electrical rewiring with safety certification.',
                price: 15000,
                image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=400&q=80',
                category: 'Major Work',
                rating: 4.7,
                reviews: 345
            },
            {
                id: 'sp21',
                name: 'Inverter/UPS Installation',
                description: 'Professional installation of power backup systems.',
                price: 999,
                image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.8,
                reviews: 230
            },
            {
                id: 'sp22',
                name: 'Chandelier Fitting',
                description: 'Safe installation of delicate chandeliers and light fixtures.',
                price: 1200,
                image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.9,
                reviews: 156
            },
            {
                id: 'sp23',
                name: 'Switch Board Repair',
                description: 'Repairing loose connections and replacing old switches.',
                price: 350,
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.7,
                reviews: 410
            }
        ]
    },
    {
        id: 'service-2',
        name: 'ProMech Auto Services',
        slug: 'promech-auto',
        logo: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
        description: 'Expert car and bike mechanics with doorstep service. All brands supported.',
        rating: 4.8,
        followers: '22.3K',
        deliveryTime: '45 mins',
        verified: true,
        categories: ['services', 'automotive', 'mechanic'],
        tags: ['Mechanic', 'Car Service', 'Doorstep'],
        serviceType: 'mechanic',
        experience: '15+ years',
        completedJobs: 8945,
        responseTime: '45 minutes',
        availability: '8 AM - 10 PM',
        products: [
            {
                id: 'sp5',
                name: 'Car General Service',
                description: 'Complete car service including oil change, filter, and inspection.',
                price: 2999,
                image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=400&q=80',
                category: 'Car Service',
                rating: 4.8,
                reviews: 2345
            },
            {
                id: 'sp6',
                name: 'Bike Service & Tune-up',
                description: 'Full bike service with engine tune-up and oil change.',
                price: 899,
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
                category: 'Bike Service',
                rating: 4.7,
                reviews: 1890
            },
            {
                id: 'sp7',
                name: 'Tyre Replacement',
                description: 'Tyre replacement and wheel balancing service.',
                price: 500,
                image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=400&q=80',
                category: 'Tyres',
                rating: 4.6,
                reviews: 1234
            },
            {
                id: 'sp8',
                name: 'AC Gas Refill',
                description: 'Car AC gas refill and cooling system check.',
                price: 1499,
                image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80',
                category: 'AC Service',
                rating: 4.8,
                reviews: 890
            },
            {
                id: 'sp24',
                name: 'Premium Car Spa',
                description: 'Interior and exterior detailing with foam wash.',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=400&q=80',
                category: 'Car Service',
                rating: 4.9,
                reviews: 560
            },
            {
                id: 'sp25',
                name: 'Bike Oil Change',
                description: 'Express oil change and chain lubrication.',
                price: 499,
                image: 'https://images.unsplash.com/photo-1596902852233-465451ff2382?auto=format&fit=crop&w=400&q=80',
                category: 'Bike Service',
                rating: 4.6,
                reviews: 320
            },
            {
                id: 'sp26',
                name: 'Car Battery Replacement',
                description: 'New battery installation with warranty.',
                price: 4500,
                image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.8,
                reviews: 145
            }
        ]
    },
    {
        id: 'service-3',
        name: 'TechCare Solutions',
        slug: 'techcare-solutions',
        logo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        description: 'Professional appliance repair and installation. AC, Washing Machine, Refrigerator experts.',
        rating: 4.7,
        followers: '18.9K',
        deliveryTime: '1 hour',
        verified: true,
        categories: ['services', 'appliances', 'repair'],
        tags: ['Technician', 'Appliance Repair', 'Installation'],
        serviceType: 'technician',
        experience: '8+ years',
        completedJobs: 6234,
        responseTime: '1 hour',
        availability: '9 AM - 9 PM',
        products: [
            {
                id: 'sp9',
                name: 'AC Service & Cleaning',
                description: 'Deep cleaning, gas check, and performance optimization.',
                price: 599,
                image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
                category: 'AC Service',
                rating: 4.8,
                reviews: 3456
            },
            {
                id: 'sp10',
                name: 'Washing Machine Repair',
                description: 'All brand washing machine repair and service.',
                price: 399,
                image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=400&q=80',
                category: 'Appliance Repair',
                rating: 4.6,
                reviews: 1567
            },
            {
                id: 'sp11',
                name: 'Refrigerator Repair',
                description: 'Fridge cooling issues, compressor check, and repair.',
                price: 499,
                image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=400&q=80',
                category: 'Appliance Repair',
                rating: 4.7,
                reviews: 1234
            },
            {
                id: 'sp12',
                name: 'Geyser Installation',
                description: 'Water heater installation with plumbing work.',
                price: 799,
                image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.5,
                reviews: 678
            },
            {
                id: 'sp27',
                name: 'Microwave Repair',
                description: 'Fixing heating issues, turntable problems, etc.',
                price: 450,
                image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=400&q=80',
                category: 'Appliance Repair',
                rating: 4.5,
                reviews: 210
            },
            {
                id: 'sp28',
                name: 'RO Purifier Service',
                description: 'Filter change and membrane cleaning service.',
                price: 699,
                image: 'https://images.unsplash.com/photo-1521977773361-597b6131433f?auto=format&fit=crop&w=400&q=80',
                category: 'Appliance Repair',
                rating: 4.7,
                reviews: 890
            },
            {
                id: 'sp29',
                name: 'TV Wall Mounting',
                description: 'Secure installation of LED/LCD TVs on wall.',
                price: 599,
                image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.8,
                reviews: 450
            }
        ]
    },
    {
        id: 'service-4',
        name: 'HomeHelp Plumbers',
        slug: 'homehelp-plumbers',
        logo: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80',
        description: 'Expert plumbing services for all your water and drainage needs.',
        rating: 4.6,
        followers: '12.4K',
        deliveryTime: '45 mins',
        verified: true,
        categories: ['services', 'plumbing', 'home'],
        tags: ['Plumber', 'Emergency', 'Water'],
        serviceType: 'plumber',
        experience: '12+ years',
        completedJobs: 4567,
        responseTime: '45 minutes',
        availability: '24/7 Available',
        products: [
            {
                id: 'sp13',
                name: 'Tap Repair/Replacement',
                description: 'Leaky tap repair or new tap installation.',
                price: 199,
                image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=400&q=80',
                category: 'Plumbing',
                rating: 4.6,
                reviews: 890
            },
            {
                id: 'sp14',
                name: 'Drainage Cleaning',
                description: 'Blocked drain cleaning and maintenance.',
                price: 399,
                image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=400&q=80',
                category: 'Drainage',
                rating: 4.5,
                reviews: 567
            },
            {
                id: 'sp15',
                name: 'Water Tank Cleaning',
                description: 'Complete water tank cleaning and sanitization.',
                price: 999,
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
                category: 'Cleaning',
                rating: 4.7,
                reviews: 456
            },
            {
                id: 'sp16',
                name: 'Bathroom Fitting',
                description: 'Complete bathroom fitting and fixture installation.',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.8,
                reviews: 345
            },
            {
                id: 'sp30',
                name: 'Leak Detection',
                description: 'Advanced leak detection in concealed pipes.',
                price: 799,
                image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.9,
                reviews: 120
            },
            {
                id: 'sp31',
                name: 'Shower Installation',
                description: 'Installing new shower heads and diverters.',
                price: 599,
                image: 'https://images.unsplash.com/photo-1564509706386-77d07963d7e5?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.6,
                reviews: 340
            },
            {
                id: 'sp32',
                name: 'Wash Basin Repair',
                description: 'Fixing loose basins, drainage, and cracks.',
                price: 450,
                image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.7,
                reviews: 230
            }
        ]
    },
    {
        id: 'service-5',
        name: 'CraftMaster Carpenters',
        slug: 'craftmaster-carpenters',
        logo: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&h=200&q=80',
        coverImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
        description: 'Skilled carpenters for furniture repair, installation, and custom work.',
        rating: 4.8,
        followers: '9.8K',
        deliveryTime: '2 hours',
        verified: true,
        categories: ['services', 'carpentry', 'furniture'],
        tags: ['Carpenter', 'Furniture', 'Custom'],
        serviceType: 'carpenter',
        experience: '20+ years',
        completedJobs: 3456,
        responseTime: '2 hours',
        availability: '9 AM - 7 PM',
        products: [
            {
                id: 'sp17',
                name: 'Door Repair/Fitting',
                description: 'Door repair, hinge adjustment, and lock fitting.',
                price: 399,
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.7,
                reviews: 678
            },
            {
                id: 'sp18',
                name: 'Furniture Assembly',
                description: 'Flat-pack furniture assembly and installation.',
                price: 299,
                image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
                category: 'Assembly',
                rating: 4.8,
                reviews: 890
            },
            {
                id: 'sp19',
                name: 'Kitchen Cabinet Work',
                description: 'Kitchen cabinet repair, modification, or new installation.',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80',
                category: 'Kitchen',
                rating: 4.6,
                reviews: 456
            },
            {
                id: 'sp20',
                name: 'Custom Shelving',
                description: 'Custom wall shelving design and installation.',
                price: 1499,
                image: 'https://images.unsplash.com/photo-1594131431365-e5cb7755c568?auto=format&fit=crop&w=400&q=80',
                category: 'Custom Work',
                rating: 4.9,
                reviews: 345
            },
            {
                id: 'sp33',
                name: 'Curtain Rod Installation',
                description: 'Drilling and fitting curtain rods securely.',
                price: 299,
                image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
                category: 'Installation',
                rating: 4.5,
                reviews: 560
            },
            {
                id: 'sp34',
                name: 'Door Lock Replacement',
                description: 'Replacing old locks with new secure mechanisms.',
                price: 399,
                image: 'https://images.unsplash.com/photo-1558211583-03ed8a0b3d5f?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.8,
                reviews: 410
            },
            {
                id: 'sp35',
                name: 'Bed Assembly',
                description: 'Assembling hydraulic and standard beds.',
                price: 699,
                image: 'https://images.unsplash.com/photo-1505693416388-b0346efee74f?auto=format&fit=crop&w=400&q=80',
                category: 'Assembly',
                rating: 4.7,
                reviews: 320
            },
            {
                id: 'sp36',
                name: 'Window Frame Repair',
                description: 'Fixing jammed or broken wooden window frames.',
                price: 899,
                image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=400&q=80',
                category: 'Repair',
                rating: 4.6,
                reviews: 180
            }
        ]
    }
];
