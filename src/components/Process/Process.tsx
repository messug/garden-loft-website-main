import './Process.css';
import { useNavigate } from 'react-router-dom'; 



const Process = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/book-tour'); // Navigate to the contact page
    window.scrollTo(0, 0); // Scroll to the top of the page
  
  };
  return (
    <section className="process-section">
      <h1 id='four-step-process'>Our <br/> 4 Step Process</h1>
      <div className="steps">
        <div className="step">
          <div className="step-content"> 
            <h3><span className="step-number"> 1</span> Feasibility Analysis + Design Selections</h3>
            <p>
              
                Our free Feasibility Report will tell you where and how we can locate a Garden Loft on your property. Work with our design team to select your fixtures and finishes
              
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3><span className="step-number">2</span> Permits + <br /> Approvals</h3>
            <p>
              
                We take care of obtaining all the development and building permits and approvals. Garden Lofts are now permitted in all Calgary neighborhoods as legal secondary suites
              
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3><span className="step-number"> 3</span> Fabrication + <br /> Site Preparation</h3>
            <p>
              
                While we build your Garden Loft to order in our Calgary-based factory, we also prepare your site, install the pile foundations, and rough-in the utilities
              
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-content"  >
            <h3><span className="step-number">4</span> Installation + <br /> Site Completion</h3>
            <p>
              
                We deliver your Garden Loft by truck and crane it into place. We hook up the utilities, install any decking, stairs, or ramps, and prepare the unit for occupancy
              
            </p>
          </div>
        </div>
      </div>

      <div className="process">
        <button className="button-process"  onClick={handleButtonClick}>Tour Our <br /> Showsuite</button>

      </div>
    </section>
  );
};

export default Process;
