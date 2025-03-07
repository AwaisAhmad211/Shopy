import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

 
 
  const images = product.images && product.images.length > 0 ? product.images : [];

  return (
    <div
      key={product.id}
      className="relative bg-white shadow-md p-4 rounded-lg transition-transform transform hover:scale-110 duration-[900ms] ease-out"
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <div className="relative w-full h-60 overflow-hidden rounded-md">
        {images[0] ? (
          <img
            src={images[0]}
            alt={product.name}
            className="absolute w-full h-full object-cover transition-opacity duration-200 ease-in hover:opacity-0 scale-100 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex justify-center items-center">
            <span>No Image</span>
          </div>
        )}

        {images[1] ? (
          <img
            src={images[1]}
            alt={product.name}
            className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-200 ease-in hover:opacity-100 scale-100 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex justify-center items-center">
            <span>No Image</span>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm">{product.category}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>

        {/* Description */}
        <p
          className={`text-gray-600 text-sm mt-2 line-clamp-2 ${
            hoveredProduct === product.id ? "line-clamp-none" : ""
          }`}
        >
          {product.description}
        </p>

        <p className="text-teal-600 font-bold">${product.price}</p>
        <Link to={`/product/${product.id}`}>
        <button className="mt-3 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition">
          Add to Cart
        </button>
      </Link>
      </div>
    </div>
  );
}
