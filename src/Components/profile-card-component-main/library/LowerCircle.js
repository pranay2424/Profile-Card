import React from "react";
import LowerCircleStyle from "./LowerCircleStyle";
const LowerCircle = () => {
  return (
    <LowerCircleStyle>
      <svg width="920" height="920" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a">
            <stop stopColor="#0989B4" stopOpacity="0" offset="0%" />
            <stop stopColor="#53FFEE" offset="99.94%" />
          </linearGradient>
        </defs>
        <ellipse
          fill="url(#a)"
          transform="scale(1 -1) rotate(45 1669.55 0)"
          cx="356"
          cy="350"
          rx="489"
          ry="488"
          fillRule="evenodd"
          opacity=".25"
        />
      </svg>
    </LowerCircleStyle>
  );
};

export default LowerCircle;
