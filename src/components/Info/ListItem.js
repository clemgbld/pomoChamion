import classes from "./ListItem.module.css";

const ListItem = ({ text }) => {
  return (
    <li className={classes.container}>
      <div className={classes.point}>
        <ion-icon name="list-circle-outline"></ion-icon>
      </div>
      <p className={classes.text}>{text}</p>
    </li>
  );
};

export default ListItem;
