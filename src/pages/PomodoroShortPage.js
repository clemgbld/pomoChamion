import Layout from "../components/Layout/Layout";
import Pomodoro from "../components/Pomodoro/Pomodoro";
import "./PomodoroPage.css";

const color1 = "#5a8c2e";
const color2 = "#4e6a1c";
const color3 = "#96a26a";

const text = "Time to take a short break";

const PomodoroShortPage = () => {
  return (
    <div>
      <Layout color1={color1} color2={color2} color3={color3}>
        <section className="pomodoro-page">
          <Pomodoro text={text} />
        </section>
      </Layout>
    </div>
  );
};

export default PomodoroShortPage;
