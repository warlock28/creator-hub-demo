import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  DollarSign,
  Instagram,
  Youtube,
  FileText,
  Star,
  CheckCircle2,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Creator {
  id: string;
  name: string;
  niche: string;
  photo: string;
  startingPrice: number;
  rating: number;
  totalReviews: number;
  verified: boolean;
  location: string;
  platforms: string[];
  followers: string;
}

const creatorsData: Creator[] = [
  {
    id: "1",
    name: "Priya Sharma",
    niche: "Tech & Gadgets",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    startingPrice: 15000,
    rating: 4.8,
    totalReviews: 47,
    verified: true,
    location: "Mumbai",
    platforms: ["instagram", "youtube"],
    followers: "125K",
  },
  {
    id: "2",
    name: "Rahul Verma",
    niche: "Fashion & Lifestyle",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    startingPrice: 20000,
    rating: 4.9,
    totalReviews: 63,
    verified: true,
    location: "Delhi",
    platforms: ["instagram"],
    followers: "210K",
  },
  {
    id: "3",
    name: "Ananya Desai",
    niche: "Food & Travel",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    startingPrice: 12000,
    rating: 4.7,
    totalReviews: 38,
    verified: true,
    location: "Bangalore",
    platforms: ["instagram", "blog"],
    followers: "89K",
  },
  {
    id: "4",
    name: "Karan Singh",
    niche: "Fitness & Health",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    startingPrice: 18000,
    rating: 4.6,
    totalReviews: 29,
    verified: false,
    location: "Pune",
    platforms: ["youtube", "instagram"],
    followers: "156K",
  },
  {
    id: "5",
    name: "Sneha Patel",
    niche: "Beauty & Skincare",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    startingPrice: 16000,
    rating: 4.8,
    totalReviews: 51,
    verified: true,
    location: "Mumbai",
    platforms: ["instagram", "youtube"],
    followers: "198K",
  },
  {
    id: "6",
    name: "Arjun Mehta",
    niche: "Finance & Business",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    startingPrice: 25000,
    rating: 4.9,
    totalReviews: 42,
    verified: true,
    location: "Delhi",
    platforms: ["youtube", "blog"],
    followers: "312K",
  },
];

export default function CustomerDiscover() {
  const [showFilters, setShowFilters] = useState(true);
  const [budgetRange, setBudgetRange] = useState([10000, 50000]);
  const [searchQuery, setSearchQuery] = useState("");

  const CreatorCard = ({ creator }: { creator: Creator }) => (
    <Link to={`/customer/creator/${creator.id}`}>
      <GlassCard className="p-5 hover:shadow-xl transition-all cursor-pointer group">
        {/* Creator Photo */}
        <div className="relative mb-4">
          <img
            src={creator.photo}
            alt={creator.name}
            className="w-full aspect-square object-cover rounded-2xl"
          />
          {creator.verified && (
            <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-success flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-white" />
            </div>
          )}
          {/* Platform Badges */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            {creator.platforms.includes("instagram") && (
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            )}
            {creator.platforms.includes("youtube") && (
              <div className="h-7 w-7 rounded-lg bg-red-500 flex items-center justify-center">
                <Youtube className="h-4 w-4 text-white" />
              </div>
            )}
            {creator.platforms.includes("blog") && (
              <div className="h-7 w-7 rounded-lg bg-blue-500 flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Creator Info */}
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-lg">{creator.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-warning fill-warning" />
                <span className="text-sm font-medium">{creator.rating}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{creator.niche}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{creator.location}</span>
            </div>
            <span className="text-muted-foreground">{creator.followers} followers</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">Starting at</p>
              <p className="font-semibold text-lg">₹{creator.startingPrice.toLocaleString()}</p>
            </div>
            <Button size="sm" className="group-hover:bg-primary/90">
              View Profile
            </Button>
          </div>

          <div className="text-xs text-muted-foreground">
            {creator.totalReviews} reviews
          </div>
        </div>
      </GlassCard>
    </Link>
  );

  return (
    <CustomerLayout>
      <div className="space-y-6">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Discover Creators
          </h1>
          <p className="text-muted-foreground">
            Find the perfect creator for your next campaign
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, niche, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filter Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className={cn(
              "lg:col-span-1",
              !showFilters && "hidden lg:block"
            )}
          >
            <GlassCard className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  onClick={() => {
                    setBudgetRange([10000, 50000]);
                    setSearchQuery("");
                  }}
                >
                  Clear All
                </Button>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <Label className="mb-3 block">Location</Label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Location</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-2">
                    <MapPin className="h-3 w-3 inline mr-1" />
                    Within 50km radius
                  </p>
                </div>

                {/* Budget */}
                <div>
                  <Label className="mb-3 block">
                    Budget Range
                    <span className="float-right text-primary font-semibold">
                      ₹{budgetRange[0].toLocaleString()} - ₹{budgetRange[1].toLocaleString()}
                    </span>
                  </Label>
                  <Slider
                    min={5000}
                    max={100000}
                    step={5000}
                    value={budgetRange}
                    onValueChange={setBudgetRange}
                    className="mt-4"
                  />
                </div>

                {/* Platform */}
                <div>
                  <Label className="mb-3 block">Platform</Label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="instagram" />
                      <label htmlFor="instagram" className="flex items-center gap-2 text-sm cursor-pointer">
                        <Instagram className="h-4 w-4 text-pink-500" />
                        Instagram
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="youtube" />
                      <label htmlFor="youtube" className="flex items-center gap-2 text-sm cursor-pointer">
                        <Youtube className="h-4 w-4 text-red-500" />
                        YouTube
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="blog" />
                      <label htmlFor="blog" className="flex items-center gap-2 text-sm cursor-pointer">
                        <FileText className="h-4 w-4 text-blue-500" />
                        Blog
                      </label>
                    </div>
                  </div>
                </div>

                {/* Niche */}
                <div>
                  <Label className="mb-3 block">Niche</Label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">All Niches</SelectItem>
                      <SelectItem value="tech">Tech & Gadgets</SelectItem>
                      <SelectItem value="fashion">Fashion & Lifestyle</SelectItem>
                      <SelectItem value="food">Food & Travel</SelectItem>
                      <SelectItem value="fitness">Fitness & Health</SelectItem>
                      <SelectItem value="beauty">Beauty & Skincare</SelectItem>
                      <SelectItem value="finance">Finance & Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability */}
                <div>
                  <Label className="mb-3 block">Availability</Label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="available-now" defaultChecked />
                      <label htmlFor="available-now" className="text-sm cursor-pointer">
                        Available Now
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="verified-only" />
                      <label htmlFor="verified-only" className="text-sm cursor-pointer">
                        Verified Only
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Creator Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {creatorsData.length} creators
              </p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviewed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {creatorsData.map((creator, index) => (
                <motion.div
                  key={creator.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <CreatorCard creator={creator} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </CustomerLayout>
  );
}
