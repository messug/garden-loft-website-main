
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AtriumImage1 from '/images/Atrium 1.jpg';



const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-about">
        <div className="hero-about-img">
          <img src={AtriumImage1} alt="Atrium House Image 1" />
          <div className="hero-about-content">
            <h1>We are architects, <br />builders, and <br />software developers</h1>
          </div>
          <div className='about-content'>
            <p>We create high-quality places to live that empower dignity, independence and belonging in the lives of seniors and others with differing abilities.</p>
          </div>
        </div>
        <div className="teams">
          <h1>Our Team</h1>
          <div className='team-content'>
            <img src={AtriumImage2} alt="Carina van Olm" />
            <h1>Carina van Olm <br />Founder + Director</h1>
            <p>Carina has a background in small business operations and interior design. She leads the Garden Loft Executive Team and is responsible for business management and interior design.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage3} alt="John Brown" />
            <h1>John Brown <br />Founder + Director</h1>
            <p>John is a registered architect, age-in-place researcher, and Dean of the University of Calgary’s School of Architecture Planning and Landscape. He leads design research, early project design, and business development.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage4} alt="Matthew North" />
            <h1>Matthew North <br />Founder + Director</h1>
            <p>Matthew is a registered architect and a construction expert. He leads detail project design, construction management, and prefabrication logistics.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage5} alt="Jim Gibson" />
            <h1>Jim Gibson <br />Director</h1>
            <p>Jim is a published author, entrepreneur, founder, venture financier, and community builder. He is a member of Garden Loft’s Board of Directors.</p>
          </div>
          <div className='team-content'>
            <img src={AtriumImage6} alt="James Lochrie" />
            <h1>James Lochrie <br />Director</h1>
            <p>James Lochrie is a technology entrepreneur and founder / Managing Partner of Thin Air Labs. He is a member of Garden Loft’s Board of Directors.</p>
          </div>
        </div>

        <div></div>
       
      </section>
     
    
      <Footer />
    </>
  );
};

export default About;
