import classes from "./InfoList.module.css";
import ListItem from "./ListItem";

const InfoList = () => {
  return (
    <ul className={classes.list}>
      <ListItem text="Set estimate pomodoros (1 = 25min of work) for each tasks" />
      <ListItem text="Start timer and focus on the task for 25 minutes" />
      <ListItem text="Take a break for 5 minutes when the alarm ring" />
      <ListItem text="Iterate 3-5 until you finish the tasks" />
    </ul>
  );
};

export default InfoList;
