import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { reviews } from "../assets/Data";
import { bgimg } from "../assets/Data";
const Reviews = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 2));
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <h2 className="relative text-white text-3xl font-bold mb-6 z-10">
                Why others choose us?
            </h2>

            <div className="relative overflow-hidden w-full max-w-5xl z-10">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, i) => (
                        <div key={i} className="min-w-full flex justify-center gap-6">
                            {reviews.slice(i * 2, i * 2 + 2).map((review) => (

                                <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">

                                    <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-3" />

                                    <h3 className="text-lg font-semibold">{review.name}</h3>
                                    <div className="flex justify-center text-yellow-400 mb-2">
                                        {Array(review.rating).fill().map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic">"{review.review}"</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
