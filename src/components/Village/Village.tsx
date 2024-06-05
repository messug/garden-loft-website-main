
import GLCost from  '../../assets/images/gl-cost.png'
import './Village.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import GLHero from '/images/hero-village.mp4'
import Village1 from '/images/village1.png'
import Village2 from '/images/village2.png'
import Village3 from '/images/village3.png'
import Village4 from '/images/village4.png'
import Village5 from '/images/village5.png'
import Village6 from '/images/village6.png'


function FAQ() {
  return (
    <>
    <Navbar />
    <section className="hero-village">
      <div className="hero-content">
        <video className="hero-video" src={GLHero} autoPlay loop muted/>
        <div className="content">
        <h1>Garden Loft Villages</h1>
        <p>community embedded <br />supportive living</p></div>
      </div>
    </section>
    <section id="village">
    
    <div className="village-content">
      <h1>Garden Loft create small-scale supportive living communities  </h1>
      <h3>A cluster of Garden Loft units organized around a courtyard, greenspace, or walkway</h3>
      <img src={Village1} alt="GL-Cost Image" />
      
      <h3>All the advantages of living in a Garden Lft combined with an intentional community</h3>
      <button>Learn more about Garden Loft units</button>
      <img src={Village2} alt="GL-Cost Image" />
      <h3>Garden Loft Villages can be integrated with new existing community building clubhouses and coffee shops</h3>
      <img src={Village3} alt="GL-Cost Image" />
      <h1>Garden Loft Village clients are looking for a one-stop-shop development option for supportive housing  </h1>
      <h3 className='work'>We work with: </h3>
        <ul className='village-list'>
          <li><h4>Developers</h4></li>
          <li><h4>Landowners</h4></li>
          <li><h4>Municipalities</h4></li>
          <li><h4>Municipal districts</h4></li>
          <li><h4>Non-for-profit housing societies</h4></li>
          <li><h4>Faith-based groups</h4></li>
          <li><h4>Local service Clubs</h4></li>
          <li><h4>Senior’s societies</h4></li>
          <li><h4>Housing management bodies</h4></li>
          <li><h4>Existing care facilities</h4></li>
        </ul>
        <button>Book a preliminary consult</button>
      <img src={Village4} alt="GL-Cost Image" />
      <h3>Garden Loft villages are particularly well suited in rural communitites with small-scale demand for supportive housing</h3>
      <img src={Village5} alt="GL-Cost Image" />
      <img src={Village6} alt="GL-Cost Image" />

      <p>Owning a Garden Loft allows for a long-term generational investmnt for your family.
        Once you own one you can pass it down to your family to turn it into a studio loft 
         </p>
      <button className='button-village-cost'>Learn about the new rules and costs</button>
  </div>
  </section>
  <Footer/>
  </>
  )
}

export default FAQ;