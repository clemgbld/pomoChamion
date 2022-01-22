import { useSelector } from "react-redux";
import classes from "./PomodoroText.module.css";

const PomodoroText = ({ text }) => {
  const authName = useSelector((state) => state.auth.isAuth);

  return <p className={classes.text}>{`${text} ${authName}`}</p>;
};

export default PomodoroText;
