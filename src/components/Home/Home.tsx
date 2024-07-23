import React from 'react';
import './Home.css';

// import BYSuite from '../../assets/images/backyard 1.jpg'
// import FrontVideo from "/images/Website front page clip 2024_06_12.mp4"
import FrontVideo from "/images/Backyard 1.mp4"


const Home: React.FC = () => {
  return (

    <section className="home">
      <div className="home-content">
        <video className="video" src={FrontVideo} autoPlay loop muted playsInline  />
        {/* <img className="video" src={BYSuite} /> */}
        <div className="content">
        <h1>Backyard Suites</h1>
        <p className='mobile-para'> family focused <br />supportive living</p>
        <p className='desktop-para'>family focused supportive living</p></div>
      </div>
    </section>
  );
};

export default Home;
