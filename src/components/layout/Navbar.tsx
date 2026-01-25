import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Sparkles,
  BookOpen,
  HelpCircle,
  Briefcase,
  Users,
  CreditCard,
  ChevronRight,
  Home,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/common";

const navLinks = [
  {
    href: "/discover",
    label: "Creators",
    icon: Users,
    description: "Browse verified creators",
  },
  {
    href: "/customer/brands",
    label: "Brands",
    icon: Briefcase,
    description: "Shop from top brands",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    icon: BookOpen,
    description: "Learn the process",
  },
  {
    href: "/pricing",
    label: "Pricing",
    icon: CreditCard,
    description: "View our plans",
  },
  {
    href: "/for-creators",
    label: "For Creators",
    icon: Sparkles,
    description: "Join as a creator",
  },
  {
    href: "/for-customers",
    label: "For Customers",
    icon: Users,
    description: "Book creator campaigns",
  },
];

// Mega menu categories
const creatorCategories = [
  {
    name: "Tech & Gadgets",
    count: "2,400+",
    icon: "💻",
    href: "/discover?niche=tech",
  },
  {
    name: "Fashion & Style",
    count: "3,100+",
    icon: "👗",
    href: "/discover?niche=fashion",
  },
  {
    name: "Food & Travel",
    count: "1,800+",
    icon: "🍕",
    href: "/discover?niche=food",
  },
  {
    name: "Fitness & Health",
    count: "1,200+",
    icon: "💪",
    href: "/discover?niche=fitness",
  },
];

// Brand categories for mega menu (showing 4 categories only)
const brandCategories = [
  {
    name: "Grocery & Vegetables",
    count: "500+",
    icon: "🥬",
    href: "/customer/brands?category=grocery",
  },
  {
    name: "Electronics",
    count: "800+",
    icon: "📱",
    href: "/customer/brands?category=electronics",
  },
  {
    name: "Fashion",
    count: "1,200+",
    icon: "👕",
    href: "/customer/brands?category=clothes",
  },
  {
    name: "Beauty & Cosmetics",
    count: "600+",
    icon: "💄",
    href: "/customer/brands?category=beauty",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showBrandMegaMenu, setShowBrandMegaMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // No authentication required
  const isLoggedIn = false; // Always show non-logged-in state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Authentication removed - no logout needed

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2"
            : "bg-white/80 backdrop-blur-md py-3"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
              aria-label="AdPromoo home"
            >
              <BrandLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const hasDropdown = link.label === "Creators" || link.label === "Brands";

                return (
                  <div
                    key={link.href}
                    onMouseEnter={() => {
                      if (link.label === "Creators") setShowMegaMenu(true);
                      if (link.label === "Brands") setShowBrandMegaMenu(true);
                    }}
                    onMouseLeave={() => {
                      if (link.label === "Creators") setShowMegaMenu(false);
                      if (link.label === "Brands") setShowBrandMegaMenu(false);
                    }}
                    className="relative"
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 group",
                        isActive
                          ? "text-violet-700 bg-violet-50"
                          : "text-gray-700 hover:text-violet-700 hover:bg-violet-50/50"
                      )}
                    >
                      <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span>{link.label}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 transition-transform",
                            (link.label === "Creators" && showMegaMenu) ||
                              (link.label === "Brands" && showBrandMegaMenu)
                              ? "rotate-180"
                              : ""
                          )}
                        />
                      )}
                    </Link>

                    {/* Mega Menu for Creators */}
                    <AnimatePresence>
                      {link.label === "Creators" && showMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
                        >
                          <div className="mb-4">
                            <h3 className="font-semibold text-sm text-gray-900 mb-1">
                              Popular Categories
                            </h3>
                            <p className="text-xs text-gray-500">
                              Browse creators by niche
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {creatorCategories.map((category) => (
                              <Link
                                key={category.name}
                                to={category.href}
                                className="p-3 rounded-lg border border-gray-100 hover:border-violet-200 hover:bg-violet-50 transition-all group"
                              >
                                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                  {category.icon}
                                </div>
                                <h4 className="font-medium text-sm text-gray-900 mb-1">
                                  {category.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {category.count}
                                </p>
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/discover"
                            className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
                          >
                            <span>View All Creators</span>
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mega Menu for Brands */}
                    <AnimatePresence>
                      {link.label === "Brands" && showBrandMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
                        >
                          <div className="mb-4">
                            <h3 className="font-semibold text-sm text-gray-900 mb-1">
                              Shop by Category
                            </h3>
                            <p className="text-xs text-gray-500">
                              Explore brands across categories
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {brandCategories.map((category) => (
                              <Link
                                key={category.name}
                                to={category.href}
                                className="p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                              >
                                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                  {category.icon}
                                </div>
                                <h4 className="font-medium text-sm text-gray-900 mb-1">
                                  {category.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {category.count} brands
                                </p>
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/customer/brands"
                            className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <span>View All Brands</span>
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              {isLoggedIn ? (
                <>
                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full relative hover:bg-violet-50"
                      >
                        <Bell className="h-5 w-5 text-gray-700" />
                        {userNotifications > 0 && (
                          <Badge
                            variant="destructive"
                            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                          >
                            {userNotifications}
                          </Badge>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="max-h-96 overflow-y-auto">
                        <div className="p-4 text-center text-sm text-muted-foreground">
                          No new notifications
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* User Profile Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 rounded-full hover:bg-violet-50"
                      >
                        {userProfile?.avatar_url ? (
                          <img src={userProfile.avatar_url} alt={userProfile.full_name || 'User'} className="h-8 w-8 rounded-full object-cover" />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                            {userProfile?.full_name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <ChevronDown className="h-3 w-3 text-gray-700" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>
                        <div>
                          <p className="font-medium">{userProfile?.full_name || 'User'}</p>
                          <p className="text-xs text-gray-500">
                            {user?.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link to="/creator/profile">
                        <DropdownMenuItem className="cursor-pointer">
                          <User className="h-4 w-4 mr-2" />
                          My Profile
                        </DropdownMenuItem>
                      </Link>
                      <Link to={dashboardLink}>
                        <DropdownMenuItem className="cursor-pointer">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Dashboard
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/creator/settings">
                        <DropdownMenuItem className="cursor-pointer">
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className="cursor-pointer">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Help & Support
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-700 hover:text-violet-700 hover:bg-violet-50 font-medium"
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link to="/join">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-violet-500/30 font-semibold"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Join Free
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "relative h-10 w-10 rounded-xl flex items-center justify-center transition-colors",
                  isMobileMenuOpen
                    ? "bg-violet-100 text-violet-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[60px] left-0 right-0 bottom-0 bg-white z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <div className="flex-1 px-4 py-4 overflow-y-auto">
                  {/* Quick Access */}
                  <div className="mb-4">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      Quick Access
                    </p>
                    <Link
                      to="/"
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                        location.pathname === "/"
                          ? "text-violet-700 bg-violet-50"
                          : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div
                        className={cn(
                          "h-9 w-9 rounded-lg flex items-center justify-center",
                          location.pathname === "/"
                            ? "bg-violet-100"
                            : "bg-gray-100"
                        )}
                      >
                        <Home className="h-4 w-4" />
                      </div>
                      <span>Home</span>
                    </Link>
                  </div>

                  {/* Main Navigation */}
                  <div className="mb-4">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      Navigation
                    </p>
                    <div className="space-y-1">
                      {navLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                          <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                              isActive
                                ? "text-violet-700 bg-violet-50"
                                : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div
                              className={cn(
                                "h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0",
                                isActive ? "bg-violet-100" : "bg-gray-100"
                              )}
                            >
                              <link.icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="truncate">{link.label}</div>
                              <div className="text-[11px] text-gray-500 font-normal truncate">
                                {link.description}
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Creator Categories Quick Links */}
                  <div className="mb-4">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      Creator Categories
                    </p>
                    <div className="grid grid-cols-2 gap-2 px-3">
                      {creatorCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-violet-50 hover:bg-violet-100 active:bg-violet-200 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-lg">{category.icon}</span>
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-gray-800 truncate">
                              {category.name}
                            </p>
                            <p className="text-[10px] text-gray-500">
                              {category.count}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Brand Categories Quick Links */}
                  <div className="mb-4">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      Shop by Brand Category
                    </p>
                    <div className="grid grid-cols-2 gap-2 px-3">
                      {brandCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 active:bg-blue-200 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-lg">{category.icon}</span>
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-gray-800 truncate">
                              {category.name}
                            </p>
                            <p className="text-[10px] text-gray-500">
                              {category.count}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Auth Section */}
                <div className="flex-shrink-0 p-4 border-t border-gray-100 bg-gray-50/50">
                  {isLoggedIn ? (
                    <div className="space-y-2">
                      <Link
                        to="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-3 h-11 rounded-xl"
                        >
                          <User className="h-4 w-4" />
                          My Profile
                        </Button>
                      </Link>
                      <Link
                        to={dashboardLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-3 h-11 rounded-xl"
                        >
                          <Briefcase className="h-4 w-4" />
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3 h-11 rounded-xl text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4" />
                        Log out
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <Link
                        to="/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full h-11 rounded-xl font-semibold"
                        >
                          Log in
                        </Button>
                      </Link>
                      <Link
                        to="/join"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1"
                      >
                        <Button className="w-full h-11 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg font-semibold">
                          <Sparkles className="h-4 w-4 mr-2" />
                          Join Free
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
