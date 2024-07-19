// Book.js

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Calendly from '../Calendly'; // Adjust the path as needed
import './Book.css'; // Import the CSS file

function Book() {
  return (
    <>
      <Navbar />
      <div className='navbarBackground'></div>
      <div className="book-container">
        <h1 className="book-title">
        <span>Book A Tour</span>

        </h1>
        <div className="calendly-widget">
          <Calendly url="https://calendly.com/gardenloft/test" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;

