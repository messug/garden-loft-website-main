import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Interior1 from '../../assets/images/backyard 8.jpg';
import Interior2 from '../../assets/images/backyard 9.jpg'; 
import Interior3 from '../../assets/images/backyard 10.jpg'; 
import Interior4 from '../../assets/images/backyard 11.jpg'; 
import Interior5 from '../../assets/images/backyard 12.jpg'; 
import Interior6 from '../../assets/images/backyard 13.jpg'; 
import Interior7 from '../../assets/images/backyard 14v2.jpg'; 
import Interior8 from '../../assets/images/backyard 15v2.jpg'; 
import Interior9 from '../../assets/images/backyard 16v2.jpg'; 
import './Report.css';

const Report: React.FC = () => {
  return (
    <div className="report-container">
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
          <div className="report-slide">
            <img src={Interior1} alt="Loft Image 1" className="report-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior2} alt="Loft Image 2" className="report-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior3} alt="Loft Image 3" className="report-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior7} alt="Loft Image 5" className="report-image " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior8} alt="Loft Image 5" className="report-image " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior9} alt="Loft Image 5" className="report-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior4} alt="Loft Image 4" className="report-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior5} alt="Loft Image 5" className="report-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior6} alt="Loft Image 5" className="report-image" />
          </div>
        </SwiperSlide>
    
   
      </Swiper>
      <div className="carousel-text">
        <p className="report-title">Combining light-filled <br/>open plan loft-living with <br/>safety and peace of mind</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="report-button">Request a <br />Feasibility <br /> Report</button>
      </div>
    </div>
  );
};

export default Report;

