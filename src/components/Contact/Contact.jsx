import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import location from '../../assets/images/icon/01.png'
import phone from '../../assets/images/icon/02.png'
import email from '../../assets/images/icon/03.png'
import website from '../../assets/images/icon/04.png'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                mobile: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <>
            <div className="top-bg-contact-container">
                <div className="top-container">
                    <div>
                        <h1>Get In Touch With Us</h1>
                    </div>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <span className='top-bg-link'> / Contact Us</span>
                    </div>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-header">
                    <h3>GET IN TOUCH WITH US</h3>
                    <h1>We're Always Eager To Hear From You!</h1>
                </div>
                <div className="map-section">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.915882584937!2d77.24006005541993!3d28.540351800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38eabe3df5b%3A0x54ccc63713980d8a!2sIFDA%20Institute!5e0!3m2!1sen!2sin!4v1720271303972!5m2!1sen!2sin"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            alt="map"
                        ></iframe>
                    </div>
                    <div className="contact-through">
                        <div className='contact-div'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td rowSpan="0" className='row-td'><img src={location} alt="location-img" /></td>
                                        <td><h2>Office Address</h2></td>
                                    </tr>
                                    <tr>
                                        <td><span>First Floor, G-33, Kalkaji Main Rd, Kalkaji, Delhi 110019</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='contact-div'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td rowSpan="0" className='row-td'><img src={phone} alt="phone-img" /></td>
                                        <td><h2>Phone number</h2></td>
                                    </tr>
                                    <tr>
                                        <td> <span>09999196162</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='contact-div'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td rowSpan="0" className='row-td'><img src={email} alt="email-img" /></td>
                                        <td><h2>Send email</h2></td>
                                    </tr>
                                    <tr>
                                        <td><span>info@ifda.in</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='contact-div'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td rowSpan="0" className='row-td'><img src={website} alt="website-img" /></td>
                                        <td><h2>Our website</h2></td>
                                    </tr>
                                    <tr>
                                        <td><span>https://ifda.in/</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactus-container">
                <div className="contact-header">
                    <h3>GET IN TOUCH WITH CONTACT US</h3>
                    <h1>Fill The Form Below So We Can Get To Know You And Your Needs Better.</h1>
                </div>
                <div className="contact-us">
                    <div className="inner-container">
                        <form onSubmit={handleSubmit}>
                            <div className="name-email-mobile-sub">
                                <div><input type="text" name="name" placeholder='Your Name *' value={formData.name} onChange={handleInputChange} required/></div>
                                <div><input type="email" name="email" placeholder='Your EMail *' value={formData.email} onChange={handleInputChange} required/></div>
                            </div>
                            <div className="name-email-mobile-sub">
                                <div><input type="number" name="mobile" placeholder='Mobile Number *' value={formData.mobile} onChange={handleInputChange} required/></div>
                                <div><input type="text" name="subject" placeholder='Your Subject *' value={formData.subject} onChange={handleInputChange} required/></div>
                            </div>
                            <textarea name="message" placeholder='Your Message' value={formData.message} onChange={handleInputChange} required></textarea>
                            <button type="submit">Send Our Message</button>
                        </form>
                        {submitted && (
                            <div className="success-message">
                                <p>Thank you! Your message has been sent successfully.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;