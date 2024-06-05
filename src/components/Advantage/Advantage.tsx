import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import livingRoomImage from '/images/livingRoom.png'; // Ensure this path is correct
import './Advantage.css'

const Advantage: React.FC = () => {
  return (
    <section id="garden-loft-advantage" style={{  textAlign: 'center', width: "100vw" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: '30px', marginTop: '40px' }}>The Garden Loft Advantage</h1>
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
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
      <div style={{ textAlign: 'center', alignContent: "center", marginTop: '1px' }}>
      <button style={{
       background: 'none',
       width: '180px',
       height: '100px',
       backgroundColor: 'rgb(199, 240, 255)',
       border: '1px',
       padding: '20px 30px',
       borderRadius: '50%', /* Adjusted to create an elliptical shape */
       cursor: 'pointer',
       fontSize: '1.3rem'
}}>
  Call Us </button>

      </div>
    </section>
  );
};

export default Advantage;
