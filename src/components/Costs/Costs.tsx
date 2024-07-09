import React from "react";
import "./Costs.css";
// import GLCost from "../../assets/images/gl-cost.png";
import GLImage2 from "../../assets/images/backyard 34v2.jpg";
import { Link } from "react-router-dom";

const Costs: React.FC = () => {
  return (
    <section id="compare-costs">
      <div className="costs-container">
        <img className="costs-img" src={GLImage2} alt="GL" />
        <div className="costs-text">
          <h2>
            Garden Lofts can be more <br />
            affordable than living in a care <br />
            facility
          </h2>
        </div>
      </div>

      <div className="desktop-cost">
        <div className="desktop-description-cost">
          <h2>
            Garden Lofts can be more <br />
            affordable than living in a care <br />
            facility
          </h2>
          <button className="button-costs desktop-cost-button">
            <Link to="/learn-more#compare-costs">
              Compare <br /> our costs
            </Link>
          </button>
        </div>
        <div className="desktop-image-cost">
          <img src={GLImage2} alt="Award Image" />
        </div>
      </div>
      <div className="costs-content">
        <button className="button-costs">
          <Link to="/learn-more#compare-costs">
            Compare <br /> our costs
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Costs;
