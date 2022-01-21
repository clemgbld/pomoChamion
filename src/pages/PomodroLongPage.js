import Layout from "../components/Layout/Layout";
import Pomodoro from "../components/Pomodoro/Pomodoro";
import "./PomodoroPage.css";

const color1 = "#345b9e";
const color2 = "#4d6fa0";
const color3 = "#6a7fa3";

const text = "Time to take a long break";

const PomodoroLongPage = () => {
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

export default PomodoroLongPage;
