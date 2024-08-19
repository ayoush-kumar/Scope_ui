import React from "react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";

// import Card from "./card.jsx";
// import Img1 from './Images/img1.png'

import course01 from "./Images/courses01.png";
import logo from "./Images/logo01.png";
import Pic from "./Images/profilePIC.png"
import card03 from "./Images/coursecard03.png";
import card05 from "./Images/coursecard05.png";
import "./styles.css";

const Courses = () => {
  return (
    <div>
      <Header />
      <div className="course-main-body">
        <div className="course01">
          <div className="course01-text">
            <p
              style={{
                textAlign: "left",
                marginLeft: "90px",
                color: "#ff4b4b",
              }}
            >
              <h1 style={{ fontSize: "70px" }}>
                Get access to live <br />
                Masterclasses, Courses <br />
                and Cohorts
              </h1>
              <h3 style={{ color: "black" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                vel expedita minima mollitia cupiditate atque quia quod sed
                autem beatae culpa recusandae doloribus reprehenderit quos
                distinctio deserunt asperiores, unde ea.
              </h3>
            </p>
            <div
              className="course-button-container"
              style={{ marginLeft: "90px" }}
            >
              <Link to="" className="course-button-join-button">
                <h4 style={{ textAlign: "center" }}>Explore Now</h4>
              </Link>
            </div>
          </div>

          <div className="course01-image">
            <img src={course01} alt="img" />
          </div>
        </div>

        <div className="course02"></div>

        <div className="course03">
          <div style={{ marginBottom: "15rem" }}>
            <h1>Trending Courses</h1>
            <h2 style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              perferendis quis nisi eveniet aliquam autem?
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "60px",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Link className="course03-item" to="/courses/data-analytics">
                <img src={logo} alt="img" />
                <h3>Data Science</h3>
              </Link>

              <Link className="course03-item" to="/courses/web-development">
                <img src={logo} alt="img" />
                <h3>Web Development</h3>
              </Link>

              <Link className="course03-item" to="/courses/web-development">
                <img src={logo} alt="img" />
                <h3>UI/UX Design</h3>
              </Link>

              <Link className="course03-item" to="/courses/cyber-security">
                <img src={logo} alt="img" />
                <h3>Cyber Security</h3>
              </Link>

              <Link className="course03-item" to="/courses/digital-marketing">
                <img src={logo} alt="img" />
                <h3>Digital Marketing</h3>
              </Link>

              <Link className="course03-item" to="/courses/app-development">
                <img src={logo} alt="img" />
                <h3>App Development</h3>
              </Link>
            </div>
          </div>

          <div className="course03-cards">
            <div className="course03-search">
              <div className="search01">
                <input type="text" placeholder="Search Course" />
              </div>
              <div className="search02">
                <input type="text" placeholder="Instructor Name" />
              </div>
              <div className="search03">
                <button>Search</button>
              </div>
              <div className="search04">
                <label htmlFor="category"></label>
                <select>
                  <option value="">Popular Courses</option>
                  <option value="course 01">course 01</option>
                  <option value="course 02">course 02</option>
                  <option value="course 03">course 03</option>
                  <option value="course 04">course 04</option>
                  <option value="course 05">course 05</option>
                </select>
              </div>
            </div>

            <div className="course03-card-items">
              <div className="course03-card01">
                <div className="course03-card-01">
                  <Link to="/courses/data-analytics">
                    <img src={card03} alt="img" />
                  </Link>

                  <div
                    style={{
                      height: "100%",
                      marginLeft: "15px",
                      textAlign: "left",
                    }}
                  >
                    <h1 style={{ fontSize: "20px", textAlign: "left" }}>
                      Development
                    </h1>
                    <h2>Introduction to data science</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consequatur dolore, ratione odio sequi quod debitis
                    reprehenderit impedit, fuga sint culpa aliquam incidunt eius
                    nulla tenetur repellendus mollitia! Libero, laborum.
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        marginBottom: "10px",
                        height: "10%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={Pic}
                        alt="img"
                        style={{
                          borderRadius: "100%",
                          width: "10%",
                          paddingRight: "10px",
                        }}
                      />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis commodi rerum n
                    </div>
                  </div>
                </div>
                <div className="course03-card-02">
                  <Link to="/courses/data-analytics">
                    <img src={card03} alt="img" />
                  </Link>

                  <div
                    style={{
                      height: "100%",
                      marginLeft: "15px",
                      textAlign: "left",
                    }}
                  >
                    <h1 style={{ fontSize: "20px", textAlign: "left" }}>
                      Development
                    </h1>
                    <h2>Introduction to data science</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consequatur dolore, ratione odio sequi quod debitis
                    reprehenderit impedit, fuga sint culpa aliquam incidunt eius
                    nulla tenetur repellendus mollitia! Libero, laborum.
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        marginBottom: "10px",
                        height: "10%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={Pic}
                        alt="img"
                        style={{
                          borderRadius: "100%",
                          width: "10%",
                          paddingRight: "10px",
                        }}
                      />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis commodi rerum n
                    </div>
                  </div>
                </div>
                <div className="course03-card-03">
                  <Link to="/courses/data-analytics">
                    <img src={card03} alt="img" />
                  </Link>
                  <div
                    style={{
                      height: "100%",
                      marginLeft: "15px",
                      textAlign: "left",
                    }}
                  >
                    <h1 style={{ fontSize: "20px", textAlign: "left" }}>
                      Development
                    </h1>
                    <h2>Introduction to data science</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consequatur dolore, ratione odio sequi quod debitis
                    reprehenderit impedit, fuga sint culpa aliquam incidunt eius
                    nulla tenetur repellendus mollitia! Libero, laborum.
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        marginBottom: "10px",
                        height: "10%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={Pic}
                        alt="img"
                        style={{
                          borderRadius: "100%",
                          width: "10%",
                          paddingRight: "10px",
                        }}
                      />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis commodi rerum n
                    </div>
                  </div>
                </div>
              </div>

              <div className="course03-card01">
                <div className="course03-card-04">
                  <Link to="/courses/data-analytics">
                    <img src={card05} alt="img" />
                  </Link>
                  <div
                    style={{
                      height: "100%",
                      marginLeft: "15px",
                      textAlign: "left",
                    }}
                  >
                    <h1 style={{ fontSize: "20px", textAlign: "left" }}>
                      Development
                    </h1>
                    <h2>Introduction to data science</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consequatur dolore, ratione odio sequi quod debitis
                    reprehenderit impedit, fuga sint culpa aliquam incidunt eius
                    nulla tenetur repellendus mollitia! Libero, laborum.
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        marginBottom: "10px",
                        height: "10%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={Pic}
                        alt="img"
                        style={{
                          borderRadius: "100%",
                          width: "10%",
                          paddingRight: "10px",
                        }}
                      />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis commodi rerum n
                    </div>
                  </div>
                </div>

                <div className="course03-card-05">
                  <img src={card05} alt="img" />
                  <div
                    style={{
                      height: "100%",
                      marginLeft: "15px",
                      textAlign: "left",
                    }}
                  >
                    <h1 style={{ fontSize: "20px", textAlign: "left" }}>
                      Development
                    </h1>
                    <h2>Introduction to data science</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consequatur dolore, ratione odio sequi quod debitis
                    reprehenderit impedit, fuga sint culpa aliquam incidunt eius
                    nulla tenetur repellendus mollitia! Libero, laborum.
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        marginBottom: "10px",
                        height: "10%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={Pic}
                        alt="img"
                        style={{
                          borderRadius: "100%",
                          width: "10%",
                          paddingRight: "10px",

                        }}
                      />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis commodi rerum n
                    </div>
                  </div>
                </div>
                <div className="course03-card-06">
                  <img src={card05} alt="img" />
                  <div
                    style={{
                      height: "100%",
                      marginLeft: "15px",
                      textAlign: "left",
                    }}
                  >
                    <h1 style={{ fontSize: "20px", textAlign: "left" }}>
                      Development
                    </h1>
                    <h2>Introduction to data science</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consequatur dolore, ratione odio sequi quod debitis
                    reprehenderit impedit, fuga sint culpa aliquam incidunt eius
                    nulla tenetur repellendus mollitia! Libero, laborum.
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        marginBottom: "10px",
                        height: "10%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={Pic}
                        alt="img"
                        style={{
                          borderRadius: "100%",
                          width: "10%",
                          paddingRight: "10px",
                        }}
                      />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis commodi rerum n
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="course03-02">
            <div className="course03-02-left">
              <div className="course03-02-left-text">
                <h1>
                  Why Must Choose
                  <br />
                  Scope
                </h1>
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque quia, <br />
                  unde fuga, excepturi voluptatem dolorum reiciendis tenetur
                  alias eaque magnam <br />
                  neque nostrum rerum aspernatur, illum dolor quisquam mollitia
                  fugit totam.
                  <br />
                </h3>
              </div>
            </div>

            <div className="course03-02-right">
              <div className="right-table">
                <div className="table-11">
                  <img src={logo} alt="img" />
                  <h1>Lifetime Access</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus magni voluptates accusantium sit commodi impedit
                  </h3>
                  <Link to="/courses">
                    <h3 style={{ color: "red" }}>Learn More</h3>
                  </Link>
                </div>

                <div className="table-12">
                  <img src={logo} alt="img" />
                  <h1>Export Instructions</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa tenetur quis corporis fugiat. In, dolores maiores iure
                  </h3>
                  <Link to="/courses">
                    <h3 style={{ color: "red" }}>Learn More</h3>
                  </Link>
                </div>
              </div>

              <div className="left-table">
                <div className="table-21">
                  <img src={logo} alt="img" />
                  <h1>Practical Learning</h1>
                  <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                    expedita in esse quibusdam repellendus reiciendis? Commodi
                  </h3>
                  <Link to="/courses">
                    <h3 style={{ color: "red" }}>Learn More</h3>
                  </Link>
                </div>

                <div className="table-22">
                  <img src={logo} alt="img" />
                  <h1>Recorded Sessions</h1>
                  <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corporis soluta a nesciunt repellat! Maiores, dolorem
                  </h3>
                  <Link to="/courses">
                    <h3 style={{ color: "red" }}>Learn More</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-04">
            <div style={{ width: "95%" }}>
              <div className="course-04-text">
                <h1>
                  Let's see what <br />
                  people says about
                  <br />
                  scope
                </h1>
                <h3>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores, alias sit. Corporis dolores aspernatur reiciendis
                  libero eum, optio dolor laudantium alias nemo a possimus.
                  Ipsam est rerum illum nobis nihil?
                </h3>

                <Link className="course-04-button">←</Link>
                <Link className="course-04-button">→</Link>
              </div>
            </div>

            <div className="course-04-card">
              <div className="course-04-card-items">card 1</div>
              <div className="course-04-card-items">card 2</div>
              <div className="course-04-card-items">card 3</div>
            </div>
          </div>
        </div>

        {/* <Link to="/courses/design" className="highlight-card"><h1>Design</h1></Link>
    <Link to="/courses/android-development" className="highlight-card"><h1>Android Development</h1></Link>
    <Link to="/courses/free-courses" className="highlight-card"><h1>Free Courses</h1></Link>
    <Link to="/courses/interview-questions" className="highlight-card"><h1>Interview Questions</h1></Link>
    <Link to="/courses/popular-career-resources" className="highlight-card"><h1>Popular Career Resources</h1></Link> */}

        {/* <Card /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
