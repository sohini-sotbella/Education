import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faSignal, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';
import './CourseCard.css';


const CourseCard = ({ title, video, imageUrl, category, author, read, avtar, btnBackground, price, tag, reviews, rating }) => {
    return (
        <>
        <div className="course-card">           
            <img src={imageUrl} alt={title} />           

            <div className="course-card-content">
                <div className="course-buy">
                    <span>${price}</span>
                </div>
                <div className="course-btn" style={{ backgroundColor: btnBackground }}>
                    <button>{tag}</button>
                </div>
                <div className="course-rating">
                    <span>
                    {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className='course-icon'
                            style={{ opacity: index < rating ? 1 : 0.3 }}
                        />
                    ))}
                    </span>
                </div>
                <div className='course-review'>
                    <span>{reviews} reviews</span>
                </div>
            </div>

            <div className="course-title">{title}</div>
            
            <div className="course-details">                
                <div className="course-video">
                    <span><FontAwesomeIcon icon={faVideo} className='course-icon' /></span>
                    <span className='vdo-span'>{video}</span>
                </div>

                <div className="course-category">
                    <span><FontAwesomeIcon icon={faSignal} className='course-icon' /></span>
                    <span>{category}</span>
                </div>
            </div>

            <div className="course-author">
                <div className='course-avtar'>
                    <img src={avtar} alt="Avatar" className='avtar' />
                    <span>{author}</span>
                </div>
                <div className='course-avtar'>
                    <span>{read}</span>
                    <span><FontAwesomeIcon icon={faExternalLink} className='course-icon'/></span>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default CourseCard;
