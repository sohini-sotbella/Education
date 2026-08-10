import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { submitGoogleSheetForm } from '../../services/googleSheetsApi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ message: '', type: '' });

    if (!email.trim()) {
      setStatus({ message: 'Please enter an email address to subscribe.', type: 'error' });
      return;
    }

    try {
      await submitGoogleSheetForm('subscribers', { email });
      setSubscribed(true);
      setEmail('');
      setStatus({ message: 'Thank you for subscribing!', type: 'success' });
      setTimeout(() => {
        setSubscribed(false);
        setStatus({ message: '', type: '' });
      }, 2000);
    } catch (error) {
      setStatus({ message: error.message || 'Subscription failed.', type: 'error' });
    }
  };

  return (
    <>
    <div className='footer-container'>      
        <div className='subscribe-box'>
          <div className="subscribe-header">
            <h1>Want Us To Email You About Special Offers And Updates?</h1>
          </div>
          <div className="subscribe-form-area">
            {!subscribed ? (
              <div className="subscribe-btn">
                <span><FontAwesomeIcon icon={faPaperPlane} className='subscribe-icon' /></span>
                <input 
                  type="email" 
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe(e)}
                />
                <button onClick={handleSubscribe}>Subscribe Now</button>
              </div>
            ) : (
              <div className="thank-you-message">
                <FontAwesomeIcon icon={faCheckCircle} className="thank-you-icon" />
                <div>
                  <p className="thank-you-title">Thank You for Subscribing!</p>
                  <p className="thank-you-sub">You're now on our list. Expect great things in your inbox!</p>
                </div>
              </div>
            )}
            {status.message && status.type === 'error' && (
              <div className="error-message subscribe-error">
                <p>{status.message}</p>
              </div>
            )}
          </div>
        </div>      
      <div className="footer-top">
        <div className="footer-content">
          <h2>Site Map</h2>
          <p>Documentation</p>
          <p>Feedback</p>
          <p>Plugins</p>
          <p>Support Forums</p>
          <p>Themes</p>
        </div>
        <div className="footer-content">
          <h2>Useful Links</h2>
          <p>About Us</p>
          <p>Help Link</p>
          <p>Term & Conditions</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-content">
          <h2>Social Contact</h2>
          <p>Google</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
          <p>LinkedIn</p>
        </div>
        <div className="footer-content">
          <h2>Our Support</h2>
          <p>Help Center</p>
          <p>Paid With Mollie</p>
          <p>Status</p>
          <p>Changelog</p>
          <p>Contact Support</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span className='footer-bottom-span1'> © 2022 </span> 
      <span className='footer-bottom-span2'> Edukon </span>
      <span className='footer-bottom-span1'> Designed by </span> 
      <span className='footer-bottom-span2'> Sohini Sharma </span>
    </div>
    </>
  )
}

export default Footer;