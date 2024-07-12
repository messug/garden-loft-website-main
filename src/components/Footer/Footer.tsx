


// import GLLogo from "../../assets/gl-john-logo.png";
// import { Link, useLocation } from 'react-router-dom';
// import "./Footer.css";
// import { useEffect } from 'react';


// const scrollToTop = () => {
//   window.scrollTo(0, 0)
// }

// const scrollToSection = (id: string) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };

// const Footer = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const hash = location.hash;
//     if (hash) {
//       scrollToSection(hash.substring(1));
//     }
//   }, [location]);

//   return (
//     <>
//       <div className="footer">
//         <div className="footer-content">
//           <div className="footer-column">
//           <h2>
//             <Link to="/"  onClick={() => scrollToSection('')}>Garden Loft Backyard Suites</Link>
//           </h2>
//           <h3>
//             <Link to="/#support-features" onClick={() => scrollToSection('support-features')}>Our Support Features</Link>
//           </h3>
//           <h3>
//             <Link to="/#garden-loft-advantage" onClick={() => scrollToSection('garden-loft-advantage')}>The Garden Loft Advantage</Link>
//           </h3>
//           <h3>
//             <Link to="/#award" onClick={() => scrollToSection('award')}>Our 2024 Award</Link>
//           </h3>
//           <h3>
//             <Link to="/#two-units" onClick={() => scrollToSection('two-units')}>Our Units</Link>
//           </h3>
//           <h3>
//             <Link to="/#projects" onClick={() => scrollToSection('projects')}>Our Projects</Link>
//           </h3>
//           <h3>
//             <Link to="/#compare-costs" onClick={() => scrollToSection('compare-costs')}>Compare Our Costs</Link>
//           </h3>
//           <h3>
//             <Link to="/#four-step-process" onClick={() => scrollToSection('four-step-process')}>Our 4 Step Process</Link>
//           </h3>
//           <h3>
//             <Link to="/#rules-and-grants" onClick={() => scrollToSection('rules-and-grants')}>Calgary Zoning + Grants</Link>
//           </h3>
//           <h3>
//             <Link to="/#garden-lofters" onClick={() => scrollToSection('garden-lofters')}>Meet Our Garden Lofters</Link>
//           </h3>
//     </div>
//      <div className="footer-column">
//           <h2>
//             <Link to="/village" onClick={scrollToTop}>Garden Loft Villages</Link>
       
//           </h2>
//           <h2>
//             <Link to="/atrium"  onClick={scrollToTop}>Atrium House by Garden Loft</Link>
//           </h2>
// {/* 
//           <h2>
//             <Link to="/about" style={{ textDecoration: "none", color: "#0e0101b8" }} onClick={() => scrollToSection('')}>About</Link>
//           </h2> */}
//           <h2><Link onClick={scrollToTop} to="about" >
//          About
//         </Link></h2>
//           <h3>
//             <Link to="/about#our-team" onClick={() => scrollToSection('our-team')}>Our Team</Link>
//           </h3>
//           <h3>
//             <Link to="/about#our-history" onClick={() => scrollToSection('our-history')}>Our History</Link>
//           </h3>
//           <h3>
//             <Link to="/about#our-partners" onClick={() => scrollToSection('our-partners')}>Our Partners</Link>
//           </h3>
//           <h2>
//             <Link to="/learn-more"  onClick={scrollToTop}>Learn More</Link>
//           </h2>
//           <h2>
//             <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
//           </h2>
//           </div>
//           <div className="footer-column">
//             <h2>Request a:</h2>
//             <div>
//               <h3>
//                 <Link to="/phone-call" onClick={scrollToTop}>Phone Call</Link>
//               </h3>
//               <h3>
//                 <Link to="/brochure" onClick={scrollToTop}>Brochure</Link>
//               </h3>
//               <h3>
//                 <Link to="/feasibility-report" onClick={scrollToTop}>Feasibility Report</Link>
//               </h3>
//               <h3>
//                 <Link to="/book-tour" onClick={scrollToTop}>Book A Tour</Link>
//               </h3>
//               <h3>
//                 <Link to="/initial" onClick={scrollToTop}>Initial Meeting</Link>
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="logo-section">
//         <div className="logos">
//           <div className="logos-title">
//             <img src={GLLogo} alt="Logos" />
//             {/* <h1>garden loft</h1> */}
//           </div>
//           <div className="address">
//             <p>
//               838 11 Ave SW {"("}by appt only{")"} <br /> (403) 229-4330 <br />
//               info@gardenloft.ca
//             </p>
//           </div>
//         </div>
//         <div className="copyright"></div>
//       </div>
//     </>
//   );
// };

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
            <Link to="/" onClick={scrollToTop}>Garden Loft Backyard Suites</Link>
          </h2>
          <h3>
            <Link to="/learn-more#support-features"  onClick={() => scrollToSection('support-features')}  >Our Support Features</Link>
          </h3>
          <h3>
            <Link to="/#garden-loft-advantage" onClick={() => scrollToSection('garden-loft-advantage')}>The Garden Loft Advantage</Link>
          </h3>
          <h3>
            <Link to="/learn-more#award" >Our 2024 Award</Link>
          </h3>
          <h3>
            <Link to="/#two-units" onClick={() => scrollToSection('two-units')}>Our Units</Link>
          </h3>
          <h3>
            <Link to="/#projects" onClick={() => scrollToSection('projects')}>Our Projects</Link>
          </h3>
          <h3>
            <Link to="#installation"  onClick={() => scrollToSection('installation')}  >Our Installation Process</Link>
          </h3>
          <h3>
            <Link to="/learn-more#compare-costs" onClick={() => scrollToSection('compare-costs')}>Compare Our Costs</Link>
          </h3>
          <h3>
            <Link to="/learn-more#finance-options" >Finance Options</Link>
          </h3>
          <h3>
            <Link to="/learn-more#new-zoning-rules">New Zoning Rules</Link>
          </h3>
          <h3>
            <Link to="/#garden-lofters" onClick={() => scrollToSection('garden-lofters')}>Meet Our Garden Lofters</Link>
          </h3>
          <h3>
            <Link to="/reselling">Reselling Your Garden Loft</Link>
          </h3>
    </div>
     <div className="footer-column">
          <h2>
            <Link to="/village" onClick={scrollToTop}>Garden Loft Villages</Link>
          </h2>
          <h2>
            <Link to="/atrium"  onClick={scrollToTop}>Atrium House by Garden Loft</Link>
          </h2>
          <h2><Link to="#about"  onClick={scrollToTop}>About Us</Link></h2>
          <h3>
            <Link to="/about#our-team" onClick={scrollToTop}>Our Team</Link>
          </h3>
          <h3>
            <Link to="/about#our-history" onClick={scrollToTop} >Our Professional History</Link>
          </h3>
          <h3>
            <Link to="/about#research"  onClick={scrollToTop}>Our Research History</Link>
          </h3>
          <h3>
            <Link to="/about#our-partners"  onClick={scrollToTop}>Our Partners</Link>
          </h3>
          <h2>
            <Link to="/learn-more"  onClick={scrollToTop}>Learn More</Link>
          </h2>
          <h2>
            <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
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
              <h3>
                <Link to="/phone-call" onClick={scrollToTop}>Contact Our Mortgage Specialist</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-section">
        <div className="logos">
          <div className="logos-title">
            <img src={GLLogo} alt="Logos" />
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
