import React, { useState } from 'react';
import './Register-Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { submitGoogleSheetForm } from '../../services/googleSheetsApi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState({ message: '', type: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: '', type: '' });

        try {
            await submitGoogleSheetForm('login', {
                email,
            });

            setStatus({ message: 'Login activity recorded successfully. Redirecting...', type: 'success' });
            setTimeout(() => {
                navigate('/profile');
            }, 800);
        } catch (error) {
            setStatus({ message: error.message || 'Failed to record login activity.', type: 'error' });
        }
    };

    return (
      <>
      <div className="main-container">
        <div className='login-container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='heading'>
                    <h2>Login</h2>
                </div>
                <div className='input-box'>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='User E-Mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email'
                        required
                    />
                </div>
                <div className='input-box'>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='User Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                        required
                    />
                </div>
                <div className='remember-forgot'>
                    <div className='checkbox-span'>
                        <span>
                            <input type='checkbox'
                             className='checkbox-remember' />
                            Remember me
                        </span>
                    </div>
                    <div className='link-btn'>
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
                </div>
                <div className='btn-box'>
                    <button className='form-submit' type='submit'>
                        Submit Now
                    </button>
                </div>
                {status.message && (
                  <div className={status.type === 'error' ? 'error-message' : 'success-message'}>
                    <p>{status.message}</p>
                  </div>
                )}
                <div className='link-btn'>
                    <Link to='/register'>Don't have an account? Register</Link>
                </div>
                <div className="or-container">
                    <div className='or'><span className='or-text'>OR</span></div>
                </div>
                <div className='heading'>
                    <h3>Register With Social Media</h3>
                </div>
                <div className="icons-container">
                    <div className='icons-div'><a href='https://www.facebook.com/IFDAINSTITUTE/'><FaFacebook className='icon-facebook' /></a></div>
                    <div className='icons-div'><a href='https://in.linkedin.com/company/ifda-institute'><FaLinkedin className='icon-linkedin' /></a></div>
                    <div className='icons-div'><a href='https://www.instagram.com/ifda_institute/?hl=en'><FaInstagram className='icon-instagram' /></a></div>
                    <div className='icons-div'><a href='https://www.youtube.com/c/IFDAInstitute'><FaYoutube className='icon-youtube' /></a></div>
                </div>
            </form>
        </div>
        </div>
        </>
    );
};

export default Login;
