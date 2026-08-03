import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Register-Login/Login';
import Register from './components/Register-Login/Register';
import Home from './components/Home/Home';
import Course from './components/Courses/Course';
import About from './components/About/About';
import Creators from './components/Creators/Creators';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Profile from './components/Register-Login/Profile';
import Contact from './components/Contact/Contact';
import FZFError from './components/Error/FZFError';
import Instructor from './components/Instructor/Instructor';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/courses' element={<Course/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/creators' element={<Creators/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/error' element={<FZFError/>}/>
      <Route path='/instructor' element={<Instructor/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App;