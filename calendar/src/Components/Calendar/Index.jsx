import React, { useState } from 'react';
import CalendarHeader from '../CalendarHeader/Index';
import CalendarTable from '../CalendarTable/Index';
import './Style.css'

function Calendar() {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        date={date}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarTable date={date} />
    </div>
  );
}

export default Calendar;