
import './Atrium.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AtriumImage1 from '/images/Atrium 1.jpg';
import AtriumImage2 from '/images/Atrium 2.jpg';
import AtriumImage3 from '/images/Atrium 3.jpg';
import AtriumImage4 from '/images/Atrium 4.jpg';
import AtriumImage5 from '/images/Atrium 5.jpg';
import AtriumImage6 from '/images/Atrium 6.jpg';
import AtriumImage7 from '/images/Atrium 7.jpg';
import AtriumImage8 from '/images/Atrium 8.jpg';
import BrendaStrafford from '/images/BrendaStraffordLogo.png';
import GLLogo from '../../assets/gl-john-logo.png';

const Atrium = () => {
  return (
    <>
      <Navbar />
      <section className="hero-atrium">
        <div className="hero-atrium-img">
          <img src={AtriumImage1} alt="Atrium House Image 1" />
          <div className="hero-atrium-content">
            <h1>Atrium House</h1>
            <p>care enhanced <br />community living</p>
          </div>
        </div>
      </section>
      <section id="atrium">
        <div className="atrium-content">
          <h2>Combining advanced <br/>age-in-place architecture <br/>with person-led care and <br/>living support</h2>
          <h3><em>Atrium House features <br/>Garden Loft units clustered<br/> around a central interior<br/> light-filled community atrium</em></h3>
          <img src={AtriumImage2} alt="Atrium House Image 2" />
          <h2>Atrium House is a small <br/>care home providing <br/>high levels of nursing<br/> care and support for up<br/> to 14 residents</h2>
          <img src={AtriumImage3} alt="Atrium House Image 3" />
          <h3><em>The familiar domestic<br/>
environment combines the<br/>
privacy and independence of<br/>
living in a Garden Loft with<br/>
the social connectiveness<br/>
and sense of belonging that<br/>
comes from being part of a<br/>
small village-style community</em></h3>
          <button className='button-atrium'>Learn more about Garden Loft units</button>
          <img src={AtriumImage4} alt="Atrium House Image 4" />
          <h3><em>The prefabricated Garden Loft<br/> units can be configured in any<br/> number of ways and combined<br/> with other uses to meet the site<br/> and programmatic needs of a <br/>particular project</em></h3>
          <img src={AtriumImage5} alt="Atrium House Image 5" />
          <button className='button-atrium custom'>We custom  design and build Atrium Houses across Alberta</button>
          <div className="logoDiv">
            <img src={BrendaStrafford} alt="Brenda Strafford Logo" />
            <img src={GLLogo} alt="Garden Loft Logo" />
          </div>
          <h2>Atrium House is a <br/>collaboration with <br/>the Brenda Strafford<br/> Foundation</h2>
          <div id='plusDiv'>
            <h3>advanced<br/> age-in-place <br/>architecture</h3>
            <div className="plus-sign">+</div>
            <h3>person-led <br/>care and<br/> operations</h3>
          </div>
          <div className="foundation-section">
            <div className="foundation-box">
              <h2>GARDEN LOFT</h2>
              <ul>
                <li>Research-based inclusive and accessible design</li>
                <li>Precision adaptive prefabrication</li>
                <li>Award-winning architectural expertise</li>
              </ul>
            </div>
            <div className="foundation-box">
              <h2>BRENDA STRAFFORD FOUNDATION</h2>
              <ul>
                <li>Adaptive care and living model based on inclusion, diversity, and equity</li>
                <li>Customized and guided operational playbook</li>
                <li>Award-winning care expertise</li>
              </ul>
            </div>
          </div>
          <button className='button-atrium call-us'>Call us</button>
          <img src={AtriumImage6} alt="Atrium House Image 6" />
          <h2>Atrium House is<br/> particularly well suited<br/> for rural and remote<br/> communities</h2>
          <h3><em>Atrium House’s prefabricated<br/>
modular construction system<br/>
can be deployed in areas with<br/>
limited access to construction<br/>
materials and trades</em></h3>
<h3><em>The Atrium Way commissioning<br/>
playbook can be customized and<br/>
implemented to meet<br/>
the capacity and capabilities of the<br/>
service provider</em></h3>
<h3><em>The result is a one-stop-shop for<br/>
designing, fabricating, and<br/>
launching high-quality care<br/>
enhanced housing solutions</em></h3>
          <button className='button-atrium'>Book a preliminary consult</button>
          
          <h2>Atrium House can also <br/>be combined with a <br/>Garden Loft Village</h2>
          <img src={AtriumImage7} alt="Atrium House Image 7" />
          <h3><em>A common entry courtyard deck<br/> enhances community by <br/>connecting the private outdoor <br/>spaces for the independent living <br/>Garden Loft units with the communal outdoor space for <br/>Atrium residents</em></h3>
          <img src={AtriumImage8} alt="Atrium House Image 8" />
          <button className='button-atrium'>Visit our showsuite and sales center</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Atrium;
