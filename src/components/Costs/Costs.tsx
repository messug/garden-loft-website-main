import React from 'react';
import './Costs.css';
import GLCost from '../../assets/images/gl-cost.png'

const Costs: React.FC = () => {
  return (
    <section id="compare-costs">
      <div className='costs-img'>
        <img className='costs-img' src={GLCost} alt="GL" />
      </div>
      <div className="costs-content">
        <h1>Garden Lofts can be more affordable than <br />living in care facility</h1>
        <button className='button-costs'>Compare <br /> our costs</button>
    </div>
    </section>
  );
};

export default Costs;