import React from 'react';
import './Testimony.css';
import testimonyImage from '../../assets/images/backyard 36.jpg'; // Ensure this path is correct

const Testimony: React.FC = () => {
  return (
    <section className="testimony-section">
      <h1 className="testimony-title">Meet our <br/>Garden Lofters</h1>
      <div className="testimony-content">
        <img src={testimonyImage} alt="Garden Lofters" className="testimony-image" />
        <p className="testimony-description"><em>
          When no longer needed, <br/>Garden Loft can be resold <br/>and moved off your lot</em>
        </p>
        <button className="testimony-button">Visit our FAQ</button>
      </div>
    </section>
  );
};

export default Testimony;

