import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOCK_BRANDS } from "@/data/mockBrands";
import { GROCERY_BRANDS } from "@/data/groceryBrands";
import { ELECTRONICS_BRANDS } from "@/data/electronicsBrands";
import { CLOTHES_BRANDS } from "@/data/clothesBrands";
import { BEAUTY_BRANDS } from "@/data/beautyBrands";
import { SERVICES_BRANDS } from "@/data/servicesBrands";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ProductDetailLayout } from "@/components/products/ProductDetailLayout";

// Combine all brand sources for lookup
const ALL_BRANDS = [
  ...MOCK_BRANDS,
  ...GROCERY_BRANDS,
  ...ELECTRONICS_BRANDS,
  ...CLOTHES_BRANDS,
  ...BEAUTY_BRANDS,
  ...SERVICES_BRANDS,
];

export default function ProductDetailPage() {
  const { brandId, productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart, removeFromCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  // Search in all brands (MOCK_BRANDS + GROCERY_BRANDS)
  const brand = ALL_BRANDS.find((b) => b.id === brandId);
  const product = brand?.products.find((p) => p.id === productId);

  // Get similar products from the same brand in the same category
  const similarProducts = brand?.products.filter(
    (p) => p.category === product?.category && p.id !== productId
  ) || [];

  if (!brand || !product) {
    return (
      <PublicLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h2 className="text-2xl font-bold mb-2">Product not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-2 rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </PublicLayout>
    );
  }

  const inCart = isInCart(brand.id, product.id);

  const handleAddToCart = () => {
    addToCart({
      serviceId: product.id,
      serviceName: product.name,
      creatorId: brand.id,
      price: product.price,
      deliveryDays: 3,
    });
    toast.success(`Added ${quantity}x ${product.name} to bag`);
  };

  return (
    <PublicLayout hideFooter>
      <ProductDetailLayout
        brand={brand}
        product={{ ...product, gallery: [product.image, product.image, product.image] }}
        quantity={quantity}
        inCart={inCart}
        similarProducts={similarProducts}
        onBack={() => navigate(-1)}
        onAddOrRemove={() => {
          if (inCart) {
            removeFromCart(brand.id, product.id);
            toast.success(`${product.name} removed from bag`);
          } else {
            handleAddToCart();
          }
        }}
        onGoToCart={() => navigate("/cart")}
        onIncrement={() => setQuantity((p) => Math.min(p + 1, 10))}
        onDecrement={() => setQuantity((p) => Math.max(p - 1, 1))}
      />
    </PublicLayout>
  );
}
