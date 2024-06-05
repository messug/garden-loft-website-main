import React from 'react';
import './Atrium.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import GLHero from '/images/hero-atrium.mp4';
import AtriumImage1 from '/images/atrium1.png';
import AtriumImage2 from '/images/atrium2.png';
import AtriumImage3 from '/images/atrium3.png';
import AtriumImage4 from '/images/atrium4.png';
import AtriumImage5 from '/images/atrium5.png';
import AtriumImage6 from '/images/atrium6.png';
import AtriumImage7 from '/images/atrium7.png';
import AtriumImage8 from '/images/atrium8.png';
import BrendaStrafford from '/images/BrendaStraffordLogo.png';
import GLLogo from '../../assets/gl-john-logo.png';

const Atrium = () => {
  return (
    <>
      <Navbar />
      <section className="hero-atrium">
        <div className="hero-content">
          <video className="hero-video" src={GLHero} autoPlay loop muted />
          <div className="content">
            <h1>garden loft</h1>
            <h3>Atrium House <br />care enhanced community living</h3>
          </div>
        </div>
      </section>
      <section id="atrium">
        <div className="atrium-content">
        <img src={AtriumImage1} alt="Atrium House Image 1" />
          
          <h1>Combining advanced age-in-place architecture with person-led care and living support</h1>
          <h3>Atrium House features Garden Loft units clustered around a central interior light-filled community atrium</h3>
          <img src={AtriumImage2} alt="Atrium House Image 2" />
          
          <h3>Atrium House is a small care home providing high levels of nursing care and support for up to 14 residents</h3>
          <img src={AtriumImage3} alt="Atrium House Image 3" />
          
          <h3>The familiar domestic environment combines the privacy and independence of living in a Garden Loft with the social connectiveness and sense of belonging that comes from being part of a small village-style community.</h3>
          <button className='button-atrium'>Learn more about Garden Loft units</button>
          
          <img src={AtriumImage4} alt="Atrium House Image 4" />
          <h3>The prefabricated Garden Loft units can be configured in any number of ways and combined with other uses to meet the site and programmatic needs of a particular project</h3>
          
          <button className='button-atrium'> We custom design and build Atrium Houses across Alberta
          </button> 
<div className="logoDiv">
<img src={BrendaStrafford} alt="Brenda Strafford Logo" />
          <img src={GLLogo} alt="Garden Loft Logo" />
          
         
          </div>

          <h2>Atrium House is a collaboration with the Brenda Strafford Foundation</h2>
          

        <div id='plusDiv'>
           <h3>advanced
age-in-place
architecture</h3>
<div className="plus-sign">+</div>
<h3>person-led
care and
operations</h3>
</div>
          <div className="foundation-section">
       
<div className="foundation-box">
              <h2>GARDEN LOFT</h2>
              <ul>
                <li>Research-based inclusive and accessible design</li>
                <li>Precision adaptive prefabrication</li>
                <li>Award-winning architectural expertise</li>
               
              </ul>
            </div>
          
            <div className="foundation-box">
              <h2>BRENDA STRAFFORD FOUNDATION</h2>
              <ul>
                <li>Adaptive care and living model based on inclusion, diversity, and equity</li>
                <li>Customized and guided operational playbook</li>
                <li>Award-winning care expertise</li>
              </ul>
            </div>
          </div>

          <button className='button-atrium'>Call us</button>
          
          <img src={AtriumImage5} alt="Atrium House Image 5" />
          <h3>Atrium House is particularly well suited for rural and remote communities</h3>
          <button className='button-atrium'>Book a preliminary consult</button>
          
          <img src={AtriumImage6} alt="Atrium House Image 6" />
          <h3>Atrium House can also be combined with a Garden Loft Village</h3>
          
          <img src={AtriumImage7} alt="Atrium House Image 7" />

          <h3>A common entry courtyard deck
enhances community by
connecting the private outdoor
spaces for the independent living
Garden Loft units with
the communal outdoor space for
Atrium residents</h3>

<img src={AtriumImage8} alt="Atrium House Image 8" />

          <button className='button-atrium'>Visit our showsuite and sales center</button>

         
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Atrium;