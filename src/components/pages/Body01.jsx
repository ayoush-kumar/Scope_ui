import React from "react";
import { Link } from "react-router-dom";
import Logo from "./welclogo.png";
import Demo from "../pages/Assets/demo.jpg";
import img09 from "./img09.png";
import img10 from "./img10.png";
import img11 from "./img11.png";

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
            style={{ height: "150px", marginLeft: "9rem" }}
          />
          <p style={{ textAlign: "center" }}>
            Top Mentorship Programs in Tech, Marketing, & Data-
            <br />
            Designed and Delivered by industry maestros.
          </p>
          <div
            className="button-container"
            style={{ justifyContent: "center" }}
          >
            <Link to="" className="button join-button">
              <h4 style={{ textAlign: "center" }}>Join Now</h4>
            </Link>
            <Link to="" className="button login-button">
              <h4 style={{ textAlign: "center" }}>Login</h4>
            </Link>
          </div>
        </div>
        <div className="welcome-image">
          <img
            style={{
              height: "600px",
              width: "800px",
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
        {/* <div
          style={{
            backgroundColor: "pink",
            width: "100%",
            height: "800px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            Our Impact Number
          </h1>
          <div style={{justifyContent:'center'}}>
          <img src={img09} alt="" style={{height: "450px", margin:'20px', width:'45%'}}/>
          <img src={img10} alt="" style={{height: "450px", margin:'20px', width:'45%'}}/>
          </div>

        </div> */}
      </div>

      <div
      style={{ background:'#F2F8FB' }}>
        <h1 style={{ textAlign: "center" }}>Live Masterclass</h1>
        <h3 style={{ textAlign: "center" }}>
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
            <div className="masterclass-cards-tems-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>
            </div>
          </div>
          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-tems-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>
            </div>
          </div>
          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-tems-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>
            </div>
          </div>

          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-tems-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>
            </div>
          </div>

          <div className="masterclass-cards-items">
            <img
              src={Demo}
              alt="PRADUMAN"
              className="masterclass-cards-image"
            />
            <div className="masterclass-cards-tems-text">
              <h3 style={{ textAlign: "center" }}>
                Food Delivery Costs Analysis
                <br />
                Using Python
                <br />
              </h3>
              <h4 style={{ textAlign: "center" }}>Mentored By</h4>

              <h2 style={{ textAlign: "center" }}>Garry Newell</h2>
            </div>
          </div>

        </div>
      </div>

      <div className="World-Class-learning">
        {/* <div
          style={{
            backgroundColor: "orange",
            width: "100%",
            height: "800px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h1 className="World-Class-learning" style={{ textAlign: "center", color: "white" }}>
            <h1>
            World Class learning for you
            </h1>
            <img src={img09} alt="" style={{height: "450px", margin:'20px'}}/>
            <img src={img10} alt="" style={{height: "450px", margin:'20px'}}/>
          </h1>
        </div> */}
      </div>

      <div className="listenFromOurStudents">
        {/* <h1 style={{ textAlign: "center" }}>Listen From Our Students</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
        </div> */}


      </div>
    </div>
  );
};

export default Body01;
