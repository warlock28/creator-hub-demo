import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { CreatorCard } from "@/pages/creator/CreatorCard";
import { useLikedCreators } from "@/hooks/useLikedCreators";
import { creators } from "@/data/creators";
import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export default function CustomerSaved() {
    const { likedCreators } = useLikedCreators();

    const savedCreators = creators.filter((creator) =>
        likedCreators.includes(creator.id)
    );

    return (
        <CustomerLayout>
            <div className="space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-3">
                                <Heart className="h-8 w-8 text-red-500 fill-red-500" />
                                Saved Creators
                            </h1>
                            <p className="text-muted-foreground">
                                Your collection of favorite creators and influencers
                            </p>
                        </div>

                        <Link to="/discover">
                            <Button>
                                Find More Creators
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {savedCreators.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <GlassCard className="p-12 text-center" hover={false}>
                            <div className="max-w-sm mx-auto">
                                <div className="h-20 w-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                                    <Heart className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <h3 className="font-display text-lg font-semibold mb-2">
                                    No Saved Creators Yet
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Browse our directory to find and save creators you'd like to work with.
                                </p>
                                <Link to="/discover">
                                    <Button
                                        className="bg-gradient-to-r from-violet-600 to-purple-600"
                                    >
                                        <Search className="h-4 w-4 mr-2" />
                                        Discover Creators
                                    </Button>
                                </Link>
                            </div>
                        </GlassCard>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {savedCreators.map((creator, index) => (
                            <CreatorCard key={creator.id} creator={creator} index={index} />
                        ))}
                    </motion.div>
                )}
            </div>
        </CustomerLayout>
    );
}
