import React from 'react';
import './Testimony.css';
// import testimonyImage from '../../assets/images/backyard 36.jpg'; // Ensure this path is correct
import GardenLofters from '/images/lofter_interviews_reduced_for_website_2024_07_03 (1080p).mp4'; // Ensure this path is correct

import {Link} from 'react-router-dom';

const Testimony: React.FC = () => {
  return (
    <section className="testimony-section" id='garden-lofters'>
      <h1 className="testimony-title">Meet our <br/>Garden Lofters</h1>
      <div className="testimony-content">
        {/* <img src={testimonyImage} alt="Garden Lofters" className="testimony-image" /> */}
        <video className='gl-lofter-vid' rel="noopener noreferrer" playsInline controls poster={GardenLofters}>
          <source src={GardenLofters} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="testimony-description">
          When no longer needed, <br/>Garden Loft can be resold <br/>and moved off your lot
        </p>
        <button className="testimony-button">Visit our FAQ</button>
      </div>

      <div className="desktop-testimony">
        <div className="desktop-description-cost">
          <h2>
          When no longer needed, <br/>Garden Loft can be resold <br/>and moved off your lot
          </h2>
          <button className="button-testimony desktop-testimony-button">
            <Link to="/faq">
              Visit our FAQ
            </Link>
          </button>
        </div>
        <div className="desktop-image-testimony">
        {/* <img src={testimonyImage} alt="Garden Lofters" className="testimony-image" /> */}
        <video className='gl-lofter-vid' rel="noopener noreferrer" playsInline controls poster={GardenLofters}>
          <source src={GardenLofters} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </section>
  );
};

export default Testimony;

