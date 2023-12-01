import React from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import "./footer.css"
function Footer() {
  return <>
    <footer className="footer-section border-t-2 border-border bg-primary" id="footer">

      <div className="footer-contianer  text-white md:flex p-6  xs:p-8 sm:p-12 flex-1 gap-5" >
        <div className="text-center md:flex  justify-around gap-5">
          <div className="about-us ">
            <h2>Resources</h2>
            <ul className="text-border">
              <li>Documentation</li>
              <li>Privacy Policies</li>
              <li>Contact Us</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="community">
            <h2>Community</h2>
            <ul className="text-border">
              <li>Writer Policies</li>
              <li>Learner Policies</li>
              <li> Community</li>
              <li>Contribution</li>
            </ul>
          </div>
        </div>

        <div className="about-us text-center">
          <h2>About Us</h2>
          <div className="text-border">
            <p>-- is a community of learners where we provide latest knowledge ternd of technologies.
              You can also be the part of our community by contributing as a member.
            </p>

            <span> <BsFacebook size={"2rem"} color="blue" />  </span>
            <span>  <BsInstagram size={"2rem"} color="red" /></span>
            <span> <BsTwitter size={"2rem"} color="#00acee" /></span>
            <span> <BsTelegram size={"2rem"} color="#0088cc" /></span>
          </div>


        </div>
      </div>
    </footer>


  </>;
}

export default Footer;
