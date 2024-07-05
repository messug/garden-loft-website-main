import { useState } from 'react';
import './FAQ.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import GLCost from '../../assets/images/gl-cost.png';

const FAQ = () => {
    const [openQuestion, setOpenQuestion] =useState<string | null>(null); useState(null);

  const toggleQuestion = (question: string | null) => {
    setOpenQuestion(prevQuestion => (prevQuestion === question ? null : question));
  };

  return (
    <>
      <Navbar />
      <div className='navbarBackground'></div>
      <section>
        <div id="faq">
          {/* <img src={GLCost} alt="GL-Cost Image" /> */}
          <div className="safety-content">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="faq-content">
            <div className="faq-item">
              <h2>General</h2>
              <div className="faq-section">
                <h3 onClick={() => toggleQuestion('general1')}>
                  Where are Garden Lofts built?
                  <span className={`arrow ${openQuestion === 'general1' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'general1' && (
                  <p>
                    Garden Lofts are constructed at our fabrication facility in southeast Calgary. When the preparatory site work has been completed in your backyard, we deliver and install your Garden Loft with a truck and/or crane. After delivery the unit is hooked up and the landscaping finished off.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('general2')}>
                  Is Garden Loft wheelchair accessible?
                  <span className={`arrow ${openQuestion === 'general2' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'general2' && (
                  <p>
                    Yes. Garden Loft is entirely wheelchair accessible - from the front door to the shower. However, our many safety and support features are also designed for people who aren’t in a wheelchair but have mobility, stability, and stamina issues that make it difficult to live independently.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('general3')}>
                  I don't have a back alley. Is that a problem?
                  <span className={`arrow ${openQuestion === 'general3' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'general3' && (
                  <p>
                    Probably not but we would need to confirm for your particular property. Garden Loft is delivered and installed with a truck and/or crane. If there is no ready truck access to the backyard, Garden Loft can be lifted over the top of most obstructions and into the backyard. This includes over top a two storey house. Our complimentary Feasibility Report will review the delivery and installation situation and provide a preliminary opinion on how and where Garden Loft would be installed.
                  </p>
                )}
              </div>
            </div>

            <div className="faq-item">
              <h2>Performance</h2>
              <div className="faq-section">
                <h3 onClick={() => toggleQuestion('performance1')}>
                  Does Garden Loft work in a cold climate?
                  <span className={`arrow ${openQuestion === 'performance1' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'performance1' && (
                  <p>
                    Yes, Garden Loft works in a cold climate. The unit is designed with high-efficiency insulation and heating systems to ensure comfort and energy efficiency even in the coldest weather.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('performance2')}>
                  What is the heating system?
                  <span className={`arrow ${openQuestion === 'performance2' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'performance2' && (
                  <p>
                    Garden Loft has a high efficiency electric heating/cooling system rated for the Fort McMurray climate zone. This system provides heating in the winter and air conditioning in the summer months. There are also electric baseboard heaters as a backup and to provide an additional boost of warmth, if needed, on the coldest of days. When combined with our high-performance building envelope, Garden Loft has low energy consumption resulting in lower energy costs.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('performance3')}>
                  How do the utility services work?
                  <span className={`arrow ${openQuestion === 'performance3' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'performance3' && (
                  <p>
                    The water and sewer service lines are insulated and heat taped to prevent freezing and installed in an insulated trench that either runs back to the main house or directly ties into the main underground water and sewer services. Electrical service can be above or below grade and can come from a nearby pole, the existing garage, or the main house depending on what is simplest for a particular property. Garden Loft is all-electric so there is no need gas service.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('performance4')}>
                  Can Garden Loft use solar power?
                  <span className={`arrow ${openQuestion === 'performance4' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'performance4' && (
                  <p>
                    Yes! We offer an upgrade package that puts a solar array on the roof and connects directly into the power system for the unit to provide power and heating.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('performance5')}>
                  Does Garden Loft have a basement or strip footing foundation?
                  <span className={`arrow ${openQuestion === 'performance5' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'performance5' && (
                  <p>
                    Garden Loft does not have a basement, like a house, or a strip footing, like a garage. Instead it sits slightly off the ground on eight screw piles that are installed in the garden. Screw piles are similar to the structure used for a deck and take a few days to install. If Garden Loft is moved off the property in the future, the screw piles can be cut off just below grade and the area re-landscaped.
                  </p>
                )}
              </div>
            </div>

            <div className="faq-item">
              <h2>Permitting and Approvals</h2>
              <div className="faq-section">
                <h3 onClick={() => toggleQuestion('permitting1')}>
                  Is Garden Loft permitted on my neighborhood?
                  <span className={`arrow ${openQuestion === 'permitting1' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'permitting1' && (
                  <p>
                    Garden Lofts are permitted on single family residential lots in most residential neighbourhoods in Calgary and Edmonton provided they conform to the setback, lot coverage, and other requirements. Other towns, cities and municipal districts have varying regulations that need to be checked to see if Garden Loft is permitted. We offer a complimentary Feasibility Report to give a preliminary opinion on whether Garden Loft is allowed on your property.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('permitting2')}>
                  What permits are needed?
                  <span className={`arrow ${openQuestion === 'permitting2' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'permitting2' && (
                  <p>
                    In Calgary, Edmonton, and most other jurisdictions, a Development Permit and a Building Permit are required for installing Garden Loft.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('permitting3')}>
                  Who gets the permits?
                  <span className={`arrow ${openQuestion === 'permitting3' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'permitting3' && (
                  <p>
                    We look after everything from beginning to end. This includes preparing the documents and applying for both the Development and building permits, as well as ensuring that all the inspections take place and are approved after the unit is installed.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('permitting4')}>
                  How long is the development permit process?
                  <span className={`arrow ${openQuestion === 'permitting4' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'permitting4' && (
                  <p>
                    In Calgary, the development permit can take three months. In Edmonton, this process is quicker and takes about six weeks. The permit timelines are factored into the overall schedule for the project.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('permitting5')}>
                  What are the chances a development permit will not be approved for my property?
                  <span className={`arrow ${openQuestion === 'permitting5' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'permitting5' && (
                  <p>
                    If your property meets the municipal zoning by-laws to accommodate Garden Loft, it is unlikely that the permit would be denied. We have a pre-application meeting with the City before applying for the Development Permit to make sure that there are no issues and that Garden Loft would be supported by the municipal authority. Fabrication of your Garden Loft will not commence until the Development Permit is approved.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('permitting6')}>
                  What issues might prevent Garden Loft from being installed on my property?
                  <span className={`arrow ${openQuestion === 'permitting6' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'permitting6' && (
                  <p>
                    There are two issues that would prevent you from installing Garden Loft on your property. The first is if the lot coverage, size, and geometry did not allow it. For example, the maximum lot coverage including the main house, any detached garage and the Garden Loft cannot exceed 45%. Garden Loft must also fit within the required setbacks and be a minimum distance from the house due to fire codes. Also, in Alberta, a Garden Loft cannot be added to your property if you already have a secondary suite. The second issue would be if your property has restricted access that doesn’t allow the delivery and placement of Garden Loft in your backyard with a truck and/or crane. Our complimentary Feasibility Report will identify any potential issues for both situations.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('permitting7')}>
                  Is Garden Loft a legal secondary suite?
                  <span className={`arrow ${openQuestion === 'permitting7' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'permitting7' && (
                  <p>
                    Yes. In the Land Use Bylaws Garden Loft falls under the category of Garden Suite in Edmonton and Backyard Suite in Calgary. This means that in addition to being used as an age-in-place suite for a family member Garden Loft can be used for any use that is allowed under municipal bylaws.
                  </p>
                )}
              </div>
            </div>

            <div className="faq-item">
              <h2>Site Work and Installation</h2>
              <div className="faq-section">
                <h3 onClick={() => toggleQuestion('installation1')}>
                  Who installs Garden Loft on my property?
                  <span className={`arrow ${openQuestion === 'installation1' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'installation1' && (
                  <p>
                    If you are in Calgary, we look after everything. For the two units we are installing in Edmonton, we have partnered with local contractors to complete the work under our supervision. For other locations we will work with the client to find an appropriate contractor to do the installation work under our supervision.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('installation2')}>
                  What works needs to happen in my backyard before Garden Loft is delivered?
                  <span className={`arrow ${openQuestion === 'installation2' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'installation2' && (
                  <p>
                    The first step is to clear the area where Garden Loft will be placed. The next step is to install the eight screw piles that Garden Loft will sit on and install the sewer and water lines. After Garden Loft is delivered and placed on the screw piles, the water and sewer lines are connected and the power line is energized. We then build whatever decks, stairs, or ramps have been designed to integrate Garden Loft into the garden and ensure easy access to the main house. Finally, we do a walk through with the resident and their family to identify any outstanding issues to be corrected and to demonstrate how all the equipment and systems work.
                  </p>
                )}
                <h3 onClick={() => toggleQuestion('installation3')}>
                  How long does the site work take to complete?
                  <span className={`arrow ${openQuestion === 'installation3' ? 'down' : 'right'}`}></span>
                </h3>
                {openQuestion === 'installation3' && (
                  <p>
                    Because Garden Loft is prefabricated at our yard and then delivered to the site, the time and disruption of building a secondary suite in your backyard is greatly reduced. About halfway through the prefabrication process, the site preparation work (screw piles and utilities) starts and takes between 2-4 weeks to complete depending on weather and the complexity of the work. When Garden Loft is delivered, it usually takes a day to crane the unit onto the piles from the delivery truck. Completing the power, water, and sewer hookups will be done in about a week. The time required to complete the deck, stair, and ramps, and repair the landscaping is dependent on the scope of the work but is typically finished about three weeks after the unit has been delivered. At that point the City Inspectors come and does their final occupancy inspections and Garden Loft is ready for move-in.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default  FAQ;
