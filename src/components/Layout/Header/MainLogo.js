import classes from "./MainLogo.module.css";

const MainLogo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <ion-icon name="timer-outline"></ion-icon>
      </div>
      <p className={classes.text}>PomoChampion</p>
    </div>
  );
};

export default MainLogo;
