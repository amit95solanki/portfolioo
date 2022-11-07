import React from "react";
import "./Hero.css";
import man from "./man.png"
export default function Hero() {

    return (
        <div id="Home" className="hero flex item-center justify-between" >
            <div className="left flex-1 flex justify-center" >
                <img src={man} alt="img missing" />
            </div >
            <div className="right flex-1" >
            <h6>Amit Solanki</h6>
            <h1>I'm a  <span>Frontend</span> Developer</h1>
            <p>Knowledgeable Front End Developer adept at creating successful websites. Proficient in HTML, CSS, JAVASCRIP & Reactjs</p>
            <div>
                <a href="amit resume.pdf" download="amit resume.pdf">
                <button className="btn btn-secondary">DOWNLOAD CV</button>
                </a>
            </div >

        </div >
            </div >
            
    );
}