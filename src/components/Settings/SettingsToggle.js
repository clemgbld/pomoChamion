import { useState } from "react";
import { AnimatedDiv } from "../Animations/animations";
import classes from "./SettingsToggle.module.css";

const SettingsToggle = ({ active, onToggle }) => {
  const toggleActiveHandler = () => {
    onToggle();
  };

  return (
    <div
      onClick={toggleActiveHandler}
      className={`${classes.container} ${active ? classes.active : ""}`}
    >
      <AnimatedDiv layout className={classes.circle} />
    </div>
  );
};

export default SettingsToggle;
