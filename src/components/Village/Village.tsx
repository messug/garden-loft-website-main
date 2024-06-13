import "./Village.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Village1 from '/images/Village-1.jpg'
import Village2 from "../../assets/images/Village 2.jpg";
import Village3 from "/images/Village-3.jpg";
import Village4 from "/images/Village-4.jpg";
import Village5 from "/images/village-5.jpg";
import Village6 from "/images/village-6.jpg";
import Village7 from "/images/village-7.jpg";

function Village() {
  return (
    <>
      <Navbar />
      <section className="hero-village">
        <div className="hero-content">
          <div className="sky-background"></div>
          <img className="hero-video" src={Village1} alt="Village1" />
          <div className="content-village">
            <h1>Garden Loft Villages</h1>
            <p>
              community embedded <br />
              supportive living
            </p>
          </div>
        </div>
      </section>
      <section id="village">
        <div className="village-content">
          <h2>
            Garden Loft creates <br /> small-scale supportive <br /> living
            communities{" "}
          </h2>
          <h3>
            <em>
              A cluster of Garden Loft units <br /> organized around a
              courtyard, <br /> greenspace, or walkway
            </em>
          </h3>
          <img src={Village2} alt="GL-Cost Image" />

          <h3>
            <em>
              All the advantages <br /> of living in a Garden Loft <br />{" "}
              combined with an <br /> intentional community
            </em>
          </h3>
          <button className="button-village-cost">
            Learn more<br/> about Garden <br/> Loft units
          </button>

          <img src={Village3} alt="GL-Cost Image" />
          <h3>
            <em>
              Garden Loft Villages <br /> can be integrated with new or <br />{" "}
              existing community buildings, <br />
              clubhouses, and coffee shops
            </em>
          </h3>
          <img src={Village4} alt="GL-Cost Image" />
          <h2>
            Garden Loft Village <br /> clients are looking for <br /> a
            one-stop-shop <br /> development option for <br /> supportive
            housing{" "}
          </h2>
        </div>
        <div className="workers-list">
          <h3 ><em>We work with: </em></h3>
        </div>
        <div className="client-list">
          <ul className="village-list"><em>
            <li>
              <h4>Developers</h4>
            </li>
            <li>
              <h4>Landowners</h4>
            </li>
            <li>
              <h4>Municipalities</h4>
            </li>
            <li>
              <h4>Municipal districts</h4>
            </li>
            <li>
              <h4>Non-for-profit housing societies</h4>
            </li>
            <li>
              <h4>Faith-based groups</h4>
            </li>
            <li>
              <h4>Local service Clubs</h4>
            </li>
            <li>
              <h4>Senior’s societies</h4>
            </li>
            <li>
              <h4>Housing management bodies</h4>
            </li>
            <li>
              <h4>Existing care facilities</h4>
            </li>
            </em> </ul>

          <button className="button-village-cost">
            Book a <br/>preliminary<br/>consult
          </button>
        </div>
        <div className="village-content">
          <img src={Village5} alt="GL-Cost Image" />
          <h3>
            <em>
              Garden Loft villages are <br/> particularly well suited in rural<br/>
              communities with limited <br/> demand for supportive housing
            </em>
          </h3>
          <button className="button-village-cost call-us">Call us</button>
          <h2 className="dev-gl">
            <br />
            Garden Loft Village Projects in Development
          </h2>
          <h3>
            <em>
              We are currently working on <br/> village projects in Calgary, <br/> southern
              Alberta, and <br /> central British Columbia
            </em>
          </h3>
          <img src={Village6} alt="GL-Cost Image" />
          <h3>Small Town Rental Village</h3>
          <p>
           <em>
            
            10 Garden Loft units in a <br/>  park-like setting adjacent to<br/>an existing care facility<br/>  in order to increase capacity</em>
          </p>
          <img src={Village7} alt="GL-Cost Image" />
          <h3>Country Residential Village</h3>
          <p>
            <em>93 Garden Loft units <br/> augmented with community amenity <br/> buildings on an acreage site<br/>  outside of Calgary</em>
          </p>
          <button className="button-village-cost">Tour our <br/> Showsuite</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Village;
