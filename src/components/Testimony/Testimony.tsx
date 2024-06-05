import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from '/images/Elizabeth.png'; 
import image2 from '/images/Lofter1.png';
import image3 from '/images/Pat.png'; 
import './Testimony.css';

const Testimony: React.FC = () => {
  return (
    <div id="garden-lofters">
      <h1 className="testimony-title">Meet Our Garden Lofters:</h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={6}
        pagination={{ clickable: true }}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        style={{ paddingBottom: '30px' }}
      >
        <SwiperSlide>
          <div className="testimony-slide">
            <img src={image1} alt="Elizabeth Rodier" className="testimony-image" />
            <div className="testimony-text">
              <h3>ELIZABETH RODIER</h3>
              <p>Living in my Garden Loft has been a wonderful experience. The design and efficiency are unmatched, and I appreciate the low impact on the environment.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony-slide">
            <img src={image2} alt="Shari Lutmer" className="testimony-image" />
            <div className="testimony-text">
              <h3>SHARI LUTMER</h3>
              <p>Living n my Garden Loft has been a wonderful experience. The design and efficiency are unmatched, and I appreciate the low impact on the environment.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony-slide">
            <img src={image3} alt="Pat McQueen" className="testimony-image" />
            <div className="testimony-text">
              <h3>PAT MCQUEEN</h3>
              <p>My Garden Loft gives me the peace of mind and autonomy that I craved as I began to age and I feel fortunate to be close to my loved ones all the while in a comfortable home.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony-slide">
            <img src={image2} alt="Ruth S." className="testimony-image" />
            <div className="testimony-text">
              <h3>RUTH S</h3>
              <p>I am delighted with my Garden Loft. It offers me the independence I desire with the added benefit of being eco-friendly.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony-slide">
            <img src={image2} alt="John Doe" className="testimony-image" />
            <div className="testimony-text">
              <h3>JOHN DOE</h3>
              <p>Garden Lofts have exceeded my expectations. The prefabrication efficiency and quality are excellent, and the living experience is outstanding.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="testimony-button">Visit our FAQ</button>
      </div>
    </div>
  );
};

export default Testimony;

