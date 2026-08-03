import React from 'react';
import './Home.css';
import banner from '../../assets/images/banner/01.png';
import grab from '../../assets/images/sponsor/05.png';
import netflix from '../../assets/images/sponsor/06.png';
import google from '../../assets/images/sponsor/01.png';
import nestle from '../../assets/images/sponsor/02.png';
import disney from '../../assets/images/sponsor/03.png';
import airbnb from '../../assets/images/sponsor/04.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import '../Category/Category.css';
import category1 from '../../assets/images/category/icon/01.jpg';
import category2 from '../../assets/images/category/icon/02.jpg';
import category3 from '../../assets/images/category/icon/03.jpg';
import category4 from '../../assets/images/category/icon/04.jpg';
import category5 from '../../assets/images/category/icon/05.jpg';
import category6 from '../../assets/images/category/icon/06.jpg';
import { Link } from 'react-router-dom';
import CourseCard from '../Courses/CourseCard';
import '../Courses/CourseCard.css';
import course1 from '../../assets/images/course/01.jpg';
import course2 from '../../assets/images/course/02.jpg';
import course3 from '../../assets/images/course/03.jpg';
import course4 from '../../assets/images/course/04.jpg';
import course5 from '../../assets/images/course/05.jpg';
import course6 from '../../assets/images/course/06.jpg';
import avtar1 from '../../assets/images/course/author/01.jpg';
import avtar2 from '../../assets/images/course/author/02.jpg';
import avtar3 from '../../assets/images/course/author/03.jpg';
import avtar4 from '../../assets/images/course/author/04.jpg';
import avtar5 from '../../assets/images/course/author/05.jpg';
import avtar6 from '../../assets/images/course/author/06.jpg';
import '../About/About.css';
import aboutimg from '../../assets/images/about/01.png';
import icon1 from '../../assets/images/about/icon/01.jpg';
import icon2 from '../../assets/images/about/icon/02.jpg';
import icon3 from '../../assets/images/about/icon/03.jpg';
import '../Creators/Creators.css';
import CreatorsCard from '../Creators/CreatorsCard';
import creator1 from '../../assets/images/instructor/01.jpg';
import creator2 from '../../assets/images/instructor/02.jpg';
import creator3 from '../../assets/images/instructor/03.jpg';
import creator4 from '../../assets/images/instructor/04.jpg';
import '../Feedback/Feedback.css';
import video from '../../assets/images/feedback/01.jpg';
import student1 from '../../assets/images/feedback/student/01.jpg';
import student2 from '../../assets/images/feedback/student/02.jpg';
import '../Blog/Blog.css';
import BlogCard from '../Blog/BlogCard';
import blog1 from '../../assets/images/blog/01.jpg';
import blog2 from '../../assets/images/blog/02.jpg';
import blog3 from '../../assets/images/blog/03.jpg';
import '../Achieve/Achieve.css';


const Home = () => {

    const courses = [
        {
            id: 1,
            title: 'Fundamentals of Adobe XD Theory Learn New',
            video: '18x Lesson',
            imageUrl: course1,
            category: 'Online Class',
            avtar: avtar1,
            author: 'William Smith',
            read: 'Read More',
            btnBackground: '#ef6204',
        },
        {
            id: 2,
            title: 'Certified Graphic Design With Free Project Course',
            video: '18x Lesson',
            imageUrl: course2,
            category: 'Online Class',
            avtar: avtar2,
            author: 'Lora Smith',
            read: 'Read More',
            btnBackground: '#97BE5A',
        },
        {
            id: 3,
            title: 'Theory Learn New Student And Fundamentals',
            video: '18x Lesson',
            imageUrl: course3,
            category: 'Online Class',
            avtar: avtar3,
            author: 'Robot Smith',
            read: 'Read More',
            btnBackground: '#FFC700',
        },
        {
            id: 4,
            title: 'Computer Fundamentals Basic Startup Ultricies...',
            video: '18x Lesson',
            imageUrl: course4,
            category: 'Online Class',
            avtar: avtar4,
            author: 'Zinnat Zara',
            read: 'Read More',
            btnBackground: '#FF9800',
        },
        {
            id: 5,
            title: 'Boozy Halloween Drinks for the Grows Eleifend...',
            video: '18x Lesson',
            imageUrl: course5,
            category: 'Online Class',
            avtar: avtar5,
            author: 'Rajib Raj',
            read: 'Read More',
            btnBackground: '#D2649A',
        },
        {
            id: 6,
            title: 'Student Want to Learn About Sceince And Arts',
            video: '18x Lesson',
            imageUrl: course6,
            category: 'Online Class',
            avtar: avtar6,
            author: 'Angel Mili',
            read: 'Read More',
            btnBackground: '#3AA6B9',
        },
    ];

    const creatorsData = [
        {
            id: 1,
            title: 'Emilee Logan',
            about: 'Master of Education Degree',
            imageUrl: creator1,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 2,
            title: 'Donald Logan',
            about: 'Master of Education Degree',
            imageUrl: creator2,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 3,
            title: 'Oliver Porter',
            about: 'Master of Education Degree',
            imageUrl: creator3,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 4,
            title: 'Nahla Jones',
            about: 'Master of Education Degree',
            imageUrl: creator4,
            course: '08 Courses',
            student: '30 Students',
        },
    ];

    const blogs = [
        {
            id: 1,
            title: 'Scottish Creatives To Receive Funded Business.',
            user: 'Begrass Tyson',
            imageUrl: blog1,
            calendar: 'April 23,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 2,
            title: 'Scottish Creatives To Receive Funded Business.',
            user: 'Begrass Tyson',
            imageUrl: blog2,
            calendar: 'April 23,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '4',
        },
        {
            id: 3,
            title: 'Scottish Creatives To Receive Funded Business.',
            user: 'Begrass Tyson',
            imageUrl: blog3,
            calendar: 'April 23,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '6',
        },
    ];

    const logos = [
        { src: grab, alt: "grab" },
        { src: netflix, alt: "netflix" },
        { src: google, alt: "google" },
        { src: nestle, alt: "nestle" },
        { src: disney, alt: "disney" },
        { src: airbnb, alt: "airbnb" },
    ];

    return (
        <>
            <div className="home-main-container">
                <div className='home-container'>
                    <div className='home-header'>
                        <h3>ONLINE EDUCATION</h3>
                        <h1>Learn The Skills You Need To Succeed</h1>
                        <p className='about'>Free online courses from the world’s Leading experts. join 18+ million Learners today.</p>

                        <span><FontAwesomeIcon icon={faSearch} className='search-icon' />
                            <input type="text" placeholder='Keywords of your course' className='search-input' />
                            <button className='search-btn'>Search Course</button></span>

                        <p>Most Popular :
                            <span className='mp'><a href="#">Figma</a></span>
                            <span className='mp'><a href="#">Adobe XD</a></span>
                            <span className='mp'><a href="#">Illustration</a></span>
                            <span className='mp'><a href="#">Photoshop</a></span>
                        </p>
                    </div>

                    <div className='banner'>
                        <img src={banner} alt="banner" className='banner-img' />
                    </div>
                </div>

                <div className="slide-container">
                    <div className="img-sliding">
                        {[...logos, ...logos].map((logo, index) => (
                            <div className="slide-img" key={index}>
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Category section start*/}
            <div className="category-container">
                <div className="category-header">
                    <h3>POPULAR CATEGORY</h3>
                    <h1>Popular Category For Learn</h1>
                </div>
                <div className="catergories">
                    <div className='category-box'><img src={category1} alt="computer science" className='category-img' /><h4><Link to="/courses">Computer Science</Link></h4><span className='cs-span'>24 Courses</span></div>
                    <div className='category-box'><img src={category2} alt="civil engg" className='category-img' /><h4><Link to="/courses">Civil Engineering</Link></h4><span className='ce-span'>04 Courses</span></div>
                    <div className='category-box'><img src={category3} alt="business analysis" className='category-img' /><h4><Link to="/courses">Business Analysis</Link></h4><span className='ba-span'>27 Courses</span></div>
                    <div className='category-box'><img src={category4} alt="data structure analytics" className='category-img' /><h4><Link to="/courses">Data Structure Analytics</Link></h4><span className='dsa-span'>28 Courses</span></div>
                    <div className='category-box'><img src={category5} alt="learning management" className='category-img' /><h4><Link to="/courses">Learning Management</Link></h4><span className='lm-span'>78 Courses</span></div>
                    <div className='category-box'><img src={category6} alt="computer engineering" className='category-img' /><h4><Link to="/courses">Computer Engineering</Link></h4><span className='ceg-span'>38 Courses</span></div>
                </div>
                <div className='browse-container'><button className="browse-btn"><Link to="/courses" className='browse-link'>Browse All Categories</Link></button></div>
            </div>
            {/* Category section end*/}

            {/* Course section start */}
            <div className="course-container">
                <div className="course-header">
                    <h3>FEATURED COURSES</h3>
                    <h1>Pick A Course To Get Started</h1>
                </div>
                <div className="course-grid">
                    {courses.map(course => (
                        <div key={course.id}>
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                video={course.video}
                                imageUrl={course.imageUrl}
                                category={course.category}
                                avtar={course.avtar}
                                author={course.author}
                                read={course.read}
                                btnBackground={course.btnBackground}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Course section end */}

            {/* About section start */}
            <div className='about-container'>
                <div className="about-img">
                    <img src={aboutimg} alt="about-img" />
                </div>
                <div className="about-header">
                    <h3>ABOUT OUR EDUKON</h3>
                    <h1>Good Qualification Services And Better Skills</h1>
                    <p>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
                    <div className="about-content">
                        <div className="sr-left">
                            <img src={icon1} alt="skilled-icon" />
                        </div>
                        <div className="sr-right">
                            <h4>Skilled Instructors</h4>
                            <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="sr-left">
                            <img src={icon2} alt="skilled-icon" />
                        </div>
                        <div className="sr-right">
                            <h4>Get Certificate</h4>
                            <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="sr-left">
                            <img src={icon3} alt="skilled-icon" />
                        </div>
                        <div className="sr-right">
                            <h4>Online Classes</h4>
                            <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* About section end */}

            {/* Creators section Start */}
            <div className='creators-container'>
                <div className="creators-header">
                    <h3>WORLD-CLASS INSTRUCTORS</h3>
                    <h1>Classes Taught By Real Creators</h1>
                </div>

                <div className="creators-grid">
                    {creatorsData.map(creator => (
                        <div key={creator.id}>
                            <CreatorsCard
                                key={creator.id}
                                title={creator.title}
                                about={creator.about}
                                imageUrl={creator.imageUrl}
                                course={creator.course}
                                student={creator.student}
                            />
                        </div>
                    ))}
                </div>
                <div className='content'>
                    <span>Want to help people learn, grow and achieve more in life? </span>
                    <span><Link>Become an instructor </Link></span>
                </div>
            </div>
            {/* Creators section end */}


            {/* Feedback section start */}
            <div className='feedback-container'>
                <div className="feedback-header">
                    <h3>LOVED BY 200,000+ STUDENTS</h3>
                    <h1>Students Community Feedback</h1>
                </div>
                <div className="video-section">
                    <div className="video-container">
                        <div className="video-img">
                            <img src={video} alt="video" />
                        </div>
                        <div className='video-icon'>
                            <a href="https://youtu.be/MU3qrgR2Kkc">
                                <FontAwesomeIcon icon={faPlay} className='v-icon' /></a>
                        </div>
                    </div>
                    <div className="community-container">
                        <div className='l-section'>
                            <div className="community">
                                <div className="l-community">
                                    <div className='community-img'>
                                        <img src={student1} />
                                    </div>
                                    <div>
                                        <h4>Oliver Beddows</h4>
                                        <p>UX designer</p>
                                    </div>
                                </div>
                                <div className="r-community">
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} className='community-icon' />
                                    ))}
                                </div> </div>
                            <div className="community-footer">
                                <p>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                            </div>
                        </div>
                        <div className='r-section'>
                            <div className="community">
                                <div className="l-community">
                                    <div className='community-img'>
                                        <img src={student2} />
                                    </div>
                                    <div>
                                        <h4>Madley Pondor</h4>
                                        <p>UX designer</p>
                                    </div>
                                </div>
                                <div className="r-community">
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} className='community-icon' />
                                    ))}
                                </div>
                            </div>
                            <div className="community-footer">
                                <p>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feedback section end */}

            {/* Blog section start */}
            <div className='blog-container'>
                <div className="blog-header">
                    <h3>FORM OUR BLOG POSTS</h3>
                    <h1>More Articles From Resource Library</h1>
                </div>
                <div className="blog-grid">
                    {blogs.map(blog => (
                        <div key={blog.id}>
                            <BlogCard
                                key={blog.id}
                                title={blog.title}
                                user={blog.user}
                                imageUrl={blog.imageUrl}
                                calendar={blog.calendar}
                                about={blog.about}
                                read={blog.read}
                                msg={blog.msg}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Blog section end */}

            {/* Achieve section Start */}
            <div className='achieve-container'>
                <div className="achieve-header">
                    <h3>START TO SUCCESS</h3>
                    <h1>Achieve Your Goals With Edukon</h1>
                </div>
                <div className="how-achieve">
                    <div className='achieve-count'>
                        <h1>30+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                    <div className='achieve-count'>
                        <h1>3034+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                    <div className='achieve-count'>
                        <h1>330+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                    <div className='achieve-count'>
                        <h1>2300+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                </div>
                <div className="achieve-inner">
                    <div className="achieve-inner-box1">
                        <div className='h-and-p'>
                            <h2>Start Teaching Today</h2>
                            <p>Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
                            <button className='instructor-btn'>Become A Instructor</button>
                        </div>
                        <div></div>
                    </div>
                    <div className="achieve-inner-box2">
                        <div className='h-and-p'>
                            <h2>If You Join Our Course</h2>
                            <p>Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
                            <button className='register-btn'>Register For Free</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* Achieve section end */}
        </>
    )
}

export default Home;
