// import GLLogo from "../../assets/gl-john-logo.png";
// import { Link } from 'react-router-dom';
// import "./Footer.css";

// const scrollToTop = () => {
//   window.scrollTo(0, 0)
// }

// const scrollToSection = (id: string) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };





// function Footer() {
//   return (
//     <>
//       <div className="footer">
//         <div className="footer-content">
//           <h2>
//             <Link onClick={scrollToTop} to="/" style={{ textDecoration: "none", color: "#0e0101b8" }}>Garden Loft Backyard Suites</Link>
//             </h2>
//           <h3>
//             <a href="#support-features">Our Support Features</a>
//           </h3>
//           <h3>
//             <a href="#garden-loft-advantage">The Garden Loft Advantage</a>
//           </h3>
//           <h3>
//             <a href="#award">Our 2024 Award</a>
//           </h3>
//           <h3>
//             <a href="#two-units">Our Units</a>
//           </h3>
//           <h3>
//             <a href="#projects">Our Projects</a>
//           </h3>
//           <h3>
//             <a href="#compare-costs">Compare Our Costs</a>
//           </h3>
//           <h3>
//             <a href="#four-step-process">Our 4 Step Process</a>
//           </h3>
//           <h3>
//             <a href="#rules-and-grants">Calgary Zoning + Grants</a>
//           </h3>
//           <h3>
//             <a href="#garden-lofters">Meet Our Garden Lofters</a>
//           </h3>
         
//           <h2><Link onClick={scrollToTop} to="/village" style={{ textDecoration: "none", color: "#0e0101b8" }}>
//           Garden Loft Villages
//         </Link></h2>
//           <h2> <Link onClick={scrollToTop} to="/atrium" style={{ textDecoration: "none", color: "#0e0101b8" }}>
//           Atrium House by Garden Loft
//         </Link></h2>

//         <h2><Link to="/about" style={{ textDecoration: "none", color: "#0e0101b8" }}>About</Link> </h2>
//         <h3>

//         <a onClick={() => scrollToSection("our-team")} href="/about#our-team">
//               Our Team
//             </a>
    

//           </h3>
//           <h3>
//             <a onClick={() => scrollToSection("our-history")} href="/about#our-history">
//               Our History
//             </a>
//           </h3>
//           <h3>
//             <a onClick={() => scrollToSection("our-partners")} href="/about#our-partners">
//               Our Partners
//             </a>
//           </h3>

 
// <h2>
//             <Link onClick={scrollToTop} to="/faq" style={{ textDecoration: "none", color: "#0e0101b8" }}>FAQ</Link>
//           </h2>
//         <div className="footer-content">
//             <h2>Request a:</h2>
//             <div>
//               <h3>
//                 <Link onClick={scrollToTop} to="/phone-call">Phone Call</Link>
//               </h3>
              
//                   <h3>
//                     <Link onClick={scrollToTop} to="/brochure">Brochure</Link>
//                   </h3>
               
                
//                   <h3>
//                     <Link onClick={scrollToTop} to="/feasibility-report">Feasibility Report</Link>
//                   </h3>
              
//                   <h3>
//                     <Link onClick={scrollToTop} to="/book-tour">Book A Tour</Link>
//                   </h3>
              
//                   <h3>
//                     <Link onClick={scrollToTop} to="/initial">Initial Meeting</Link>
//                   </h3>
              
//             </div>
//         </div>
//         </div>
//       </div>
//       <div className="logo-section">
//         <div className="logos">
//           <div className="logos-title">
//             <img src={GLLogo} alt="Logos" />
//             {/* <h1>garden loft</h1> */}
//           </div>
//           <div className="address">
//           <p>
//             838 11 Ave SW {"("}by appt only{")"} <br /> (403) 229-4330 <br />
//             info@gardenloft.ca
//           </p>
//           </div>
//         </div>
//         <div className="copyright">
       
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;


import GLLogo from "../../assets/gl-john-logo.png";
import { Link, useLocation } from 'react-router-dom';
import "./Footer.css";
import { useEffect } from 'react';


const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      scrollToSection(hash.substring(1));
    }
  }, [location]);

  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-column">
          <h2>
            <Link to="/" style={{ textDecoration: "none", color: "#0e0101b8" }} onClick={() => scrollToSection('')}>Garden Loft Backyard Suites</Link>
          </h2>
          <h3>
            <Link to="/#support-features" onClick={() => scrollToSection('support-features')}>Our Support Features</Link>
          </h3>
          <h3>
            <Link to="/#garden-loft-advantage" onClick={() => scrollToSection('garden-loft-advantage')}>The Garden Loft Advantage</Link>
          </h3>
          <h3>
            <Link to="/#award" onClick={() => scrollToSection('award')}>Our 2024 Award</Link>
          </h3>
          <h3>
            <Link to="/#two-units" onClick={() => scrollToSection('two-units')}>Our Units</Link>
          </h3>
          <h3>
            <Link to="/#projects" onClick={() => scrollToSection('projects')}>Our Projects</Link>
          </h3>
          <h3>
            <Link to="/#compare-costs" onClick={() => scrollToSection('compare-costs')}>Compare Our Costs</Link>
          </h3>
          <h3>
            <Link to="/#four-step-process" onClick={() => scrollToSection('four-step-process')}>Our 4 Step Process</Link>
          </h3>
          <h3>
            <Link to="/#rules-and-grants" onClick={() => scrollToSection('rules-and-grants')}>Calgary Zoning + Grants</Link>
          </h3>
          <h3>
            <Link to="/#garden-lofters" onClick={() => scrollToSection('garden-lofters')}>Meet Our Garden Lofters</Link>
          </h3>
    </div>
     <div className="footer-column">
          <h2>
            <Link to="/village" style={{ textDecoration: "none", color: "#0e0101b8" }} onClick={() => scrollToSection('')}>Garden Loft Villages</Link>
          </h2>
          <h2>
            <Link to="/atrium" style={{ textDecoration: "none", color: "#0e0101b8" }} onClick={() => scrollToSection('')}>Atrium House by Garden Loft</Link>
          </h2>
{/* 
          <h2>
            <Link to="/about" style={{ textDecoration: "none", color: "#0e0101b8" }} onClick={() => scrollToSection('')}>About</Link>
          </h2> */}
          <h2><Link onClick={scrollToTop} to="about" style={{ textDecoration: "none", color: "#0e0101b8" }}>
         About
        </Link></h2>
          <h3>
            <Link to="/about#our-team" onClick={() => scrollToSection('our-team')}>Our Team</Link>
          </h3>
          <h3>
            <Link to="/about#our-history" onClick={() => scrollToSection('our-history')}>Our History</Link>
          </h3>
          <h3>
            <Link to="/about#our-partners" onClick={() => scrollToSection('our-partners')}>Our Partners</Link>
          </h3>

          <h2>
            <Link to="/faq" style={{ textDecoration: "none", color: "#0e0101b8" }} onClick={() => scrollToSection('')}>FAQ</Link>
          </h2>
          </div>
          <div className="footer-column">
            <h2>Request a:</h2>
            <div>
              <h3>
                <Link to="/phone-call" onClick={scrollToTop}>Phone Call</Link>
              </h3>
              <h3>
                <Link to="/brochure" onClick={scrollToTop}>Brochure</Link>
              </h3>
              <h3>
                <Link to="/feasibility-report" onClick={scrollToTop}>Feasibility Report</Link>
              </h3>
              <h3>
                <Link to="/book-tour" onClick={scrollToTop}>Book A Tour</Link>
              </h3>
              <h3>
                <Link to="/initial" onClick={scrollToTop}>Initial Meeting</Link>
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
        <div className="copyright"></div>
      </div>
    </>
  );
};

export default Footer;



