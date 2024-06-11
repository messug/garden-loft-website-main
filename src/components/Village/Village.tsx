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
          <h1>
            Garden Loft creates <br /> small-scale supportive <br /> living
            communities{" "}
          </h1>
          <h3>
            <em>
              A cluster of Garden Loft units <br /> organized around a
              courtyard, <br /> greenspace, or walkway
            </em>
          </h3>
          <img src={Village2} alt="GL-Cost Image" />

          <h3>
            <em>
              All the advantages <br /> of living in a Garden Lft <br />{" "}
              combined with an <br /> intentional community
            </em>
          </h3>
          <button className="button-village-cost">
            Learn more about Garden Loft units
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
          <h1>
            Garden Loft Village <br /> clients are looking for <br /> a
            one-stop-shop <br /> development option for <br /> supportive
            housing{" "}
          </h1>
        </div>
        <div className="workers-list">
          <h3 className="work-title">We work with: </h3>
        </div>
        <div className="client-list">
          <ul className="village-list">
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
          </ul>

          <button className="button-village-cost">
            Book a preliminary consult
          </button>
        </div>
        <div className="village-content">
          <img src={Village5} alt="GL-Cost Image" />
          <h3>
            <em>
              Garden Loft villages are <br/> particularly well suited in rural<br/>
              communities with small-scale <br/> demand for supportive housing
            </em>
          </h3>
          <button className="button-village-cost call-us">Call us</button>
          <h1 className="dev-gl">
            <br />
            Garden Loft Village Projects in Development
          </h1>
          <h3>
            <em>
              We are currently working on <br/> village projects in Calgary, <br/> southern
              Alberta, and <br /> central British Columbia
            </em>
          </h3>
          <img src={Village6} alt="GL-Cost Image" />
          <p ><em>Small Town Rental Village</em></p>
          <h3>
            <em>10 Garden Loft units located in <br/> a park-like setting to augment <br/> and
            adjacent care facility with independent living units <br/> of an adjacent
            care facility</em>
          </h3>
          <img src={Village7} alt="GL-Cost Image" />
          <p><em>Country Residential Village</em></p>
          <h3>
            <em>93 Garden Loft units with cafe and recreation amenity<br/> buildings on
            an acreage <br/> outside of Calgary</em>
          </h3>
          <button className="button-village-cost">Tour our Showsuite</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Village;
