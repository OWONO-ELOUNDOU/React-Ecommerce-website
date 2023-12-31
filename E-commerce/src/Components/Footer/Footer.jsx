import React from "react";
import './Footer.css';

import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}