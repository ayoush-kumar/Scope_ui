import React, { useState } from 'react';
import './CardCSS.css'; 
import Demo from './img11.png'
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
        <span className="number" style={{ fontSize:'400%', padding:'10px', marginRight:'100%'}}>{number}</span>
        <h3 style={{ marginLeft:'1rem', fontSize:'190%', marginTop:'20px', padding:'20px', wordBreak:'break-word'}}>{title}</h3>
      </div>
      {isHovered && (
        <div className="hover-overlay">
          {hoverContent}
        </div>
      )}
    </div>
  );
};

const CardGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 5; // assuming you have 5 cards
  const cardsToShow = 4;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCards - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev-button" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="card-slider" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
        <Card 
          number="01"  
          className='card01' 
          title="Data Analytics" 
          backgroundImage={Demo}
          hoverContent={
            <div>
              <h1 style={{ fontSize:'60px'}}> 
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
              <h1 style={{ fontSize:'60px'}}>
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
              <h1 style={{ fontSize:'60px'}}>
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
              <h1 style={{ fontSize:'60px'}}>
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
              <h1 style={{ fontSize:'60px'}}>
              Explore <br/>
              Courses <br/>
            </h1>
            <Link to="/courses" className="explore-now">Explore Now</Link>
            </div>
          }
        />

<Card 
          number="06" 
          title="Design" 
          backgroundImage={Demo} 
          hoverContent={
            <div>
              <h1 style={{ fontSize:'60px'}}>
              Explore <br/>
              Courses <br/>
            </h1>
            <Link to="/courses" className="explore-now">Explore Now</Link>
            </div>
          }
        />
      </div>
      <button className="slider-button next-button" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default CardGrid;
