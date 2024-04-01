import React, { useEffect, useState } from 'react'
import { pricing } from '../data.js'
import ImageOne from '../images/image003.png'
import ImageTwo from '../images/image031.png'
import Icon from '../images/image009.png'

export default function Pricing() {
    return (
        <section class="section-8 padding-top">
            <div class="top-section">
                <img src={ImageOne} class="section-8-img2" alt="logo" />
                <img src={ImageTwo} class="section-8-img1" alt="logo" />
                <div class="section-8-decritp">
                    <h1 class="section-8-title">Plans & Pricing</h1>
                    <p class="section-8-subtitle">Presentations are communication tools that can be used as lectures,<br />
                        speeches, reports, and more.</p>
                </div>
            </div>
            <div class="buttom-section">
                {pricing.map((item) => {
                    const { id, name, info, price, project, report, support } = item;
                    return (
                        <div key={id} class="section-8-card">
                            <h3 class="card-title">{name}</h3>
                            <p class="card-subtitle">{info}</p>
                            <h1 class="card-price">{price}/ <strong>Year</strong></h1>
                            <div class="section-8-card-list">
                                <img class="mark" src={Icon} alt="mark" />
                                <p>{project}</p>
                            </div>
                            <div class="section-8-card-list">
                                <img class="mark" src={Icon} alt="mark" />
                                <p>{report}</p>
                            </div>
                            <div class="section-8-card-list">
                                <img class="mark" src={Icon} alt="mark" />
                                <p>{support}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
