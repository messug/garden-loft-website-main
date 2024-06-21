import { Link } from "react-router-dom";
import "./Award.css";
import AwardImage from "../../assets/images/alt backyard 17.jpg"


const Award = () => {
  return (
    <>
    <section className="award-section"  id="award">
      <div className="award-content">
        <h1>
          Garden Loft received the 2024 City of Calgary Accessibility Award
        </h1>
        <div className="learn-btn">
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
    <div className="desktop-view">
    <div className="desktop-description">
      <h1>
          Garden Loft received the 2024 City of Calgary Accessibility Award
        </h1>
        <button className="award-button desktop-button"> <Link to="/learn-more#awards"  >Learn more <br/>about our <br/> awards</Link></button>
      </div>
      <div className="desktop-image">
        <img src={AwardImage} alt="Award Image" />
      </div>
    </div>
      <div style={{ textAlign: 'center' }}>
      {/* <Link to="/learn-more#awards" className="award-button">
      Learn more <br />about our <br /> awards        </Link> */}
    <button className="award-button"> <Link to="/learn-more#awards"  >Learn more <br/>about our <br/> awards</Link></button>
    </div>
    </>
  );
};

export default Award;

// import { Link } from "react-router-dom";
// import "./Award.css";

// const Award = () => {
//   return (
//     <>
//       <section className="award-section" id="award">
//         <div className="award-content">
//           <h1>
//             Garden Loft received the 2024 City of Calgary Accessibility Award
//           </h1>
//           <div className="learn-btn">
//             <Link to="/learn-more#awards" className="learn-more-btn">
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>
//       <div style={{ textAlign: 'center' }}>
//         <Link to="/learn-more#awards" className="award-button">
//           Learn more <br />about our <br /> awards
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Award;
