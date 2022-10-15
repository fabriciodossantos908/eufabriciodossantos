import styles from "./downArrow.module.css";

export const DownArrow = ({ className = "" }) => {
  return (
    <svg
      width="70"
      height="92"
      viewBox="0 0 70 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"ml-auto mr-8" + className} 
    >
      <g id="down arrow" clip-path="url(#clip0_3_22)">
        <g id={styles.lineHead}>
          <path
            id="arrowHead"
            d="M63.1109 77.4232L50.9334 88.3365L39.7704 76.1467"
            stroke="#0D0D0D"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g id={styles.lineBody}>
          <path
            id="arrowBody"
            d="M12.1993 0.772461C11.6328 12.2585 11.9211 69.8426 24.281 70.4523C34.3937 70.9512 32.9544 46.851 44.9398 47.4422C54.4283 47.9103 51.9581 87.8371 51.9581 87.8371"
            stroke="#0D0D0D"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3_22">
          <rect
            width="64"
            height="88"
            fill="white"
            transform="translate(5.20667 0.476868) rotate(2.82403)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
