import React, { useState } from 'react'
import { FaArrowCircleRight, FaArrowDown } from 'react-icons/fa'

export default function Projects() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value })
    }

    return (
        <section className="contact-section">
            <div className="form-sibling">
                <div className="form-sibling-container">
                    <h1>We are waiting for <span className="you">You</span></h1>
                    <p>Presentations are communication tools that
                        can be used as lectures Presentations are communication tools that
                        can be used as lectures Presentations are communication tools that
                        can be used as lectures Presentations are communication tools that
                        can be used as lectures</p>
                    <div className="contact-with-us-with-arrow-container">
                        <h4>Connect with us</h4>
                        <span className="hide-arrow-mobile"><FaArrowCircleRight /></span>
                        <span className="hide-arrow-desk"><FaArrowDown /></span>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={person.firstName}
                        placeholder="Write Your Name"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={person.lastName}
                        placeholder="Write Your Last Name"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={person.email}
                        placeholder="Write Your Email"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="comments">Comments</label>
                    <textarea
                        onChange={handleChange}
                        value={person.comments}
                        name="comments"
                        id="comments"
                        cols="20"
                        rows="5"></textarea>
                    <button className='btn' type="submit">CONTACT WITH US</button>
                </form>
            </div>
        </section>
    )
}