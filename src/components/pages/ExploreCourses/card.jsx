import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';

const card = () => {
  return (
    <div>

        
    <div className='courses-list'>
    <Link to="/courses/data-analytics" className="highlight-card">
    <h1 >Data Analytics</h1>
    </Link>
    <Link to="/courses/digital-marketing" className="highlight-card">
    <h1>Digital Marketing</h1>
    </Link>
    <Link to="/courses/web-development" className="highlight-card">
    <h1>Web Development</h1>
    </Link>
    <Link to="/courses/cyber-security" className="highlight-card">
    <h1>Cyber Security</h1>
    </Link>
    <Link to="/courses/app-development" className="highlight-card">
    <h1>App Development</h1>
    </Link>
    <Link to="/courses/design" className="highlight-card"><h1>Design</h1></Link>
    <Link to="/courses/android-development" className="highlight-card"><h1>Android Development</h1></Link>
    <Link to="/courses/free-courses" className="highlight-card"><h1>Free Courses</h1></Link>
    <Link to="/courses/interview-questions" className="highlight-card"><h1>Interview Questions</h1></Link>
    <Link to="/courses/popular-career-resources" className="highlight-card"><h1>Popular Career Resources</h1></Link>
    </div>
    

      
    </div>
  )
}

export default card
