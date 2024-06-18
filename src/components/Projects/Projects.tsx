// Projects.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import projectImage1 from '../../assets/images/backyard 21.jpg';
import projectImage2 from '../../assets/images/backyard 22.jpg';
import projectImage3 from '../../assets/images/backyard 23.jpg';
import projectImage4 from '../../assets/images/backyard 24.jpg';
import projectImage5 from '../../assets/images/backyard 25.jpg';
import projectImage6 from '../../assets/images/backyard 26.jpg';
import projectImage7 from '../../assets/images/backyard 27.jpg';
import projectImage8 from '../../assets/images/backyard 28.jpg';
import projectImage9 from '../../assets/images/backyard 29.jpg';
import projectImage10 from '../../assets/images/backyard 30v2.jpg';
import projectImage11 from '../../assets/images/backyard 31.jpg';
import projectImage12 from '../../assets/images/backyard 32.jpg';
import projectImage13 from '../../assets/images/backyard 33v2.jpg';
import './Projects.css';


const Projects: React.FC = () => {
  return (
    <>
      
      <div className="projects-section" id='projects'>
        <div className="projects-content">
          <h2>Our Projects</h2>
          <p>We have recently completed backyard suites in Calgary <br/> and Edmonton</p>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            pagination={{ clickable: true }}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            style={{ paddingBottom: '0px' }}
          >
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage1} alt="Project 1" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage2} alt="Project 2" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage3} alt="Project 3" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage4} alt="Project 4" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage5} alt="Project 5" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage6} alt="Project 6" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage7} alt="Project 7" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage8} alt="Project 8" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage9} alt="Project 9" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage10} alt="Project 10" className="project-image " />
              
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
              
                <img src={projectImage13} alt="Project 13" className="project-image " />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage11} alt="Project 11" className="project-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: 'center' }}>
                <img src={projectImage12} alt="Project 12" className="project-image" />
              </div>
            </SwiperSlide>
           

          </Swiper>
        </div>
      </div>
   
    </>
  );
};

export default Projects;
