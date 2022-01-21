import classes from "./Modal.module.css";
import Overlay from "./Overlay";
import ReactDom from "react-dom";
import { AnimatedDiv } from "../Animations/animations";
import { AnimatePresence } from "framer-motion";

const modalVariants = {
  initial: {
    opacity: 0,
    x: "-50%",
    y: "100vh",
  },

  animate: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const Modal = (props) => {
  const closeHandler = () => {
    props.onClose();
  };
  return ReactDom.createPortal(
    <>
      <AnimatePresence>
        {props.isOpen && <Overlay onClose={closeHandler} key="overlay" />}
      </AnimatePresence>
      <AnimatePresence>
        {props.isOpen && (
          <AnimatedDiv
            key="modal"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit={{
              opacity: 0,

              y: " 100vh",
              transition: {
                duration: 0.3,
              },
            }}
            className={classes.modal}
          >
            <div onClick={closeHandler} className={classes.close}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
            {props.children}
          </AnimatedDiv>
        )}
      </AnimatePresence>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
