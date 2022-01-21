import Layout from "../components/Layout/Layout";
import Pomodoro from "../components/Pomodoro/Pomodoro";
import "./PomodoroPage.css";
import { pageVariants } from "../components/Animations/variants";
import { AnimatedDiv } from "../components/Animations/animations";


const color1 = "#e03131";
const color2 = "#fa5252";
const color3 = "#ffa8a8";
const text = "Time to focus";


const PomodoroPage = () => {
  return (
    <AnimatedDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Layout color1={color1} color2={color2} color3={color3}>
        <section className="pomodoro-page">
          <Pomodoro  text={text} />
        </section>
      </Layout>
    </AnimatedDiv>
  );
};

export default PomodoroPage;
