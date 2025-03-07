import { useParams, useNavigate } from "react-router-dom";
import { products } from "../assets/Data";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useShop } from "../Context/Context";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Navigation ke liye
  const { addToCart } = useShop();
  const product = products.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  const handleBuyNow = () => {
    addToCart(product, quantity); // 🛒 Product ko cart mein add karein
    alert("Product added to cart!");
    navigate("/buynow"); // 👈 User ko BuyNow page pe bhejna
  };

  return (
    <div className="container mx-auto p-5 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 shadow-lg rounded-lg">
        <div>
          <img
            src={product?.images?.[selectedImage] || "https://via.placeholder.com/400"}
            alt={product?.name || "Product Image"}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
          <div className="flex gap-3 mt-4 overflow-x-auto py-2">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="product"
                className={`w-20 h-20 rounded-lg cursor-pointer border-2 transition duration-300 ${
                  selectedImage === index ? "border-teal-500" : "border-gray-300"
                }`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-teal-600 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6 text-2xl">{product.description}</p>
            <p className="text-2xl text-green-900 font-semibold mb-6">${totalPrice}</p>

            <div className="flex items-center gap-5 mb-6">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-teal-500 hover:text-white transition"
                onClick={decreaseQuantity}
              >
                <FiMinus />
              </button>
              <span className="text-2xl font-semibold">{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-teal-500 hover:text-white transition"
                onClick={increaseQuantity}
              >
                <FiPlus />
              </button>
            </div>
          </div>

          <button 
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-semibold text-lg"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
