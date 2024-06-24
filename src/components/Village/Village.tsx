import "./Village.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Village1 from "/images/Village-1.jpg";
// import Village1Hero from "/images/Village 1-hero.jpg"
import VillageVideo from '/images/village hero.mp4'
import Village2 from "../../assets/images/Village 2.jpg";
import Village3 from "/images/Village-3.jpg";
import Village4 from "/images/Village-4.jpg";
import Village5 from "/images/village-5.jpg";
import Village6 from "/images/village-6.jpg";
import Village7 from "/images/village-7.jpg";
import Village6v2 from '../../assets/images/village 6v2.jpg'
import Village7v2 from '../../assets/images/village 7v2.jpg'
import { Link } from "react-router-dom";

function Village() {
  return (
    <>
      <Navbar />
      {/* <section className="hero-village">
        <div className="hero-content">
          <div className="sky-background"></div>
          <img className="hero-video" src={Village1Hero} alt="Village1" />
          <div className="content-village">
            <h1>Garden Loft Villages</h1>
            <p className="mobile-hero-p">
              community embedded <br />
              supportive living
            </p>
            <p className="desktop-hero-p">
              community embedded 
              supportive living
            </p>
          </div>
        </div>
      </section> */}
        <section className="home">
      <div className="home-content">
        <video className="video" src={VillageVideo} autoPlay loop muted playsInline  />
        {/* <img className="video" src={BYSuite} /> */}
        <div className="content">
        <h1>Garden Loft Villages</h1>
        <p className='mobile-para'> community embedded <br />
        supportive living</p>
        <p className='desktop-para'> community embedded 
        supportive living</p></div>
      </div>
    </section>
      <section id="village">
        <div className="village-content">
          <div className="sec-mobile">
            <h2>
              Garden Loft creates <br /> small-scale supportive <br /> living
              communities{" "}
            </h2>
            <h3>
              A cluster of Garden Loft units <br /> organized around a
              courtyard, <br /> greenspace, or walkway
            </h3>

            <img src={Village2} alt="GL-Cost Image" />
          </div>
          <div className="sec1">
            <div className="sec1-words">
              <h2>
              {" "}
                <br/>
                <br/>
                Garden Loft creates <br /> small-scale supportive <br /> living
                communities{" "}
              </h2>
              <h3>
                A cluster of Garden Loft units <br /> organized around a
                courtyard, <br /> greenspace, or walkway
              </h3>
            </div>
            <div className="sec1image">
              <img src={Village2} alt="GL-Cost Image" />
            </div>
          </div>
          <div className="sec1">
            <div className="sec1-words">
              <h2>
              {" "}
                <br/>
                <br/>
                All the advantages <br /> of living in a Garden Loft <br />{" "}
                combined with an <br /> intentional community
              </h2>
              <button className="button-village-cost">
                <Link to="/#two-units">
                  Learn more
                  <br /> about Garden <br /> Loft units
                </Link>
              </button>
            </div>
            <div className="sec1image">
              <img src={Village3} alt="GL-Cost Image" />
            </div>
          </div>
          <div className="sec2">
            <h3>
              All the advantages <br /> of living in a Garden Loft <br />{" "}
              combined with an <br /> intentional community
            </h3>
            <button className="button-village-cost">
              <Link to="/#two-units">
                Learn more
                <br /> about Garden <br /> Loft units
              </Link>
            </button>

            <img src={Village3} alt="GL-Cost Image" />
          </div>
          <div className="sec1">
            <div className="sec1-words">
              <h2>
                {" "}
                <br/>
                <br/>
                Garden Loft Villages <br /> can be integrated with new or <br />{" "}
                existing community buildings, <br />
                clubhouses, and coffee shops
              </h2>
            </div>
            <div className="sec1image">
              <img src={Village4} alt="GL-Cost Image" />
            </div>
          </div>
          <div className="sec2">
            <h3>
              Garden Loft Villages <br /> can be integrated with new or <br />{" "}
              existing community buildings, <br />
              clubhouses, and coffee shops
            </h3>
            <img src={Village4} alt="GL-Cost Image" />
          </div>
   
          <div className="sec1">
            <div className="sec1-words">
              <h2>
                Garden Loft Village <br /> clients are looking for <br /> a
                one-stop-shop <br /> development option for <br /> supportive
                housing{" "}
              </h2>
              <button className="button-village-cost">
                Book a <br />
                preliminary
                <br />
                consult
              </button>
            </div>
            <div className="sec1image">
              <div className="workers-list">
                <h3>We work with:</h3>
              </div>
              <div className="client-list">
                <ul className="village-list">
                  <li>
                    <h3>Developers</h3>
                  </li>
                  <li>
                    <h3>Landowners</h3>
                  </li>
                  <li>
                    <h3>Municipalities</h3>
                  </li>
                  <li>
                    <h3>Municipal districts</h3>
                  </li>
                  <li>
                    <h3>Non-for-profit housing societies</h3>
                  </li>
                  <li>
                    <h3>Faith-based groups</h3>
                  </li>
                  <li>
                    <h3>Local service Clubs</h3>
                  </li>
                  <li>
                    <h3>Senior’s societies</h3>
                  </li>
                  <li>
                    <h3>Housing management bodies</h3>
                  </li>
                  <li>
                    <h3>Existing care facilities</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sec2">
            <h2>
              Garden Loft Village <br /> clients are looking for <br /> a
              one-stop-shop <br /> development option for <br /> supportive
              housing{" "}
            </h2>

            <div className="workers-list">
              <h3>We work with:</h3>
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
            </div>

            <button className="button-village-cost">
              Book a <br />
              preliminary
              <br />
              consult
            </button>
          </div>{" "}
        </div>

        <div className="village-content">
          <div className="sec1">
            <div className="sec1-words">
              <h3>
              {" "}
                <br/>
                <br/>
                Garden Loft villages are <br /> particularly well suited in
                rural
                <br />
                communities with limited <br /> demand for supportive housing
              </h3>
              <button className="button-village-cost call-us">Call us</button>
            </div>
            <div className="sec1image">
              <img src={Village5} alt="GL-Cost Image" />
            </div>
          </div>

          <div className="sec2">
            <img src={Village5} alt="GL-Cost Image" />
            <h3>
              Garden Loft villages are <br /> particularly well suited in rural
              <br />
              communities with limited <br /> demand for supportive housing
            </h3>
            <button className="button-village-cost call-us">Call us</button>
          </div>

          <h2 className="dev-gl">
            <br />
            Garden Loft Village Projects in Development
          </h2>
          <h3>
            We are currently working on <br /> village projects in Calgary,{" "}
            <br /> southern Alberta, and <br /> central British Columbia
          </h3>



          <div className="sec1">
            <div className="sec1-words">
            {" "}
                <br/>
                <br/>{" "}
                <br/>
                <br/>
            <h2>Small Town Rental Village</h2>
            <h3>
              10 Garden Loft units in a <br /> park-like setting adjacent to
              <br />
              an existing care facility
              <br /> in order to increase capacity
            </h3> 
            </div>
            <div className="sec1image">
              <img  src={Village6v2} alt="GL-Cost Image" />
            </div>
          </div>

          <div className="sec2">
            <img  src={Village6} alt="GL-Cost Image" />
            <h3>Small Town Rental Village</h3>
            <p>
              10 Garden Loft units in a <br /> park-like setting adjacent to
              <br />
              an existing care facility
              <br /> in order to increase capacity
            </p> 
          </div>

          <div className="sec1">
            <div className="sec1-words">
            {" "}
                <br/>
                <br/>{" "}
                
            <h2>Country Residential Village</h2>
          <h3>
            93 Garden Loft units <br /> augmented with community amenity <br />{" "}
            buildings on an acreage site
            <br /> outside of Calgary
          </h3>
          <button className="button-village-cost">
            Tour our <br /> Showsuite
          </button>
            </div>
            <div className="sec1image">
              <img  src={Village7v2} alt="GL-Cost Image" />
            </div>
          </div>


          <div className="sec2">
            <img  src={Village7} alt="GL-Cost Image" />
          <h3>Country Residential Village</h3>
          <p>
            93 Garden Loft units <br /> augmented with community amenity <br />{" "}
            buildings on an acreage site
            <br /> outside of Calgary
          </p>
          <button className="button-village-cost">
            Tour our <br /> Showsuite
          </button>
        </div></div>
      </section>
      <Footer />
    </>
  );
}

export default Village;
