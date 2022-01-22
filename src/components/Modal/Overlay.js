import classes from "./Overlay.module.css";

const Overlay = ({ onClose }) => {
  return <div onClick={onClose} className={classes.overlay} />;
};

export default Overlay;
