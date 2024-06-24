import GLCost from "../../assets/images/backyard 35.jpg";
import "./Grants.css";
import { Link } from "react-router-dom";
import GLGrant from "../../assets/images/Learn 6.jpg";

function Grants() {
  return (
    <section id="rules-and-grants">
      <div className="image-container">
        <img src={GLCost} alt="GL-Cost Image" className="background-image" />
        <div className="overlay-text">
          <h1>
            Garden Lofts <br />
            are now permitted <br /> in all Calgary neighborhoods <br />
            {/* and qualify <br />
            for the $10,000 secondary suite grant */}
          </h1>
        </div>
      </div>

      <div className="button-grant">
        <button className="button-safety-grant">
          <Link to="/learn-more#zoning">
            Learn about <br />
            the new rules
          </Link>
        </button>
      </div>
      <div className="grant-h2">
        <h2>
          {" "}
          Garden Lofts are also now
          <br /> permitted in most cities and <br /> towns across Canada
        </h2>
      </div>

      <div className="desktop-grant">
        <div className="desktop-description-grant">
        <h2>
          {" "}
          Garden Lofts are also now
          <br /> permitted in most cities and <br /> towns across Canada
        </h2>
          <button className="button-grant desktop-grant-button">
          <Link to="/learn-more#zoning">
            Learn about <br />
            the new rules
          </Link>
          </button>
        </div>
        <div className="desktop-image-grant">
          <img src={GLGrant} alt="Grant Image" />
          <div className="overlay-text-desktop">
          <h1>
            Garden Lofts <br />
            are now permitted <br /> in all Calgary neighborhoods <br />
            {/* and qualify <br />
            for the $10,000 secondary suite grant */}
          </h1>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Grants;
