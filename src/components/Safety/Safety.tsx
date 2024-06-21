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
    <div className="samantha">
    <h1><em>“The team who designed this unit had people’s real interests and needs in mind, they involved accessibility experts and people with lived experience, and it shows. They’re paving the way for accessible, adaptable and affordable housing options that are so badly needed across the country.”</em> </h1>
<h1> - Samantha Ryan C.E.T., RHFAC, BCIN Principal, Accessible Built Environment (ABE) Specialist ABE Factors Inc.</h1>
    </div>
    </section>
  );
};

export default Safety;
