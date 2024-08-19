import React from "react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
//import { Link } from "react-router-dom";
// import Card from "./card";
// import demo01 from "./Images/demo01.png";


import CourseBase from './courseBase'

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

            <div className="logo01-items">
              <h2>Bestseller</h2>
            </div>


            <div className="logo01-items">
              <h2>4.6 ✰✰✰✰✰
                </h2>
               </div>
            <div className="logo01-items">
              <h2>
              (328,097)
                </h2>
            </div>
            <div className="logo01-items">
              <h2>21.1k Students</h2></div>
          
          </div>
          <div className="data01-logo02"></div>
        </div>
      </div>

      <CourseBase/>


      <Footer />
    </div>
  );
};

export default DataAnalytics;
