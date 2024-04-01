import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaPhone, FaMapPin } from 'react-icons/fa'
import logoImage from '../images/image004.png'
import { links } from '../data.js'
export default function Pricing() {

    return (
        <footer>
            <div class="footer-top-container">
                <div class="footer-nave">
                    <div class="footer-first">
                        <img class="footer-logo" src={logoImage} alt="logo" />
                        <p>Presentations are communication tools that can be used as lectures,
                            speeches, reports, and more. It all depends on the
                            purpose of your presentation, and how you plan to arrange the details.
                        </p>
                        <h1>Follow us</h1>
                        <div class="footer-media">
                            <span>
                                <span><a href="https://www.facebook.com/"><FaFacebook /></a></span>
                            </span>
                            <span>
                                <span><a href="https://www.twitter.com/"><FaTwitter /></a></span>
                            </span>
                            <span>
                                <span><a href="https://www.linkedin.com/"><FaLinkedin /></a></span>

                            </span>
                        </div>
                    </div>
                    <div class="footer-second">
                        {links.map((item) => {
                            const { id, url, text } = item;
                            return <NavLink key={id} className='footer-links' to={url}>{text}</NavLink>

                        })}
                    </div>
                    <div class="footer-last-contact">
                        <h1 class="footer-contact-title">Contact Us</h1>
                        <div class="footer-contact-lockation">
                            <span><FaMapPin /></span>
                            <p>Presentations are communication tools that can be used as lectures,
                                speeches, reports, and more. It all depends on the
                                purpose of your presentation, and how you plan to arrange the details.
                            </p>
                        </div>
                        <div class="footer-contact-lockation">
                            <span><FaPhone /></span>
                            <p>+90-333-4444</p>
                        </div>
                        <div class="footer-contact-lockation">
                            <span><FaPhone /></span>
                            <p>Larana@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-container">
                    <p>&copy; 2024Larana.All Rights Reserved</p>
                    <div class="footer-bottom-Privacy-container">
                        <a href="#">privacy</a>
                        <a href="#">privacy</a>
                        <a href="#">privacy</a>
                        <a href="#">privacy</a>
                        <a href="#">privacy</a>
                    </div>
                </div>
            </div>
        </footer >
    )
}
