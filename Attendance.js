
import classes from "./Attendance.module.css";

import User from "./User";

function App() {
  return (
    <div className={classes.parentbox}>
      <div className={classes.mainContainer}>
        {/* <div className={classes.topmenu}>
          <div className={classes.box1}></div>
          <div className={classes.box2}></div>
        </div>

        <div className={classes.border}></div> */}

        <div className={classes.topMainCont}>
          <div className={classes.sideDiv}>
            <div className={classes.attendanceText}>Attendance</div>

            <div className={classes.topNavigationbar}>
              <button className={classes.TodayBtn}>Today</button>

              <button className={classes.yesterdayBtn}>Yesterday</button>

              <button className={classes.thisWeekBtn}>Choose a Day</button>
            </div>
          </div>

          <div className={classes.rightContainer}>
            <div className={classes.block1}>
              <div className={classes.totalStudentText}>
                Total No Teachers :
              </div>
              <div className={classes.studentTotal}> 100</div>
            </div>

            <div className={classes.block1}>
              <div className={classes.totalStudentText}>Present Teachers :</div>
              <div className={classes.PstudentTotal}> 50</div>
            </div>

            <div className={classes.block1}>
              <div className={classes.totalStudentText}>Absent Teachers :</div>
              <div className={classes.AstudentTotal}> 50</div>
            </div>
          </div>
        </div>

        <div className={classes.mainDataParent}>
          <div className={classes.mainData}>
            <div className={classes.nu}>#</div>
            <div className={classes.date}>Date</div>
            <div className={classes.name}>Full Name</div>
            <div className={classes.inTime}>In Time</div>
            <div className={classes.outTime}>Out Time</div>
            <div className={classes.absent}>Absent/Present</div>
            <div className={classes.Edit}>Edit</div>

            {/* <div className={classes.present}>Present</div> */}
          </div>

          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
