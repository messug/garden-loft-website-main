import React from 'react';
import './Home.css';
import GLHero from '/images/gl-hero-vid2.mp4'

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-content">
        <video className="video" src={GLHero} autoPlay loop muted/>
        <div className="content">
        <h1>Garden Loft <br />Backyard Suites</h1>
        <p>family focused <br />supportive living</p></div>
      </div>
    </section>
  );
};

export default Home;
