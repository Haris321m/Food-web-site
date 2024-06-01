import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notification, setNotification] = useState(null);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + 1,
        };
        return updatedCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...item, count: 1 }]);
    }
    
    setNotification('Item added to cart!');
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    setNotification('Item removed from cart!');
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const increaseItemCount = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseItemCount = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseItemCount,
        decreaseItemCount,
        notification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
