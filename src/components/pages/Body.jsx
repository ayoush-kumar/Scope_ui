import React from 'react';
import './body.css';

const Body = () => {
  return (

    <>

    <div className='career-explorer'>
    <div className="content-section">
        <h1>Learn Anything To Improve Your Skill</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quia quidem obcaecati nulla! Itaque quas explicabo eius rerum qui consectetur non et enim odit sint, reprehenderit placeat repellat necessitatibus!</p>
        <div className="buttons">
          <button className="view-courses">Get Started</button>
        </div>
    </div>
    <div className="image-section">
        <div className="illustration">
          <img src="" alt="Person working" />
        </div>
    </div>
    </div>



    <div className="career-explorer">
      <div className="content-section">
        <h1>Explore Your Career Fit</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus vitae exercitationem deleniti a vero impedit est voluptatum reprehenderit dolorem tempore, perferendis atque id sed neque doloremque deserunt sunt expedita?</p>
        <div className="buttons">
          <button className="view-courses">View Courses</button>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="image-section">
        <div className="illustration">
          <img src="" alt="Person working" />
          {/* <div className="badge mentors">
            <span>Experienced Mentors</span>
            <div className="avatars">
              {[1,2,3,4,5].map(i => (
                <img key={i} src={`/path/to/avatar${i}.png`} alt={`Mentor ${i}`} />
              ))}
              <span className="more">5+</span>
            </div>
          </div> */}
          {/* <div className="badge students">
            <span>Trusted by Students</span>
            <img src="/path/to/students.png" alt="Students" />
          </div> */}
        </div>
      </div>
    </div>



    <div>
        <div className='body-heading'>
            <h1>Our Impact Number</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sapiente officia vitae veniam magnam nulla, dolorum perferendis consequatur harum est inventore corrupti voluptatem dolore recusandae dolores, magni ad mollitia deleniti.</p>
        </div>
      
      <div className='body-img'>
        <div className='body-img1'>
        <img src="" alt="Person working" />
        </div>
            
        <div className='body-img2'>
        <img src="" alt="Person working" />
        <img src="" alt="Person working" />
        <img src="" alt="Person working" />

        </div>
      </div>
    </div>




    <div className='career-explorer'>
    <div className="content-section">
        <h1>Live MasterClass</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quia quidem obcaecati nulla! Itaque quas explicabo eius rerum qui consectetur non et enim odit sint, reprehenderit placeat repellat necessitatibus!</p>
        {/* <div className="buttons">
          <button className="view-courses">View Courses</button>
        </div> */}
    </div>
    <div className="image-section">
        <div className="illustration">
          <img src="" alt="Person working" />
        </div>
    </div>
    </div>



    <div className='career-explorer'>
    <div className="content-section">
        <h1>World Class Learning In Your Screen</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quia quidem obcaecati nulla! Itaque quas explicabo eius rerum qui consectetur non et enim odit sint, reprehenderit placeat repellat necessitatibus!</p>
        {/* <div className="buttons">
          <button className="view-courses">View Courses</button>
        </div> */}
    </div>
    <div className="image-section">
        <div className="illustration">
          <img src="" alt="Person working" />
        </div>
    </div>
    </div>


    <div>
      <div >
            <h1 style={{textAlign:'center'}}>Dont take word for it </h1>
            <h1 style={{textAlign:'center'}}> Over 100+ people trust us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sapiente officia vitae veniam magnam nulla, dolorum perferendis consequatur harum est inventore corrupti voluptatem dolore recusandae dolores, magni ad mollitia deleniti.</p>
        </div>
    </div>


    </>
  );
}

export default Body;