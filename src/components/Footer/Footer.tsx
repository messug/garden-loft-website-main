import GLLogo from "../../assets/gl-john-logo.png";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <h1>Garden Loft Backyard Suites</h1>
          <h3>
            <a href="#support-features">Our Support Features</a>
          </h3>
          <h3>
            <a href="#garden-loft-advantage">The Garden Loft Advantage</a>
          </h3>
          <h3>
            <a href="#two-units">Our Two Units</a>
          </h3>
          <h3>
            <a href="#compare-costs">Compare Our Costs</a>
          </h3>
          <h3>
            <a href="#four-step-process">Our 4 Step Process</a>
          </h3>
          <h3>
            <a href="#rules-and-grants">Calgary Zoning + Grants</a>
          </h3>
          <h3>
            <a href="#garden-lofters">Meet Our Garden Lofters</a>
          </h3>
          <h3>
            <a href="/faq">FAQ</a>
          </h3>
          <h1><a href="/village">Garden Loft Villages</a></h1>
          <h1>Atrium House by Garden Loft</h1>
          <div>
            <h1>Request a :</h1>
            <div className="call-feat">
            <h3>
            <Link to="/phone-call">Phone Call</Link>
            </h3>
            <h3>
            <Link to="/brochure">Brochure</Link>
            </h3>
             <h3>
            <Link to="/feasibility-report">Feasibility Report</Link>
            </h3>
           <h3>
            <Link to="/book-tour">Book A Tour</Link>
           </h3>
           <h3>
            <Link to="/initial-meeting">Initial Meeting</Link>
           </h3>
          </div>
        </div>
        </div>
      </div>
      <div className="logo-section">
        <div className="logos">
          <div className="logos-title">
            <img src={GLLogo} alt="Logos" />
            {/* <h1>garden loft</h1> */}
          </div>
          <div className="address">
          <p>
            838 11 Ave SW {"("}by appointment{")"} <br /> (403) 229-4330 <br />
            info@gardenloft.ca
          </p>
          </div>
        </div>
        <div className="copyright">
       
        </div>
      </div>
    </>
  );
}

export default Footer;
