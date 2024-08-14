import React from "react";
import { Link } from "react-router-dom";
import Logo from "./welclogo.png";
import Demo from "./class.png";
import profile from './userProfile.png'
// import img09 from "./img09.png";
// import img10 from "./img10.png";
import img11 from "./demo02.png";

import Cards from "./Cards.jsx";
import "./Body01.css";

const Body01 = () => {
  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-text">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "150px", marginLeft: "7rem", width: "100%" }}
          />
          <p style={{ textAlign: "center", marginLeft: "6rem" }}>
            Top Mentorship Programs in Tech, Marketing, & Data-
            <br />
            Designed and Delivered by industry maestros.
          </p>

          <div
            className="button-container"
            style={{ justifyContent: "center", marginLeft: "5rem" }}
          >
            <Link to="/auth/sign-up" className="button join-button">
              <h4 style={{ textAlign: "center" }}>Join Now</h4>
            </Link>
            <Link to="/auth/login" className="button login-button">
              <h4 style={{ textAlign: "center" }}>Login</h4>
            </Link>
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <img
            style={{
              height: "600px",
              width: "100%",

              // left:'50%',
              // top:'10%',
              // width:'800px'
            }}
            src={img11}
            alt="Mentorship"
          />
        </div>
      </div>
     
      <div
        className="carrer-fit"
        style={{ background: "lightGray", padding: "30px" }}
      >
        <h1 style={{ textAlign: "center", color: "white", fontSize: "50px" }}>
          Explore Your Career Fit
        </h1>
        <h5 style={{ textAlign: "center", color: "white", fontSize: "15px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          soluta doloribus excepturi aliquid magni corporis eos, laboriosam
          architecto non quam earum ea illum eum reprehenderit ut atque et
          veniam explicabo?
        </h5>
        <Cards />
      </div>

      <div className="impactNo">
        <div style={{ width: "90%" }}></div>
        <div style={{ marginTop: "15%" }}>
          <h1>World-Class Learning For You</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam
            corrupti impedit numquam dolores, animi explicabo praesentium
            dolorum perferendis doloribus nihil harum quasi nulla, pariatur eos
            deserunt laboriosam assumenda. Deleniti!
          </h3>

        </div>
      </div>

      <div style={{ background: "#F2F8FB", marginTop: "-30px" }}>
        <h1 style={{ textAlign: "center", paddingTop:'30px', fontSize:'300%' }}>Live Masterclass</h1>
        <h3 style={{ textAlign: "center" , padding:'20px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          fugiat perferendis dolore quibusdam, minima minus doloremque dolores
          nobis voluptatibus id deseru
        </h3>

        <div className="masterclass-cards">
          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-items-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>

              <div className="masterclass-cards-Link">
                <Link to="/watch-live" className="watch-now">
                  Watch Live
                </Link>
              </div>
            </div>
          </div>

          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-items-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>

              <div className="masterclass-cards-Link">
                <Link to="/watch-live" className="watch-now">
                  Watch Live
                </Link>
              </div>
            </div>
          </div>

          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-items-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>

              <div className="masterclass-cards-Link">
                <Link to="/watch-live" className="watch-now">
                  Watch Live
                </Link>
              </div>
            </div>
          </div>

          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-items-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>

              <div className="masterclass-cards-Link">
                <Link to="/watch-live" className="watch-now">
                  Watch Live
                </Link>
              </div>
            </div>
          </div>

          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-items-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>

              <div className="masterclass-cards-Link">
                <Link to="/watch-live" className="watch-now">
                  Watch Live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

<div style={{background: "#F2F8FB"}}>
<div className="World-Class-learning">
        <div style={{ width: "100%" }}></div>
        <div style={{ marginTop: "15%" }}>
          <h1>World-Class Learning For You</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam
            corrupti impedit numquam dolores, animi explicabo praesentium
            dolorum perferendis doloribus nihil harum quasi nulla, pariatur eos
            deserunt laboriosam assumenda. Deleniti!
          </h3>

          <Link
            to="/join-now"
            className="masterclass-Join-now"
            style={{ marginLeft: "50%" }}
          >
            Join Now
          </Link>
        </div>
      </div>

</div>
      
      <div className="listenFromOurStudents">

      <div className="listenFromOurStudents-text">
          <h1>
            Listen From Our Students
          </h1>
          <h3>
            150K+ People Already Have Joined Our Courses
          </h3>

        </div>
        <div className="listenFromOurStudents-cards">
        <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>
              Name
            </h1>
            <h3>
              Deep Learning Specialization Delhi
            </h3>

            <div className="istenFromOurStudents-cards-bottom">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, se
            </h3>
            </div>
          
          </div>


          <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>
              Name
            </h1>
            <h3>
              Deep Learning Specialization Delhi
            </h3>

            <div className="istenFromOurStudents-cards-bottom">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, se
            </h3>
            </div>
          
          </div>

          <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>
              Name
            </h1>
            <h3>
              Deep Learning Specialization Delhi
            </h3>

            <div className="istenFromOurStudents-cards-bottom">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, se
            </h3>
            </div>
          
          </div>
          <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>
              Name
            </h1>
            <h3>
              Deep Learning Specialization Delhi
            </h3>

            <div className="istenFromOurStudents-cards-bottom">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, se
            </h3>
            </div>
          
          </div>

          




        </div>

        
    
      </div>
    </div>
  );
};

export default Body01;
