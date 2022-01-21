import classes from "./PomodoroNav.module.css";
import { NavLink } from "react-router-dom";

const PomodoroNav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={classes.active}>
            Pomodoro
          </NavLink>
        </li>
        <li>
          <NavLink to="/short" activeClassName={classes.active}>
            Short Break
          </NavLink>
        </li>
        <li>
          <NavLink to="/long" activeClassName={classes.active}>
            Long Break
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PomodoroNav;
