import React from "react";
import men from "./men.png"
import "./About.css";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import lin from "./lin.png";
import what from "./what.png";
export default function About() {
    return (


        <div id="about" className="about">
            <div className="conatiner box flex about-inner-wrap item-center">
                <div className="flex-1 left">
                    <img className="about-me-img" src={men} alt="" />
                </div>

                <div className="flex-1 right">
                    <h1>About <span>Me</span></h1>
                    <h3>Hello i'm Amit Solanki</h3>
                    <p>
                       <ul>
                        {/* <li>Name  - Amit Solanki </li> */}
                        <li>DOB   - 08/Aug/2022</li>
                        <li>Mothers Name :Mrs.Tara Solanki</li>
                        <li>Father's name : Mr. Bhagwandas Solanki</li>
                        <li>Hobbies : Cooking and Music</li>
                        <li>Language proficiency :Hindi and English</li>
                        </ul>
                        
                    </p>
                    <div className="social">
                                   <a href="https://www.facebook.com/amit.solanki.14289" target="_blank"> <img src={facebook} alt="" /></a>
                                   <a href="https://www.instagram.com/amit_karan_solanki/" target="_blank"> <img src={instagram} alt="" /></a>
                                   <a href="https://twitter.com/Amit3895" target="_blank"> <img src={twitter} alt="" /></a>
                                   <a href="https://www.linkedin.com/in/amit-solanki-78a427255/" target="_blank"> <img src={lin} alt="" /></a>
                                   <a href="https://wa.me/918770555280" target="_blank"> <img src={what} alt="" /></a>
                                   

                                </div>
                </div>
            </div>
        </div>
    );
}