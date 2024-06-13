import React from 'react';
import './Home.css';

// import BYSuite from '../../assets/images/backyard 1.jpg'
// import FrontVideo from "/images/Website front page clip 2024_06_12.mp4"
import FrontVideo from "/images/front-page-720.mp4"


const Home: React.FC = () => {
  return (

    <section className="home">
      <div className="home-content">
        <video className="video" src={FrontVideo} autoPlay loop muted />
        {/* <img className="video" src={BYSuite} /> */}
        <div className="content">
        <h1>Garden Loft Backyard Suites</h1>
        <p>family focused <br />supportive living</p></div>
      </div>
    </section>
  );
};

export default Home;
