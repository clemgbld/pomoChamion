import classes from "./Button.module.css";

const Button = ({ onClickButton, iconName, textButton, right }) => {
  return (
    <button
      onClick={onClickButton}
      className={`${classes.button}`}
      style={{ right: right }}
    >
      <div className={classes.logo}>
        <ion-icon name={`${iconName}`}></ion-icon>
      </div>
      <p>{textButton}</p>
    </button>
  );
};

export default Button;
