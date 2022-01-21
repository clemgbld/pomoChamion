import classes from "./PomodoroInfo.module.css";

const PomodoroInfo = ({ data, emoji }) => {
  return (
    <div className={classes.container}>
      <div>
        <p>{emoji}</p>
      </div>

      <p>{data}</p>
    </div>
  );
};

export default PomodoroInfo;
