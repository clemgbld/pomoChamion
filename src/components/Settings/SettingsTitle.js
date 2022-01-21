import classes from "./SettingsTitle.module.css";

const SettingsTitle = ({ text }) => {
  return <h3 className={classes.title}>{text}</h3>;
};

export default SettingsTitle;
