import React from 'react'
import analyticImg from '../images/image.png'

export default function Analytics() {
    return (
        <section class="section-6 padding-top">
            <div class="top">
                <div class="top-text-area">
                    <p class="analytics">Analytics</p>
                    <h1 class="title">Larana chart analytics</h1>
                    <p class="text">
                        Presentations are communication tools that can be used as lectures<br />
                        speeches, reports, and more. It all depends on the purpose of your<br />
                        presentation, and how you plan to arrange the details.
                    </p>
                </div>
                <img src={analyticImg} class="logo-img" alt="statistic" />
            </div>
            <div class="buttom">
                <div class="button-text-area">
                    <div class="card-1">
                        <h3 class="h3-text">Chart Analysis 01</h3>
                        <p class="dec-text">
                            Presentations are communication
                            tools that can be used as lectures,
                            speeches, reports, and more.</p>
                    </div>
                    <div class="card-1">
                        <h3 class="h3-text">Chart Analysis 02</h3>
                        <p class="dec-text">
                            Presentations are communication
                            tools that can be used as lectures,
                            speeches, reports, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
