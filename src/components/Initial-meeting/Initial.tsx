import React from 'react';
// import emailjs from 'emailjs-com';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Calendly from '../Calendly';
import './Initial.css';

const Initial: React.FC = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [contact, setContact] = useState('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const templateParams = {
  //     name,
  //     email,
  //     contact,
  //   };

  //   emailjs.send(
  //     'service_9sbvjnv',       // Replace with your service ID
  //     'template_bh6rn31',      // Replace with your template ID
  //     templateParams,
  //     '--z3yrvQqS1HsMCaG'           // Replace with your user ID
  //   )
  //   .then((response) => {
  //     console.log('Email sent successfully:', response.status, response.text);
  //     alert('Your meeting has been booked. Thank you!');
  //   })
  //   .catch((error) => {
  //     console.error('Failed to send email:', error);
  //     alert('There was an error booking your meeting. Please try again.');
  //   });
  // };

  return (
    <>
      <Navbar />
      <div className='navbarBackground'></div>
      <div className="initial-meeting">
        <h2>Book a Complimentary Initial Meeting</h2>
        {/* <form onSubmit={handleSubmit}>
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
          <button className='button-meet' type="submit">Book Meeting</button>
        </form> */}
        <div className="calendly-widget">
        <Calendly />
        </div>
       
      </div>
      <Footer />
    </>
  );
};

export default Initial;
