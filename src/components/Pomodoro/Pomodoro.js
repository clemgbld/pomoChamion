import PomodoroText from "./PomodoroText";
import PomodoroNav from "./PomodoroNav";
import PomodoroContainer from "./PomodoroContainer/PomodoroContainer";
import SettingsButton from "../Settings/SettingsButton";

const Pomodoro = ({ text }) => {
  return (
    <>
      <PomodoroText text={text} />
      <PomodoroNav />
      <PomodoroContainer />
      <SettingsButton />
    </>
  );
};

export default Pomodoro;
