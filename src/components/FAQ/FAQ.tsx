
import GLCost from  '../../assets/images/gl-cost.png'
import './FAQ.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function FAQ() {
  return (
    <>
    <Navbar />
    <section id="faq">
    <img src={GLCost} alt="GL-Cost Image" />
    <div className="safety-content">
      <h1>Frequently Asked Questions</h1>
      <h3>What is the advantage of owning a Garen Loft?</h3>
      <p>Owning a Garden Loft allows for a long-term generational investmnt for your family.
        Once you own one you can pass it down to your family to turn it into a studio loft 
         </p>
      <button className='button-safety-cost'>Learn about the new rules and costs</button>
  </div>
  </section>
  <Footer/>
  </>
  )
}

export default FAQ;