
import React from "react"
import logo from "./logo.svg"
import "./Header.css"
// import hamberger from "./hamberger.png";
// import times from "./times.png"

export default function Header() {
    
    
// let hamberger = document.querySelector('.hamberger');
// let times = document.querySelector('.times');
// let mobileNav = document.querySelector('.mobile-nav');

// hamberger.addEventListener('click', function(){
//   mobileNav.classList.add('open');  
// });

// times.addEventListener('click', function(){
//     mobileNav.classList.remove('open');  
// });

    return (

            <div className="site-main-wrapper">
                   {/* <button className="hamberger">
            <img src={hamberger} alt="" />
        </button> */}
        {/* <div className="mobile-nav">
            <button className="times"><img src={times} alt="" /></button>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div> */}
               <div className="header">
            <nav id="main-nav" className="flex item-center justify-between">
                <div className="left flex item-center ">
                    <div className="branding">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="">
                        <a href="#Home">Home</a>
                        <a href="#about">About</a>
                        <a href="#qualification">Qualification </a>
                        <a href="#Personal-Project">Personal   Project & Certification</a>
                        {/* <a href="#">Blog</a> */}
                    </div>
                </div>
                <div className="right">
                  <a href="#Contact">  <button class="btn btn-primary"> Contact</button> </a>
                </div>
            </nav>
            {/* <hr /> */}
            </div>
            </div>

            )
}