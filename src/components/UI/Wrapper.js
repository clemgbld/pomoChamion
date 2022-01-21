import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.text}</h2>
      {props.children}
    </div>
  );
};

export default Wrapper;
