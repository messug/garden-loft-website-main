import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HomeVideo from "/images/Homepage hero video 2024_07_22.mp4";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-content">
          <video
            className="video"
            src={HomeVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="content">
            <p className="mobile-para">
              Supportive housing <br />
              you want to live in
            </p>
            <p className="desktop-para">
              Supportive housing <br />
              you want to live in
            </p>
          </div>
        </div>
      </section>
      <section className="homepage">
        <div className="homepage-content">
          <h1>Garden loft</h1>
          <p>
            is a prefabricated modular <br /> system for creating <br />
            small-scale high-quality <br /> housing developments
          </p>
          <p>
            We simplify the process of <br /> creating joyously supportive{" "}
            <br />
            places to live
          </p>
          <div className="desk-flex">
            <div className="item-container mob-view">
              <div className="home-image-container">
                <img
                  src="/images/Backyard Circle_1.png"
                  alt="Backyards Suites"
                />
              </div>
              <div className="text-container">
                <h3>
                  <a href="/mainpage">Backyard Suites</a>
                </h3>
                <p>
                  family focused <br />
                  supportive living
                </p>
              </div>
            </div>

            <div className="item-container1 desk-view">
              <div className="text-container">
                <h3>
                  <a href="/mainpage">Backyard Suites</a>
                </h3>
              </div>
              <div className="home-image-container">
                <img
                  src="/images/Backyard Circle_1.png"
                  alt="Backyards Suites"
                />
              </div>
              <div className="text-container">
                <p>
                  family focused <br />
                  supportive living
                </p>
              </div>
            </div>

            <div className="item-container mob-view">
              <div className="home-image-container">
                <img src="/images/village Circle_1.png" alt="Village" />
              </div>
              <div className="text-container">
                <h3>
                  <a href="/village">Villages</a>
                </h3>
                <p>
                  community embedded <br />
                  supportive living
                </p>
              </div>
            </div>
         

          <div className="item-container1 desk-view">
            <div className="text-container">
              <h3>
                <a href="/village">Villages</a>
              </h3>
            </div>
            <div className="home-image-container">
              <img src="/images/village Circle_1.png" alt="Village" />
            </div>
            <div className="text-container">
              <p>
                community embedded <br />
                supportive living
              </p>
            </div>
          </div>

          <div className="item-container mob-view">
            <div className="home-image-container">
              <img src="/images/Atrium House Circle_1.png" alt="Atrium House" />
            </div>
            <div className="text-container">
              <h3>
                <a href="/atrium">Small Care Homes</a>
              </h3>
              <p>
                care enhanced <br /> community living
              </p>
            </div>
          </div>
       

        {/* <div className='homepage-content'>
    <p>From backyards <br />to small care homes </p>
    <p>From independent living <br />to high level care </p>
    <p>Garden Loft delivers<br /> tailored solutions for <br />unique needs</p>
    </div>
   */}

        <div className="item-container1 desk-view">
          <div className="text-container">
            <h3>
              <a href="/atrium">Small Care Homes</a>
            </h3>
          </div>
          <div className="home-image-container">
            <img src="/images/Atrium House Circle_1.png" alt="Atrium House" />
          </div>
          <div className="text-container">
            <p>
              care enhanced <br /> community living
            </p>
          </div>
        </div>
        </div>
        
        <div className="homepage-content">
          <p>
            From backyards <br />
            to small care homes{" "}
          </p>
          <p>
            From independent living <br />
            to high level care{" "}
          </p>
          <p>
            Garden Loft delivers
            <br /> tailored solutions for <br />
            unique needs
          </p>
        </div>
        </div>
      
      </section>

      {/* <section className='desktop-homepage'>
  <div className='deskpage-content'>
    <h1>Garden loft</h1>
    <p>is a prefabricated modular <br /> system for creating  <br />small-scale high-quality <br /> housing developments</p>
    <p>We simplify the process of <br /> creating joyously supportive <br />places to live</p>
    <div className='desk-flex'>
    <div className="desk-container">
      <div className="home-image-container">
        <img src="/images/Backyard Circle_1.png" alt="Backyards Suites" />
      </div>
      <div className="para-container">
        <h3><a href="/mainpage">Backyard Suites</a></h3>
        <p>family focused <br />supportive living</p>
      </div>
    </div>
    
    <div className="desk-container">
      <div className="home-image-container">
        <img src="/images/village Circle_1.png" alt="Village" />
      </div>
      <div className="para-container">
        <h3><a href="/village">Villages</a></h3>
        <p>community embedded  <br />supportive living</p>
      </div>
    </div>
    
    <div className="desk-container">
      <div className="home-image-container">
        <img src="/images/Atrium House Circle_1.png" alt="Atrium House" />
      </div>
      <div className="para-container">
        <h3><a href="/atrium">Small Care Homes</a></h3>
        <p>care enhanced <br /> community living</p>
      </div>
    </div>

    </div>
   
    <p>From backyards <br />to small care homes </p>
    <p>From independent living <br />to high level care </p>
    <p>Garden Loft delivers<br /> tailored solutions for <br />unique needs</p>
  
  </div> */}
      {/* </section> */}

      <Footer />
    </>
  );
};

export default Home;
