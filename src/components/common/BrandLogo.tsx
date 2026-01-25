import { cn } from "@/lib/utils";

interface BrandLogoProps {
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export function BrandLogo({ showText = true, className, textClassName }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-label="AdPromoo logo"
        className="h-9 w-9"
      >
        <defs>
          <linearGradient id="adpromoo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B7CFF" />
            <stop offset="50%" stopColor="#8A52FF" />
            <stop offset="100%" stopColor="#FF7BC2" />
          </linearGradient>
        </defs>
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="14"
          fill="url(#adpromoo-gradient)"
        />
        <path
          d="M16 24c0-4.418 3.582-8 8-8 2.607 0 4.923 1.243 6.4 3.2L32 18l4 2-2 4h-4c0 4.418-3.582 8-8 8-2.607 0-4.923-1.243-6.4-3.2L16 30l-4-2 2-4h4Z"
          fill="#fff"
          opacity="0.95"
        />
        <circle cx="24" cy="24" r="3" fill="url(#adpromoo-gradient)" />
      </svg>
      {showText && (
        <span className={cn("font-display text-xl font-bold tracking-tight text-foreground", textClassName)}>
          AdPromoo
        </span>
      )}
    </div>
  );
}
