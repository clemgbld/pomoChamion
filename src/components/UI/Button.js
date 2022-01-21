import classes from "./Button.module.css";
import { AnimatedButton } from "../Animations/animations";

const buttonVariants = {
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

const Button = ({ onClickButton, iconName, textButton, right }) => {
  return (
    <AnimatedButton
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      onClick={onClickButton}
      className={`${classes.button}`}
      style={{ right: right }}
    >
      <div className={classes.logo}>
        <ion-icon name={`${iconName}`}></ion-icon>
      </div>
      <p>{textButton}</p>
    </AnimatedButton>
  );
};

export default Button;
