import classes from "./InfoContainer.module.css";
import Wrapper from "../UI/Wrapper";
import InfoTitle from "./InfoTitle";
import InfoList from "./InfoList";

const InfoContainer = () => {
  return (
    <Wrapper text="About PomoChampion">
      <div className={classes.container}>
        <InfoTitle title="What is PomoChampion?" />
        <p className={classes.text}>
          PomoChampion is a customizable pomodoro timer that works on desktop &
          mobile browser. The aim of this app is to help you focus on any task
          you are working on, such as study, writing, or coding. This app is
          inspired by{" "}
          <a
            className={classes.link}
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            target="_blank"
          >
            Pomodoro Technique
          </a>{" "}
          which is a time management method developed by{" "}
          <a
            className={classes.link}
            href="https://francescocirillo.com/"
            target="_blank"
          >
            Francesco Cirillo
          </a>
          .
        </p>
        <InfoTitle title="How to use PomoChampion?" />
        <InfoList />
      </div>
    </Wrapper>
  );
};

export default InfoContainer;
