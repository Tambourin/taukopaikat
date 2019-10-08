import React from "react";

const fixDay = (day) => { 
  if(day > 0) {
    return day - 1;
  }
  return 6;
}

const OpenToday = ({ openingHours }) => {
  if(!openingHours) {
    return null;
  }

  const splitWeekdayText = () => {
    let openingHoursString = openingHours.weekday_text[fixDay(new Date().getDay())];
    return openingHoursString.split(": ")[1];    
  }

  return (
    <div>
      <b>Auki tänään: </b>
      {splitWeekdayText()}
    </div>
  );
};

export default OpenToday;