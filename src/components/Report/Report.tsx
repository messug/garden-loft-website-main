import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom'; 
import { Pagination, Navigation } from 'swiper/modules';
import Interior1 from '../../assets/images/backyard 8.jpg';
import Interior2 from '../../assets/images/backyard 9.jpg'; 
import Interior3 from '../../assets/images/backyard 10.jpg'; 
import Interior4 from '../../assets/images/backyard 11.jpg'; 
import Interior5 from '../../assets/images/backyard 12.jpg'; 
import Interior6 from '../../assets/images/backyard 13.jpg'; 
import Interior7 from '/images/backyard 14_16a.jpg'; 
import Interior8 from '/images/backyard 15_16.jpg'; 
import './Report.css';

const Report: React.FC = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/feasibility-report'); // Navigate to the contact page
    window.scrollTo(0, 0); // Scroll to the top of the page
  
  };
  return (
    <div className="report-container">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        slidesPerView={1.25}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        style={{ paddingBottom: '20px' }}
        breakpoints={{
          // 768: {
          //   slidesPerView: 2,
          // },
          1024: {
            slidesPerView: 1.7,
            spaceBetween: 10,
          },}}
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
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      <div className="carousel-text">
        <p className="report-title">Combining light-filled <br/>open plan loft-living with <br/>safety and peace of mind</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="report-button"   onClick={handleButtonClick}>Request a <br />Feasibility <br /> Report</button>
      </div>
    </div>
  );
};

export default Report;

