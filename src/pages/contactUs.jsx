import NavBar from "../Components/navBar";
import phoneIm from "../assets/phone-calling-svgrepo-com.svg"
import emailIm from "../assets/email-svgrepo-com.svg"
import locationIm from "../assets/location-filled-svgrepo-com (1).svg"

import facebookLogo from "../assets/facebook.svg"
import whatsappLogo from "../assets/whatsapp.svg"
import twitterLogo from "../assets/twitter.svg"
import instagramLogo from "../assets/instagram.svg"
import "../css/contactus.css";

const ContactUs = () => {
  return (
    <section >
      <NavBar />

      <div className="container fadeInDown">
        <div className="contactInfo fadeIn first">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li className="fadeIn first">
                <span>
                  <img src={locationIm}/>
                </span>
                <span>
                  2912 Caldera Rd
                  <br />
                  Kampala, UG <br />
                  90017
                </span>
              </li>
              <li className="fadeIn second">
                <span>
                  <img src={emailIm} />
                </span>
                <span>calderacodes@gmail.com</span>
              </li>
              <li className="fadeIn third">
                <span>
                  <img src={phoneIm} />
                </span>
                <span>+256-786-3074-11</span>
              </li>
            </ul>
          </div>
          <ul className="sci fodeIn fourth">
            <li>
              <a href="#">
                <img src={facebookLogo} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={whatsappLogo} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterLogo} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramLogo} />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm fadeIn second">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50 fadeIn first">
              <input type="text" required="" />
              <span>First Name</span>
            </div>
            <div className="inputBox w50 fadeIn first">
              <input type="text" required="" />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50 fadeIn second">
              <input type="text" required="" />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50 fadeIn second">
              <input type="text" required="" />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100 fadeIn third">
              <textarea required="" defaultValue={""} />
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100 fadeIn fourth">
              <input type="submit" defaultValue="send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
