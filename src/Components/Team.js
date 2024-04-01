import React, { useEffect, useState } from 'react'
import { user } from '../data.js'


export default function Team() {

    return (
        <section className="section-3 padding-top">
            <div className="section-3-top">
                <h3 className="our-team">our team</h3>
                <h1 className="section-3-title">Meeting our amazing team</h1>
            </div>
            <div className="section-3-bottom">
                {user.map((item) => {
                    const { id, img, name, job, info } = item;
                    return (
                        <div className="person" key={id}>
                            <img className="person-img" src={img} alt={name} />
                            <h1 className="person-name">{name}</h1>
                            <h4 className="person-job">{job}</h4>
                            <div className="person-underline"></div>
                            <p className="person-paragraph">{info}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
