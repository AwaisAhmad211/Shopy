import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useShop } from "../Context/Context";
import { useState,useEffect } from "react";

export default function ShopHeader() {
  const { categories, selectedCategory, setSelectedCategory } = useShop();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 780;
      setIsMobile(isMobileView);

      if (!isMobileView) {
        setIsCategoryOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-black text-white p-4 flex flex-wrap justify-center gap-4 relative">
      {isMobile ? (
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            All Categories 
            <FiDownload className={`w-5 h-5 transform transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 transition-all duration-300 ease-in-out ${
              isCategoryOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none"
            }`}
          >
            {categories.map((category, index) => (
              <Link to={`/category/${encodeURIComponent(category)}`} key={index}>
                <button
                  className={`block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-all duration-200 ${
                    selectedCategory === category ? "bg-gray-200 font-semibold" : ""
                  }`}
                  onClick={() => { setSelectedCategory(category); setIsCategoryOpen(false); }}
                >
                  {category}
                </button>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          <button
            className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-600"
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </button>
          {categories.map((category, index) => (
            <Link to={`/category/${encodeURIComponent(category)}`} key={index}>
              <button
                className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-gray-700" : "bg-gray-800"} text-white hover:bg-gray-600`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}