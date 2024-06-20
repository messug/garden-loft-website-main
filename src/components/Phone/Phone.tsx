
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Phone.css';

function Phone() {
  return (
    <>
      <Navbar />
      <div className='phone'>
        <h1>Contact Us</h1>
        <p>If you have any inquiries and would like to visit <br /> to tour Our loft. We are available anytime of the day. <br />You can call us or email us by clicking the buttons.</p>

        <a href="tel:4032294330" className="phone-button">
          <FontAwesomeIcon icon={faPhone} /> (403)-2294330
        </a>
        <a href="mailto:info@gardenloft.ca" className="email-button">
          <FontAwesomeIcon icon={faEnvelope} /> info@gardenloft.ca
        </a>

        <p><strong>Our Showroom:</strong> 838-11th Avenue SW Calgary, AB T2R 0E5 (by appointment only)</p>
      </div>
      <Footer />
    </>
  );
}

export default Phone;
