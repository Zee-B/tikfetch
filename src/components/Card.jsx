import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-md 
                  border-2 border-transparent 
                  hover:border-pink-500 hover:shadow-xl 
                  transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
