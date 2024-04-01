import React, { useEffect, useState } from 'react'
import { missions } from '../data.js'
import engineerImg from '../images/enginear.png'
import doctorImg from '../images/doctor.png'
import logoImg from '../images/logo-img.png'
import logo from '../images/image009.png'

export default function Mission() {
    return (
        <section className="section-4">
            <div className="section-4-left">
                <img className="section-4-left-first-img" src={engineerImg} alt="computer-enginear" />
                <img className="section-4-left-second-img" src={doctorImg} alt="girl-with-computer" />
                <img className="section-4-left-second-log" src={logoImg} alt="logo-img" />
            </div>
            <div className="section-4-right padding-top">
                <div class="section-4-right-container">
                    <h3 className="our-mission">our mission</h3>
                    <h1 className="section-4-right-title">To be the best <br /> company in technology</h1>
                    <p className="sections-paragraph">Presentations are communication tools
                        that can be used as lectures, speeches,
                        reports, and more. It all depends on the
                        purpose</p>
                    <div className="section-4-right-goals">
                        {missions.map((item) => {
                            const { id, mission, info } = item;
                            return (
                                <div key={id} className="first-goal">
                                    <img src={logo} alt="logo" />
                                    <div className="first-mission-container">
                                        <h1>{mission}</h1>
                                        <p className="sections-paragraph">{info}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
