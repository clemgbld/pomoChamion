import classes from "./MainLogo.module.css";
import { AnimatedDiv } from "../../Animations/animations";

const divVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.6,
    },
  },
};

const MainLogo = () => {
  return (
    <AnimatedDiv
      variants={divVariants}
      initial="initial"
      animate="animate"
      className={classes.container}
    >
      <div className={classes.logo}>
        <ion-icon name="timer-outline"></ion-icon>
      </div>
      <p className={classes.text}>PomoChampion</p>
    </AnimatedDiv>
  );
};

export default MainLogo;
