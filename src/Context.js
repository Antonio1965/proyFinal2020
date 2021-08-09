import { createContext, useState } from "react";

export const Context = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isntInCart = (receivedItem) =>
    cart.filter((item) => item.id === receivedItem.id).length === 0;

  const addToCart = (receivedItem) => {
    if (isntInCart(receivedItem)) {
      setCart([...cart, receivedItem]);
    } else {
      alert("Ya está en el carrito");
    }
  };

  const removeFromCart = (receivedItem) => {
    let allItemsExceptRemoved = cart.filter(
      (item) => item.id !== receivedItem.id
    );
    setCart(allItemsExceptRemoved);

  };

  
  const totalCart = () => {
    return cart.reduce( (acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0)
  }
  
  const quantityCart = () => {
    return cart.reduce( (acc, cartItem) => acc + cartItem.quantity, 0)
  }
  
  const clearCart = () => setCart([]);

  return (
    <Context.Provider value={{ cart, addToCart, removeFromCart, clearCart, quantityCart, totalCart}}>
      {children}
    </Context.Provider>
  );
};
