import classes from "./TopMonthBar.module.css";
import React, { useState } from 'react';


function TopMonthBar() {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddEntryClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className={classes.allDetailsContainer}>
      <div className={classes.monthName}>January</div>

      <div className={classes.absentPresntStatus}>100/100</div>

      <div>
      <button className={classes.addNewEntry} onClick={handleAddEntryClick}>
        Add Entry
      </button>

      {isFormVisible && (
        <div className={classes.formContainer}>
          <div className={classes.emailContainer}>
            <div className={classes.textEmail}>Date :</div>
            <input className={classes.emailEditBox} type="text" />
          </div>

          <div className={classes.emailContainer}>
            <div className={classes.textEmail}>In Time :</div>
            <input className={classes.emailEditBox} type="text" />
          </div>

          <div className={classes.emailContainer}>
            <div className={classes.textEmail}>Out Time :</div>
            <input className={classes.emailEditBox} type="text" />
          </div>

          <div className={classes.emailContainer}>
            <div className={classes.textEmail}>Present/Absent :</div>
            <input className={classes.emailEditBox} type="text" />
          </div>

          <button className={classes.btnTitle}>Submit</button>
        </div>
      )}
    </div>
  

    </div>
  );
}

export default TopMonthBar;
