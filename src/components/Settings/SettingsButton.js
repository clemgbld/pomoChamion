import classes from "./SettingsButton.module.css";
import { AnimatedDiv } from "../Animations/animations";
import Modal from "../Modal/Modal";
import React, { useState } from "react";
import SettingsForm from "./SettingsForm";
import { onKeyDown } from "../../helpers/onKeyDown";

const settingsVariants = {
  animate: {
    rotate: 360,
    transition: {
      ease: "linear",
      duration: 8,
      repeat: Infinity,
    },
  },

  hover: {
    color: "#868e96",
    transition: {
      duration: 0.3,
    },
  },
};

const SettingsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModalHandler} key="modal1">
        <SettingsForm onClose={closeModalHandler} />
      </Modal>

      <AnimatedDiv
        role="button"
        tabIndex="0"
        onClick={openModalHandler}
        onKeyDown={(e) => onKeyDown(e, openModalHandler)}
        variants={settingsVariants}
        animate="animate"
        whileHover="hover"
        className={classes["settings-button"]}
      >
        <ion-icon name="settings-outline"></ion-icon>
      </AnimatedDiv>
    </>
  );
};

export default SettingsButton;
