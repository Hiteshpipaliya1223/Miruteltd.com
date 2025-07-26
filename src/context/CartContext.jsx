// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error parsing cart items from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.originalId === product.originalId &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newCartItem = {
          ...product,
          id: `${product.originalId}-${product.selectedColor}-${product.selectedSize}-${Date.now()}`,
          quantity: 1,
        };
        return [...prevItems, newCartItem];
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter((item) => item.id !== id);
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return 0; // Ensures a number is always returned
    }

    const total = cartItems.reduce((totalAccumulator, item) => {
      const price = typeof item.price === 'number' ? item.price : 0;
      const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
      return totalAccumulator + (price * quantity);
    }, 0);

    if (typeof total !== 'number' || isNaN(total)) {
      console.error("Calculated total is not a number:", total, "Cart Items:", cartItems);
      return 0; // Fallback for safety
    }

    return total; // Return the raw number, .toFixed() will be applied where displayed
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};