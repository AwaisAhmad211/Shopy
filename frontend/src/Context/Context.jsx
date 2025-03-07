import { createContext, useState, useContext, useEffect } from "react";
import { products } from "../assets/Data";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const categories = [...new Set(products.map((product) => product.category))];

  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery.trim() !== "") {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "lowToHigh") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, sortOrder, searchQuery]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    setCartTotal((prevTotal) => prevTotal + product.price * quantity);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      const removedItem = prevItems.find((item) => item.id === productId);
      if (removedItem) {
        setCartTotal((prevTotal) => prevTotal - removedItem.price * removedItem.quantity);
      }
      return updatedItems;
    });
  };

  return (
    <ShopContext.Provider
      value={{
        categories,
        selectedCategory,
        setSelectedCategory,
        sortOrder,
        setSortOrder,
        searchQuery,
        setSearchQuery,
        filteredProducts,
        cartTotal,
        setCartTotal,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
