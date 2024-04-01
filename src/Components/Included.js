import React, { useEffect, useState } from 'react'
import { included } from '../data.js'

export default function Included() {
    return (
        <section class="section-9 padding-top">
            <div class="section-9-container">
                <h1 class="section-9-title">What's Included</h1>
                <p class="sections-paragraph">Presentations are communication tools that can be
                    used as lectures, <br /> speeches, reports, and more.
                </p>
                <div class="section-9-things-list">
                    {included.map((item) => {
                        const { id, name, info, img } = item;
                        return (
                            <div key={id} class="section-9-things-list-card">
                                <img src={img} alt={name} />
                                <h2>{name}</h2>
                                <p class="sections-paragraph">{info}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
