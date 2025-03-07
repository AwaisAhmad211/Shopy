import React from "react";
import { beautyProducts } from "../assets/Data";


const Product = () => {

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                    Beauty Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {beautyProducts.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-white shadow-md p-4 rounded-lg transition-transform transform hover:scale-110 duration-[900ms] ease-out"
                        >
                            {/* Product Image with Smooth Hover Effect */}
                            <div className="relative w-full h-60 overflow-hidden rounded-md">
                                <img
                                    src={product.image1}
                                    alt={product.name}
                                    className="absolute w-full h-full object-cover transition-opacity duration-200 ease-in hover:opacity-0 scale-100 hover:scale-105"
                                />
                                <img
                                    src={product.image2}
                                    alt={product.name}
                                    className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-200 ease-in hover:opacity-100 scale-100 hover:scale-105"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="mt-4 text-center">
                                <p className="text-gray-500 text-sm">{product.category}</p>
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-teal-600 font-bold">{product.price}</p>
                                
                                <button  onClick={() => { setSelectedCategory(category); setIsCategoryOpen(false); }} className="mt-3 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
