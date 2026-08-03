import React, { useState, useMemo } from 'react'
import CourseCard from './CourseCard';
import './CourseCard.css';
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
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';


const allCourses = [
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
        tag: 'UI/UX Design',
        price: 29,
        reviews: 12,
        rating: 4,
        categoryFilter: 'Design',
        language: 'All Language',
        skill: 'CSS',
    },
    {
        id: 2,
        title: 'Certified Graphic Design With Free Project Course',
        video: '20x Lesson',
        imageUrl: course2,
        category: 'Online Class',
        avtar: avtar2,
        author: 'Lora Smith',
        read: 'Read More',
        btnBackground: '#97BE5A',
        tag: 'Graphic Design',
        price: 49,
        reviews: 27,
        rating: 5,
        categoryFilter: 'Design',
        language: 'All Language',
        skill: 'HTML',
    },
    {
        id: 3,
        title: 'Theory Learn New Student And Fundamentals',
        video: '15x Lesson',
        imageUrl: course3,
        category: 'Online Class',
        avtar: avtar3,
        author: 'Robot Smith',
        read: 'Read More',
        btnBackground: '#FFC700',
        tag: 'Python Basics',
        price: 119,
        reviews: 8,
        rating: 3,
        categoryFilter: 'Education',
        language: 'PYTHON',
        skill: 'PYTHON',
    },
    {
        id: 4,
        title: 'Computer Fundamentals Basic Startup Ultricies',
        video: '12x Lesson',
        imageUrl: course4,
        category: 'Online Class',
        avtar: avtar4,
        author: 'Zinnat Zara',
        read: 'Read More',
        btnBackground: '#FF9800',
        tag: 'Java',
        price: 79,
        reviews: 34,
        rating: 4,
        categoryFilter: 'Academy',
        language: 'JAVA',
        skill: 'JAVA',
    },
    {
        id: 5,
        title: 'Boozy Halloween Drinks for the Grows Eleifend',
        video: '10x Lesson',
        imageUrl: course5,
        category: 'Online Class',
        avtar: avtar5,
        author: 'Rajib Raj',
        read: 'Read More',
        btnBackground: '#D2649A',
        tag: 'Business Skills',
        price: 199,
        reviews: 19,
        rating: 4,
        categoryFilter: 'Business',
        language: 'JAVASCRIPT',
        skill: 'JAVASCRIPT',
    },
    {
        id: 6,
        title: 'Student Want to Learn About Science And Arts',
        video: '22x Lesson',
        imageUrl: course6,
        category: 'Online Class',
        avtar: avtar6,
        author: 'Angel Mili',
        read: 'Read More',
        btnBackground: '#3AA6B9',
        tag: 'PHP',
        price: 149,
        reviews: 41,
        rating: 5,
        categoryFilter: 'Education',
        language: 'PHP',
        skill: 'PHP',
    },
    {
        id: 7,
        title: 'React JS Complete Course From Zero to Hero',
        video: '30x Lesson',
        imageUrl: course1,
        category: 'Online Class',
        avtar: avtar3,
        author: 'Sarah Connor',
        read: 'Read More',
        btnBackground: '#61DAFB',
        tag: 'React JS',
        price: 249,
        reviews: 63,
        rating: 5,
        categoryFilter: 'Software',
        language: 'JAVASCRIPT',
        skill: 'REACT',
    },
    {
        id: 8,
        title: 'Python for Data Science & Machine Learning',
        video: '25x Lesson',
        imageUrl: course2,
        category: 'Online Class',
        avtar: avtar1,
        author: 'Dr. John Lee',
        read: 'Read More',
        btnBackground: '#306998',
        tag: 'Data Science',
        price: 299,
        reviews: 88,
        rating: 5,
        categoryFilter: 'Software',
        language: 'PYTHON',
        skill: 'PYTHON',
    },
    {
        id: 9,
        title: 'Complete Web Development Bootcamp 2024',
        video: '40x Lesson',
        imageUrl: course3,
        category: 'Online Class',
        avtar: avtar2,
        author: 'Emily Rose',
        read: 'Read More',
        btnBackground: '#E34F26',
        tag: 'Web Dev',
        price: 179,
        reviews: 52,
        rating: 4,
        categoryFilter: 'Software',
        language: 'HTML',
        skill: 'HTML',
    },
    {
        id: 10,
        title: 'Node.js & Express Backend Development',
        video: '28x Lesson',
        imageUrl: course4,
        category: 'Online Class',
        avtar: avtar5,
        author: 'Mike Johnson',
        read: 'Read More',
        btnBackground: '#339933',
        tag: 'Node.js',
        price: 219,
        reviews: 37,
        rating: 4,
        categoryFilter: 'Software',
        language: 'JAVASCRIPT',
        skill: 'NODE',
    },
    {
        id: 11,
        title: 'MongoDB Database Design & Management',
        video: '16x Lesson',
        imageUrl: course5,
        category: 'Online Class',
        avtar: avtar4,
        author: 'Chris Brown',
        read: 'Read More',
        btnBackground: '#47A248',
        tag: 'MongoDB',
        price: 159,
        reviews: 23,
        rating: 4,
        categoryFilter: 'Software',
        language: 'JAVASCRIPT',
        skill: 'MONGODB',
    },
    {
        id: 12,
        title: 'Angular Framework – Building Enterprise Apps',
        video: '24x Lesson',
        imageUrl: course6,
        category: 'Online Class',
        avtar: avtar6,
        author: 'Nina Patel',
        read: 'Read More',
        btnBackground: '#DD0031',
        tag: 'Angular',
        price: 269,
        reviews: 46,
        rating: 5,
        categoryFilter: 'Software',
        language: 'JAVASCRIPT',
        skill: 'ANGULAR',
    },
    {
        id: 13,
        title: 'Bootstrap 5 Responsive Web Design Masterclass',
        video: '14x Lesson',
        imageUrl: course1,
        category: 'Online Class',
        avtar: avtar2,
        author: 'James Parker',
        read: 'Read More',
        btnBackground: '#7952B3',
        tag: 'Bootstrap',
        price: 89,
        reviews: 31,
        rating: 4,
        categoryFilter: 'Design',
        language: 'HTML',
        skill: 'BOOTSTRAP',
    },
    {
        id: 14,
        title: 'WordPress Site Building From Scratch to Launch',
        video: '19x Lesson',
        imageUrl: course2,
        category: 'Online Class',
        avtar: avtar5,
        author: 'Diana West',
        read: 'Read More',
        btnBackground: '#21759B',
        tag: 'WordPress',
        price: 69,
        reviews: 55,
        rating: 3,
        categoryFilter: 'Business',
        language: 'PHP',
        skill: 'WORDPRESS',
    },
    {
        id: 15,
        title: 'Advanced CSS Animations & Transitions',
        video: '17x Lesson',
        imageUrl: course3,
        category: 'Online Class',
        avtar: avtar6,
        author: 'Priya Nair',
        read: 'Read More',
        btnBackground: '#264de4',
        tag: 'CSS Advanced',
        price: 109,
        reviews: 44,
        rating: 5,
        categoryFilter: 'Design',
        language: 'All Language',
        skill: 'CSS',
    },
    {
        id: 16,
        title: 'Vue JS 3 – The Complete Guide with Router & Vuex',
        video: '32x Lesson',
        imageUrl: course4,
        category: 'Online Class',
        avtar: avtar3,
        author: 'Leo Martinez',
        read: 'Read More',
        btnBackground: '#42b883',
        tag: 'Vue.js',
        price: 239,
        reviews: 29,
        rating: 4,
        categoryFilter: 'Software',
        language: 'JAVASCRIPT',
        skill: 'VUE',
    },
    {
        id: 17,
        title: 'jQuery for Beginners – DOM Manipulation Made Easy',
        video: '11x Lesson',
        imageUrl: course5,
        category: 'Online Class',
        avtar: avtar1,
        author: 'Sam Hughes',
        read: 'Read More',
        btnBackground: '#0769ad',
        tag: 'jQuery',
        price: 59,
        reviews: 17,
        rating: 3,
        categoryFilter: 'Academy',
        language: 'JAVASCRIPT',
        skill: 'JQUERY',
    },
    {
        id: 18,
        title: 'MySQL Database – Complete SQL Mastery Course',
        video: '21x Lesson',
        imageUrl: course6,
        category: 'Online Class',
        avtar: avtar4,
        author: 'Anita Roy',
        read: 'Read More',
        btnBackground: '#f29111',
        tag: 'MySQL',
        price: 129,
        reviews: 72,
        rating: 5,
        categoryFilter: 'Academy',
        language: 'All Language',
        skill: 'MY SQL',
    },
];

const SORT_OPTIONS = [
    { value: 'default', label: 'Default' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'title-asc', label: 'Title: A–Z' },
];

const Course = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedLanguage, setSelectedLanguage] = useState('All Language');
    const [selectedPrice, setSelectedPrice] = useState('All Prices');
    const [selectedSkill, setSelectedSkill] = useState('All Skills');
    const [sortBy, setSortBy] = useState('default');

    const filteredCourses = useMemo(() => {
        let result = [...allCourses];

        if (selectedCategory !== 'All Categories') {
            result = result.filter(c => c.categoryFilter === selectedCategory);
        }
        if (selectedLanguage !== 'All Language') {
            result = result.filter(c => c.language === selectedLanguage);
        }
        if (selectedPrice !== 'All Prices') {
            const maxPrice = parseInt(selectedPrice, 10);
            result = result.filter(c => c.price <= maxPrice);
        }
        if (selectedSkill !== 'All Skills') {
            result = result.filter(c => c.skill === selectedSkill);
        }

        // Sorting
        if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
        else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
        else if (sortBy === 'title-asc') result.sort((a, b) => a.title.localeCompare(b.title));

        return result;
    }, [selectedCategory, selectedLanguage, selectedPrice, selectedSkill, sortBy]);

    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
    const indexOfLastItem = indexOfFirstItem + itemsPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

    const handleFilterChange = (setter) => (e) => {
        setter(e.target.value);
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSelectedCategory('All Categories');
        setSelectedLanguage('All Language');
        setSelectedPrice('All Prices');
        setSelectedSkill('All Skills');
        setSortBy('default');
        setCurrentPage(1);
    };

    const isFiltered = selectedCategory !== 'All Categories' ||
        selectedLanguage !== 'All Language' ||
        selectedPrice !== 'All Prices' ||
        selectedSkill !== 'All Skills';

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="course-top-bg-container">
                <div className="course-top-container">
                    <div>
                        <h1>Archives: Courses</h1>
                    </div>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <span className='top-course-link'> / Course Page</span>
                    </div>
                </div>
                <div className='filter-container'>
                    <FontAwesomeIcon icon={faFilter} className='filter-icon' />
                    <span>Filters</span>
                    <select value={selectedCategory} onChange={handleFilterChange(setSelectedCategory)}>
                        <option value="All Categories">All Categories</option>
                        <option value="Academy">Academy</option>
                        <option value="Business">Business</option>
                        <option value="Design">Design</option>
                        <option value="Education">Education</option>
                        <option value="Software">Software</option>
                        <option value="Agency">Agency</option>
                        <option value="Blog">Blog</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Health">Health</option>
                        <option value="Music">Music</option>
                    </select>
                    <select value={selectedLanguage} onChange={handleFilterChange(setSelectedLanguage)}>
                        <option value="All Language">All Language</option>
                        <option value="JAVA">JAVA</option>
                        <option value="PHP">PHP</option>
                        <option value="PYTHON">PYTHON</option>
                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                        <option value="HTML">HTML</option>
                    </select>
                    <select value={selectedPrice} onChange={handleFilterChange(setSelectedPrice)}>
                        <option value="All Prices">All Prices</option>
                        <option value="75">Up to $75</option>
                        <option value="100">Up to $100</option>
                        <option value="150">Up to $150</option>
                        <option value="200">Up to $200</option>
                        <option value="250">Up to $250</option>
                        <option value="300">Up to $300</option>
                    </select>
                    <select value={selectedSkill} onChange={handleFilterChange(setSelectedSkill)}>
                        <option value="All Skills">All Skills</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="BOOTSTRAP">BOOTSTRAP</option>
                        <option value="WORDPRESS">WORDPRESS</option>
                        <option value="VUE">VUE</option>
                        <option value="REACT">REACT</option>
                        <option value="JAVA">JAVA</option>
                        <option value="ANGULAR">ANGULAR</option>
                        <option value="PHP">PHP</option>
                        <option value="PYTHON">PYTHON</option>
                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                        <option value="NODE">NODE</option>
                        <option value="MONGODB">MONGODB</option>
                        <option value="JQUERY">JQUERY</option>
                        <option value="MY SQL">MY SQL</option>
                    </select>
                </div>
            </div>
            <div className="course-container">
                <div className='filter-box'>
                    <div className='filter-box-left'>
                        <span className='result'>
                            Showing {filteredCourses.length === 0 ? 0 : indexOfFirstItem + 1}–{Math.min(indexOfLastItem, filteredCourses.length)} of {filteredCourses.length} results
                        </span>
                        {isFiltered && (
                            <button className='clear-filters-btn' onClick={clearFilters}>
                                <FontAwesomeIcon icon={faTimes} /> Clear Filters
                            </button>
                        )}
                    </div>
                    <div>
                        <span className='result1'>Sort by :</span>
                        <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }} className='skills'>
                            {SORT_OPTIONS.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {filteredCourses.length === 0 ? (
                    <div className="no-results">
                        <p>😕 No courses match your filters.</p>
                        <button className='clear-filters-btn' onClick={clearFilters}>Clear Filters</button>
                    </div>
                ) : (
                    <div className="course-grid">
                        {currentCourses.map(course => (
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
                                    tag={course.tag}
                                    price={course.price}
                                    reviews={course.reviews}
                                    rating={course.rating}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="course-pagination">
                        <button onClick={handlePrevPage} disabled={currentPage === 1} className={currentPage === 1 ? 'disabled' : ''}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className={currentPage === totalPages ? 'disabled' : ''}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Course