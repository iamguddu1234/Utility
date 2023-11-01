import classes from "./UserDetails.module.css";

import User from "./User";
import TopDetailsBar from "./TopDetailsBar";
import TopMonthBar from "./TopMonthBar";
import SingleUser from "./SingleUser";

import Images from "./p2.jpg";

function UserDetails() {
  return (
    <div className={classes.parentbox}>
      <div className={classes.subParentContainer}>
        <div className={classes.mainContainer}>
          <div className={classes.leftsideContainer}>
            <div className={classes.detailsContainer}>
              <img src={Images} className={classes.profilePic}></img>
              <div className={classes.userName}>Sachin Ramesh Tendulkar</div>
            </div>
          </div>

          <div className={classes.rightsideContainer}>
            <div className={classes.block1}>
              <div className={classes.totalPresent}>Total Present Days : </div>
              <div className={classes.totalPresentDays}>100</div>
            </div>

            <div className={classes.block2}>
              <div className={classes.totalAbsent}>Total Absent Days : </div>
              <div className={classes.totalAbsentDays}>100</div>
            </div>

            <div className={classes.block3}>
              <div className={classes.total}>Total Days : </div>
              <div className={classes.totalDays}>200</div>
            </div>
          </div>
        </div>

        <div className={classes.parentDetailsBox}>
          <TopMonthBar />
          <TopDetailsBar />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
