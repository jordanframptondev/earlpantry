import React from "react";

const Basket = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 250 200" xmlns="http://www.w3.org/2000/svg">
        {/* Basket Body - slightly wobbly to look hand-drawn */}
        <path
          d="M40 80 C45 85, 55 175, 65 160 C85 185, 165 185, 185 160 C195 175, 205 85, 210 80"
          stroke="#8B4513"
          strokeWidth="6"
          strokeLinecap="round"
          fill="#DEB887"
        />

        {/* Basket Handle - uneven curve */}
        <path
          d="M55 80 C 90 20, 160 20, 195 80"
          stroke="#8B4513"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Simple basket weaving lines */}
        <path d="M60 110 L190 110" stroke="#A0522D" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 6"/>
        <path d="M65 130 L185 130" stroke="#A0522D" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8"/>
        <path d="M70 150 L180 150" stroke="#A0522D" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 6"/>

        {/* Vertical lines - deliberately imperfect */}
        <path d="M80 80 L90 165" stroke="#8B4513" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 9"/>
        <path d="M125 80 L125 170" stroke="#8B4513" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 7"/>
        <path d="M170 80 L160 165" stroke="#8B4513" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 9"/>
      </svg>
    </div>
  );
};

export default Basket;
