import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { links } from '../data.js'
import logo from '../images/image004.png'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksRef = useRef(null);
    const linksContainerRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;

        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }

    }, [showLinks])

    return (
        <>
            <nav>
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} alt="logo" />
                        <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
                            <FaBars />
                        </button>
                    </div>
                    <div className='links-container' ref={linksContainerRef}>
                        <ul className="links" ref={linksRef}>
                            {links.map((item) => {
                                const { id, url, text } = item;
                                return <li key={id}>
                                    <NavLink className='link-tag' to={url}>{text}</NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                    <ul className="contact">
                        <li>
                            <NavLink className='link-tag' to='/contact'>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
