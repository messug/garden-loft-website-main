import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './MortgageSpecialistForm.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  message: string;
}

const MortgageSpecialistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Save to Firestore
      await addDoc(collection(FIRESTORE_DB, 'Mortgage Specialist'), formData);

      const templateParams = {
        to_name: 'info@gardenloft.ca',
        request_type: 'Contact Our Mortgage Specialist',
        from_name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        preferredContact: formData.preferredContact,
        message: formData.message
      };

      // Send email via EmailJS
      await emailjs.send(
        'service_9sbvjnv',
        'template_bh6rn31',
        templateParams,
        '--z3yrvQqS1HsMCaG'
      );

      setSubmitSuccess(true);

      // Reset the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredContact: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form: ', error);
      if (error instanceof Error) {
        setSubmitError(`Error submitting form: ${error.message}`);
      } else {
        setSubmitError('An unknown error occurred while submitting the form');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='navbarBackground'></div>
      <div className="mortgage-specialist-form">
        <form onSubmit={handleSubmit}>
          <h1>Contact Our Mortgage Specialist</h1>
          <p>
            Please fill out the form below to get in touch with our mortgage specialist. We'll get back to you as soon as possible.
          </p>

          <label>
            Name <span>(required)</span>
          </label>
          <div className="name-fields">
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName}
              placeholder="First Name" 
              required 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName}
              placeholder="Last Name" 
              required 
              onChange={handleChange} 
            />
          </div>

          <label>Email <span>(required)</span></label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            required 
            onChange={handleChange} 
          />

          <label>Phone <span>(required)</span></label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone}
            required 
            onChange={handleChange} 
          />

          <label>Preferred Contact Method <span>(required)</span></label>
          <select 
            name="preferredContact" 
            value={formData.preferredContact}
            required 
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>

          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="button-container">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>

          {submitError && <p className="error-message">{submitError}</p>}
          {submitSuccess && <p className="success-message">Form submitted successfully!</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default MortgageSpecialistForm;
