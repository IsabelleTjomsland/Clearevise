import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importera Link för routing
import './Contact.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        title: '',
        message: '',
        consent: false
    });

    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errors.email = 'Ange en giltig e-postadress';
        }
        if (!formData.email.trim()) {
            errors.email = 'E-postadress är obligatoriskt';
        }
        if (formData.phone && !formData.phone.match(/^\d+$/)) {
            errors.phone = 'Telefonnummer får endast innehålla siffror';
        }
        if(formData.phone.match(/^\d+$/) && formData.phone.length < 7) {
            errors.phone= 'Numret du angav är inte inom intervallet';
        }
        if (!formData.company.trim()) {
            errors.company = 'Företagsnamn är obligatoriskt';
        }
        if (!formData.message.trim()) {
            errors.message = 'Meddelande är obligatoriskt';
        }
        if (!formData.consent) {
            errors.consent = 'Du måste godkänna villkoren';
        }
        if (!formData.title.trim()) {
            errors.title = 'Titel är obligatoriskt';
        }
        return errors;
    };

    const errors = validate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            company: true,
            title: true,
            message: true,
            consent: true
        });
        if (Object.keys(errors).length === 0) {
            alert('Formuläret skickades!');
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <div className="overlay"></div>
                <div className="prefix">Kontakt</div> {/* Prefix added above H1 */}
                <h1>Hur kan vi hjälpa dig idag?</h1>
                <p>Vi finns alltid här för att hjälpa dig med dina frågor eller funderingar!</p>
            </div>

            <div className="contact-info">
                <h1>Kom i kontakt med oss! </h1> 
                <p>Fyll i dina uppgifter så hör vi av oss till dig så snart vi kan.<br />
                Eller ring 019-10 39 15 för att haffa någon direkt.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="name-fields">
                    <div className="name-field">
                        <label>Förnamn*</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.firstName && !formData.firstName ? 'invalid' : ''}
                            required
                        />
                        {touched.firstName && !formData.firstName && (
                            <span className="error-message">Fyll i detta obligatoriska fält</span>
                        )}
                    </div>
                    <div className="name-field">
                        <label>Efternamn*</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.lastName && !formData.lastName ? 'invalid' : ''}
                            required
                        />
                        {touched.lastName && !formData.lastName && (
                            <span className="error-message">Fyll i detta obligatoriska fält</span>
                        )}
                    </div>
                </div>

                <label>E-postadress*</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? 'invalid' : ''}
                    required
                />
                {touched.email && errors.email && (
                    <span className="error-message">{errors.email}</span>
                )}

                <label>Telefonnummer</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.phone && errors.phone ? 'invalid' : ''}
                />
                {touched.phone && errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                )}

                <label>Företagsnamn*</label>
                <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.company && errors.company ? 'invalid' : ''}
                    required
                />
                {touched.company && errors.company && (
                    <span className="error-message">{errors.company}</span>
                )}

                <label>Titel*</label>
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className= {touched.title && errors.title ? 'invalid' : ''}
                />
                {touched.title && errors.title && (
                    <span className="error-message">{errors.title}</span>
                )}

                <label>Meddelande</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
               
                {/* Consent checkbox with link to the privacy policy */}
                <div className="consent-container">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="consent">
                        Jag har tagit del av <Link to="/policy">Clearevises personuppgiftspolicy</Link> och godkänner att Clearevise lagrar och hanterar mina personuppgifter samt skickar mig e-post. *
                    </label>
                </div>
                {touched.consent && errors.consent && (
                    <span className="error-message">{errors.consent}</span>
                )}

                <button type="submit" className="submit-button">Skicka</button>
            </form>
        </div>
    );
};

export default Contact;
