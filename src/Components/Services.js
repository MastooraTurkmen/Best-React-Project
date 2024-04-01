import React, { useEffect, useState } from 'react'
import { services } from '../data.js'
import RectangleImg from '../images/Rectangle.png'

export default function Team() {
    return (
        <section class="section-5">
            <div class="section-5-left padding-top">
                <div class="section-5-left-container">
                    <h3 class="our-services">SERVICES</h3>
                    <h1 class="section-4-right-title">Our amazing services</h1>
                    <p class="sections-paragraph">Presentations are communication tools
                        that can be used as lectures, speeches,
                        reports, and more. It all depends on the
                        purpose
                    </p>
                    <div class="section-5-left-developers-typs">
                        {services.map((item) => {
                            const { id, img, name, info } = item;
                            return (
                                <div key={id} class="first">
                                    <img src={img} alt={name} />
                                    <h2>{name}</h2>
                                    <p class="sections-paragraph">{info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div class="section-5-right">
                <img class="section-5-right-img" src={RectangleImg} alt="person" />
            </div>
        </section>
    )
}
