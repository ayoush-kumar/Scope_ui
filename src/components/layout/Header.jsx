import React, { useState } from 'react';
import './layout.css';
import Logo from './logoScope.png'

import { Link } from 'react-router-dom';

const Header = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [showSchools, setShowSchools] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo" style={{width:'20px'}}>
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo-image" />
      </Link>
    </div>
      <div className="nav-items">
      <div 
          className="dropdown"
          onMouseEnter={() => setShowCourses(true)}
          onMouseLeave={() => setShowCourses(false)}
        >
          <button className="dropbtn">Explore Courses {showCourses ? '▲' : '▼'}</button>
          {showCourses && (
            <div className="dropdown-content">


<Link to="/courses/data-analytics" className="highlight">Data Analytics</Link>
    <Link to="/courses/digital-marketing" className="highlight">Digital Marketing</Link>
    <Link to="/courses/web-development" className="highlight">Web Development</Link>
    <Link to="/courses/cyber-security" className="highlight">Cyber Security</Link>
    <Link to="/courses/app-development" className="highlight">App Development</Link>
    <Link to="/courses/design" className="highlight">Design</Link>
    <Link to="/courses/android-development" className="highlight">Android Development</Link>
    <Link to="/courses/free-courses" className="highlight">Free Courses</Link>
    <Link to="/courses/interview-questions" className="highlight">Interview Questions</Link>
    <Link to="/courses/popular-career-resources" className="highlight">Popular Career Resources</Link>
            </div>
          )}

        </div>
        <div 
          className="dropdown"
          onMouseEnter={() => setShowSchools(true)}
          onMouseLeave={() => setShowSchools(false)}
        >
          <button className="dropbtn">Career Schools {showSchools ? '▲' : '▼'}</button>
          {showSchools && (
            <div className="dropdown-content">
              <Link to="/career-schools/Jaipur" className="highlight">Jaipur</Link>
              <Link to="/career-schools/Jodhpur" className="highlight">Jodhpur</Link>
              {/* <a href="" className="highlight">Jaipur</a>
              <a href="" className="highlight">Jodhpur</a> */}
            </div>
          )}
        </div>


        {/* <div className="dropdown">
          <button className="dropbtn">Career Schools ▼</button>
        </div> */}
        {/* <button className="create-account">Create an account</button> */}
        {/* <button className="login">Log In</button> */}

        <Link to="/auth/placements" className="create-account" style={{textDecoration:'none', color:'red'}}>Placements</Link>
        <Link to="/auth/sign-up" className="create-account" style={{textDecoration:'none', color:'red'}}>Create an account</Link>
        <Link to="/auth/login" className="login" style={{textDecoration:'none'}}>Log In</Link>
      </div>
    </nav>
  );
};

export default Header;
