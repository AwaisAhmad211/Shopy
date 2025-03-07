import React from 'react';
import { Logoimg } from '../assets/Data';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
           <Link to='/'><p className=" mb-4"><img src={Logoimg} className='w-30' alt='img' /></p></Link> 
            <p className="text-sm text-gray-400"> we curate the world’s most exquisite tools, gadgets, and products,
              redefining luxury with every selection.</p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-semibold mb-3">Quick Links</p>

            <Link to="/" className="text-gray-200 hover:text-gray-400">Home</Link>
            <Link to="/shop" className="text-gray-200 hover:text-gray-400">Shop</Link>
            <Link to="/about" className="text-gray-200 hover:text-gray-400">About</Link>
            <Link to="/contact" className="text-gray-200 hover:text-gray-400">Contact Us</Link>


          </div>

          {/* Categories Section */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-semibold mb-3">Categories</p>
            <a href="#" className="hover:text-gray-400 mb-2">Technology</a>
            <a href="#" className="hover:text-gray-400 mb-2">Lifestyle</a>
            <a href="#" className="hover:text-gray-400 mb-2">Business</a>
            <a href="#" className="hover:text-gray-400 mb-2">Health</a>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-semibold mb-3">Follow Us</p>
            <a href="#" className="hover:text-gray-400 mb-2">Facebook</a>
            <a href="#" className="hover:text-gray-400 mb-2">Instagram</a>
            <a href="#" className="hover:text-gray-400 mb-2">Twitter</a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">

          <p>&copy; {new Date().getFullYear()} Shopy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
