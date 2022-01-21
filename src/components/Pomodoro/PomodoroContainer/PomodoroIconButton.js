import classes from "./PomodoroIconButton.module.css";

const PomodoroIconButton = ({ name, play }) => {
  const playHandler = () => {
    play();
  };

  return (
    <div onClick={playHandler} className={classes.icon}>
      <ion-icon name={name}></ion-icon>
    </div>
  );
};

export default PomodoroIconButton;
