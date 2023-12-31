import React, { useState, useEffect, useRef } from "react";
import classes from "../CommonAppUtilities/MainAppContainer.module.css";
//import TopInfoBarEMail from './TopInfoBarEMail';
import TopInfoBarGeneral from "../Dashboard/General/TopInfoBarGeneral";
//import TopTitleBar from '../../CommonAppUtilities/TopTitleBar';
import FeedContentDiv from "./FeedContentDiv";
import Separator from "../CommonAppUtilities/Separator";

import Attendance from "./Attendance";

import TicketViewWindow from "./TicketViewWindow";

const Utility = (props) => {
  const [showAttendanceData, SetAttendanceData] = useState(false);
  const [showTicketData, SetTicketData] = useState(false);

  const showAttendanceDataHandler = () => {
    SetAttendanceData(true);
    SetTicketData(false);
  };

  const showTicketDataHandler = () => {
    SetTicketData(true);
    SetAttendanceData(false);
  };

  const [sideNavBarWidth, setSideNavBarWidth] = useState(
    "calc( 0.5% + " + props.sideNavBarWidth + " )"
  );

  const [mainAppContainerWidth, setMainAppContainerWidth] = useState(
    "calc( 99% - var(--sideNavBarWidth) )"
  );

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    setSideNavBarWidth("calc( 0.5% + " + props.sideNavBarWidth + " )");
    if (props.sideNavBarWidth === "var(--sideNavBarWidth)") {
      setMainAppContainerWidth("calc( 99% - var(--sideNavBarWidth) )");
    }
    if (props.sideNavBarWidth === "var(--sideNavBarWidthOnContract)") {
      setMainAppContainerWidth(
        "calc( 99% - var(--sideNavBarWidthOnContract) )"
      );
    }

    return () => {};
  }, [props.sideNavBarWidth]);

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);
    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  //let title="Email"
  let mainAppContainerStyle = {
    left: sideNavBarWidth,
    width: mainAppContainerWidth,
  };
  const infoBarActiveButtonColor = {
    color: "white",
    backgroundColor: "#919191",
  };

  return (
    <div className={classes.mainAppContainer} style={mainAppContainerStyle}>
      <div className={classes.mainContainer}>
        <div className={classes.buttonContainer}>
          <button
            className={classes.UtilityBtn}
            onClick={showAttendanceDataHandler}
          >
            Attendance
          </button>

          
          <button className={classes.TaskBtn} onClick={showTicketDataHandler}>
            Task
          </button>



        </div>
      </div>

      {showTicketData && (
        <div className={classes.tickerWindow}>
          <TicketViewWindow />
        </div>
      )}

      {showAttendanceData && (
        <div className={classes.attendanceDiv}>
          <Attendance />
        </div>
      )}
    </div>
  );
};

export default Utility;
