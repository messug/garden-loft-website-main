import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Brochure.css';

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('--z3yrvQqS1HsMCaG', 'sTUgjbWLR338Sz-A-', formData, 'sTUgjbWLR338Sz-A-')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('Form submitted successfully!');
            }, (error) => {
                console.error('FAILED...', error);
                setMessage('An error occurred. Please try again.');
            });
    };

    return (
        <form className="brochure-form" onSubmit={handleSubmit}>
            <h1>Request a Brochure / Ask a Question</h1>
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
    );
};

export default Brochure;
