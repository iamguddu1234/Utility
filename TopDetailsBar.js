import classes from "./TopDetailsBar.module.css";

function TopDetailsBar() {
  return (
    <div className={classes.mainData}>
      <div className={classes.nu}>#</div>
      <div className={classes.date}>Date</div>
      <div className={classes.inTime}>In Time</div>
      <div className={classes.outTime}>Out Time</div>
      <div className={classes.absent}>Absent/Present</div>
      <div className={classes.Edit}>Edit</div>

    </div>



  );
}
export default TopDetailsBar;
