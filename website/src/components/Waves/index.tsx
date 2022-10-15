import styles from "./Waves.module.css";

interface wavesProps {
  flip?: boolean;
  top?: boolean;
}

export const Waves = (props: wavesProps) => {
  console.log(props);
  console.log(props.top);
  let classes =  '';
  if (props.top) {
    classes += 'top-0 '
  }else {
    classes += 'bottom-0 '
  }

  if (props.flip) {
    classes += 'rotate-180'
  }else {
    classes += 'rotate-0'
  }

  // classes = props.flip  ? "rotate-180 " : '';
  // classes += " " + props.top ? "top-0" : "bottom-0";
console.log(classes);

  return (
    <svg
      className={
        styles.waves +
        " h-full w-full " + classes
      }
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className={styles.parallax}>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(13, 13, 13, 0.7)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(13 , 13, 13, 0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(13, 13, 13, 0.3)"
        />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0D0D0D" />
      </g>
    </svg>
  );
};
