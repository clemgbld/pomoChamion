import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes["loader-inner"]}>
        <div className={classes["loader-inner"]}></div>
      </div>
    </div>
  );
};

export default Loader;
