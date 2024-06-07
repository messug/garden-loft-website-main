
import GLCost from  '../../assets/images/backyard 35.jpg'
import './Grants.css'

function Grants() {
  return (
    <section id="rules-and-grants">
      <div className="image-container">
    <img src={GLCost} alt="GL-Cost Image" className="background-image" />
    <div className="overlay-text">
      <h1>Garden Lofts
<br />are now permitted  <br />in all Calgary <br /> neighborhoods <br />and qualify <br />
for the $10,000  <br />secondary suite grant</h1>
</div>
  </div>
     <div  className='button-grant'>
      <button className='button-safety-grant'>Learn about <br />the new rules and  <br />grants</button>
      </div>
 
  </section>
  )
}

export default Grants