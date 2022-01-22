import classes from "./ProgressBar.module.css";
import { AnimatedPath } from "../../Animations/animations";

const ProgressBar = ({ controls, animationValue, color }) => {
  const pathVariants = {
    initial: {
      pathLength: 0,
    },
  };

  return (
    <svg
      className={classes.circle}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="350px"
      height="350px"
      viewBox="0 0 200 200"
      enableBackground="new 0 0 200 200"
      xmlSpace="preserve"
    >
      <AnimatedPath
        className="path"
        variants={pathVariants}
        initial="initial"
        custom={animationValue}
        animate={controls}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeMiterlimit="10"
        d="M100.416,2.001C154.35,2.225,198,46.015,198,100
      c0,54.124-43.876,98-98,98S2,154.124,2,100S45.876,2,100,2"
      />
      <AnimatedPath
        className="path"
        variants={pathVariants}
        initial="initial"
        custom={animationValue}
        animate={controls}
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="4"
        strokeMiterlimit="10"
        d="M100,2C100.139,2,100,2,100,2"
      />
    </svg>
  );
};

export default ProgressBar;
