import './Process.css';

const Process = () => {
  return (
    <section className="process-section">
      <h1>Our <br/> 4 Step Process</h1>
      <div className="steps">
        <div className="step">
          <div className="step-content"> 
            <h3><span className="step-number"> 1</span> Feasibility Analysis + Design Selections</h3>
            <p>
              <em>
                Our free Feasibility Report will tell you where and how we can locate a Garden Loft on your property. Work with our design team to select your fixtures and finishes.
              </em>
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3><span className="step-number">2</span> Permits + <br /> Approvals</h3>
            <p>
              <em>
                We take care of obtaining all the development and building permits and approvals. Garden Lofts are now permitted in all Calgary neighborhoods as legal secondary suites.
              </em>
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3><span className="step-number"> 3</span> Fabrication + <br /> Site Preparation</h3>
            <p>
              <em>
                While we build your Garden Loft to order in our Calgary-based factory, we also prepare your site, install the pile foundations, and rough-in the utilities.
              </em>
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3><span className="step-number">4</span> Installation + <br /> Site Completion</h3>
            <p>
              <em>
                We deliver your Garden Loft by truck and crane it into place. We hook up the utilities, install any decking, stairs, or ramps, and prepare the unit for occupancy.
              </em>
            </p>
          </div>
        </div>
      </div>

      <div className="process">
        <button className="button-process">Tour Our <br /> Showsuite</button>

      </div>
    </section>
  );
};

export default Process;
