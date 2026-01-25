import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search, ShoppingCart, Heart, User, Star, Menu, X,
    Phone, Clock, MapPin, CheckCircle, Wrench, Settings,
    Shield, Award, ThumbsUp
} from 'lucide-react';

interface ServicesThemeProps {
    brandId: string;
    brandName?: string;
    brandLogo?: string;
    brandDescription?: string;
    coverImage?: string;
    products?: Product[];
}

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating?: number;
    reviewCount?: number;
    category?: string;
    availability?: string;
    duration?: string;
}

// Sample services data
const SAMPLE_SERVICES: Product[] = [
    {
        id: '1',
        name: 'AC Repair & Service',
        description: 'Complete AC repair, gas refill, and maintenance service',
        price: 499,
        originalPrice: 799,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
        rating: 4.8,
        reviewCount: 2340,
        category: 'AC Services',
        duration: '45-60 mins'
    },
    {
        id: '2',
        name: 'Plumbing Services',
        description: 'Expert plumbing repair and installation services',
        price: 299,
        originalPrice: 499,
        image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop',
        rating: 4.7,
        reviewCount: 1890,
        category: 'Plumbing',
        duration: '30-45 mins'
    },
    {
        id: '3',
        name: 'Electrical Repairs',
        description: 'Professional electrical repair and wiring services',
        price: 349,
        originalPrice: 599,
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
        rating: 4.9,
        reviewCount: 3120,
        category: 'Electrical',
        duration: '30-60 mins'
    },
    {
        id: '4',
        name: 'Appliance Repair',
        description: 'Refrigerator, washing machine, and appliance repairs',
        price: 399,
        originalPrice: 699,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        rating: 4.6,
        reviewCount: 1560,
        category: 'Appliances',
        duration: '45-90 mins'
    },
];

const SERVICE_CATEGORIES = [
    'All Services',
    'AC Services',
    'Plumbing',
    'Electrical',
    'Appliances',
    'Carpentry',
    'Painting',
];

export function ServicesTheme({
    brandId,
    brandName = "QuickFix Services",
    brandLogo = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    brandDescription = "Professional home services at your doorstep",
    coverImage = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=400&fit=crop",
    products = SAMPLE_SERVICES,
}: ServicesThemeProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Services');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const filteredServices = products.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to={`/brand/${brandId}`} className="flex items-center gap-3">
                            <img src={brandLogo} alt={brandName} className="w-10 h-10 rounded-lg object-cover" />
                            <span className="font-bold text-xl text-gray-900 hidden sm:block">{brandName}</span>
                        </Link>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-md mx-4 hidden md:block">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Heart className="h-5 w-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                                <ShoppingCart className="h-5 w-5 text-gray-600" />
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">2</span>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
                                <User className="h-5 w-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-48 sm:h-64 overflow-hidden">
                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div>
                        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">{brandName}</h1>
                        <p className="text-white/90 text-sm sm:text-lg max-w-xl">{brandDescription}</p>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
                        <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-green-600" />
                            <span className="text-sm text-gray-700">Verified Professionals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-blue-600" />
                            <span className="text-sm text-gray-700">Quality Guaranteed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ThumbsUp className="h-5 w-5 text-purple-600" />
                            <span className="text-sm text-gray-700">100% Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="bg-white sticky top-16 z-40 border-b">
                <div className="container mx-auto px-4">
                    <div className="overflow-x-auto scrollbar-hide py-4">
                        <div className="flex gap-2 min-w-max">
                            {SERVICE_CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                    {selectedCategory === 'All Services' ? 'Popular Services' : selectedCategory}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredServices.map((service) => (
                        <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {service.originalPrice && (
                                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        {Math.round((1 - service.price / service.originalPrice) * 100)}% OFF
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-center gap-1 mb-2">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                                    <span className="text-sm text-gray-500">({service.reviewCount?.toLocaleString()})</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{service.description}</p>

                                {/* Duration */}
                                {service.duration && (
                                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                                        <Clock className="h-4 w-4" />
                                        <span>{service.duration}</span>
                                    </div>
                                )}

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-gray-900">₹{service.price}</span>
                                        {service.originalPrice && (
                                            <span className="text-sm text-gray-400 line-through">₹{service.originalPrice}</span>
                                        )}
                                    </div>
                                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">© 2024 {brandName}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
