import React from 'react'
import logo from '../images/image004.png'
import bigImag from '../images/image002.png'
import blueImg from '../images/image003.png'
import AboutCompany from './AboutCompany'
import Team from './Team';
import Mission from './Mission';
import Services from './Services';
import Analytics from './Analytics';
import Projects from './Projects';
import Pricing from './Pricing';
import Included from './Included';
import ThankYou from './ThankYou';
import Contact from './Contact';


export default function Home() {
    return (
        <>
            <div className='container'>
                <section className='section'>
                    <img className='blue-img' src={blueImg} alt="blue img" />
                    <div className="section-content">
                        <div className="logo">
                            <img src={logo} alt='logo png' />
                            <h3>Larana, Inc.</h3>
                        </div>
                        <h1 className='section-content-header'>IT Solutions & Services</h1>
                        <p>Presentation</p>
                    </div>
                </section>
                <img src={bigImag} className='big-img' alt="big-img" />
            </div>
            <AboutCompany />
            <Team />
            <Mission />
            <Services />
            <Analytics />
            <Projects />
            <Pricing />
            <Included />
            <Contact />
            <ThankYou />
        </>
    )
}
