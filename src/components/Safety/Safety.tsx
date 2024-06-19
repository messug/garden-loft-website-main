import React from 'react';
import { Link } from 'react-router-dom';
import './Safety.css';

const Safety: React.FC = () => {
  return (
    <section id="support-features">
      <div className="safety-content">
        <h1>Garden Loft units have advanced safety and support features</h1>
        <h1 className='ideal'>Ideal for seniors and those with differing abilities</h1>
        <button className='button-safety'><Link to="/learn-more#safety-support" >Learn about <br />our support <br />features</Link></button>
    </div>
    </section>
  );
};

export default Safety;
