import { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Brochure.css';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Brochure = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        referral: '',
        question: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Save the form data to Firestore
            await addDoc(collection(FIRESTORE_DB, 'brochureRequests'), {
                ...formData,
                createdAt: serverTimestamp()
            });

            // Prepare email data
            const templateParams = {
                to_name: 'info@gardenloft.ca', // or whoever the recipient is
                request_type: 'Brochure Request',
                from_name: `${formData.firstName} ${formData.lastName}`,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                city: formData.city,
                referral: formData.referral,
                question: formData.question
            };

            // Send email via EmailJS
            const response = await emailjs.send(
                'service_9sbvjnv', // Replace with your EmailJS service ID
                'template_bh6rn31', // Replace with your EmailJS template ID
                templateParams,
                '--z3yrvQqS1HsMCaG' // Replace with your EmailJS user ID
            );

            console.log('EmailJS response:', response);

            setMessage('Form submitted successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                city: '',
                referral: '',
                question: ''
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error submitting form:', error.message);
                setMessage(`An error occurred. Please try again. ${error.message}`);
            } else {
                console.error('Error submitting form:', error);
                setMessage(`An error occurred. Please try again.`);
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className='navbarBackground'></div>
            <form className="brochure-form" onSubmit={handleSubmit}>
                <h1>Request a Brochure </h1>
                {message && <p>{message}</p>}
                <div className="form-group">
                    <label>Name (required)</label>
                    <div className="name-inputs">
                        <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
                        <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email (required)</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone (required)</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>City (required)</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>How did you hear about Garden Loft? (required)</label>
                    <select name="referral" required value={formData.referral} onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Avenue Magazine">Avenue Magazine</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Word of Mouth">Word of Mouth</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Question?</label>
                    <textarea name="question" value={formData.question} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <Footer />
        </>
    );
};

export default Brochure;
