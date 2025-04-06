import React from "react";
import { Icon } from "../interfaces/general";

export default function Phone({
  width = 32,
  height = 32,
  color = "white",
}: Icon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_77_263)">
        <path
          d="M31.9998 10.7466C31.949 10.902 31.8913 11.0551 31.8499 11.2121C31.4727 12.652 30.5497 13.3798 29.0543 13.39C27.8041 13.3985 26.5539 13.4056 25.3037 13.3845C23.3788 13.3525 22.2043 11.8313 22.6768 9.95639C22.7853 9.52534 22.715 9.33871 22.3027 9.1591C18.0828 7.31699 13.8715 7.28888 9.64767 9.14505C9.29237 9.30123 9.20179 9.46287 9.29471 9.84863C9.7812 11.8797 8.60597 13.3525 6.50928 13.3657C5.42619 13.3728 4.34232 13.3657 3.25845 13.3657C1.17114 13.3634 0.0583701 12.2951 0.00136532 10.1922C-0.0556395 8.0643 0.99075 6.44474 2.50802 5.09849C4.75697 3.10254 7.44557 1.95776 10.3349 1.27058C15.862 -0.0420967 21.2095 0.479536 26.322 2.99634C27.9571 3.80143 29.5103 4.79004 30.5606 6.31355C31.1721 7.20064 31.5289 8.26265 31.9998 9.24578V10.7459V10.7466ZM27.2239 11.4916V11.4947C27.8072 11.4947 28.3913 11.4791 28.9739 11.4986C29.6142 11.5205 29.9094 11.2222 30.0109 10.5983C30.2506 9.13256 29.6126 7.99636 28.6701 6.99995C27.2676 5.51704 25.5091 4.57061 23.6185 3.87015C20.0108 2.53327 16.2946 2.14283 12.4956 2.77457C9.39935 3.28917 6.47727 4.26606 4.01747 6.31667C2.9008 7.24749 2.03792 8.33917 1.92547 9.86893C1.85675 10.8122 2.13319 11.4112 2.76493 11.4331C4.09634 11.4791 5.43166 11.4768 6.76307 11.4385C7.35342 11.4221 7.59316 11.0364 7.48071 10.4413C7.41121 10.0743 7.30111 9.71432 7.21286 9.35042C7.0192 8.55626 7.13634 8.25874 7.87428 7.88782C9.61253 7.01479 11.4289 6.38383 13.3585 6.06991C17.2106 5.44364 20.8027 6.24327 24.2347 7.97918C24.8047 8.26733 24.9867 8.71868 24.8047 9.33012C24.6977 9.68855 24.5962 10.0501 24.5173 10.4156C24.3705 11.0949 24.6509 11.4643 25.3466 11.4869C25.9714 11.5072 26.5968 11.4916 27.2216 11.4916H27.2239Z"
          fill={color}
        />
        <path
          d="M12.5668 14.0591C12.5668 13.5757 12.5434 13.1821 12.5723 12.7932C12.6184 12.1779 12.9721 11.8288 13.5047 11.8257C14.0287 11.8218 14.4113 12.1787 14.4644 12.7776C14.4988 13.1673 14.4706 13.5624 14.4706 14.0075H17.5145C17.5145 13.6507 17.5005 13.2836 17.5177 12.9174C17.5497 12.2326 17.9097 11.8304 18.4727 11.8257C19.0459 11.821 19.3941 12.2037 19.4293 12.9034C19.4472 13.254 19.4324 13.6062 19.4324 14.0598C19.9985 14.0598 20.5108 14.0723 21.0215 14.0567C21.5338 14.0411 21.9398 14.2098 22.2897 14.5979C23.5438 15.9894 24.9033 17.2966 26.0606 18.7639C27.7871 20.9527 28.5969 23.5164 28.6367 26.3089C28.6555 27.6215 28.6531 28.9342 28.6461 30.2469C28.6414 31.0926 28.3252 31.4213 27.474 31.4221C19.8275 31.4284 12.1811 31.4284 4.53463 31.4221C3.67409 31.4221 3.33909 31.098 3.35002 30.2617C3.37267 28.4516 3.32035 26.6314 3.49058 24.8338C3.76467 21.9351 5.07734 19.4776 7.06783 17.3732C7.89791 16.4954 8.75845 15.6443 9.55886 14.7392C10.0165 14.2223 10.5342 14.0052 11.2073 14.0536C11.6188 14.0833 12.0351 14.0591 12.5684 14.0591H12.5668ZM5.26866 29.4683H26.7321C26.7321 28.2783 26.7743 27.1327 26.7228 25.9918C26.6267 23.8647 26.0278 21.8664 24.7229 20.1773C23.7085 18.8639 22.5083 17.6941 21.4112 16.4423C21.1113 16.1003 20.7982 15.9637 20.3367 15.9691C18.1916 15.9949 16.0457 15.9769 13.8998 15.9824C12.9432 15.9847 11.8734 15.7411 11.0621 16.0902C10.2499 16.44 9.69786 17.3919 9.02864 18.0767C7.976 19.1536 7.03737 20.3054 6.35644 21.6673C5.12029 24.138 5.18823 26.7758 5.26788 29.4683H5.26866Z"
          fill={color}
        />
        <path
          d="M15.9832 27.9278C13.2321 27.9138 10.9582 25.618 11.0019 22.8997C11.0457 20.1611 13.2868 17.9512 16.0098 17.9629C18.7655 17.9747 21.0324 20.2619 20.9903 22.988C20.9481 25.7226 18.6991 27.9419 15.984 27.9278H15.9832ZM15.9692 19.8675C14.2926 19.8785 12.9104 21.2637 12.9065 22.938C12.9026 24.638 14.3074 26.0256 16.0215 26.0139C17.7012 26.003 19.0818 24.6223 19.0872 22.9473C19.0927 21.2567 17.6754 19.8566 15.9692 19.8675Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_77_263">
          <rect
            width="32"
            height="30.8521"
            fill={color}
            transform="translate(0 0.573242)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
