import React from 'react'
import bigImg from '../images/big-img.png'

export default function AboutCompany() {
    return (
        <div className='about-company'>
            <div className="about-container padding-top">
                <div className="big-img-container">
                    <img src={bigImg} alt="big img" />
                </div>
                <div className="about">
                    <div className='about-us'>
                        <p>About us</p>
                        <h3>We're a new startup company</h3>
                    </div>
                    <div className="presentaion">
                        <p>
                            Presentations are communication tools that can be used as lectures, speeches, reports, and more.
                            It all depends on the purpose of your presentation, and how you plan to arrange the details.
                        </p>
                        <p>
                            Presentations are communication tools that can be used as lectures, speeches, reports, and more.
                            It all depends on the purpose of your presentation, and how you plan to arrange the details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
