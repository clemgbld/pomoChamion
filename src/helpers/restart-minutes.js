const restartMinutes = (
  locationPath,
  setMinutes,
  pomodoro,
  shortBreak,
  longBreak
) => {
  if (locationPath === "/") {
    setMinutes(pomodoro);
  }

  if (locationPath === "/short") {
    setMinutes(shortBreak);
  }

  if (locationPath === "/long") {
    setMinutes(longBreak);
  }
};

export default restartMinutes;
