import ColorLeft from "../Color/ColorLeft";
import ColorRight from "../Color/ColorRight";
import ColorTop from "../Color/ColorTop";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <ColorTop top="-35rem" width="100%" height="90%" color={props.color1} />
      <ColorLeft
        bottom="-15rem"
        left="10rem"
        width="100%"
        height="80%"
        color={props.color2}
      />
      <ColorRight
        bottom="50rem"
        right="100rem"
        width="80%"
        height="80%"
        color={props.color3}
      />
      {props.children}
    </div>
  );
};

export default Layout;
