import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars, faInfoCircle, faTimes, faUser, faUsers, faPhone,
    faMapMarkerAlt, faUserPlus, faGlobe, faChevronDown,
    faLayerGroup, faChalkboard, faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const pagesLinks = [
    {
        to: '/about',
        icon: "",
        label: 'About Us',
        desc: 'Learn about our mission',
    },
    {
        to: '/creators',
        icon: "",
        label: 'Our Team',
        desc: 'Meet the talented crew',
    },
    {
        to: '/instructor',
        icon: "",
        label: 'Instructors',
        desc: 'Expert educators',
    },
    {
        to: '/error',
        icon: "",
        label: '404 Page',
        desc: 'Error page demo',
    },
];




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);
    const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const navbarRef = useRef(null);
    const pagesTimeoutRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
                setPagesDropdownOpen(false);
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setPagesDropdownOpen(false);
    };

    const toggleInfo = () => {
        if (window.innerWidth <= 1040) {
            setHeaderVisible(!headerVisible);
        }
    };

    const handlePagesMouseEnter = () => {
        if (window.innerWidth <= 1040) return;   // desktop hover only
        clearTimeout(pagesTimeoutRef.current);
        setPagesDropdownOpen(true);
        setUserDropdownOpen(false);
    };

    const handlePagesMouseLeave = () => {
        if (window.innerWidth <= 1040) return;   // desktop hover only
        pagesTimeoutRef.current = setTimeout(() => {
            setPagesDropdownOpen(false);
        }, 150);
    };

    const togglePagesDropdown = () => {
        setPagesDropdownOpen(!pagesDropdownOpen);
        setUserDropdownOpen(false);
    };

    const closePagesDropdown = () => {
        setPagesDropdownOpen(false);
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
        setPagesDropdownOpen(false);
    };

    const closeUserDropdown = () => {
        setUserDropdownOpen(false);
    };


    return (
        <div className={`navbar-container ${headerVisible ? '' : 'info-open'}`} ref={navbarRef}>
            {headerVisible && (
                <div className='header-container'>
                    <div className='first-nav'>
                        <div className='phone'><FontAwesomeIcon icon={faPhone} /> +800-123-4567 6587</div>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Beverley, New York 224 USA</div>
                    </div>

                    <div className='second-nav'>
                        <div className='icon-div1'>Find us on: </div>
                        <div className='icon-div'><a href='https://ifda.in/'><FontAwesomeIcon icon={faGlobe} className='icon' /></a></div>
                        <div className='icon-div'><a href='https://www.facebook.com/IFDAINSTITUTE/'><FontAwesomeIcon icon={faFacebook} className='icon' /></a></div>
                        <div className='icon-div'><a href='https://www.linkedin.com/company/ifda-institute-delhi/?originalSubdomain=in'><FontAwesomeIcon icon={faLinkedin} className='icon' /></a></div>
                        <div className='icon-div'><a href='https://www.youtube.com/c/IFDAInstitute'><FontAwesomeIcon icon={faYoutube} className='icon' /></a></div>
                        <div className='icon-div'><a href='https://www.instagram.com/ifda_institute/?hl=en'><FontAwesomeIcon icon={faInstagram} className='icon' /></a></div>
                    </div>
                </div>
            )}

            <div className={`nav-container ${headerVisible ? '' : 'hidden'}`}>
                <nav>
                    <div className='logo-container'>
                        <img src={logo} alt="logo" />
                    </div>

                    {/* Navbar menu items */}
                    <ul className={`navbar ${isOpen ? 'active' : ''}`}>
                        <div className='li-div'>
                            <li><Link className='nav-link' to="/" onClick={closeMenu}>Home</Link></li>
                        </div>
                        <div className='li-div'>
                            <li><Link className='nav-link' to="/courses" onClick={closeMenu}>Courses</Link></li>
                        </div>
                        <div className='li-div'>
                            <li><Link className='nav-link' to="/blog" onClick={closeMenu}>Blog</Link></li>
                        </div>

                        {/* Pages Dropdown */}
                        <div className='li-div pages-li-div'
                            onMouseEnter={handlePagesMouseEnter}
                            onMouseLeave={handlePagesMouseLeave}
                        >
                            <li className={`pages-li ${pagesDropdownOpen ? 'active' : ''}`}>
                                <div
                                    className='nav-link pages-trigger'
                                    style={{ cursor: 'pointer' }}
                                    onClick={togglePagesDropdown}
                                >
                                    Pages
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`pages-chevron ${pagesDropdownOpen ? 'rotated' : ''}`}
                                    />
                                </div>

                                <div className={`pages-dropdown ${pagesDropdownOpen ? 'show' : ''}`}>
                                    {pagesLinks.map((page) => (
                                        <Link
                                            key={page.to}
                                            to={page.to}
                                            className='pages-dropdown-item'
                                            onClick={() => { closeMenu(); closePagesDropdown(); }}
                                        >
                                            {page.label}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        </div>

                        <div className='li-div'>
                            <li><Link className='nav-link' to="/contact" onClick={closeMenu}>Contact</Link></li>
                        </div>
                    </ul>

                    {/* Login and Signup buttons */}
                    <div className='log-sign'>
                        <button className='light-btn'><Link to="/login" className='log-btn'>
                            <FontAwesomeIcon icon={faUser} />Login</Link></button>
                        <button className='dark-btn'><Link to="/register" className='sign-btn'>
                            <FontAwesomeIcon icon={faUsers} />Signup</Link></button>
                    </div>

                    {/* Login and Signup icons for mobile */}
                    <div className='log-sign-mv'>
                        <div onClick={toggleUserDropdown}>
                            <FontAwesomeIcon icon={faUser} className='log-sign-icon' />
                        </div>
                        {userDropdownOpen && (
                            <div className='dropdown'>
                                <div>
                                    <Link to="/login" className='log-icon' onClick={closeUserDropdown}>
                                        <FontAwesomeIcon icon={faUser} className='ls-icon' /> Login
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/register" className='sign-icon' onClick={closeUserDropdown}>
                                        <FontAwesomeIcon icon={faUserPlus} className='ls-icon' /> Signup
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Show hamburger icon if navbar is closed */}
                    <div className='menu-toggle' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='fa-icons' />
                    </div>

                    <div className='info-icon' onClick={toggleInfo}>
                        <FontAwesomeIcon icon={faInfoCircle} className='fa-icons' />
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;
