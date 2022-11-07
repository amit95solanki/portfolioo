import React from "react";
import "./Footer.css";
import logoo from "./logoo.svg";
import facebook from "./facebook.png";
import ins from "./ins.png";
import what from "./what.png";
import twitter from "./twitter.png";
import lin from "./lin.png";
export default function Footer(){

    return(
        <div className="footer">
            <img class="footer-logo" src={logoo} alt=""></img>
            <div className="socials">
                                   <a href="https://www.facebook.com/amit.solanki.14289" target="_blank"> <img src={facebook} alt="" /></a>
                                   <a href="https://www.facebook.com/amit.solanki.14289" target="_blank"> <img src={ins} alt="" /></a>
                                   <a href="https://twitter.com/Amit3895" target="_blank"> <img src={twitter} alt="" /></a>
                                   <a href="https://www.linkedin.com/in/amit-solanki-78a427255/" target="_blank"> <img src={lin} alt="" /></a>
                                   <a href="https://wa.me/918770555280" target="_blank"> <img src={what} alt="" /></a>
                                   
                                </div>
                                <div className="copyright">
                                  Copyright 2022  © amit Solanki
                                </div>
        </div>
    )
}