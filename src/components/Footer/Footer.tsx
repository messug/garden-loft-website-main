import GLLogo from "../../assets/gl-john-logo.png";
import { Link } from 'react-router-dom';
import "./Footer.css";

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };





function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <h2>
            <Link onClick={scrollToTop} to="/" style={{ textDecoration: "none", color: "#0e0101b8" }}>Garden Loft Backyard Suites</Link>
            </h2>
          <h3>
            <a href="#support-features">Our Support Features</a>
          </h3>
          <h3>
            <a href="#garden-loft-advantage">The Garden Loft Advantage</a>
          </h3>
          <h3>
            <a href="#award">Our 2024 Award</a>
          </h3>
          <h3>
            <a href="#two-units">Our Units</a>
          </h3>
          <h3>
            <a href="#projects">Our Projects</a>
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
         
          <h2><Link onClick={scrollToTop} to="/village" style={{ textDecoration: "none", color: "#0e0101b8" }}>
          Garden Loft Villages
        </Link></h2>
          <h2> <Link onClick={scrollToTop} to="/atrium" style={{ textDecoration: "none", color: "#0e0101b8" }}>
          Atrium House by Garden Loft
        </Link></h2>

        <h2><Link to="/about" style={{ textDecoration: "none", color: "#0e0101b8" }}>About</Link> </h2>
        {/* <h3>

        <a onClick={() => scrollToSection("our-team")} href="/about#our-team">
              Our Team
            </a>
    

          </h3>
          <h3>
            <a onClick={() => scrollToSection("our-history")} href="/about#our-history">
              Our History
            </a>
          </h3>
          <h3>
            <a onClick={() => scrollToSection("our-partners")} href="/about#our-partners">
              Our Partners
            </a>
          </h3> */}

 
<h2>
            <Link onClick={scrollToTop} to="/faq" style={{ textDecoration: "none", color: "#0e0101b8" }}>FAQ</Link>
          </h2>
        <div className="footer-content">
            <h2>Request a:</h2>
            <div>
              <h3>
                <Link onClick={scrollToTop} to="/phone-call">Phone Call</Link>
              </h3>
              
                  <h3>
                    <Link onClick={scrollToTop} to="/brochure">Brochure</Link>
                  </h3>
               
                
                  <h3>
                    <Link onClick={scrollToTop} to="/feasibility-report">Feasibility Report</Link>
                  </h3>
              
                  <h3>
                    <Link onClick={scrollToTop} to="/book-tour">Book A Tour</Link>
                  </h3>
              
                  <h3>
                    <Link onClick={scrollToTop} to="/initial">Initial Meeting</Link>
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
            838 11 Ave SW {"("}by appt only{")"} <br /> (403) 229-4330 <br />
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


