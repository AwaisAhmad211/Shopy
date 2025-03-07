import React, { useState } from "react";
import { hamimg } from "../assets/Data";
import { products } from "../assets/Data";
import { Link } from "react-router-dom";
import { useShop } from "../Context/Context";
import { useNavigate } from "react-router-dom"; 


const uniqueCategories = [...new Set(products.map((product) => product.category))];

const Navbar = ({ openSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useShop(); 
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
      setSearchQuery(e.target.value); 
  };

  const handleSearchSubmit = (e) => {
      e.preventDefault();
    
      navigate(`/shop`); 
  };

 

  return (
    <nav className="flex items-center justify-between bg-teal-700 shadow-md p-4 px-6 md:px-16 relative">
      {/* Hamburger Menu */}
      <div className="relative flex items-center gap-4">
        <img
          src={hamimg}
          alt="Menu"
          className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Navigation Links (Visible Always) */}
      <ul className="hidden md:flex gap-8 font-semibold text-lg">
        <li><Link to="/" className="text-gray-200 hover:text-gray-300 transition-all duration-300">Home</Link></li>
        <li><Link to="/shop" className="text-gray-200 hover:text-gray-300 transition-all duration-300">Shop</Link></li>
        <li><Link to="/about" className="text-gray-200 hover:text-gray-300 transition-all duration-300">About</Link></li>
        <li><Link to="/contact" className="text-gray-200 hover:text-gray-300 transition-all duration-300">Contact Us</Link></li>
      </ul>

      {/* Dropdown Menu (For Small Screens) */}
      {menuOpen && (
        <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-64 py-3 z-50 transition-all duration-300 divide-y divide-gray-200 ">
          {/* Product Search Input */}
          <form  onSubmit={handleSearchSubmit}  className="p-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={ handleSearchChange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </form>

          <button
            className="w-full text-left px-5 py-3 text-black font-semibold text-lg bg-gray-100 hover:bg-teal-500 hover:text-white"
            onClick={() => setHomeMenuOpen(!homeMenuOpen)}
          >
            Main Menu
          </button>
          {homeMenuOpen && (
            <div className="px-5 py-3 flex flex-col gap-2">
              <Link to="/" className="block text-gray-800 font-bold hover:bg-teal-500 hover:text-white p-2 rounded-md">Home</Link>
              <Link to="/shop" className="block text-gray-800 font-bold hover:bg-teal-500 hover:text-white p-2 rounded-md">Shop</Link>
              <Link to="/about" className="block text-gray-800 font-bold hover:bg-teal-500 hover:text-white p-2 rounded-md">About</Link>
              <Link to="/contact" className="block text-gray-800 font-bold hover:bg-teal-500 hover:text-white p-2 rounded-md">Contact Us</Link>
            </div>
          )}

          <button
            className="w-full text-left px-5 py-3 text-black font-semibold text-lg bg-gray-100 hover:bg-teal-500 hover:text-white"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
          >
            Categories
          </button>
          {categoriesOpen && (
            <div className="px-5 py-3 flex flex-col gap-2 font-bold">
              {uniqueCategories.map((category, index) => (
                <Link
                  to={`/category/${encodeURIComponent(category)}`}
                  key={index}
                  className="block text-gray-700 hover:bg-teal-500 hover:text-white p-2 rounded-md transition-all duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sign In / Sign Up */}
      <div className="flex font-semibold gap-2">
        <button onClick={() => openSidebar(false)} className="text-white hover:underline transition-all duration-300">Register/</button>
        <button onClick={() => openSidebar(true)} className="text-white hover:underline transition-all duration-300">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
