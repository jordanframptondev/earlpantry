import React from "react";

const TomatoPlant = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <path
          d="M150 380 L150 150"
          stroke="#5D4037"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Branches */}
        <path
          d="M150 260 C120 230 90 240 70 220"
          stroke="#5D4037"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 220 C180 200 190 180 220 170"
          stroke="#5D4037"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 180 C120 160 100 150 80 150"
          stroke="#5D4037"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 300 C180 280 200 290 230 280"
          stroke="#5D4037"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Leaves */}
        <path
          d="M80 150 C60 130 50 150 60 170 C80 180 100 160 80 150"
          fill="#558B2F"
        />
        <path
          d="M70 220 C50 210 40 230 50 245 C65 255 85 235 70 220"
          fill="#558B2F"
        />
        <path
          d="M230 280 C250 270 260 290 250 310 C230 320 210 300 230 280"
          fill="#558B2F"
        />
        <path
          d="M220 170 C240 150 260 160 265 180 C255 200 225 190 220 170"
          fill="#558B2F"
        />

        {/* Additional foliage */}
        <ellipse cx="120" cy="190" rx="20" ry="15" fill="#7CB342" opacity="0.7" />
        <ellipse cx="180" cy="240" rx="25" ry="18" fill="#7CB342" opacity="0.7" />
        <ellipse cx="130" cy="280" rx="22" ry="16" fill="#7CB342" opacity="0.7" />
        <ellipse cx="170" cy="190" rx="18" ry="14" fill="#7CB342" opacity="0.7" />
      </svg>
    </div>
  );
};

export default TomatoPlant;
