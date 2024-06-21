import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom'; 
import { Pagination, Navigation } from 'swiper/modules';
import livingRoomImage from '../../assets/images/backyard 5.jpg'; // Ensure this path is correct
import livingRoomImage1 from '../../assets/images/backyard 2.jpg'; // Ensure this path is correct
import livingRoomImage2 from '../../assets/images/backyard 3.jpg'; // Ensure this path is correct
import livingRoomImage3 from '../../assets/images/backyard 4.jpg'; // Ensure this path is correct
import livingRoomImage5 from '../../assets/images/Babiak video still 1 cropped.jpg'; // Ensure this path is correct
import livingRoomImage6 from '../../assets/images/backyard 6.jpg'; // Ensure this path is correct
import './Advantage.css'

const Advantage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/phone-call'); // Navigate to the contact page
    window.scrollTo(0, 0); // Scroll to the top of the page
  
  };
  return (
    <section id="garden-loft-advantage" style={{ textAlign: 'center', width: "100vw"}}>
      <h1 className="gl-advantage-header">The Garden Loft <br /> Backyard Advantage</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        style={{ paddingBottom: '0px' }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 5,
          },}}
      >
        <SwiperSlide>
          <div className="advantage-slide">
            <img src={livingRoomImage5} alt="Living Room" className="advantage-image" />
            <div className="advantage-title black-text ">Community <br/>Connected</div>
            <div className="advantage-text">
              <p>Garden Loft’s backyard location is close to family, without being intrusive. Our digital platform offers online activities and gatherings</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage-slide">
            <img src={livingRoomImage6} alt="Living Room" className="advantage-image" />
            <div className="advantage-title black-text">Non-Institutional <br/>Living</div>
            <div className="advantage-text">
              <p>Garden Lofts have a modern living space that opens out to a shared family garden. They have a full kitchen, laundry, and lots of storage</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage-slide">
            <img src={livingRoomImage1} alt="Living Room" className="advantage-image" />
            <div className="advantage-title">Prefabrication <br/>Efficiency</div>
            <div className="advantage-text">
              <p>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage-slide">
            <img src={livingRoomImage2} alt="Living Room" className="advantage-image" />
            <div className="advantage-title">Low-Impact <br/>Installation</div>
            <div className="advantage-text">
              <p>Garden Lofts are delivered to the site by truck and craned into place with minimal on-site disruption. They can be resold and moved when no longer needed</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage-slide">
            <img src={livingRoomImage3} alt="Living Room" className="advantage-image" />
            <div className="advantage-title">Research-Based<br/> Design</div>
            <div className="advantage-text">
              <p>Garden Loft's safety and support features were developed and tested at the University of Calgary in collaboration with medical researchers</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage-slide">
            <img src={livingRoomImage} alt="Living Room" className="advantage-image" />
            <div className="advantage-title black-text">Technology-Enabled <br/>Support</div>
            <div className="advantage-text">
              <p>Garden Loft's built-in safety and support features enable someone with differing abilities to live with more independence</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      <div style={{ textAlign: 'center', alignContent: "center", marginTop: '1px' }}>
        <button className="button-advantage" onClick={handleButtonClick}
        >
          Call Us
        </button>
      </div>
    </section>
  );
};

export default Advantage;
