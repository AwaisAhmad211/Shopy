import React from 'react';
import { cards } from '../assets/Data';

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center  pt-3 bg-gray-100">
      {cards.map((card) => (
        <div key={card.id} className="flex justify-center item-center w-full h-full sm:w-1/2 md:w-1/4 p-3">
          <img 
            src={card.imag} 
            alt="card" 
            className="w-70 h-96  hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
