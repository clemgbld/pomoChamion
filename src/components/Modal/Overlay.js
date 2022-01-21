import classes from "./Overlay.module.css";
import { AnimatedDiv } from "../Animations/animations";

const overlayVariants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const Overlay = ({ onClose }) => {
  return (
    <AnimatedDiv
      onClick={onClose}
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          delay: 0.3,
        },
      }}
      className={classes.overlay}
    />
  );
};

export default Overlay;
