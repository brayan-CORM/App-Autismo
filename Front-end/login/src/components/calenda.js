import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function Diary() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar
<<<<<<< HEAD
      showWeekNumbers 
      onChange={onChange} 
      value={date} />
=======
        className="calendar"
        showWeekNumbers
        onChange={onChange}
        value={date}
      />
>>>>>>> 851f32edd36df7f5f4ee070b9cfa0c0071d7a5fa
      {console.log(date)}
    </div>
  );
}

export default Diary;
