import React, { useEffect } from 'react';
import { To, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './LearnMore.css';
import LM1 from "/images/Learn 1.jpg";
import LM2 from "/images/Learn 2.jpg";
import LM3 from "/images/Learn 3.jpg";
import LM4 from "/images/Learn 4.jpg";
import LM5 from "/images/Learn 5.jpg";
import LM6 from "/images/Learn 6.jpg";
// import JohnLM from "/images/image.png";
import JohnCostVideo from "/images/cost_comparison_video_2024_07_03 (1080p).mp4";
import JohnCostVideoThumbnail from '/images/Screenshot 2024-07-04 at 10.56.45 AM.png'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';



const LearnMore: React.FC = () => {
  const location = useLocation();
  

    const navigate = useNavigate();
  
  
    const handleNavigate = (path: To) => {
      navigate(path);
      window.scrollTo(0, 0);
    };
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
      <section className="learn-more-hero">
        <div className="hero-image">
          <img src={LM1} alt="Hero" />
          <div className="hero-text">
            <h1>Garden Loft</h1>
            <p>delivering unique<br/> solutions for special<br/> needs housing</p>
          </div>
        </div>
      </section>

      <section className="learn-more-section" id="learn-more">
      <div id='safety-support'>
      <h1 className='safety-features'>Garden Loft's Safety <br/>and Support Features</h1>
        <p className="section-title">Our safety and support features enable seniors <br />and others with  differing  abilities to live safely, and with more independence, <br />dignity, and quality of life</p>
        <img src={LM2} alt="safety-features" className='award-image'/>
        <div className='quote'>
          <em>
        <p>“The Garden Loft team<br/>
understands that the housing<br/>
market is failing people with<br/>
disabilities and has designed<br/>
homes that take an aspirational<br/>
approach to accessible design.</p>
<p>Because the Garden Loft suites<br/>
are prefabricated and have a<br/>
variety of customizations<br/>
available, they are able to meet<br/>
the diverse needs of many<br/>
people with disabilities, including<br/>
elderly people who need fall-safe<br/>
flooring or wheelchair users who<br/>
need zero-step floor plans.”</p></em>
<p id='quote-sign'>- Stephanie Chipeur<br/>
 Azrieli
Accelerator Professorship in Law<br/>
& Disability Policy,<br/>
Faculty of Law, University of<br/>
Calgary</p>
</div>
</div>
        {/* <p className="section-description" id="safety-support">Garden Loft’s safety and support<br/> features enable those with <br/>differing abilities to live more <br/>independently and with greater<br/> dignity and quality of life</p> */}
        <h1 className='safety-features'>Our 22 safety features</h1>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          slidesPerView={1.2}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          }}
          loop={true}
          style={{ paddingBottom: '4rem' }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },}}
        >
          <SwiperSlide>
            <div className="support-feature-box" id="safety-support">
              <h3>General Features</h3>
              <ul>
                <li>Conforms to Alberta <br/>small care home<br/> standards</li>
                <li>Wheelchair accessible<br/> throughout</li>
                <li>Fall-safe compliant <br/>flooring throughout</li>
                <li>Continuous grab-rails<br/> throughout</li>
                <li>Optional Sprinkler fire <br/>suppression system</li>
                <li>Zero-step entry door</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="support-feature-box" id="bathroom">
              <h3>Bathroom Features</h3>
              <ul>
                <li>Zero-step shower with <br/>fall-safe compliant<br/> flooring</li>
                <li>Attendant accessible <br/>shower accommodates <br/>optional safety chair</li>
                <li>Safety night-lighting in<br/> bathroom</li>
                <li>Accessible toilet with <br/>optional washlet</li>
                <li>Manual-adjust vari-<br/>height bathroom counter<br/> with optional electric<br/> control</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="support-feature-box" id="digital">
              <h3>Digital Features</h3>
              <ul>
                <li>‘Just for us’ community<br/> and activity platform with <br/>caregiver access</li>
                <li>Integrated smart-home<br/> digital assistant with<br/> caregiver access and <br/>alerts (in development)</li>
                <li>Activity-detection<br/> monitoring with caregiver <br/>alerts (in development)</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="support-feature-box" id="kitchen">
              <h3>Kitchen Features</h3>
              <ul>
                <li>Easy-reach kitchen<br/> storage</li>
                <li>Accessible oven/<br/>microwave</li>
                <li>Optional upgrade to <br/>electric no-reach upper <br/>kitchen cabinets</li>
                <li>Manual-adjust vari-<br/>height kitchen counters<br/> with optional electric <br/>control</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="support-feature-box" id="bedroom">
              <h3>Bedroom Features</h3>
              <ul>
                <li>Safety night-lighting in<br/> bedroom</li>
                <li>Easy-reach bedroom <br/>storage</li>
                <li>Optional overhead bed <br/>lift</li>
                <li>Optional electric multi-<br/>height adjustable bed</li>
              </ul>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
        <section id="award">
<div className='award-sectionL' >
        <h1 className="section-title" >Our Awards</h1>
        <img src={LM3} alt="Award" className="award-image"/>
        <p>Garden Loft received the<br/> 2023 Calgary Award for<br/> Accessibility at a ceremony <br/>on June 14, 2023</p>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/y_nhYxDIm24?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          // allow="autoplay; encrypted-media"
          allowFullScreen
          className='video-embed'
        ></iframe>
        <p>Watch the award video <br/>prepared by the City of Calgary</p>
        </div>
        </section>
<div className='compare-costsL'>
        <h1 className="section-title" id="compare-costs">Compare Costs</h1>
        <p>Living in a Garden Loft can cost<br/> less than living in an average<br/> priced lodge or senior’s home in <br/>Calgary - even after you factor<br/> in food and activities</p>
        <video className="award-image" rel="noopener noreferrer" playsInline controls poster={JohnCostVideoThumbnail}>
          <source src={JohnCostVideo}type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <img src={JohnLM} alt="JohnVideo" className='award-image'/> */}
        <p>Watch John Brown explain <br/>the economics of living in <br/>a Garden Loft</p>
        </div>
<div className='financeL' id="finance-options">
        <h1 className="section-title" id="finance-options">Financing Options</h1>
        <img src={LM4} alt="Financing Options" className="financing-image"/>
        <p>Garden Lofts are registered <br/>secondary suites and eligible <br/>for mortgage financing</p> 
        <p>This includes <br /> Alberta Treasury Branch’s <br /> Residential Outbuilding Program <br/></p>
        <p>When combined with a Home Equity Line of Credit or other mortgage product, up to 100%  of <br /> the purchase could be<br/> financed</p>
        <p>Work with our mortgage <br/>specialist to determine your <br/>financing options</p>

        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="report-buttonbutton"   onClick={() => handleNavigate('/morgage')}>Contact<br /> our   mortgage <br />specialist</button>
      </div>


        <div className='resellingL' id="reselling">
        <h1 className="section-title" >Reselling your Garden Loft</h1>
        <p>As a prefabricated structure, <br/>Garden Loft can be sold and <br/>moved off your property when <br/>it is no longer required <br/>This recoups a large part of the<br/> unit’s original purchase price</p>
        <img src={LM5} alt="Reselling" className="reselling-image"/>
       
        <p>By recapturing a large part <br/>of your initial investment, the<br/> net cost of living in a Garden <br/>Loft can be less than renting <br/>in most lodges and retirement <br/>homes - even when you include a <br/>monthly allowance for food,<br/> activities, utilities, insurance,<br/> and property taxes</p>
        <p>We can help you sell your Garden Loft by listing it on our resale page</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="report-buttonbutton"   onClick={() => handleNavigate('/reselling')}>View <br/>our current <br />inventory resale <br />Garden Lofts</button>
      </div>
<div id='zoning'>
        <div className='zoningL' id="new-zoning-rules">

        <h1 className="section-title" >New Zoning Rules</h1>
        <img src={LM6} alt="Zoning" className="zoning-image"/>
        <p>As of 2024, the City of Calgary’s <br/>blanket rezoning for secondary  <br/>suites has made it significantly  <br/>easier to obtain approval for <br/> a Garden loft in almost every  <br/>residential neighborhood  <br/>in the city</p>
        <p>Garden Lofts are also allowed  <br/>in most zoning districts in  <br/>Edmonton as well as in many <br/> other towns and cities in <br/> Canada </p>
        <p>We take care of the city  <br/>approval process  <br/>and obtaining the required  <br/>permits to place a Garden Loft <br/> on your property </p>
        <p>Our complimentary feasibility  <br/>study includes an initial <br/> evaluation of the zoning bylaw <br/> rules for your property</p>
        </div>
        </div>
      </section>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="report-buttonbutton"   onClick={() => handleNavigate('/feasibility-report')}>Request a <br />Feasibility <br /> Report</button>
      </div>
      <Footer />
    </>
  );
};

export default LearnMore;
