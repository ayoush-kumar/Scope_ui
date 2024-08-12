import React, { useState } from 'react';
import './CardCSS.css'; 

// import Demo1 from './ExploreCourses/Images/img3.png'
// import Demo2 from './ExploreCourses/Images/img04.png'
// import Demo3 from './ExploreCourses/Images/img05.png'
// import Demo4 from './ExploreCourses/Images/img06.png'
// import Demo5 from './ExploreCourses/Images/img07.png'

import Demo from './ExploreCourses/Images/img12.png'



import { Link } from 'react-router-dom';

const Card = ({ number, title, backgroundImage, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="card-content">
        <span className="number" style={{  fontSize:'260%',padding:'10px'}}>{number}</span>
        <h3 style={{ marginLeft:'1rem', fontSize:'180%', marginTop:'50px', padding:'20px', wordBreak:'break-word'}}>{title}</h3>
      </div>
      {isHovered && (
        <div className="hover-overlay">


          {hoverContent}
          {/* <h1>
            Explore <br/>
            Courses <br/>
          </h1>

          <Link to="/courses" className="explore-now">Explore Now</Link> */}
            
        </div>
      )}
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="card-container">
      <Card 
        number="01"  
        className='card01' 
        title="Data Analytics" 
        backgroundImage={Demo}
        hoverContent={
          <div>
            <h1 style={{ fontSize:'45px'}}> 
            Explore <br/>
            Courses <br/>
          </h1>

          <Link to="/courses" className="explore-now">Explore Now</Link>

          </div>
        }
      />
      <Card 
        number="02"
        title="Digital Marketing" 
        backgroundImage={Demo} 
        hoverContent={
          <div>
            <h1 style={{ fontSize:'45px'}}>
            Explore <br/>
            Courses <br/>
          </h1>

          <Link to="/courses" className="explore-now">Explore Now</Link>

          </div>
        }
      />
      <Card 
        number="03"
        title="Web Development" 
        backgroundImage={Demo} 
        hoverContent={
          <div>
            <h1 style={{ fontSize:'45px'}}>
              Explore <br/>
              Courses <br/>
            </h1>
        
            <Link to="/courses" className="explore-now">Explore Now</Link>
        
          </div>
        }
      />
      <Card 
        number="04" 
        title="Cyber Security" 
        backgroundImage={Demo} 
        hoverContent={
          <div>
            <h1 style={{ fontSize:'45px'}}>
            Explore <br/>
            Courses <br/>
          </h1>

          <Link to="/courses" className="explore-now">Explore Now</Link>

          </div>
        }
      />
      <Card 
        number="05" 
        title="App Development" 
        backgroundImage={Demo} 
        hoverContent={
          <div>
            <h1 style={{ fontSize:'45px'}}>
            Explore <br/>
            Courses <br/>
          </h1>

          <Link to="/courses" className="explore-now">Explore Now</Link>

          </div>
        }
      />
    </div>
  );
};

export default CardGrid;
