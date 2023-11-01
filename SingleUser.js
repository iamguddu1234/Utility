import classes from "./SingleUser.module.css";

import { BiEditAlt } from "react-icons/bi";
import React, { useState } from "react";

function SingleUser() {
  const [isEditing, setIsEditing] = useState(false);
  const [nuValue, setNuValue] = useState("1");
  const [dateValue, setDateValue] = useState("30/12/2012");
  const [inTimeValue, setInTimeValue] = useState("12.00 Am");
  const [outTimeValue, setOutTimeValue] = useState("12.12 Am");
  const [aTextValue, setATextValue] = useState("A");


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save your edited values here
    setIsEditing(false);
  };

  return (
    <button className={classes.mainData}>


      <div className={classes.nu}>
        {isEditing ? (
          <input
            type="text"
            value={nuValue}
            onChange={(e) => setNuValue(e.target.value)}
          />
        ) : (
          nuValue
        )}
      </div>


      <div className={classes.date}>
        {isEditing ? (
          <input
            type="text"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
          />
        ) : (
          dateValue
        )}
      </div>


      <div className={classes.inTime}>
        {isEditing ? (
          <input
            type="text"
            value={inTimeValue}
            onChange={(e) => setInTimeValue(e.target.value)}
          />
        ) : (
          inTimeValue
        )}
      </div>



      <div className={classes.outTime}>
        {isEditing ? (
          <input
            type="text"
            value={outTimeValue}
            onChange={(e) => setOutTimeValue(e.target.value)}
          />
        ) : (
          outTimeValue
        )}
      </div>

      <div className={classes.absent}>
        {isEditing ? (
          <input
            type="text"
            value={aTextValue}
            onChange={(e) => setATextValue(e.target.value)}
          />
        ) : (
          <div className={classes.a_text}>{aTextValue}</div>
        )}
      </div>

      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <BiEditAlt className={classes.edit} onClick={handleEditClick} />
      )}
    </button>
  );
}

export default SingleUser;
