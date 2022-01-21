import classes from "./PomodoroButtonContainer.module.css";
import PomodoroIconButton from "./PomodoroIconButton";
import PomodoroToggle from "./PomodoroToggle";

const PomodoroButtonContainer = ({
  restartHandler,
  nextHandler,
  toggleTimer,
  namePlayBack,
  namePlayForward,
  start,
}) => {
  return (
    <div className={classes["button-container"]}>
      <PomodoroIconButton play={restartHandler} name={namePlayBack} />
      <PomodoroToggle toggleTimer={toggleTimer} start={start} />
      <PomodoroIconButton play={nextHandler} name={namePlayForward} />
    </div>
  );
};

export default PomodoroButtonContainer;
