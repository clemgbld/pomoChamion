import classes from "./PomodoroTimer.module.css";

const PomodoroTimer = ({ locationPath, minutes, seconds }) => {
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const favicon = document.getElementById("favicon");

  if (locationPath === "/") {
    favicon.href = "favIcon-pomodoro.png";
  }

  if (locationPath === "/short") {
    favicon.href = "favIcon-short.png";
  }

  if (locationPath === "/long") {
    favicon.href = "favIcon-long.png";
  }

  document.title = `${timerMinutes}:${timerSeconds}`;

  return (
    <div className={classes.timer}>
      {timerMinutes}:{timerSeconds}
    </div>
  );
};

export default PomodoroTimer;
