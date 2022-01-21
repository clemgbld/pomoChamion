import classes from "./PomodoroToggle.module.css";

const PomodoroToggle = ({ start, toggleTimer }) => {
  const pomodoroToggleHandler = () => {
    toggleTimer();
  };

  const btnClasses = `${classes.button} ${
    start ? classes.stop : classes.start
  } `;

  return (
    <button className={btnClasses} onClick={pomodoroToggleHandler}>
      {start ? "Stop" : "Start"}
    </button>
  );
};

export default PomodoroToggle;
