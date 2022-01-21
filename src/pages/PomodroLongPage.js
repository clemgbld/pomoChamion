import Layout from "../components/Layout/Layout";
import Pomodoro from "../components/Pomodoro/Pomodoro";
import "./PomodoroPage.css";
import { pageVariants } from "../components/Animations/variants";
import { AnimatedDiv } from "../components/Animations/animations";

const color1 = "#345b9e";
const color2 = "#4d6fa0";
const color3 = "#6a7fa3";

const text = "Time to take a long break";

const PomodoroLongPage = () => {
  return (
    <AnimatedDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Layout color1={color1} color2={color2} color3={color3}>
        <section className="pomodoro-page">
          <Pomodoro text={text} />
        </section>
      </Layout>
    </AnimatedDiv>
  );
};

export default PomodoroLongPage;
