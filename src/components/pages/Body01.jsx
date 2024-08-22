import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./welclogo.png";
import Demo from "./class.png";
import profile from "./userProfile.png";
import HomeImage from "./HomeImage.jsx";
// import img09 from "./img09.png";
// import img10 from "./img10.png";
// import img11 from "./demo02.png";

import Impactimg01 from "./impactimg01.png";
import Impactimg03 from "./impactimg03.png";
import Impactimg04 from "./impactimg04.png";
// import background from "./demo02.png";

import Cards from "./Cards.jsx";
import "./Body01.css";

const Crd = ({ backgroundImage, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="crd"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="card-content">
        {/* <h3
          style={{
            marginLeft: "1rem",
            fontSize: "190%",
            marginTop: "20px",
            padding: "20px",
            wordBreak: "break-word",
          }}
        >
          {title}
        </h3> */}
      </div>
      {isHovered && <div className="hover-overlay">{hoverContent}</div>}
    </div>
  );
};

const Body01 = () => {
  return (
    <div style={{
      width:'100'
    }}>
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
        <div style={{ width: "53%" }}>
          <HomeImage />
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
        <div className="impactNO-img">
          <div className="impact-img1">
            <Crd
              backgroundImage={Impactimg01}
              hoverContent={
                <div>
                  <p style={{ padding: "10px" }}>
                    <h1 style={{ fontSize: "45px" }}>
                      1200 <br />
                      Interns
                    </h1>
                    <p style={{ fontSize: "15px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus illum fugiat quidem iure totam perferendis
                      ducimus, delectus, aspernatur aliquam neque maiores
                      reprehenderit suscipit asperiores impedit distinctio ipsam
                      repellat nulla provident.
                    </p>
                  </p>
                </div>
              }
            />
            {/* <img src={Impactimg01} alt="" /> */}
          </div>
          <div className="impact-img2">
            <Crd
              backgroundImage={Impactimg04}
              hoverContent={
                <div>
                  <p style={{ padding: "10px" }}>
                    <h1 style={{ fontSize: "45px" }}>
                      1200 <br />
                      Interns
                    </h1>
                    <p style={{ fontSize: "15px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus illum fugiat quidem iure totam perferendis
                      ducimus, delectus, aspernatur aliquam neque maiores
                      reprehenderit suscipit asperiores impedit distinctio ipsam
                      repellat nulla provident.
                    </p>
                  </p>
                </div>
              }
            />
            {/* <img src={Impactimg04} alt="" /> */}
          </div>
          <div className="impact-img3">
            <Crd
              backgroundImage={Impactimg03}
              hoverContent={
                <div>
                  <p style={{ padding: "10px" }}>
                    <h1 style={{ fontSize: "45px" }}>
                      1200 <br />
                      Interns
                    </h1>
                    <p style={{ fontSize: "15px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus illum fugiat quidem iure totam perferendis
                      ducimus, delectus, aspernatur aliquam neque maiores
                      reprehenderit suscipit asperiores impedit distinctio ipsam
                      repellat nulla provident.
                    </p>
                  </p>
                </div>
              }
            />
            {/* <img src={Impactimg03} alt="" /> */}
          </div>
        </div>

        <div className="impactNo-text">
          <h1>Our Impact Number</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam
            corrupti impedit numquam dolores, animi explicabo praesentium
            dolorum perferendis doloribus nihil harum quasi nulla, pariatur eos
            deserunt laboriosam assumenda. Deleniti!
          </h3>
        </div>
      </div>

      <div style={{ background: "#F2F8FB", marginTop: "-30px" }}>
        <h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "30px",
              fontSize: "200%",
            }}
          >
            <div className="blinking-text">Live </div>
            <div style={{ marginLeft: "16px" }}>Masterclass</div>
          </div>
        </h1>
        <h3 style={{ textAlign: "center", padding: "20px" }}>
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

      <div style={{ background: "#F2F8FB" }}>
        <div className="World-Class-learning">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <div className="World-Class-img">
              <div className="World-Class-img1">
                <img src={Impactimg01} alt="" />
              </div>
              <div className="World-Class-img2">
                <img src={Impactimg04} alt="" />
              </div>
              <div className="World-Class-img3">
                <img src={Impactimg03} alt="" />
              </div>
            </div> */}

            <div className="World-Class-img">
              <div className="World-Class-img1">
                <Crd
                  backgroundImage={Impactimg01}
                  hoverContent={
                    <div>
                      <p style={{ padding: "10px" }}>
                        <h1 style={{ fontSize: "45px" }}>
                          1200 <br />
                          Interns
                        </h1>
                        <p style={{ fontSize: "15px" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusamus illum fugiat quidem iure totam
                          perferendis ducimus, delectus, aspernatur aliquam
                          neque maiores reprehenderit suscipit asperiores
                          impedit distinctio ipsam repellat nulla provident.
                        </p>
                      </p>
                    </div>
                  }
                />
                {/* <img src={Impactimg01} alt="" /> */}
              </div>
              <div className="World-Class-img2">
                <Crd
                  backgroundImage={Impactimg04}
                  hoverContent={
                    <div>
                      <p style={{ padding: "10px" }}>
                        <h1 style={{ fontSize: "45px" }}>
                          1200 <br />
                          Interns
                        </h1>
                        <p style={{ fontSize: "15px" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusamus illum fugiat quidem iure totam
                          perferendis ducimus, delectus, aspernatur aliquam
                          neque maiores reprehenderit suscipit asperiores
                          impedit distinctio ipsam repellat nulla provident.
                        </p>
                      </p>
                    </div>
                  }
                />
                {/* <img src={Impactimg04} alt="" /> */}
              </div>
              <div className="World-Class-img3">
                <Crd
                  backgroundImage={Impactimg03}
                  hoverContent={
                    <div>
                      <p style={{ padding: "10px" }}>
                        <h1 style={{ fontSize: "45px" }}>
                          1200 <br />
                          Interns
                        </h1>
                        <p style={{ fontSize: "15px" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusamus illum fugiat quidem iure totam
                          perferendis ducimus, delectus, aspernatur aliquam
                          neque maiores reprehenderit suscipit asperiores
                          impedit distinctio ipsam repellat nulla provident.
                        </p>
                      </p>
                    </div>
                  }
                />
                {/* <img src={Impactimg03} alt="" /> */}
              </div>
            </div>
            <div className="world-class-text">
              <h1>World-Class Learning For You</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
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

          {/* <div style={{ width: "100%" }}>
                               
          </div>
          <div style={{ marginTop: "15%" }}>
            

           
          </div> */}
        </div>
      </div>

      <div className="listenFromOurStudents">
        <div className="listenFromOurStudents-text">
          <h1>Listen From Our Students</h1>
          <h3>150K+ People Already Have Joined Our Courses</h3>
        </div>
        <div className="listenFromOurStudents-cards">
          <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>Name</h1>
            <h3>Deep Learning Specialization Delhi</h3>

            <div className="istenFromOurStudents-cards-bottom">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                se
              </h3>
            </div>
          </div>

          <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>Name</h1>
            <h3>Deep Learning Specialization Delhi</h3>

            <div className="istenFromOurStudents-cards-bottom">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                se
              </h3>
            </div>
          </div>

          <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>Name</h1>
            <h3>Deep Learning Specialization Delhi</h3>

            <div className="istenFromOurStudents-cards-bottom">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                se
              </h3>
            </div>
          </div>
          <div className="listenFromOurStudents-cards-items">
            <img
              src={profile}
              alt="person"
              className="listenFromOurStudents-cards-image"
            />
            <h1>Name</h1>
            <h3>Deep Learning Specialization Delhi</h3>

            <div className="istenFromOurStudents-cards-bottom">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                se
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body01;
