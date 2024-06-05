import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import livingRoomImage from '/images/livingRoom.png'; // Ensure this path is correct
import './Process.css'

const Process: React.FC = () => {
  return (
    <div id="four-step-process" style={{ textAlign: 'center', width:'100vw' }}>
      <h1 style={{ fontSize: "2rem", marginBottom: '10px', marginTop: '30px', paddingTop: "3rem" }}>Owning a Garden Loft <br />is a 4-Step Process</h1>
      <Swiper
     modules={[Pagination]}
     spaceBetween={12}
     pagination={{ clickable: true }}
     slidesPerView={1.3}
     centeredSlides={true}
    //  loop={true}
     style={{ paddingBottom: '10px' }}
   

      >
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '1rem auto' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 1</strong></h2>
            <h3 style={{ textAlign: 'center', margin: '10px' }}>Feasibility Analysis & Design selection</h3>
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1rem' }}>Our free feasibility analysis will tell you  <br />where and how we can locate a Garden Loft on your property. Work with Our design team to select your fixtures and finishes.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '1rem auto' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 2</strong></h2>
            <h3 style={{ textAlign: 'center', margin: '10px' }}>Feasibility Analysis & Design selection</h3>
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1rem' }}>Our free feasibility analysis will tell you  <br />where and how we can locate a Garden Loft on your property. Work with Our design team to select your fixtures and finishes.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '1rem auto' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 3</strong></h2>
            <h3 style={{ textAlign: 'center', margin: '10px' }}>Feasibility Analysis & Design selection</h3>
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1rem' }}>Our free feasibility analysis will tell you  <br />where and how we can locate a Garden Loft on your property. Work with Our design team to select your fixtures and finishes.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '1rem auto' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 4</strong></h2>
            <h3 style={{ textAlign: 'center', margin: '10px' }}>Feasibility Analysis & Design selection</h3>
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1rem' }}>Our free feasibility analysis will tell you  <br />where and how we can locate a Garden Loft on your property. Work with Our design team to select your fixtures and finishes.</p>
          </div>
        </SwiperSlide>
 </Swiper>
      <div style={{ textAlign: 'center', marginTop: '5px', alignContent: 'center' }}>
      <button style={{
      background: 'rgb(199, 240, 255)', 
      border: '1px',
      width: '180px',
      height: '100px',
      borderRadius: '50%', 
      cursor: 'pointer',
      fontSize: '1.3rem',
      color: 'black',
      marginBottom: '4rem',
      }}>
  Tour our <br /> Showsuite
</button>

      </div>
    </div>
  );
};

export default Process;
