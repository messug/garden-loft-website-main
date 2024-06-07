import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Initial.css';

const Initial: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="initial-meeting">
      <h2>Book a Complimentary Initial Meeting</h2>
      <div className="date-picker">
        <label htmlFor="meeting-date">Select Meeting Date and Time:</label>
        <DatePicker
          id="meeting-date"
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Click to select a date and time"
        />
      </div>
      <div className="contact-info">
        <p>Email: <a href="mailto:info@gardenloft.ca">info@gardenloft.ca</a></p>
        <p>Phone: <span>403 2294330 (o)</span> <span>403-6148363 (c)</span></p>
        <p>Showroom: 838-11th Avenue SW Calgary, AB T2R 0E5 (by appointment only)</p>
        <p><a href="/privacy-policy">Our Privacy Policy</a></p>
      </div>
    </div>
  );
};

export default Initial;
