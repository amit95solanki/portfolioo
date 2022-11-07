import React from "react";
import "./Contact.css";
import phone from "./phone.svg";
import mail from "./mail.svg";
import office from "./office.svg";
export default function Contact(){

    return(
        <div id="Contact" className="contact">
        <div className="container">
        <h1 className="heading"><span>Contact</span>us</h1>
        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, impedit.</p> */}
        <div className="card-wrapper">
            <div className="card">
                <img src={phone} alt="" />
                <h2>call us on</h2>
                <h6>+918770555280</h6>
            </div>
            <div className="card">
                <img src={mail} alt="" />
                <h2>mail us on</h2>
                <h6>amitsolanki3895@gmail.com</h6>
            </div>
            <div className="card">
                <img src={office} alt="" />
                <h2>Home Town</h2>
                <h6>Sagar (M.P.) INDIA</h6>
            </div>
        </div>
       <form action="">
       <div className="input-wrap">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
        </div>
        <div className="input-wrap-2">
            <input type="text" placeholder="Your Subject" />
            <textarea name="" id="" cols="30" rows="6" placeholder="Your Message"></textarea>
        </div>
        <div>
            <button className="pppp">Send Message</button>
        </div>
       </form>
        </div>
        </div>
    )
}