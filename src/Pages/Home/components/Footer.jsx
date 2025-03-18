import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Styling from "../Styling/footer.module.css";

const Footer = () => {
  return (
    <div className={Styling.FooterParent}>
      <div className={Styling.PrimaryFotterStyling}>
        <div className={Styling.containers}>
          <h2>NaxonSolution</h2>

          <p>Transforming Visions into Digital Reality.</p>
          <p>
            We're your partner for innovative software solutions, propelling
            your business into the digital era.
          </p>
        </div>
        <div className={Styling.containers}>
          <h3>Categories</h3>
          <ul className={Styling.uls}>
            <li>Software Development</li>
            <li>Web Design</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
            <li>UX/UI Design</li>
            <li>Branding & Identity</li>
            <li>AI & Machine Learning</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
        <div className={Styling.containers}>
          <h3>I need solutions</h3>
          <ul className={Styling.uls}>
            <li>Web Application Design</li>
            <li>E-Commerce Solutions</li>
            <li>Digital Marketing</li>
            <li>IT Consulting</li>
            <li>Data Analytics</li>
            <li>Cloud Services</li>
            <li>Custom Solutions</li>
            <li>All Development Services</li>
          </ul>
        </div>
        <div>
          <h3 className={Styling.containers}>Our Company</h3>
          <ul className={Styling.uls}>
            <li>About Us</li>
            <li>Our Approach</li>
            <li>Contact Us</li>
            <li>Become our partner</li>
            <li>Support & FAQs</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* Socials */}
        <div className={Styling.containersIcons}>
          <FaLinkedin className={Styling.SocialICONS} />
          <FaInstagram className={Styling.SocialICONS} />
          <FaFacebook className={Styling.SocialICONS} />
        </div>
      </div>
      <div className={Styling.lastdivFooter}>
        <p className={Styling.lastPara}>
          © 2023 Naxon Solution. All Rights Reserved. Trademarks belong to their
          respective owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
