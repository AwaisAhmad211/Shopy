import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce  animation-delay-400"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce animation-delay-700"></div>
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce animation-delay-900"></div>
      </div>
    </div>
  );
};

export default Loader;