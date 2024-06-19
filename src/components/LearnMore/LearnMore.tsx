// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import './LearnMore.css';

// const LearnMore: React.FC = () => {
//   return (
//     <>
//       <section className="learn-more-hero">
//         <div className="hero-image">
//           <img src="path_to_hero_image.jpg" alt="Hero" />
//           <div className="hero-text">
//             <h1>We deliver unique solutions for special needs housing</h1>
//           </div>
//         </div>
//       </section>

//       <section className="learn-more-section" id="learn-more">
//         <h1 className="section-title">Our Safety and Support Features</h1>
//         <p className="section-description">Garden Loft’s safety and support features enable those with differing abilities to live more independently and with greater dignity and quality of life</p>
//         <Swiper
//           modules={[Pagination]}
//           spaceBetween={10}
//           pagination={{ clickable: true }}
//           slidesPerView={1.2}
//           centeredSlides={true}
//           loop={true}
//           style={{ paddingBottom: '20px' }}
//         >
//           <SwiperSlide>
//             <div className="support-feature-box">
//               <h3>General</h3>
//               <ul>
//                 <li>Constructed to care facility building standards</li>
//                 <li>Wheelchair accessible throughout</li>
//                 <li>Fall-safe compliant flooring throughout</li>
//                 <li>Continuous grab-rails throughout</li>
//                 <li>Optional Sprinkler fire suppression system</li>
//                 <li>Zero-step entry door</li>
//               </ul>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="support-feature-box">
//               <h3>Bathroom</h3>
//               <ul>
//                 <li>Zero-step shower with fall-safe compliant flooring</li>
//                 <li>Attendant accessible shower accommodates optional safety chair</li>
//                 <li>Safety night-lighting in bathroom</li>
//                 <li>Accessible toilet with optional washlet</li>
//                 <li>Manual-adjust vari-height bathroom counter with optional electric control</li>
//               </ul>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="support-feature-box">
//               <h3>Digital</h3>
//               <ul>
//                 <li>‘Just for us’ community and activity platform with caregiver access</li>
//                 <li>Integrated smart-home digital assistant with caregiver access and alerts</li>
//                 <li>Activity-detection monitoring with caregiver alerts</li>
//               </ul>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="support-feature-box">
//               <h3>Kitchen</h3>
//               <ul>
//                 <li>Easy-reach kitchen storage</li>
//                 <li>Accessible oven/microwave</li>
//                 <li>Optional upgrade to electric no-reach upper kitchen cabinets</li>
//                 <li>Manual-adjust vari-height kitchen counters with optional electric control</li>
//               </ul>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="support-feature-box">
//               <h3>Bedroom</h3>
//               <ul>
//                 <li>Safety night-lighting in bedroom</li>
//                 <li>Easy-reach bedroom storage</li>
//                 <li>Optional overhead bed lift</li>
//                 <li>Optional electric multi-height adjustable bed</li>
//               </ul>
//             </div>
//           </SwiperSlide>
//         </Swiper>

//         <h1 className="section-title">Our Awards</h1>
//         <img src="path_to_award_image.jpg" alt="Award" className="award-image"/>
//         <p>Garden Loft received the 2023 Calgary Award for Accessibility at a ceremony on June 14, 2023.</p>
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/your_video_id" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
//         <p>Watch the award video prepared by the City of Calgary</p>

//         <h1 className="section-title">Compare Costs</h1>
//         <p>Living in a Garden Loft can cost less than living in an average priced lodge or senior’s home in Calgary - even after you factor in food and activities.</p>
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/your_video_id" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
//         <p>Watch John Brown explain the economics of living in a Garden Loft</p>

//         <h1 className="section-title">Financing Options</h1>
//         <img src="path_to_financing_image.jpg" alt="Financing Options" className="financing-image"/>
//         <p>Garden Lofts are registered secondary suites and eligible for mortgage financing. This includes Alberta Treasury Branch’s Residential Outbuilding Program. When combined with a Home Equity Line of Credit or other mortgage product, up to 100% of the purchase could be financed.</p>
//         <p>Work with our mortgage specialist to determine your financing options.</p>

//         <h1 className="section-title">Reselling your Garden Loft</h1>
//         <img src="path_to_reselling_image.jpg" alt="Reselling" className="reselling-image"/>
//         <p>As a prefabricated structure, Garden Loft can be sold and moved off your property when it is no longer required. This recoups a large part of the unit’s original purchase price.</p>
//         <p>By recapturing a large part of your initial investment, the net cost of living in a Garden Loft can be less than renting in most lodges and retirement homes - even when you include a monthly allowance for food, activities, utilities, insurance, and property taxes.</p>

//         <h1 className="section-title">New Zoning Rules</h1>
//         <img src="path_to_zoning_image.jpg" alt="Zoning" className="zoning-image"/>
//         <p>As of 2024, the City of Calgary’s blanket rezoning for secondary suites has made it significantly easier to obtain approval for a Garden loft in almost every residential neighborhood in the city.</p>
//         <p>Garden Lofts are also allowed in most zoning districts in Edmonton as well as in many other towns and cities in Canada. We take care of the city approval process and obtaining the required permits to place a Garden Loft on your property. Our complimentary feasibility study includes an initial evaluation of the zoning bylaw rules for your property.</p>
//       </section>
//     </>
//   );
// };

// export default LearnMore;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './LearnMore.css';
import LM1 from "/images/Learn 1.jpg";
import LM2 from "/images/Learn 2.jpg";
import LM3 from "/images/Learn 3.jpg";
import LM5 from "/images/Learn 5.jpg";
import LM6 from "/images/Learn 6.jpg";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const LearnMore: React.FC = () => {
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
    <Navbar/>
      <section className="learn-more-hero">
        <div className="hero-image">
          <img src={LM1} alt="Hero" />
          <div className="hero-text">
            <h1>We deliver unique<br/> solutions for special<br/> needs housing</h1>
          </div>
        </div>
      </section>

      <section className="learn-more-section" id="learn-more">
        <h1 className="section-title">Our Safety and Support Features</h1>
        <img src={LM2} alt="safety-features" className='award-image'/>
        <p className="section-description">Garden Loft’s safety and support<br/> features enable those with <br/>differing abilities to live more <br/>independently and with greater<br/> dignity and quality of life</p>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          style={{ paddingBottom: '20px' }}
        >
          <SwiperSlide>
            <div className="support-feature-box" id="safety-support">
              <h3>General</h3>
              <ul>
                <li>Constructed to care <br/>facility building standards</li>
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
              <h3>Bathroom</h3>
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
              <h3>Digital</h3>
              <ul>
                <li>‘Just for us’ community and activity platform with caregiver access</li>
                <li>Integrated smart-home digital assistant with caregiver access and alerts</li>
                <li>Activity-detection monitoring with caregiver alerts</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="support-feature-box" id="kitchen">
              <h3>Kitchen</h3>
              <ul>
                <li>Easy-reach kitchen storage</li>
                <li>Accessible oven/microwave</li>
                <li>Optional upgrade to electric no-reach upper kitchen cabinets</li>
                <li>Manual-adjust vari-height kitchen counters with optional electric control</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="support-feature-box" id="bedroom">
              <h3>Bedroom</h3>
              <ul>
                <li>Safety night-lighting in bedroom</li>
                <li>Easy-reach bedroom storage</li>
                <li>Optional overhead bed lift</li>
                <li>Optional electric multi-height adjustable bed</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>

        <h1 className="section-title" id="awards">Our Awards</h1>
        <img src={LM3} alt="Award" className="award-image"/>
        <p>Garden Loft received the 2023 Calgary Award for Accessibility at a ceremony on June 14, 2023.</p>
        <img src={LM3} alt="AwardVideo" className='award-image'/>
        {/* <iframe width="560" height="315" src={LM2} title="YouTube video player" frameBorder="0" allowFullScreen></iframe> */}
        <p>Watch the award video prepared by the City of Calgary</p>

        <h1 className="section-title" id="costs">Compare Costs</h1>
        <p>Living in a Garden Loft can cost less than living in an average priced lodge or senior’s home in Calgary - even after you factor in food and activities.</p>
        <img src={LM5} alt="JohnVideo" className='award-image'/>
        {/* <iframe width="560" height="315" src={LM3} title="YouTube video player" frameBorder="0" allowFullScreen></iframe> */}
        <p>Watch John Brown explain the economics of living in a Garden Loft</p>

        <h1 className="section-title" id="financing">Financing Options</h1>
        <img src={LM5} alt="Financing Options" className="financing-image"/>
        <p>Garden Lofts are registered secondary suites and eligible for mortgage financing. This includes Alberta Treasury Branch’s Residential Outbuilding Program. When combined with a Home Equity Line of Credit or other mortgage product, up to 100% of the purchase could be financed.</p>
        <p>Work with our mortgage specialist to determine your financing options.</p>

        <h1 className="section-title" id="reselling">Reselling your Garden Loft</h1>
        <img src={LM5} alt="Reselling" className="reselling-image"/>
        <p>As a prefabricated structure, Garden Loft can be sold and moved off your property when it is no longer required. This recoups a large part of the unit’s original purchase price.</p>
        <p>By recapturing a large part of your initial investment, the net cost of living in a Garden Loft can be less than renting in most lodges and retirement homes - even when you include a monthly allowance for food, activities, utilities, insurance, and property taxes.</p>

        <h1 className="section-title" id="zoning">New Zoning Rules</h1>
        <img src={LM6} alt="Zoning" className="zoning-image"/>
        <p>As of 2024, the City of Calgary’s blanket rezoning for secondary suites has made it significantly easier to obtain approval for a Garden loft in almost every residential neighborhood in the city.</p>
        <p>Garden Lofts are also allowed in most zoning districts in Edmonton as well as in many other towns and cities in Canada. We take care of the city approval process and obtaining the required permits to place a Garden Loft on your property. Our complimentary feasibility study includes an initial evaluation of the zoning bylaw rules for your property.</p>
      </section>
      <Footer/>
    </>
  );
};

export default LearnMore;
