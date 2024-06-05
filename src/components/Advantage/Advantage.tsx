import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import livingRoomImage from '../../assets/images/alt backyard 5.jpg'; // Ensure this path is correct
import livingRoomImage1 from '../../assets/images/backyard 2.jpg'; // Ensure this path is correct
import livingRoomImage2 from '../../assets/images/backyard 3.jpg'; // Ensure this path is correct
import livingRoomImage3 from '../../assets/images/backyard 4.jpg'; // Ensure this path is correct
import livingRoomImage4 from '../../assets/images/backyard 8.jpg'; // Ensure this path is correct
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
            <img src={livingRoomImage} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px', objectFit: 'contain' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Community Connected</h3>
            <p style={{ textAlign: 'center' }}>Garden Loft’s backyard location is close
to family, without being intrusive. Our digital platform offers online activities and gatherings</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage1} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px',objectFit: 'contain' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Non-Institutional Living</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts have a modern living space that opens out to a shared family garden. They have a full kitchen, laundry, and lots of storage</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage2} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px',objectFit: 'contain' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage3} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px', objectFit: 'contain' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Low-Impact Installation</h3>
            <p style={{ textAlign: 'center' }}>Garden Lofts are delivered to the site by truck and craned into place with minimal on- site disruption. They can be resold and moved when no longer needed</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage4} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px',objectFit: 'contain' }} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Research-Based Design</h3>
            <p style={{ textAlign: 'center' }}>Garden Loft's safety and support features were developed and tested at the University of Calgary in collaboration with medical researchers</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '90vw', height: "50vh", margin: '0 auto', borderRadius: '1px' , objectFit: 'contain'}} />
            <div className="carousel-text">
            <h3 style={{ textAlign: 'center' }}>Technology-Enabled Support</h3>
            <p style={{ textAlign: 'center' }}>Garden Loft's built-in safety and support features enable someone with differing abilities to live with more independence</p>
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
