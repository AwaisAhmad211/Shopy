import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useShop } from '../Context/Context';

const Buynow = () => {
  const { cartItems, removeFromCart, cartTotal } = useShop();

  return (
    <div className="container mx-auto p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-xl">No Products</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.images[0] || 'https://via.placeholder.com/50'}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600">
                    ${product.price} x {product.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">Total</h3>
            <p className="text-2xl font-semibold text-teal-600">${cartTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buynow;
