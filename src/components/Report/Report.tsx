import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Interior1 from '../../assets/images/GardenLoft-Interior1.jpg';
import Interior2 from '../../assets/images/GardenLoft-Interior2.jpg'; 

import './Report.css';

const Report: React.FC = () => {
  return (
    <div className="report-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={6}
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
          <p className="report-title">Combining light-filled open plan loft-living with safety and peace of mind</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior2} alt="Loft Image 2" className="report-image" />
          </div>
          <p className="report-title">Combining light-filled open plan loft-living with safety and peace of mind</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior1} alt="Loft Image 3" className="report-image" />
          </div>
          <p className="report-title">Combining light-filled open plan loft-living with safety and peace of mind</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior2} alt="Loft Image 4" className="report-image" />
          </div>
          <p className="report-title">Combining light-filled open plan loft-living with safety and peace of mind</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="report-slide">
            <img src={Interior1} alt="Loft Image 5" className="report-image" />
          </div>
          <p className="report-title">Combining light-filled open plan loft-living with safety and peace of mind</p>
        </SwiperSlide>
      </Swiper>
  
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="report-button">Request a  <br />Feasibility <br /> Report</button>
      </div>
    </div>
  );
};

export default Report;
