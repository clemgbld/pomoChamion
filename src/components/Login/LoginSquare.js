import classes from "./LoginSquare.module.css";
import { AnimatedDiv } from "../Animations/animations";

const divVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.3,
      delay: 1.7,
    },
  },
};

const LoginSquare = ({ square, text }) => {
  return (
    <div className={`${classes.square} ${square} absolute`}>
      {text && (
        <AnimatedDiv
          variants={divVariants}
          initial="initial"
          animate="animate"
          className={classes.text}
        >
          <p>
            Plan your work
            <br />
            and stay productive
          </p>
        </AnimatedDiv>
      )}
    </div>
  );
};

export default LoginSquare;
