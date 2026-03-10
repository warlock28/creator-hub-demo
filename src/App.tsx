import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { RoleBasedRoute } from "@/components/auth/RoleBasedRoute";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/static-pages/Index";
import Discover from "./pages/static-pages/Discover";
import CreatorProfile from "./pages/creator/CreatorProfile";
import CreatorServices from "./pages/creator/CreatorServices";
import CreatorDashboard from "./pages/creator/CreatorDashboard";
import CreatorProfileEdit from "./pages/creator/creator-profile-edit";
import CreatorBookings from "./pages/creator/CreatorBookings";
import CreatorMessages from "./pages/creator/CreatorMessages";
import CreatorEarnings from "./pages/creator/CreatorEarnings";
import BrandDiscoveryPage from "./pages/customer/brands/BrandDiscoveryPage";
import BrandDetailsPage from "./pages/customer/brands/BrandDetailsPage";
import CreatorReviews from "./pages/creator/CreatorReviews";
import CreatorSettings from "./pages/creator/CreatorSettings";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import CustomerMessages from "./pages/customer/CustomerMessages";
import CustomerBookings from "./pages/customer/CustomerBookings";
import CustomerPayments from "./pages/customer/CustomerPayments";
import CustomerReviews from "./pages/customer/CustomerReviews";
import CustomerSettings from "./pages/customer/CustomerSettings";
import CustomerSaved from "./pages/customer/CustomerSaved";
import NotFound from "./pages/static-pages/NotFound";
import HowItWorks from "./pages/static-pages/HowItWorks";
import ForCreators from "./pages/creator/ForCreators";
import Login from "./pages/login-join-pages/Login";
import Join from "./pages/login-join-pages/Join";
import Pricing from "./pages/static-pages/Pricing";
import Stories from "./pages/static-pages/Stories";
import Resources from "./pages/static-pages/Resources";
import FAQs from "./pages/static-pages/FAQs";
import About from "./pages/static-pages/About";
import Careers from "./pages/static-pages/Careers";
import Blog from "./pages/static-pages/Blog";
import Contact from "./pages/static-pages/Contact";
import Terms from "./pages/static-pages/Terms";
import Privacy from "./pages/static-pages/Privacy";
import Cookies from "./pages/static-pages/Cookies";
import ForgotPassword from "./pages/login-join-pages/ForgotPassword";
import UpdatePassword from "./pages/login-join-pages/UpdatePassword";
import ScrollToTop from "./components/common/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"
import ForCustomer from "./pages/customer/ForCustomer";
import BagPage from "./pages/customer/BagPage";
import OrderPage from "./pages/customer/OrderPage";
import ProductDetailPage from "./pages/customer/products/ProductDetailPage";
import ContentPage from "./pages/content/ContentPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Analytics />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/discover" element={<ProtectedRoute><Discover /></ProtectedRoute>} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/for-creators" element={<ForCreators />} />
              <Route path="/for-customers" element={<ForCustomer />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />
              <Route path="/creator/:id" element={<CreatorProfile />} />
              <Route path="/creator/:id/services" element={<CreatorServices />} />
              <Route path="/creator/dashboard" element={<RoleBasedRoute allowedRole="creator"><CreatorDashboard /></RoleBasedRoute>} />
              <Route path="/creator/profile" element={<RoleBasedRoute allowedRole="creator"><CreatorProfileEdit /></RoleBasedRoute>} />
              <Route path="/creator/bookings" element={<RoleBasedRoute allowedRole="creator"><CreatorBookings /></RoleBasedRoute>} />
              <Route path="/creator/messages" element={<RoleBasedRoute allowedRole="creator"><CreatorMessages /></RoleBasedRoute>} />
              <Route path="/creator/earnings" element={<RoleBasedRoute allowedRole="creator"><CreatorEarnings /></RoleBasedRoute>} />
              <Route path="/creator/reviews" element={<RoleBasedRoute allowedRole="creator"><CreatorReviews /></RoleBasedRoute>} />
              <Route path="/creator/settings" element={<RoleBasedRoute allowedRole="creator"><CreatorSettings /></RoleBasedRoute>} />
              <Route path="/customer/dashboard" element={<RoleBasedRoute allowedRole="customer"><CustomerDashboard /></RoleBasedRoute>} />
              <Route path="/customer/bookings" element={<RoleBasedRoute allowedRole="customer"><CustomerBookings /></RoleBasedRoute>} />
              <Route path="/customer/payments" element={<RoleBasedRoute allowedRole="customer"><CustomerPayments /></RoleBasedRoute>} />
              <Route path="/customer/reviews" element={<RoleBasedRoute allowedRole="customer"><CustomerReviews /></RoleBasedRoute>} />
              <Route path="/customer/settings" element={<RoleBasedRoute allowedRole="customer"><CustomerSettings /></RoleBasedRoute>} />
              <Route path="/customer/messages" element={<RoleBasedRoute allowedRole="customer"><CustomerMessages /></RoleBasedRoute>} />
              <Route path="/customer/saved" element={<RoleBasedRoute allowedRole="customer"><CustomerSaved /></RoleBasedRoute>} />
              <Route path="/cart" element={<BagPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/customer/brands" element={<BrandDiscoveryPage />} />
              <Route path="/customer/brands/:brandId" element={<BrandDetailsPage />} />
              <Route path="/customer/brands/:brandId/product/:productId" element={<ProductDetailPage />} />
              <Route path="/content" element={<ContentPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
