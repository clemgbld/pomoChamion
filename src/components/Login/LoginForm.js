import classes from "./LoginForm.module.css";
import "./Square.css";
import LoginSquare from "./LoginSquare";
import { SignInWithGoogle } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { AnimatedDiv } from "../Animations/animations";
import { AnimatedH2 } from "../Animations/animations";
import { AnimatedButton } from "../Animations/animations";
import MainLogo from "../Layout/Header/MainLogo";

const divVariants = {
  initial: {
    opacity: 0,
    y: "100px",
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

const h2Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.3,
      delay: 0.9,
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.3,
      delay: 1.2,
    },
  },
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const signInHandler = async () => {
    const name = await SignInWithGoogle();

    if (name) {
      dispatch(authActions.login(name));
    }
  };

  return (
    <AnimatedDiv
      variants={divVariants}
      initial="initial"
      animate="animate"
      className={classes.box}
    >
      <LoginSquare square="square-1" />
      <LoginSquare text={true} square="square-2" />
      <LoginSquare square="square-3" />
      <LoginSquare square="square-4" />
      <LoginSquare square="square-5" />
      <div className={classes.container}>
        <div className={classes.form}>
          <MainLogo />
          <AnimatedH2 variants={h2Variants} initial="initial" animate="animate">
            Login
          </AnimatedH2>
          <div>
            <AnimatedButton
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              onClick={signInHandler}
              className={classes.button}
            >
              Sign in with
              <div className={classes.google}>
                <ion-icon name="logo-google"></ion-icon>
              </div>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default LoginForm;
