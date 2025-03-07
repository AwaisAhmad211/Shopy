import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import BackToTop from './components/BackToTop';
import ProductDetail from './Pages/ProductDetails';
import ShopPage from './components/ShopPage';
import { ShopProvider } from "../src/Context/Context.jsx" 
import Buynow from './Pages/Buynow.jsx';

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.search.includes("")) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    setLoading(false);
  }, [location.pathname]);
};
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const openSidebar = (signUp = false) => {
    setIsSignUp(signUp);
    setIsOpen(true);
  };
  const closeSidebar = () => setIsOpen(false);
  return (
    <>
          <ShopProvider>

        <Header />
        <Navbar openSidebar={openSidebar} />
        <BackToTop />
        <Login isOpen={isOpen} isSignUp={isSignUp} closeSidebar={closeSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryName" element={<ShopPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buynow" element={<Buynow/>} />
        </Routes>
       
        <Footer />
        </ShopProvider>
    </>
  );
}

export default App; 