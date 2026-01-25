import { motion } from 'framer-motion';
import { Star, Instagram, Youtube, Twitter, Heart, MapPin, Users } from 'lucide-react';

// Top 8 featured creators data
const topCreators = [
    {
        id: '1',
        name: 'Priya Sharma',
        handle: '@priya.creates',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
        category: 'Lifestyle',
        location: 'Mumbai',
        followers: '1.2M',
        rating: 4.9,
        platform: 'instagram',
        verified: true,
    },
    {
        id: '2',
        name: 'Arjun Kapoor',
        handle: '@arjuntech',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
        category: 'Tech',
        location: 'Bangalore',
        followers: '850K',
        rating: 4.8,
        platform: 'youtube',
        verified: true,
    },
    {
        id: '3',
        name: 'Ananya Desai',
        handle: '@ananya.food',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
        category: 'Food',
        location: 'Delhi',
        followers: '2.5M',
        rating: 4.9,
        platform: 'instagram',
        verified: true,
    },
    {
        id: '4',
        name: 'Rahul Verma',
        handle: '@rahul.fitness',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format',
        category: 'Fitness',
        location: 'Pune',
        followers: '680K',
        rating: 4.7,
        platform: 'youtube',
        verified: true,
    },
    {
        id: '5',
        name: 'Meera Joshi',
        handle: '@meera.style',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format',
        category: 'Fashion',
        location: 'Jaipur',
        followers: '920K',
        rating: 4.8,
        platform: 'instagram',
        verified: true,
    },
    {
        id: '6',
        name: 'Vikram Singh',
        handle: '@vikram.vlogs',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
        category: 'Travel',
        location: 'Chennai',
        followers: '1.8M',
        rating: 4.9,
        platform: 'youtube',
        verified: true,
    },
    {
        id: '7',
        name: 'Kavya Menon',
        handle: '@kavya.beauty',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&auto=format',
        category: 'Beauty',
        location: 'Hyderabad',
        followers: '750K',
        rating: 4.6,
        platform: 'instagram',
        verified: true,
    },
    {
        id: '8',
        name: 'Aditya Rao',
        handle: '@aditya.gaming',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&auto=format',
        category: 'Gaming',
        location: 'Kolkata',
        followers: '3.2M',
        rating: 4.8,
        platform: 'youtube',
        verified: true,
    },
];

// Platform icon component
function PlatformIcon({ platform }: { platform: string }) {
    switch (platform) {
        case 'instagram':
            return <Instagram className="h-4 w-4" />;
        case 'youtube':
            return <Youtube className="h-4 w-4" />;
        case 'twitter':
            return <Twitter className="h-4 w-4" />;
        default:
            return <Users className="h-4 w-4" />;
    }
}

// Creator Card Component
function CreatorCard({ creator }: { creator: typeof topCreators[0] }) {
    return (
        <div className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
            {/* Cover gradient */}
            <div className="h-16 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 relative">
                {/* Platform badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5 text-xs font-medium">
                    <PlatformIcon platform={creator.platform} />
                    <span className="capitalize">{creator.platform}</span>
                </div>
            </div>

            {/* Avatar */}
            <div className="relative -mt-10 px-5">
                <div className="relative">
                    <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-5 pt-3">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h3 className="font-semibold text-gray-900 text-base">{creator.name}</h3>
                        <p className="text-sm text-gray-500">{creator.handle}</p>
                    </div>
                    <button className="p-2 rounded-full hover:bg-pink-50 text-gray-400 hover:text-pink-500 transition-colors">
                        <Heart className="h-4 w-4" />
                    </button>
                </div>

                {/* Category & Location */}
                <div className="flex items-center gap-3 mb-3 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 font-medium">
                        {creator.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {creator.location}
                    </span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold text-gray-900 text-sm">{creator.followers}</span>
                        <span className="text-xs text-gray-500">followers</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900 text-sm">{creator.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TopCreators() {
    // Double the creators array for seamless infinite scroll
    const duplicatedCreators = [...topCreators, ...topCreators];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">

            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-violet-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-pink-200/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                                <Star className="h-6 w-6 text-white" />
                            </div>
                            <div className="relative">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                    Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">Creators</span> This Week
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-transparent to-violet-500" />
                            <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
                            <div className="h-1 w-12 rounded-full bg-gradient-to-l from-transparent to-pink-500" />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover verified creators making waves across India's digital landscape
                    </motion.p>
                </div>

                {/* Infinite Marquee */}
                <div className="relative">
                    {/* Gradient overlays for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling container */}
                    <div className="flex gap-4 sm:gap-6 animate-marquee hover:pause-animation">
                        {duplicatedCreators.map((creator, index) => (
                            <CreatorCard key={`${creator.id}-${index}`} creator={creator} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 md:mt-16"
                >
                    <a
                        href="/discover"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Explore All Creators
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>

            {/* CSS for infinite marquee animation */}
            <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 14s;
          }
        }
      `}</style>
        </section>
    );
}

export default TopCreators;
