import React from 'react';
import { Link } from "react-router-dom";
import './backayard.css';
import FrontVideo from "/images/Backyard 1.mp4";

const Home: React.FC = () => {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <video className="video" src={FrontVideo} autoPlay loop muted playsInline />
          <div className="content">
            <h1>Garden Loft Backyard Suites</h1>
            <p className='mobile-para'>family focused <br />supportive living</p>
            <p className='desktop-para'>family focused supportive living</p>
          </div>
        </div>
      </section>

      <section id="support-features">
        <div className="safety-content">
          <h2>Garden Loft units have advanced safety and support features</h2>
          <h3 className="ideal">
            Ideal for seniors and those with differing abilities
          </h3>
          <Link to="/learn-more#safety-support" className="button-safety">
            Learn about <br />
            our support <br />
            features
          </Link>
        </div>
        <blockquote className="samantha">
          <p>
            "The team who designed this unit had people's real interests and
            needs in mind, they involved accessibility experts and people with
            lived experience, and it shows. They're paving the way for
            accessible, adaptable and affordable housing options that are so
            badly needed across the country."
          </p>
        </blockquote>
        <div className="sign">
          <p>
            - Samantha Ryan C.E.T.,<br />
            RHFAC, BCIN Principal, <br />
            Accessible Built Environment (ABE)<br />
            Specialist ABE Factors Inc.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;