import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
    creatorId: string;
    serviceId: string;
    serviceName: string;
    price: number;
    deliveryDays: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (creatorId: string, serviceId: string) => void;
    getCartCount: () => number;
    isInCart: (creatorId: string, serviceId: string) => boolean;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "career-hub-cart";

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(() => {
        // Initialize from localStorage
        try {
            const stored = localStorage.getItem(CART_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Error loading cart from localStorage:", error);
            return [];
        }
    });

    // Sync to localStorage whenever items change
    useEffect(() => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.error("Error saving cart to localStorage:", error);
        }
    }, [items]);

    const addToCart = (item: CartItem) => {
        setItems((prev) => {
            // Check if item already exists
            const exists = prev.some(
                (i) => i.creatorId === item.creatorId && i.serviceId === item.serviceId
            );
            if (exists) {
                return prev; // Don't add duplicates
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (creatorId: string, serviceId: string) => {
        setItems((prev) =>
            prev.filter(
                (item) => !(item.creatorId === creatorId && item.serviceId === serviceId)
            )
        );
    };

    const getCartCount = () => items.length;

    const isInCart = (creatorId: string, serviceId: string) => {
        return items.some(
            (item) => item.creatorId === creatorId && item.serviceId === serviceId
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                getCartCount,
                isInCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
