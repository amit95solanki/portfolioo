import React from "react";
import "./Qualification.css";
import amit from "./amit.png";
import TEN from"./TEN.png";
import ITD from "./ITD.png";
import PG from "./PG.png";
export default function Qualifcation(){

    return(
        <div id="qualification" className="qualification">
            <div className="container">
                <h1 className="heading">  <span>Our    </span>  Qualification </h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odit?</p> */}

                </div>
            <div className="card-wrapper">
            <div className="card">
                <img src={TEN}  alt="" />
                <h4>10 <sup>th</sup> marksheet</h4>
                <p>Medium:- MP Board   &  Percentage:-  69.66%</p>
            </div>
            <div className="card">
                <img src={TEN}  alt="" />
                <h4>12 <sup>th</sup> marksheet</h4>
                <p>Medium:- MP Board  & Percentage:- 56%</p>
            </div>
            <div className="card">
                <img src={ITD}  alt="" />
                <h4> Graduation</h4>
                <p>Bachelor of Engineering:- Information Technology </p>
            </div>
            <div className="card">
                <img src={PG}  alt="" />
                <h4> Post Graduation</h4>
                <p>Master of Business Administration:- Disaster Management</p>
            </div>
           
           
            </div>
        </div>
    );
}