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
  
      const templateParams = {
        to_name: 'info@gardenloft.ca',
        request_type: 'Request a feasibility Report',
        from_name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        hearAboutUs: formData.hearAboutUs,
        projectAddress: formData.projectAddress,
        city: formData.city,
        unitType: formData.unitType,
        additionalInfo: formData.additionalInfo
      };
      // Send email via EmailJS
      await emailjs.send(
        'service_9sbvjnv',
        'template_bh6rn31',
        templateParams,
        '--z3yrvQqS1HsMCaG'
      );
  
      alert('Form submitted successfully');
      
      // Reset the form after successful submission
      setFormData({
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
    } catch (error) {
      console.error('Error submitting form: ', error);
      if (error instanceof Error) {
        alert(`Error submitting form: ${error.message}`);
      } else {
        alert('An unknown error occurred while submitting the form');
      }
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

// import { useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import { FIRESTORE_DB } from '../../FirebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';
// import './Feasibility.css';

// const Feasibility = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         hearAboutUs: '',
//         projectAddress: '',
//         city: '',
//         unitType: '',
//         additionalInfo: ''
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         try {
//             // Save to Firestore
//             await addDoc(collection(FIRESTORE_DB, 'feasibilityReports'), formData);

//             // Send email via Vercel API
//             await fetch('/api/sendEmail', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ formType: 'Feasibility Report', formData })
//             });

//             alert('Form submitted successfully');
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 phone: '',
//                 hearAboutUs: '',
//                 projectAddress: '',
//                 city: '',
//                 unitType: '',
//                 additionalInfo: ''
//             });
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             alert('An error occurred while submitting the form');
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='navbarBackground'></div>
//             <form onSubmit={handleSubmit} className="feasibility-form">
//                 <h1>Request a Feasibility Report</h1>
//                 <p>
//                     Tell us a little about your property and your needs and we'll put together a complimentary feasibility analysis and preliminary budget estimate to help you decide if Garden Loft works for you and your family.
//                 </p>

//                 <label>
//                     Name <span>(required)</span>
//                 </label>
//                 <div className="name-fields">
//                     <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
//                     <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
//                 </div>

//                 <label>Email <span>(required)</span></label>
//                 <input type="email" name="email" required value={formData.email} onChange={handleChange} />

//                 <label>Phone <span>(required)</span></label>
//                 <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />

//                 <label>How did you hear about us? <span>(required)</span></label>
//                 <select name="hearAboutUs" required value={formData.hearAboutUs} onChange={handleChange}>
//                     <option value="">Select an option</option>
//                     <option value="Facebook">Facebook</option>
//                     <option value="Instagram">Instagram</option>
//                     <option value="Avenue Magazine">Avenue Magazine</option>
//                     <option value="Google">Google</option>
//                     <option value="Word of Mouth">Word of Mouth</option>
//                     <option value="Other">Other</option>
//                 </select>

//                 <label>Project Address <span>(required)</span></label>
//                 <input type="text" name="projectAddress" required value={formData.projectAddress} onChange={handleChange} />

//                 <label>City <span>(required)</span></label>
//                 <input type="text" name="city" required value={formData.city} onChange={handleChange} />

//                 <label>Unit Type <span>(required)</span></label>
//                 <select name="unitType" required value={formData.unitType} onChange={handleChange}>
//                     <option value="">Select an option</option>
//                     <option value="GL380">GL380</option>
//                     <option value="GL480">GL480</option>
//                     <option value="Not sure">Not sure</option>
//                 </select>

//                 <label>Additional Information</label>
//                 <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>

//                 <button type="submit">Submit</button>
//             </form>
//             <Footer />
//         </>
//     );
// };

// export default Feasibility;








