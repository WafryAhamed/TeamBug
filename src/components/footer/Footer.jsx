import React from "react";


import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";





const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                <li className="menuItem">Terms of Service</li>
                <li className="menuItem">Privacy Policy</li>
                <li className="menuItem">About Us</li>
                <li className="menuItem">Blog</li>
                <li className="menuItem">Help Center</li>
                <li className="menuItem">Careers</li>
                <li className="menuItem">Contact</li>
                </ul>
                <div className="infoText">
                Welcome to our movie platform, where you can discover the latest films, explore detailed reviews, and stay updated with exclusive content. Our mission is to bring you closer to the world of cinema and provide an unforgettable experience.
                </div>
                <div className="socialIcons">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                        <span className="icon">
                            <FaInstagram />
                        </span>
                        <span className="icon">
                            <FaGithub />
                        </span>
                        </div>
<br></br>
                            {/* Added copyright section */}
                            <div className="copyright">
                            &copy; 2025 Team Bug. All rights reserved.
                            </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

