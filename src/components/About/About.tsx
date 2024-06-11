
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AtriumImage1 from '/images/Atrium 1.jpg';



const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-atrium">
        <div className="hero-atrium-img">
          <img src={AtriumImage1} alt="Atrium House Image 1" />
          <div className="hero-atrium-content">
            <h1>We are architects, <br />builders, and  <br />software developers</h1>
          </div>
          <div className='about-content'>
          <h3><em>We create high-quality places to live that empower dignity, independence and belonging in the lives of seniors and others with differing abilities.</em></h3>
          </div>
        </div>

        <div></div>
       
      </section>
     
    
      <Footer />
    </>
  );
};

export default About;
