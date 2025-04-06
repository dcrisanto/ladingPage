import React from "react";
import { Icon } from "../interfaces/general";

export default function Star({ width = 114, height = 135 }: Icon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 114 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85.69 59.0301C59.88 61.5301 57.85 63.5601 55.34 89.3801C52.84 63.5701 50.81 61.5401 24.99 59.0301C50.8 56.5301 52.83 54.5001 55.34 28.6801C57.84 54.4901 59.87 56.5201 85.69 59.0301Z"
        fill="#1A3666"
      />
      <path
        d="M90.56 105.47C77.7 106.72 76.69 107.73 75.45 120.58C74.2 107.72 73.19 106.71 60.34 105.47C73.2 104.22 74.21 103.21 75.45 90.36C76.7 103.22 77.71 104.23 90.56 105.47Z"
        fill="#1A3666"
      />
    </svg>
  );
}
