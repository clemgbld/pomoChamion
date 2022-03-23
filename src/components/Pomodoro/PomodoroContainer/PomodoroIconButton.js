import classes from "./PomodoroIconButton.module.css";

import { onKeyDown } from "../../../helpers/onKeyDown";

const PomodoroIconButton = ({ name, play }) => {
  const playHandler = () => {
    play();
  };

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={(e) => onKeyDown(e, playHandler)}
      onClick={playHandler}
      className={classes.icon}
    >
      <ion-icon name={name}></ion-icon>
    </div>
  );
};

export default PomodoroIconButton;
