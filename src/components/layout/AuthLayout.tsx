import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
    children: React.ReactNode;
    heroImage: string;
    heroTitle: string;
    heroSubtitle: string;
    variant?: "login" | "join";
}

export function AuthLayout({
    children,
    heroImage,
    heroTitle,
    heroSubtitle,
    variant = "login",
}: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Fixed Brand Logo - Visible on all screens */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-background/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 font-display font-bold text-lg sm:text-xl hover:opacity-80 transition-opacity"
                >
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">A</span>
                    </div>
                    <span className="text-foreground">AdPromoo</span>
                </Link>
            </nav>

            {/* Left Panel - Hero Image (Hidden on mobile/tablet, visible on lg+) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                {/* Fresh Light Gradient Background */}
                <div
                    className={`absolute inset-0 ${variant === "login"
                            ? "bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-100"
                            : "bg-gradient-to-br from-orange-50 via-rose-50 to-pink-100"
                        }`}
                />

                {/* Decorative Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-40 ${variant === "login" ? "bg-teal-200" : "bg-rose-200"
                            }`}
                    />
                    <div
                        className={`absolute bottom-32 right-20 w-24 h-24 rounded-full opacity-30 ${variant === "login" ? "bg-emerald-200" : "bg-orange-200"
                            }`}
                    />
                    <div
                        className={`absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-50 ${variant === "login" ? "bg-cyan-200" : "bg-pink-200"
                            }`}
                    />
                </div>

                {/* Hero Image - Centered */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <motion.img
                        src={heroImage}
                        alt="Hero"
                        className="w-full max-w-md h-auto object-contain drop-shadow-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>

                {/* Bottom Card */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div
                            className={`backdrop-blur-xl rounded-2xl p-5 border max-w-md ${variant === "login"
                                    ? "bg-white/80 border-teal-200/50"
                                    : "bg-white/80 border-rose-200/50"
                                }`}
                        >
                            <h2
                                className={`font-display text-xl font-bold mb-1 ${variant === "login" ? "text-teal-800" : "text-rose-800"
                                    }`}
                            >
                                {heroTitle}
                            </h2>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                {heroSubtitle}
                            </p>

                            <div className="flex gap-6 mt-4 pt-4 border-t border-border/30">
                                <div className="text-center">
                                    <p
                                        className={`text-xl font-bold ${variant === "login" ? "text-teal-600" : "text-rose-600"
                                            }`}
                                    >
                                        10K+
                                    </p>
                                    <p className="text-[10px] text-muted-foreground">Creators</p>
                                </div>
                                <div className="text-center">
                                    <p
                                        className={`text-xl font-bold ${variant === "login" ? "text-teal-600" : "text-rose-600"
                                            }`}
                                    >
                                        5K+
                                    </p>
                                    <p className="text-[10px] text-muted-foreground">Brands</p>
                                </div>
                                <div className="text-center">
                                    <p
                                        className={`text-xl font-bold ${variant === "login" ? "text-teal-600" : "text-rose-600"
                                            }`}
                                    >
                                        50K+
                                    </p>
                                    <p className="text-[10px] text-muted-foreground">Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Panel - Form (Full width on mobile/tablet) */}
            <div className="flex-1 lg:w-1/2 flex flex-col min-h-screen lg:min-h-0">
                {/* Mobile/Tablet Hero Banner */}
                <div
                    className={`lg:hidden pt-16 pb-4 px-4 sm:px-6 ${variant === "login"
                            ? "bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-100"
                            : "bg-gradient-to-br from-orange-50 via-rose-50 to-pink-100"
                        }`}
                >
                    <div className="flex items-center gap-4">
                        <motion.img
                            src={heroImage}
                            alt="Hero"
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                        <div className="flex-1 min-w-0">
                            <h2
                                className={`font-display text-base sm:text-lg font-bold ${variant === "login" ? "text-teal-800" : "text-rose-800"
                                    }`}
                            >
                                {heroTitle}
                            </h2>
                            <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2">
                                {heroSubtitle}
                            </p>
                        </div>
                    </div>

                    {/* Stats Row - Mobile */}
                    <div className="flex justify-around mt-3 pt-3 border-t border-border/30">
                        <div className="text-center">
                            <p
                                className={`text-sm sm:text-base font-bold ${variant === "login" ? "text-teal-600" : "text-rose-600"
                                    }`}
                            >
                                10K+
                            </p>
                            <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                                Creators
                            </p>
                        </div>
                        <div className="text-center">
                            <p
                                className={`text-sm sm:text-base font-bold ${variant === "login" ? "text-teal-600" : "text-rose-600"
                                    }`}
                            >
                                5K+
                            </p>
                            <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                                Brands
                            </p>
                        </div>
                        <div className="text-center">
                            <p
                                className={`text-sm sm:text-base font-bold ${variant === "login" ? "text-teal-600" : "text-rose-600"
                                    }`}
                            >
                                50K+
                            </p>
                            <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                                Campaigns
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Container */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-background lg:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full max-w-md"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
