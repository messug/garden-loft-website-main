import React from 'react';
import './Home.css';

import BYSuite from '../../assets/images/backyard 1.jpg'

const Home: React.FC = () => {
  return (

    <section className="home">
      <div className="home-content">
        <img className="video" src={BYSuite} />
        <div className="content">
        <h1>Garden Loft Backyard Suites</h1>
        <p>family focused <br />supportive living</p></div>
      </div>
    </section>
  );
};

export default Home;
