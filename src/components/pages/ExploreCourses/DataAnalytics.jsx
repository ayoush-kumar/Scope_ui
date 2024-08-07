import React from "react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";
// import Card from "./card";
// import demo01 from "./Images/demo01.png";

const DataAnalytics = () => {
  return (
    <div>
      <Header />

      <div className="data01">
        <h1>
          Introduction To <br />
          Data Science
        </h1>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          unde amet dolorum nihil fuga hic voluptatem vero repellat excepturi
          ducimus minus enim aliquid, quas illo voluptas perspiciatis! Adipisci,
          eaque molestiae.
        </h4>
        <div className="data01-logo">
          <div className="data01-logo01">
            <div className="data01-logo01-items">Bestseller</div>

            <div className="data01-logo01-items">4.6 </div>
            <div className="data01-logo01-items-01">(328,097)</div>
            <div className="data01-logo01-items">21.1k Students</div>
          </div>
          <div className="data01-logo02"></div>
        </div>
      </div>

      <div className="data02">
        <div className="data02-class01">
          <div>
            <h1> What you'll learn</h1>

            <div className="data02-class01-list">
              <ul style={{ fontSize: "20px", marginLeft: "60px" }}>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
              </ul>

              <ul style={{ fontSize: "20px", marginLeft: "60px" }}>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
              </ul>
            </div>
          </div>
          <h1 style={{ marginTop: "9rem" }}>This Course Include</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <ul style={{ fontSize: "20px", marginLeft: "60px" }}>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
              </ul>
            </div>
            <div>
              <ul style={{ fontSize: "20px", marginLeft: "60px" }}>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h1 style={{ fontSize: "50px" }}>
              Top Companies offer this course to their employees
            </h1>
            <h4 style={{ marginLeft: "60px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              adipisci natus cum esse, culpa quam at. Dolorem eveniet minus
              suscipit incidunt quisquam, distinctio laudantium similique illum
              placeat ea itaque culpa.
              <Link> Learn more</Link>
            </h4>
            <div className="data02-class01-list-item"></div>
          </div>

          <div>
            <h1>Course Content</h1>

            <div className="data02-class01-list-item">Part 1:</div>

            <div className="data02-class01-list-item">Part 2:</div>

            <div className="data02-class01-list-item">Part 3:</div>

            <div className="data02-class01-list-item">Part 4:</div>

            <div
              style={{
                border: "solid black 2px",
                padding: "19px",
                marginTop: "10px",
                marginLeft: "2rem",
                borderRadius: "1rem",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              56 more section
            </div>

            <div>
            <h1 style={{ fontSize:'50px'}}>Requirements</h1>
            <ul style={{ fontSize: "20px", marginLeft: "60px", fontWeight:'700' }}>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupt
                </li>
                <br />
              </ul>
            <div className="data02-class01-list-item" style={{ height:'250px'}}>

            <h1 style={{ fontSize:'35px', marginLeft:'10px'}}>Featured Review</h1>
              <div >
              <h3 style={{ fontSize:'17px', margin:'10px', fontWeight:'500'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat dolor hic placeat, recusandae voluptatibus eveniet exercitationem similique corporis deserunt culpa dolorem libero consectetur mollitia reiciendis ipsam, ratione rerum illo.<br/>
              </h3>
              <h3 style={{ fontSize:'17px', margin:'10px', fontWeight:'500'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat dolor hic placeat, recusandae voluptatibus eveniet exercitationem similique corporis deserunt culpa dolorem libero consectetur mollitia reiciendis ipsam, ratione rerum illo.<br/>
              </h3>
              </div>


              <div style={{ marginTop: "90px" ,marginLeft: "-60px" }}>
            <h1 style={{ fontSize: "50px" }}>
              Student also bought
            </h1>
            <div className="data02-class01-list-item"></div>
            <div className="data02-class01-list-item"></div>
            <div className="data02-class01-list-item"></div>
            <div className="data02-class01-list-item"></div>
            <div
              style={{
                border: "solid black 2px",
                padding: "19px",
                marginTop: "10px",
                marginLeft: "2rem",
                borderRadius: "1rem",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                backgroundColor: "white",
                height:'90px'
              }}
            >
              Show More
            </div>
          </div>
            
            

            </div>
            </div>
          </div>
        </div>
        <div className="data02-class02">
          <div className="data02-class02-box01"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataAnalytics;
