import classes from "./InfoTitle.module.css";


const InfoTitle = ({ title }) => {
  return <h2 className={classes.title}>{title}</h2>;
};

export default InfoTitle;
