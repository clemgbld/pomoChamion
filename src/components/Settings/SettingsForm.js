import { useState } from "react";
import classes from "./SettingsForm.module.css";
import useInput from "../../hooks/use-input";
import SettingsTitle from "./SettingsTitle";
import { useSelector, useDispatch } from "react-redux";
import { settingsActions } from "../../store/settings";
import SettingsToggle from "./SettingsToggle";
import Wrapper from "../UI/Wrapper";

const SettingsForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    pomodoro,
    shortBreak,
    longBreak,
    longBreakInterval,
    autoStartBreak,
    autoStartPomodoro,
    darkModeSettings,
  } = useSelector((state) => state.settings);

  const [autoBreak, setAutoBreak] = useState(autoStartBreak);
  const [autoWork, setAutoWork] = useState(autoStartPomodoro);
  const [darkMode, setDarkMode] = useState(darkModeSettings);

  const ToggleAutoStartBreakHandler = () => {
    setAutoBreak((prevState) => !prevState);
  };

  const ToggleAutoStartPomodoroHandler = () => {
    setAutoWork((prevState) => !prevState);
  };

  const ToggleDarkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  const { inputRef: pomodoroRef } = useInput();
  const { inputRef: shortBreakRef } = useInput();
  const { inputRef: longBreakRef } = useInput();
  const { inputRef: longBreakIntervalRef } = useInput();

  const submitHandler = (e) => {
    e.preventDefault();

    const newTimeSettings = {
      pomodoro: +pomodoroRef.current.value,
      shortBreak: +shortBreakRef.current.value,
      longBreak: +longBreakRef.current.value,
      longBreakInterval: +longBreakIntervalRef.current.value,
      autoBreak: autoBreak,
      autoWork: autoWork,
      darkMode: darkMode,
    };

    dispatch(settingsActions.modifyTimeSettings(newTimeSettings));

    if (!darkMode) {
      document.querySelector("html").style.background = "#868e96";
    } else {
      document.querySelector("html").style.background = "#000";
    }

    onClose();
  };

  return (
    <Wrapper text="Timer Settings">
      <form className={classes.form} onSubmit={submitHandler}>
        <SettingsTitle text="Time (minutes)" />
        <div className={classes.container}>
          <div className={classes["form-control"]}>
            <label htmlFor="pomodoro">Pomodoro</label>
            <input
              ref={pomodoroRef}
              defaultValue={pomodoro}
              type="number"
              min={1}
              name="pomodoro"
              required
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="short break">Short Break</label>
            <input
              ref={shortBreakRef}
              defaultValue={shortBreak}
              type="number"
              min={1}
              name="short break"
              required
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="long break">Long Break</label>
            <input
              ref={longBreakRef}
              defaultValue={longBreak}
              type="number"
              min={1}
              name="long break"
              required
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="interval">Interval</label>
            <input
              ref={longBreakIntervalRef}
              defaultValue={longBreakInterval}
              type="number"
              min={1}
              name="interval"
              required
            />
          </div>
        </div>

        <div className={classes["toggle-section"]}>
          <SettingsTitle text="Auto start Breaks ?" />
          <SettingsToggle
            onToggle={ToggleAutoStartBreakHandler}
            active={autoBreak}
          />
        </div>
        <div className={classes["toggle-section"]}>
          <SettingsTitle text="Auto start Pomdoros ?" />
          <SettingsToggle
            onToggle={ToggleAutoStartPomodoroHandler}
            active={autoWork}
          />
        </div>
        <div className={classes["toggle-section"]}>
          <SettingsTitle text="Dark mode ?" />
          <SettingsToggle onToggle={ToggleDarkModeHandler} active={darkMode} />
        </div>

        <button className={classes.button} type="submit">
          Apply
        </button>
      </form>
    </Wrapper>
  );
};

export default SettingsForm;
