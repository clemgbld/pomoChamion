import { useState, useEffect, useCallback } from "react";
import classes from "./PomodoroContainer.module.css";
import ProgressBar from "../Progressbar/ProgressBar";
import { useAnimation } from "framer-motion";
import { play } from "../../../sounds/sound";

import PomodoroInfo from "./PomodoroInfo";
import { setExactTimeout } from "../../../helpers/accurate-timer";
import * as workerTimers from "worker-timers";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { settingsActions } from "../../../store/settings";
import PomodoroButtonContainer from "./PomodoroButtonContainer";
import PomodoroTimer from "./PomodoroTimer";
import restartMinutes from "../../../helpers/restart-minutes";

const click = "https://www.fesliyanstudios.com/play-mp3/387";
const alarm = "https://www.fesliyanstudios.com/play-mp3/4387";

let circleColor;

const PomodoroContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const locationPath = location.pathname;
  const dispatch = useDispatch();

  const {
    pomodoro,
    shortBreak,
    longBreak,
    iterations,
    longBreakInterval,
    circlePomodoro,
    circleShort,
    circleLong,
    autoStartBreak,
    autoStartPomodoro,
    workTime,
  } = useSelector((state) => state.settings);

  //handle when the user leave the page

  const [pageInView, setPageInView] = useState(true);

  document.onvisibilitychange = function () {
    if (document.visibilityState === "visible") {
      if (!pageInView) {
        setPageInView(true);
      }
    } else {
      setPageInView(false);
    }
  };

  const controls = useAnimation();

  const restartCircularAnimaton = useCallback(async () => {
    return await controls.start({
      pathLength: 0,
      transition: {
        duration: 0.3,
      },
    });
  }, [controls]);

  const [minutes, setMinutes] = useState(pomodoro);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  const initParameters = useCallback(async () => {
    if (locationPath === "/") {
      setMinutes(pomodoro);

      circleColor = circlePomodoro;
    }

    if (locationPath === "/short") {
      setMinutes(shortBreak);

      circleColor = circleShort;
    }

    if (locationPath === "/long") {
      setMinutes(longBreak);

      circleColor = circleLong;
    }

    setSeconds(0);

    await restartCircularAnimaton();
    setStart(false);

    if (
      (locationPath === "/short" && autoStartBreak) ||
      (locationPath === "/long" && autoStartBreak) ||
      (locationPath === "/" && autoStartPomodoro)
    ) {
      setStart(true);
    }
  }, [
    locationPath,
    circleLong,
    circlePomodoro,
    circleShort,
    pomodoro,
    shortBreak,
    longBreak,
    restartCircularAnimaton,
    autoStartPomodoro,
    autoStartBreak,
  ]);

  useEffect(() => {
    initParameters();
  }, [initParameters]);

  const animationValue = minutes * 60 + seconds;

  const progrmaticNavigation = useCallback(() => {
    if (iterations % longBreakInterval === 0 && locationPath === "/") {
      return history.push("/long");
    }

    if (locationPath === "/") {
      return history.push("/short");
    }

    history.push("/");
  }, [iterations, longBreakInterval, locationPath, history]);

  const timerFn = useCallback(() => {
    if (seconds === 0) {
      if (minutes !== 0) {
        setSeconds(59);
        setMinutes((prevState) => prevState - 1);
      } else {
        play(alarm);
        setStart(false);
        if (locationPath === "/") {
          dispatch(settingsActions.updateWorkTime(iterations));
          dispatch(settingsActions.incrementIterations());
        }

        progrmaticNavigation();
      }
    } else {
      setSeconds((prevState) => prevState - 1);
    }
  }, [
    seconds,
    minutes,
    dispatch,
    locationPath,
    progrmaticNavigation,
    iterations,
  ]);

  //   Handle the timer

  useEffect(() => {
    if (start) {
      if (!window.Worker) {
        alert(
          "Your Browser is outdated please update it if you don't want any timer related bug"
        );
        let timer = setExactTimeout(timerFn, 1000, 20);

        return () => clearInterval(timer);
      } else {
        let interval = workerTimers.setInterval(() => {
          // do something many times
          timerFn();
        }, 1000);

        return () => workerTimers.clearInterval(interval);
      }
    }
  }, [seconds, minutes, start, timerFn]);

  //   handle the progressive circle bar

  useEffect(() => {
    if (start) {
      if (pageInView || !pageInView || locationPath) {
        // do something many times
        controls.start((i) => ({
          pathLength: 1,
          transition: {
            duration: i,
          },
        }));
      }
    }
  }, [start, pageInView, controls, locationPath]);

  //   handle start pause

  const toggleTimer = () => {
    setStart((prevState) => !prevState);
    play(click);
  };

  //   handle restart

  const restartHandler = async () => {
    play(click);
    await restartCircularAnimaton();

    setStart(false);

    restartMinutes(locationPath, setMinutes, pomodoro, shortBreak, longBreak);
    setSeconds(0);
  };

  //   handle go to the next pomodoro

  const nextHandler = () => {
    play(alarm);

    setSeconds(0);
    setMinutes(0);
    if (locationPath === "/") {
      dispatch(settingsActions.updateWorkTime(iterations));
      dispatch(settingsActions.incrementIterations());
    }

    progrmaticNavigation();
  };

  return (
    <div className={classes.container}>
      <ProgressBar
        color={circleColor}
        controls={controls}
        animationValue={animationValue}
      />

      <PomodoroTimer
        locationPath={locationPath}
        minutes={minutes}
        seconds={seconds}
      />

      <PomodoroButtonContainer
        restartHandler={restartHandler}
        nextHandler={nextHandler}
        toggleTimer={toggleTimer}
        start={start}
        namePlayBack={"play-back-outline"}
        namePlayForward={"play-forward-outline"}
      />
      <div className={classes.info}>
        <PomodoroInfo data={iterations} emoji="🍅" />
        <PomodoroInfo data={workTime} emoji="💼" />
      </div>
    </div>
  );
};

export default PomodoroContainer;
