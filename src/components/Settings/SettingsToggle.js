import { AnimatedDiv } from "../Animations/animations";
import classes from "./SettingsToggle.module.css";

import { onKeyDown } from "../../helpers/onKeyDown";

const SettingsToggle = ({ active, onToggle }) => {
  const toggleActiveHandler = () => {
    onToggle();
  };

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={(e) => onKeyDown(e, toggleActiveHandler)}
      onClick={toggleActiveHandler}
      className={`${classes.container} ${active ? classes.active : ""}`}
    >
      <AnimatedDiv layout className={classes.circle} />
    </div>
  );
};

export default SettingsToggle;
