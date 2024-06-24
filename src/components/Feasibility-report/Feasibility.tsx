import { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Feasibility.css';

const Feasibility = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hearAboutUs: '',
    projectAddress: '',
    city: '',
    unitType: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Save to Firestore
      await addDoc(collection(FIRESTORE_DB, 'feasibilityReports'), formData);

      // Send email via EmailJS
      emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      );

      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Error submitting form');
    }
  };

  return (
    <>
   
      <Navbar />
      <div className='navbarBackground'></div>
      <form onSubmit={handleSubmit} className="feasibility-form">
        <h1>Request a Feasibility Report</h1>
        <p>
          Tell us a little about your property and your needs and we'll put together a complimentary feasibility analysis and preliminary budget estimate to help you decide if Garden Loft works for you and your family.
        </p>

        <label>
          Name <span>(required)</span>
        </label>
        <div className="name-fields">
          <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
        </div>

        <label>Email <span>(required)</span></label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Phone <span>(required)</span></label>
        <input type="tel" name="phone" required onChange={handleChange} />

        <label>How did you hear about us? <span>(required)</span></label>
        <select name="hearAboutUs" required onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Avenue Magazine">Avenue Magazine</option>
          <option value="Google">Google</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Other">Other</option>
        </select>

        <label>Project Address <span>(required)</span></label>
        <input type="text" name="projectAddress" required onChange={handleChange} />

        <label>City <span>(required)</span></label>
        <input type="text" name="city" required onChange={handleChange} />

        <label>Unit Type <span>(required)</span></label>
        <select name="unitType" required onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="GL380">GL380</option>
          <option value="GL480">GL480</option>
          <option value="Not sure">Not sure</option>
        </select>

        <label>Additional Information</label>
        <textarea name="additionalInfo" onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
};

export default Feasibility;
