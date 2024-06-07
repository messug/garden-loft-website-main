import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import './Initial.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Initial: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!startDate) {
      alert('Please select a date and time.');
      return;
    }

    const templateParams = {
      name,
      email,
      contact,
      meeting_date: startDate.toLocaleString(), // Pass the meeting date and time
    };

    emailjs.send(
            'service_9sbvjnv',       // Replace with your service ID
           'template_bh6rn31',      // Replace with your template ID
            templateParams,
            '--z3yrvQqS1HsMCaG'           // Replace with your user ID
          )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      alert('Your meeting has been booked. Thank you!');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('There was an error booking your meeting. Please try again.');
    });
  };

  return (
    <>
  <Navbar/>
  <Home/>
    <div className="initial-meeting">
      <h2>Book a Complimentary Initial Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Info:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="date-picker">
          <label htmlFor="meeting-date">Select Meeting Date and Time:</label>
          <DatePicker
            id="meeting-date"
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            showTimeSelect
            inline
            dateFormat="Pp"
            placeholderText="Click to select a date and time"
            required
          />
        </div>
        <button type="submit">Book Meeting</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:info@gardenloft.ca">info@gardenloft.ca</a></p>
        <p>Phone: <span>403 2294330 (o)</span> <span>403-6148363 (c)</span></p>
        <p>Showroom: 838-11th Avenue SW Calgary, AB T2R 0E5 (by appointment only)</p>
        <p><a href="/privacy-policy">Our Privacy Policy</a></p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Initial;


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import emailjs from 'emailjs-com';
// import './Initial.css';

// const Initial: React.FC = () => {
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!startDate) {
//       alert('Please select a date and time.');
//       return;
//     }

//     const templateParams = {
//       name,
//       email,
//       contact,
//       startDate: startDate.toString(),
//     };

//     emailjs.send(
//       'service_9sbvjnv',       // Replace with your service ID
//      'template_bh6rn31',      // Replace with your template ID
//       templateParams,
//       '--z3yrvQqS1HsMCaG'           // Replace with your user ID
//     )
   
//     .then((response) => {
//       console.log('Email sent successfully:', response.status, response.text);
//       alert('Your meeting has been booked. Thank you!');
//     })
//     .catch((error) => {
//       console.error('Failed to send email:', error);
//       alert('There was an error booking your meeting. Please try again.');
//     });
//   };

//   return (
//     <div className="initial-meeting">
//       <h2>Book a Complimentary Initial Meeting</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="contact">Contact Info:</label>
//           <input
//             type="text"
//             id="contact"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//           />
//         </div>
//         <div className="date-picker">
//           <label htmlFor="meeting-date">Select Meeting Date and Time:</label>
//           <DatePicker
//             id="meeting-date"
//             selected={startDate}
//             onChange={(date: Date | null) => setStartDate(date)}
//             showTimeSelect
//             dateFormat="Pp"
//             placeholderText="Click to select a date and time"
//             required
//           />
//         </div>
//         <button type="submit">Book Meeting</button>
//       </form>
//       <div className="contact-info">
//         <p>Email: <a href="mailto:info@gardenloft.ca">info@gardenloft.ca</a></p>
//         <p>Phone: <span>403 2294330 (o)</span> <span>403-6148363 (c)</span></p>
//         <p>Showroom: 838-11th Avenue SW Calgary, AB T2R 0E5 (by appointment only)</p>
//         <p><a href="/privacy-policy">Our Privacy Policy</a></p>
//       </div>
//     </div>
//   );
// };

// export default Initial;
