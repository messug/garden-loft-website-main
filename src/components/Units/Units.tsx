import React from "react";
import "./Units.css";
import GL380 from "../../assets/images/glmap.png";
// import GL480 from "../../assets/images/gl480.png";
const Units: React.FC = () => {
  return (
    <section id="two-units">
      <div className="unit-title">
        <h1>Our Units</h1>
        
        {/* <p>Garden Lofts come in 2 sizes:</p> */}
      </div>
      <div className="gl-one">
        <img src={GL380} alt="GL380" />
        <div className="title-gl">GL480-f</div>
        <p className="gl-specs">
          one bedroom with <em>front</em> wall entry <br />
          480 sqft | 14’-0” x 33’-6” <br />
          full kitchen + laundry <br />
          17 safety and support features <br />
          award-winning accessibility design
          <br/>
          customizable exterior/interior finishes <br/> left or right hand plan available
        </p>
      </div>
      <div className="gl-two">
        <img src={GL380} alt="GL380" />
        <div className="title-gl">GL480-s</div>
        <p className="gl-specs">
          one bedroom with <em>side</em> wall entry <br /> 480 sqft | 14’-0” x 33’-6” <br />
          full kitchen + laundry <br />
          17 safety and support features <br />
          award-winning accessibility design
          <br/>
          customizable exterior/interior finishes <br/> left or right hand plan available
        </p>
      </div>
      <div className="gl-two">
        <img src={GL380} alt="GL380" />
        <div className="title-gl">GL380</div>
        <p className="gl-specs">
          studio with <em>front</em> way entry <br/> 386 sqft | 14’-0” x 27’-6” <br />
          full kitchen + laundry <br />
          17 safety and support features <br />
          award-winning accessibility design
          <br/>
          customizable exterior/interior finishes <br/> left or right hand plan available
        </p>
      </div>
    </section>
  );
};

export default Units;
