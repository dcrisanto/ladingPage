import { Icon } from "../interfaces/general";

export default function WhatsAppIcon({
  width = 40,
  height = 40,
  color = "#FFFFFF",
}: Icon) {
    return(
      <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.492218 29.8054C0.655515 29.1713 0.79976 28.6188 0.946727 28.0663C1.43117 26.3 1.92651 24.5391 2.38646 22.7701C2.45178 22.5061 2.42456 22.155 2.29937 21.9182C-2.18585 13.3696 2.44361 3.02205 11.8522 0.814822C20.3981 -1.18829 28.0812 4.57881 29.4856 12.2946C30.9443 20.3397 25.6807 27.9847 17.6983 29.3809C14.5249 29.9279 11.4903 29.4625 8.59446 28.0555C8.33591 27.9275 7.97121 27.8922 7.69905 27.9575C3.8398 28.9264 1.2706 29.653 0.492218 29.8054ZM3.88607 26.4579C5.33941 26.0796 6.67572 25.7448 8.00115 25.3719C8.37673 25.2712 8.66522 25.3257 8.99726 25.5162C11.5066 26.9614 14.1955 27.503 17.0696 27.0403C23.6858 25.9789 28.2173 19.7872 27.2076 13.1982C26.157 6.36419 19.7504 1.78099 12.9817 3.02205C4.79237 4.5271 0.443229 13.6581 4.51748 20.8867C4.96927 21.6869 5.09174 22.3482 4.78965 23.2001C4.42767 24.2261 4.2045 25.2957 3.88879 26.4579H3.88607Z" fill={color}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9556 21.9843C16.1088 21.8836 11.5746 19.6355 8.47199 14.2413C7.36974 12.3253 7.52759 10.1398 9.14423 8.63749C9.69128 8.12854 10.3744 8.25102 11.0167 8.3626C11.1746 8.3871 11.3379 8.6266 11.4168 8.80623C11.8305 9.7479 12.2387 10.6896 12.598 11.653C12.7885 12.162 12.4374 12.641 11.7025 13.4901C11.4685 13.7568 11.4195 14.0072 11.6018 14.3175C12.7966 16.3397 14.465 17.8012 16.6613 18.6612C16.9825 18.7864 17.2247 18.7075 17.4288 18.4543C18.591 17.0337 18.7107 16.62 19.3231 16.9112C22.2679 18.3183 22.4965 18.3781 22.5101 18.7102C22.6108 21.1923 20.3355 22.085 18.9556 21.9843Z" fill={color}/>
      </svg>
    )
}
  


