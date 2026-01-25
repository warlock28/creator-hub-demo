import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Search,
  Calendar,
  MessageCircle,
  CreditCard,
  Star,
  Settings,
  Menu,
  Bell,
  LogOut,
  Sparkles,
  Heart,
  Store,
  ShoppingBag,
  X,
  Trash2,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/customer/dashboard" },
  { icon: Store, label: "Shop Brands", href: "/customer/brands" },
  { icon: Calendar, label: "My Bookings", href: "/customer/bookings" },
  { icon: MessageCircle, label: "Messages", href: "/customer/messages", badge: 2 },
  { icon: Heart, label: "Saved", href: "/customer/saved" },
  { icon: CreditCard, label: "Payments", href: "/customer/payments" },
  { icon: Star, label: "My Reviews", href: "/customer/reviews" },
  { icon: Settings, label: "Settings", href: "/customer/settings" },
];

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export function CustomerLayout({ children }: CustomerLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, userProfile } = useAuth();
  const { items: cartItems, removeFromCart, getCartCount } = useCart();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Sidebar - Fixed */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">AdPromoo</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="flex-1">{link.label}</span>
                  {link.badge && (
                    <Badge variant="destructive" size="sm">
                      {link.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={userProfile?.avatar_url || "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop"}
                alt="Profile"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{userProfile?.full_name || 'Customer'}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-muted-foreground" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Log out
            </Button>
          </div>
        </div>
      </aside>

      {/* Cart Sidebar / Drawer - Right Side */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300",
          cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setCartOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[61] w-full max-w-sm bg-card border-l border-border shadow-2xl transform transition-transform duration-300 flex flex-col",
          cartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-5 border-b border-border flex items-center justify-between bg-card/50 backdrop-blur-xl">
          <h2 className="font-display font-bold text-lg flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your Cart
            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{getCartCount()}</span>
          </h2>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary" onClick={() => setCartOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-5">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60 mt-10">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-lg">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">Start shopping to add items</p>
              </div>
              <Button variant="outline" onClick={() => { setCartOpen(false); navigate('/customer/brands'); }}>
                Browse Brands
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, idx) => (
                <div key={`${item.creatorId}-${item.serviceId}-${idx}`} className="flex gap-4 p-3 bg-secondary/30 rounded-xl border border-border/50 group hover:border-primary/30 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Store className="w-6 h-6 text-primary/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">Brand Item</p>
                    <h4 className="font-semibold text-sm line-clamp-1">{item.serviceName}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-primary">₹{item.price.toLocaleString()}</span>
                      <button
                        onClick={() => removeFromCart(item.creatorId, item.serviceId)}
                        className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cartItems.length > 0 && (
          <div className="p-5 border-t border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground font-medium">Total</span>
              <span className="text-xl font-bold font-display">₹{totalAmount.toLocaleString()}</span>
            </div>
            <Button className="w-full h-12 rounded-xl font-bold text-base shadow-lg shadow-primary/20" onClick={() => { setCartOpen(false); navigate('/cart'); }}>
              Checkout Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content - With left margin for sidebar on desktop */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-16 bg-card/80 backdrop-blur-lg border-b border-border flex items-center justify-between gap-4 px-4 lg:px-8">
          <div className="flex items-center gap-4 flex-1">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Search */}
            <div className="flex-1 max-w-md hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search creators..."
                  className="pl-10 h-10 rounded-full bg-secondary/50 border-0"
                />
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-secondary"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-primary border-2 border-card animate-pulse" />
              )}
            </Button>

            <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-secondary">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <img
              src={userProfile?.avatar_url || "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop"}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
