import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, CheckCircle2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CreatorSummary } from "@/types/creator";
import { useLikedCreators } from "@/hooks/useLikedCreators";
import { Button } from "@/components/ui/button";

interface CreatorCardProps {
  creator: CreatorSummary;
  index?: number;
}

export function CreatorCard({ creator, index = 0 }: CreatorCardProps) {
  const { isLiked, toggleLike } = useLikedCreators();
  const liked = isLiked(creator.id);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link to={`/creator/${creator.id}`} className="block group">
        <div
          className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Hover Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            style={{
              background: creator.theme?.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          />

          {/* Border Glow Effect on Hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: `0 0 20px ${creator.theme?.accent || "#667eea"}40`,
              border: `1px solid ${creator.theme?.accent || "#667eea"}30`,
            }}
          />

          {/* Like Button - Top Right */}
          <div className="absolute top-4 right-4 z-20">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full bg-background/20 backdrop-blur-md hover:bg-background/40 transition-all border border-white/10"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleLike(creator.id);
              }}
            >
              <Heart
                className={`h-5 w-5 transition-all duration-300 ${liked ? "fill-red-500 text-red-500 scale-110" : "text-white group-hover:scale-110"}`}
              />
            </Button>
          </div>


          <div className="relative p-5">
            {/* Header with Avatar */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-offset-2 ring-offset-background/50 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    "--tw-ring-color": `${creator.theme?.accent || "#667eea"}40`,
                  } as React.CSSProperties}
                />
                {creator.verified && (
                  <div
                    className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center border-2 border-background"
                    style={{
                      background: creator.theme?.gradient || "linear-gradient(135deg, #667eea, #764ba2)",
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-foreground truncate transition-colors duration-300">
                  <span
                    className="bg-clip-text transition-all duration-300 group-hover:text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${creator.theme?.accent || "#667eea"}, ${creator.theme?.accent || "#764ba2"})`,
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    {creator.name}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground truncate group-hover:text-foreground/80 transition-colors duration-300">
                  {creator.niche}
                </p>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  <MapPin className="h-3 w-3" />
                  <span>{creator.location}</span>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {creator.platforms.slice(0, 3).map((platform) => (
                <Badge
                  key={platform}
                  variant="outline"
                  size="sm"
                  className="backdrop-blur-sm group-hover:border-current transition-colors duration-300"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  {platform}
                </Badge>
              ))}
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between pt-3 border-t transition-colors duration-300"
              style={{
                borderColor: "rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="flex items-center gap-1">
                <Star
                  className="h-4 w-4 fill-current text-yellow-500 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(234, 179, 8, 0.3))",
                  }}
                />
                <span className="font-semibold text-sm">{creator.rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  ({creator.reviewCount})
                </span>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  Starting at
                </p>
                <p
                  className="font-display font-semibold text-foreground group-hover:font-bold transition-all duration-300"
                  style={{
                    color: creator.theme?.accent || "#667eea",
                  }}
                >
                  ₹{creator.startingPrice.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div
            className="h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
            style={{
              background: creator.theme?.gradient || "linear-gradient(135deg, #667eea, #764ba2)",
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
