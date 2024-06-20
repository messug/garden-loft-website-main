import React from "react";
import "./Units.css";
import GL380 from "../../assets/images/backyard 20 (edited).jpg";
import GL480s from "../../assets/images/backyard 18.jpg"
import GL480f from "../../assets/images/backyard 19.jpg";
// import GL480 from "../../assets/images/gl480.png";
const Units: React.FC = () => {
  return (
    <section id="two-units">
      <div className="unit-title">
        <h1>Our Units</h1>
        
        {/* <p>Garden Lofts come in 2 sizes:</p> */}
      </div>
      <div className="unit-wrapper">
      <div className="gl-one">
        <img src={GL480s} alt="GL380" />
        <div className="title-gl">GL480-f</div>
        <p className="gl-specs">
          one bedroom with front wall entry <br />
          480 sq.ft. footprint <br/> 14’-0” x 33’-6” <br />
          full kitchen + laundry <br />
          17 safety and support features <br />
          award-winning accessible design
          <br/>
          customizable exterior and <br/> interior finishes <br/> left or right hand plan available
        </p>
      </div>
      <div className="gl-one">
        <img src={GL480f} alt="GL380" />
        <div className="title-gl">GL480-s</div>
        <p className="gl-specs">
          one bedroom with side wall entry <br /> 480 sq.ft. footprint <br/>  14’-0” x 33’-6” <br />
          full kitchen + laundry <br />
          17 safety and support features <br />
          award-winning accessible design
          <br/>
          customizable exterior and <br/> interior finishes <br/> left or right hand plan available
        </p>
      </div>
      <div className="gl-two">
        <img src={GL380} alt="GL380" />
        <div className="title-gl">GL380</div>
        <p className="gl-specs">
          studio with front wall entry <br/> 386 sq.ft. footprint <br/> 14’-0” x 27’-6” <br />
          full kitchen + laundry <br />
          17 safety and support features <br />
          award-winning accessible design
          <br/>
          customizable exterior and <br/>interior finishes <br/> left or right hand plan available
        </p>
      </div>
      </div>
    </section>
  );
};

export default Units;
