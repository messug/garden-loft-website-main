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


function Village() {
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
      <button className='button-village-cost'>Learn more about Garden Loft units</button>
     
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
        <button className='button-village-cost'>Book a preliminary consult</button>
      <img src={Village4} alt="GL-Cost Image" />
      <h3>Garden Loft villages are particularly well suited in rural communities with small-scale demand for supportive housing</h3>
      <button className='button-village-cost'>Call us</button>
      <h1>Garden Loft Village Projects in Development</h1>
      <h3>We are currently working on village projects in Calgary, southern Alberta, and central British Columbia</h3>
      <img src={Village5} alt="GL-Cost Image" />
      <h1>Small Town Rental Village</h1>
      <h3>10 Garden Loft units located in a park-like setting to augment and adjacent care facility with independent living units
of an adjacent care facility</h3>
      <img src={Village6} alt="GL-Cost Image" />
      <h1>Country Residential Village</h1>
      <h3>93 Garden Loft units with cafe and recreation amenity buildings on an acreage outside of Calgary</h3>
      <button className='button-village-cost'>Tour our Showsuite</button>
  </div>
  </section>
  <Footer/>
  </>
  )
}

export default Village;