import React from 'react';
import './Costs.css';
import GLCost from '../../assets/images/gl-cost.png'

const Costs: React.FC = () => {
  return (
    <section id="compare-costs">
    <div className="costs-container">
      <img className="costs-img" src={GLCost} alt="GL" />
      <div className="costs-text">
        <h2>Garden Lofts  can be more <br />affordable than living in care  <br />facility</h2>
      </div>
    </div>
    <div className="costs-content">
      <button className="button-costs">Compare <br /> our costs</button>
    </div>
  </section>
  );
};

export default Costs;