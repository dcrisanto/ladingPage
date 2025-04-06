import React from "react";
import { Icon } from "../interfaces/general";

export default function RightIcon({
  width = 20,
  height = 11,
  color = "white",
}: Icon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1063_26)">
        <path
          d="M19.4645 5.50861L14.5068 10.4662H10.2951L13.7927 6.97104H0.452881V4.04618H13.7927L10.2951 0.551758H14.5068L19.4645 5.50861Z"
          fill={color}
        />
        <path
          d="M14.5894 10.6642H9.81607L13.3137 7.169H0.254272V3.84775H13.3129L9.81527 0.352539H14.5886L19.7449 5.50798L14.5886 10.6634L14.5894 10.6642ZM10.7749 10.267H14.425L19.184 5.50798L14.425 0.749723H10.7749L14.2725 4.24494H0.651456V6.77261H14.2725L10.7749 10.2678V10.267Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1063_26">
          <rect
            width="19.4914"
            height="10.3117"
            fill={color}
            transform="translate(0.254272 0.352539)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
