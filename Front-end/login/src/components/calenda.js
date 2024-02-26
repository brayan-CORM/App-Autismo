import React, { useState } from "react";
import Calendar from "react-calendar";

function Diary() {

  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return (
    <div>
      <Calendar className="calendar"
        showWeekNumbers
        onChange={onChange}
        value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );
}

export default Diary;