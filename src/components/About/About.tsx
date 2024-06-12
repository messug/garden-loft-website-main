
// import './About.css';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import AtriumImage1 from '/images/Atrium 1.jpg';
// import AtriumImage2 from '../../assets/images/Carina2.jpg';
// import AtriumImage3 from '../../assets/images/John+Brown.jpg';
// import AtriumImage4 from '../../assets/images/Mattew.jpg';
// import AtriumImage5 from '../../assets/images/jim.jpg';
// import AtriumImage6 from '../../assets/images/james.jpg';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import projectImage1 from '../../assets/images/backyard 21.jpg';
// import projectImage2 from '../../assets/images/backyard 22.jpg';
// import projectImage3 from '../../assets/images/backyard 23.jpg';
// import projectImage4 from '../../assets/images/backyard 24.jpg';
// import projectImage5 from '../../assets/images/backyard 25.jpg';
// import projectImage6 from '../../assets/images/backyard 26.jpg';
// import projectImage7 from '../../assets/images/backyard 27.jpg';
// import projectImage8 from '../../assets/images/backyard 28.jpg';
// import projectImage9 from '../../assets/images/backyard 29.jpg';
// import projectImage10 from '../../assets/images/backyard 30.jpg';
// import projectImage11 from '../../assets/images/backyard 31.jpg';
// import projectImage12 from '../../assets/images/backyard 32.jpg';
// import projectImage13 from '../../assets/images/backyard 33.jpg';



// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-about">
//         <div className="hero-about-img">
//           <img src={AtriumImage1} alt="Atrium House Image 1" />
//           <div className="hero-about-content">
//             <h1>We are architects, <br />builders, and  <br />software developers</h1>
//           </div>
//           <div className='about-content'>
//           <p>We create high-quality places to live that empower dignity, independence and belonging in the lives of seniors and others with differing abilities.</p>
//           </div>
//           <div className="teams">
//           <div className='team-content'>
//             <h1>Our Team</h1>
//             <img src={AtriumImage2} alt="Atrium House Image 1" />
//           <h1>Carina van Olm <br />Founder + Director</h1>
//           <p>Carina has a background in  <br />small business operations and <br />interior design. She leads the <br />Garden Loft Executive Team <br />and is responsible for business <br />management and interior <br />design.</p>
          
//           </div>
//           <div className='team-content'>
           
//             <img src={AtriumImage3} alt="Atrium House Image 1" />
//           <h1>John Brown <br />Founder + Director</h1>
//           <p>John is a registered architect,<br />age-in-place researcher, and <br />
//           Dean of the University of <br />
//                 Calgary’s School of Architecture <br />
//              Planning and Landscape. He <br />
//                   leads design research, early <br />
//                    project design, and business <br />
//                     development.</p>
          
//           </div>
//           <div className='team-content'>
         
//             <img src={AtriumImage4} alt="Atrium House Image 1" />
//           <h1>Matthew North <br />Founder + Director</h1>
//           <p>Matthew is a registered architect <br />
// and a construction expert. He <br />
// leads detail project design, <br />
// construction management, and <br />
// prefabrication logistics.</p>
          
//           </div>
//           <div className='team-content'>
         
//             <img src={AtriumImage5} alt="Atrium House Image 1" />
//           <h1>Jim Gibson <br />Director</h1>
//           <p>Jim is a published author,<br />
// entrepreneur, founder, venture <br />
// financier,and community builder. <br />
// He is a member of Garden Loft’s <br />
// Board of Directors.</p>
          
//           </div>
//           <div className='team-content'>
          
//             <img src={AtriumImage6} alt="Atrium House Image 1" />
//           <h1>James Lochrie <br /> Director</h1>
//           <p>James Lochrie is a technology <br />
// entrepreneur and founder / <br />
// Managing Partner of Thin Air <br />
// Labs. He is a member of Garden <br />
// Loft’s Board of Directors.</p>
//           </div>
//         </div>
//         </div>
//        <div>
//     <div className="btn-content">
//       <button className="button-about">Call <br /> Us</button>
//     </div>

//     <div className="history">
//           <div className='team-content'>
//             <h1>Our History</h1>
//             <h1>Carina, John and Matthew <br />co-founded Housebrand, <br />a residential design/ <br />build firm, in 1997</h1>
//           <p>Over its 25-year history,<br />Housebrand has completed over <br />250 residential projects using <br />a unique practice model that <br />combined architectural design <br />with construction management, <br />real estate services, and furniture <br />retailing.</p>
//           <div className="projects-section">
//         <div className="projects-content">
//           <h2>Our Projects</h2>
//           <p><em>We have recently completed backyard suites in Calgary <br/> and Edmonton</em></p>     
//       <Swiper
//             modules={[Pagination]}
//             spaceBetween={10}
//             pagination={{ clickable: true }}
//             slidesPerView={1.2}
//             centeredSlides={true}
//             loop={true}
//             style={{ paddingBottom: '20px' }}
//           >
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage1} alt="Project 1" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage2} alt="Project 2" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage3} alt="Project 3" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage4} alt="Project 4" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage5} alt="Project 5" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage6} alt="Project 6" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage7} alt="Project 7" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage8} alt="Project 8" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage9} alt="Project 9" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage10} alt="Project 10" className="project-image project-landscape" />
              
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
              
//                 <img src={projectImage13} alt="Project 13" className="project-image project-landscape" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage11} alt="Project 11" className="project-image" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div style={{ textAlign: 'center' }}>
//                 <img src={projectImage12} alt="Project 12" className="project-image" />
//               </div>
//             </SwiperSlide>
           

//           </Swiper>
//       </div>
          
//           </div>
//       </div>
    
//     </div>
       
//       </section>
     
    
//       <Footer />
//     </>
//   );
// };

// export default About;


import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AtriumImage1 from '/images/Atrium 1.jpg';
import AtriumImage2 from '../../assets/images/Carina2.jpg';
import AtriumImage3 from '../../assets/images/John+Brown.jpg';
import AtriumImage4 from '../../assets/images/Mattew.jpg';
import AtriumImage5 from '../../assets/images/jim.jpg';
import AtriumImage6 from '../../assets/images/james.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import projectImage1 from '../../assets/images/backyard 21.jpg';
import projectImage2 from '../../assets/images/backyard 22.jpg';
import projectImage3 from '../../assets/images/backyard 23.jpg';
import projectImage10 from '../../assets/images/backyard 30.jpg';
import projectImage12 from '../../assets/images/backyard 32.jpg';
import projectImage13 from '../../assets/images/backyard 33.jpg';
import AtriumImage7 from '../../assets/images/Prototype+video+still.jpg';
import BrendaStrafford from '/images/BrendaStraffordLogo.png';
import ThinAirLabs from '../../assets/images/thinairlab logo.jpeg';



const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-about">
        <div className="hero-about-img">
          <img src={AtriumImage1} alt="Atrium House Image 1" />
          <div className="hero-about-content">
            <h1>We are architects, <br />builders, and <br />software developers</h1>
          </div>
          <div className='about-content'>
            <p>We create high-quality places to live that empower dignity, independence and belonging in the lives of seniors and others with differing abilities.</p>
          </div>
        </div>
        <div className="teams">
          <h3>Our Team</h3>
          <div className='team-content'>
            <img src={AtriumImage2} alt="Carina van Olm" />
            <h1>Carina van Olm <br />Founder + Director</h1>
            <p>Carina has a background in small business operations and interior design. She leads the Garden Loft Executive Team and is responsible for business management and interior design.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage3} alt="John Brown" />
            <h1>John Brown <br />Founder + Director</h1>
            <p>John is a registered architect, age-in-place researcher, and Dean of the University of Calgary’s School of Architecture Planning and Landscape. He leads design research, early project design, and business development.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage4} alt="Matthew North" />
            <h1>Matthew North <br />Founder + Director</h1>
            <p>Matthew is a registered architect and a construction expert. He leads detail project design, construction management, and prefabrication logistics.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage5} alt="Jim Gibson" />
            <h1>Jim Gibson <br />Director</h1>
            <p>Jim is a published author, entrepreneur, founder, venture financier, and community builder. He is a member of Garden Loft’s Board of Directors.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage6} alt="James Lochrie" />
            <h1>James Lochrie <br />Director</h1>
            <p>James Lochrie is a technology entrepreneur and founder / Managing Partner of Thin Air Labs. He is a member of Garden Loft’s Board of Directors.</p>
          </div>
        </div>
      </section>
      <section className="additional-content">
        <div className="btn-content">
          <button className="button-about">Call <br /> Us</button>
        </div>
        <div className="history">
          <h3>Our History</h3>
          <h1>Carina, John and Matthew <br />co-founded Housebrand, <br />a residential design/build firm, in 1997</h1>
          <p>Over its 25-year history, <br />Housebrand has completed over <br /> 250 residential projects using <br />a unique practice model that <br />combined architectural design <br />with construction management, <br />real estate services, and <br />furniture retailing.</p>
        </div>

        <div className="history-section">
         
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              pagination={{ clickable: true }}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              style={{ paddingBottom: '20px' }}
            >
              {[projectImage1, projectImage2, projectImage3, projectImage10, projectImage13, projectImage12].map((image, index) => (
                <SwiperSlide key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <img src={image} alt={`Project ${index + 1}`} className="project-image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="history-content">
            <p>Housebrand’s work has been <br /> published internationally and <br />recognized with an Award of <br />Excellence in Innovation from <br />the Royal Architectural Institute <br />of Canada. It was the first <br />Canadian firm to receive a Rising <br />Star Leadership Award from <br />Residential Architect Magazine.</p>
            <div className='history-indent'>
            <p>In 2022, Carina, John, <br /> and Matthew transitioned <br />Housebrand into Garden Loft</p>
            </div>
        <div className="btn-content">
          <button className="button-about">Book a <br /> preliminary <br />consult</button>
        </div>


          </div>
          <div className="research">
          <h3>Our Reasearch</h3>
          <h1>Garden Loft originated as <br />a research project at the <br />University of Calgary</h1>
          <p>In 2014, John Brown’s research <br />lab began constructing and <br />user-test two V1 and V2 mock- <br />ups of a backyard portable <br />living unit in collaboration with <br />researchers from the Cumming <br />School of Medicine.</p>
        </div>
        <div className="research-section">
         
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              pagination={{ clickable: true }}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              style={{ paddingBottom: '20px' }}
            >
              {[projectImage1,projectImage2, projectImage3,projectImage10, projectImage13, projectImage12].map((image, index) => (
                <SwiperSlide key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <img src={image} alt={`Project ${index + 1}`} className="project-image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="research-content">
            <p>The test results were <br /> used to refine the design of <br />the unit and its physical support <br /> features. In 2015, this work was <br /> awarded a City of Calgary <br /> Mayor’s Urban Design Award <br />in Housing Innovation.</p> 
            <div className='research-indent'>
            <p>In 2016 Housebrand <br /> constructed a fully-functioning <br /> V3 prototype of the portable <br />living unit that was field-tested <br /> on several sites with multiple <br />residents of differing abilities. <br />The findings of the V3 prototype <br /> field-testing were incorporated <br /> into the current production <br /> version of Garden Loft.</p>
            </div>

            <div className="research-img">
          <img src={AtriumImage7} alt="prototype" />
         <div className='research-indent'>
            <p>In 2022 and 2023, five <br /> production Garden Lofts were <br /> prototyped for backyard clients <br /> in Calgary and Edmonton. This <br /> version of Garden Loft received <br /> the City of Calgary’s 2023 <br />Accessibility Award.</p>
          </div>
        </div>
        <div className="btn-content">
          <button className="button-about">Visit our<br /> showsuite and  <br />sales center</button>
        </div>
        <div className="partners">
          <h3>Our Partners</h3>
          <div className="partnerslogoDiv">
            <img src={ThinAirLabs} alt="Thin Air Labs Logo" />
      </div>
         <p>Thin Air Labs is a <br />Calgary-based venture <br />capital and services firm <br />creating human value <br />by helping early-stage <br />startups scale globally.</p>
         
         <div className="partnerslogoDiv">
            <img src={BrendaStrafford} alt="Brenda Strafford Logo" />
      </div>
         <p>The Brenda Strafford <br /> Foundation is a <br />Calgary-based registered <br /> Canadian Charitable <br /> Oganization whose core <br /> business is senior’s care.</p>
         <div className="btn-content">
          <button className="button-about">Visit our FAQ</button>
        </div>

        </div> 
        </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

