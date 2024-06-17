import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AtriumImage1 from '../../assets/images/about 7a.jpg';
import Carina from '../../assets/images/About 2.jpg';
import John from '../../assets/images/About 3.jpg';
import Matthew from '../../assets/images/About 4.jpg';
import Jim from '../../assets/images/About 5.jpg';
import James from '../../assets/images/About 6.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import projectImage1 from '../../assets/images/about 8c.jpg';
import projectImage2 from '../../assets/images/about 8d.jpg';
import projectImage3 from '../../assets/images/about 8e.jpg';
import projectImage4 from '../../assets/images/about 7a.jpg';
import projectImage5 from '../../assets/images/about 7b.jpg';
import projectImage6 from '../../assets/images/about 7c.jpg';
import projectImage7 from '../../assets/images/about 7d.jpg';
import projectImage8 from '../../assets/images/about 7e.jpg';
import projectImage9 from '../../assets/images/about 7f.jpg';
import projectImage14 from '../../assets/images/about 7g.jpg';
import projectImage15 from '../../assets/images/about 7h.jpg';
import projectImage16 from '../../assets/images/about 7i.jpg';
import projectImage17 from '../../assets/images/about 7j.jpg';
import projectImage18 from '../../assets/images/about 8a.jpg';
import projectImage19 from '../../assets/images/about 8b.jpg';
import projectImage10 from '../../assets/images/about 8f.jpg';
import projectImage12 from '../../assets/images/about 8g.jpg';
import projectImage13 from '../../assets/images/about 8h.jpg';
import ProtypeVideo from '/images/Short prototype drone 2024_06_12.mp4';
import ProtypeVideoPoster from '../../assets/images/Prototype+video+still.jpg'
import BrendaStrafford from '/images/BrendaStraffordLogo.png';
import ThinAirLabs from '../../assets/images/All TAL logo variations-01 (1).png';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <section id="about" className="hero-about">
        <div className="hero-about-img">
          <img src={AtriumImage1} alt="Atrium House Image 1" />
          <div className="hero-about-content">
            <h1>We are architects, builders, 
              <br />and software developers</h1>
          </div>
          <div className='about-content'>
            <p>We create high-quality places to live that empower dignity, independence and belonging in the lives of seniors and others with differing abilities.</p>
          </div>
        </div>

        
          <div className="teams" id="our-team"  >
          <h3>Our Team</h3>
          <div className='team-content'>
            <img src={Carina} alt="Carina van Olm" />
            <h1>Carina van Olm <br />Founder + Director</h1>
            <p>Carina has a background in small business operations and interior design. She leads the Garden Loft Executive Team and is responsible for business management and interior design</p>
          </div>
          <div className='team-content'>
            <img src={John} alt="John Brown" />
            <h1>John Brown <br />Founder + Director</h1>
            <p>John is a registered architect, age-in-place researcher, and Dean of the University of Calgary’s School of Architecture Planning and Landscape. He leads design research, early project design, and business development</p>
          </div>
          <div className='team-content'>
            <img src={Matthew} alt="Matthew North" />
            <h1>Matthew North <br />Founder + Director</h1>
            <p>Matthew is a registered architect and a construction expert. He leads detail project design, construction management, and prefabrication logistics</p>
          </div>
          <div className='team-content'>
            <img src={Jim} alt="Jim Gibson" />
            <h1>Jim Gibson <br />Director</h1>
            <p>Jim is a published author, entrepreneur, founder, venture financier, and community builder. He is a member of Garden Loft’s Board of Directors</p>
          </div>
          <div className='team-content'>
            <img src={James} alt="James Lochrie" />
            <h1>James Lochrie <br />Director</h1>
            <p>James Lochrie is a technology entrepreneur and founder / Managing Partner of Thin Air Labs. He is a member of Garden Loft’s Board of Directors</p>
          </div>
        </div>
      </section>
      <section className="additional-content">
        <div className="btn-content">
          <button className="button-about">Call <br /> Us</button>
        </div>
        </section>
        <div className="history"  id="our-history">
          <div className='history-content'>
          <h3>Our History</h3>
          <h1>Carina, John and Matthew <br />co-founded Housebrand, <br />a residential design/build <br />firm, in 1997</h1>
          <p>Over its 25-year history, <br />Housebrand has completed over <br /> 250 residential projects using <br />a unique practice model that <br />combined architectural design <br />with construction management, <br />real estate services, and <br />furniture retailing</p>
          </div>
        </div>


        <div className="history-section">
        <div className='research-img'>
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              pagination={{ clickable: true }}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              style={{ paddingBottom: '20px' }}
            >
              {[projectImage4, projectImage5, projectImage6, projectImage7, projectImage8, projectImage9,projectImage14,projectImage15,projectImage16,projectImage17].map((image, index) => (
                <SwiperSlide key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <img src={image} alt={`Project ${index + 1}`} className="research-image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            <div className="history-content">
            <p>Housebrand’s work has been <br /> published internationally and <br />recognized with an Award of <br />Excellence in Innovation from <br />the Royal Architectural Institute <br />of Canada. It was the first <br />Canadian firm to receive a Rising <br />Star Leadership Award from <br />Residential Architect Magazine</p>
            <div className='history-indent'>
            <p>In 2022, Carina, John, <br /> and Matthew transitioned <br />Housebrand into Garden Loft</p>
            </div>
        <div className="btn-content">
          <button className="button-about">Book a <br /> preliminary <br />consult</button>
        </div>


          </div>
          <div className="research">
          <h3>Our Research</h3>
          <h1>Garden Loft originated as <br />a research project at the <br />University of Calgary</h1>
          <p>In 2014, John Brown’s research <br />lab began constructing and <br />user-test two V1 and V2 mock- <br />ups of a backyard portable <br />living unit in collaboration with <br />researchers from the Cumming <br />School of Medicine</p>
        </div>
        <div className="research-section">
           <div className='research-img'>
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              pagination={{ clickable: true }}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              style={{ paddingBottom: '20px' }}
            >
              {[projectImage1,projectImage2, projectImage3,projectImage10, projectImage12, projectImage13,projectImage18,projectImage19].map((image, index) => (
                <SwiperSlide key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <img src={image} alt={`Project ${index + 1}`} className="research-image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            <div className="research-content">
            <p>The test results were <br /> used to refine the design of <br />the unit and its physical support <br /> features. In 2015, this work was <br /> awarded a City of Calgary <br /> Mayor’s Urban Design Award <br />in Housing Innovation</p> 
            <div className='research-indent'>
            <p>In 2016 Housebrand <br /> constructed a fully-functioning <br /> V3 prototype of the portable <br />living unit that was field-tested <br /> on several sites with multiple <br />residents of differing abilities. <br />The findings of the V3 prototype <br /> field-testing were incorporated <br /> into the current production <br /> version of Garden Loft</p>
            </div>

            <div className="research-img">
          {/* <img src={AtriumImage7} alt="prototype" /> */}
          <video rel="noopener noreferrer" autoPlay playsInline controls poster={ProtypeVideoPoster}>
          <source src={ProtypeVideo}type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         <div className='research-indent'>
          
            <p>In 2022 and 2023, five <br /> production Garden Lofts were <br /> prototyped for backyard clients <br /> in Calgary and Edmonton. This <br /> version of Garden Loft received <br /> the City of Calgary’s 2023 <br />Accessibility Award</p>
          </div>
        </div>
        <div className="btn-content">
          <button className="button-about">Visit our<br /> showsuite and  <br />sales center</button>
        </div>

        <section className="partners"  id="our-partners">

          <h3>Our Partners</h3>
          <div className="partnerslogoDiv">
            <img src={ThinAirLabs} alt="Thin Air Labs Logo" />
      </div>
         <p>Thin Air Labs is a <br />Calgary-based venture <br />capital and services firm <br />creating human value <br />by helping early-stage <br />startups scale globally</p>
         
         <div className="partnerslogoDiv">
            <img src={BrendaStrafford} alt="Brenda Strafford Logo" />
      </div>
         <p>The Brenda Strafford <br /> Foundation is a <br />Calgary-based registered <br /> Canadian Charitable <br /> Organization whose core <br /> business is senior’s care</p>
         <div className="btn-content">
          <button className="button-about">Visit our FAQ</button>
        </div>

        </section> 
        </div>
        </div>
        </div>
    
      <Footer />
    </>
  );
};

export default About;

