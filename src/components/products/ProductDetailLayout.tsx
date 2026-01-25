import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Heart,
  Share2,
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
  Package,
  Plus,
  Minus,
  X,
  Star,
  Clock,
  BadgeCheck,
  Sparkles,
  Zap,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/StarRating";
import type { Brand, Product } from "@/data/mockBrands";

interface ProductDetailLayoutProps {
  brand: Brand;
  product: Product;
  quantity: number;
  inCart: boolean;
  similarProducts: Product[];
  onBack: () => void;
  onAddOrRemove: () => void;
  onGoToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

// Modern, professional product page layout with refined light colors
export function ProductDetailLayout({
  brand,
  product,
  quantity,
  inCart,
  similarProducts,
  onBack,
  onAddOrRemove,
  onGoToCart,
  onIncrement,
  onDecrement,
}: ProductDetailLayoutProps) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const productImages = product.gallery?.length ? product.gallery : [product.image, product.image, product.image];
  const discountPercent = 17;
  const originalPrice = Math.round(product.price * 1.2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Refined Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="hidden md:flex items-center gap-2 text-sm">
                <span className="text-gray-400">Products</span>
                <ChevronRight className="w-4 h-4 text-gray-300" />
                <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  isLiked
                    ? "bg-red-50 text-red-500"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg"
            >
              <div className="aspect-square p-6 lg:p-10">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                {discountPercent}% OFF
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full">
                {selectedImage + 1} / {productImages.length}
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3 justify-center">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-emerald-500 ring-4 ring-emerald-100 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full px-4 py-2">
              <img src={brand.logo} alt={brand.name} className="w-6 h-6 rounded-full object-cover" />
              <span className="text-sm font-medium text-gray-700">{brand.name}</span>
              {brand.verified && <BadgeCheck className="w-4 h-4 text-blue-500" />}
            </div>

            {/* Product Title */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-gray-500 leading-relaxed">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-gray-900">{product.rating}</span>
                <span className="text-gray-500 text-sm">({product.reviews?.toLocaleString() || "500+"} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Bestseller</span>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-100 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  Save ₹{(originalPrice - product.price).toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">Inclusive of all taxes</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={onDecrement}
                    disabled={quantity <= 1}
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-14 text-center text-xl font-bold text-gray-900">{quantity}</span>
                  <button
                    onClick={onIncrement}
                    disabled={quantity >= 10}
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">Max 10 per order</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                onClick={onAddOrRemove}
                className={`flex-1 h-14 text-base rounded-2xl font-bold transition-all shadow-xl ${
                  inCart
                    ? "bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white shadow-red-200"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-emerald-200"
                }`}
              >
                {inCart ? (
                  <>
                    <X className="w-5 h-5 mr-2" />
                    Remove from Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Bag
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onGoToCart}
                className="h-14 rounded-2xl font-bold px-8 border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              >
                Proceed to Checkout
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6">
              <TrustBadge
                icon={<Truck className="w-5 h-5" />}
                label="Free Delivery"
                subLabel="Above ₹499"
                color="blue"
              />
              <TrustBadge
                icon={<Shield className="w-5 h-5" />}
                label="Secure Pay"
                subLabel="100% Safe"
                color="green"
              />
              <TrustBadge
                icon={<RotateCcw className="w-5 h-5" />}
                label="Easy Return"
                subLabel="7 Days"
                color="purple"
              />
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-16 space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Highlights */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  Highlights
                </h3>
              </div>
              <div className="divide-y divide-gray-50">
                <InfoRow label="Brand" value={brand.name} />
                <InfoRow label="Category" value={product.category} />
                <InfoRow label="Model" value={product.name} />
                <InfoRow label="Rating" value={`${product.rating} ★`} valueClass="text-amber-600 font-semibold" />
                <InfoRow label="Stock" value="In Stock" valueClass="text-emerald-600 font-semibold" />
                <InfoRow label="Delivery" value="3-5 Business Days" />
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-emerald-600" />
                  Seller Information
                </h3>
              </div>
              <div className="divide-y divide-gray-50">
                <InfoRow label="Seller" value={`${brand.name} Pvt. Ltd.`} />
                <InfoRow label="Returns" value="7 Day Easy Return Policy" />
                <InfoRow label="Warranty" value="1 Year Manufacturer Warranty" />
                <InfoRow label="Support" value={`support@${brand.slug || brand.name.toLowerCase().replace(/\s+/g, "")}.com`} valueClass="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                About this Product
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
              <p className="text-gray-500 leading-relaxed text-sm">
                This premium product from {brand.name} is designed for quality and reliability. Comes with manufacturer warranty and hassle-free returns.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                <FeaturePill icon={<Package />} label="Quality Assured" />
                <FeaturePill icon={<Truck />} label="Fast Shipping" />
                <FeaturePill icon={<Shield />} label="Secure Payment" />
                <FeaturePill icon={<RotateCcw />} label="Easy Returns" />
              </div>
            </div>
          </div>

          {/* Similar Products Section */}
          {similarProducts.length > 0 && (
            <SimilarProductsSection
              products={similarProducts}
              brand={brand}
              currentProductId={product.id}
              onProductClick={(productId) => navigate(`/customer/brands/${brand.id}/product/${productId}`)}
            />
          )}
        </div>
      </main>
    </div>
  );
}

// Sub-components with refined styling
function TrustBadge({
  icon,
  label,
  subLabel,
  color,
}: {
  icon: ReactNode;
  label: string;
  subLabel: string;
  color: "blue" | "green" | "purple";
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-emerald-50 text-emerald-600 border-emerald-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };

  return (
    <div className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${colors[color]}`}>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{subLabel}</p>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`text-sm font-medium text-gray-900 ${valueClass}`}>{value}</span>
    </div>
  );
}

function FeaturePill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
      <span className="w-4 h-4">{icon}</span>
      {label}
    </div>
  );
}

// Similar Products Section with horizontal scroll
function SimilarProductsSection({
  products,
  brand,
  currentProductId,
  onProductClick,
}: {
  products: Product[];
  brand: Brand;
  currentProductId: string;
  onProductClick: (productId: string) => void;
}) {
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("similar-products-scroll");
    if (container) {
      const scrollAmount = 320;
      const newPosition = direction === "left" 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  // Filter out current product
  const filteredProducts = products.filter((p) => p.id !== currentProductId);

  if (filteredProducts.length === 0) return null;

  return (
    <div className="mt-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Similar Products</h2>
            <p className="text-sm text-gray-500">More from {brand.name} in this category</p>
          </div>
        </div>

        {/* Scroll Controls */}
        {filteredProducts.length > 3 && (
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Products Scroll Container */}
      <div
        id="similar-products-scroll"
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredProducts.map((item, index) => (
          <SimilarProductCard
            key={item.id}
            product={item}
            brand={brand}
            onClick={() => onProductClick(item.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

// Individual Similar Product Card
function SimilarProductCard({
  product,
  brand,
  onClick,
  index,
}: {
  product: Product;
  brand: Brand;
  onClick: () => void;
  index: number;
}) {
  const discountPercent = 17;
  const originalPrice = Math.round(product.price * 1.2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="flex-shrink-0 w-[280px] bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer group hover:shadow-xl hover:border-gray-200 transition-all duration-300 snap-start"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
          {discountPercent}% OFF
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full shadow-lg">
            View Product
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Brand Tag */}
        <div className="flex items-center gap-1.5">
          <img src={brand.logo} alt={brand.name} className="w-4 h-4 rounded-full" />
          <span className="text-xs text-gray-500 font-medium">{brand.name}</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-gray-900">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({product.reviews || "100+"})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
        </div>

        {/* CTA Button */}
        <button className="w-full py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 font-semibold text-sm rounded-xl border border-emerald-100 hover:from-emerald-100 hover:to-teal-100 transition-all">
          <ShoppingBag className="w-4 h-4 inline-block mr-1.5" />
          Add to Bag
        </button>
      </div>
    </motion.div>
  );
}
