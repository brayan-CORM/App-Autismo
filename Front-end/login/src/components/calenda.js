import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Diary() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {console.log(date)}
    </div>
  );
}

export default Diary;
