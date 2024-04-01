import React from 'react'
import ImageOne from '../images/image018.jpg'
import ImageTwo from '../images/image019.jpg'
import ImageThree from '../images/image021.jpg'
import ImageFour from '../images/image022.jpg'

export default function Projects() {
    return (
        <section class="section-7">
            <img src={ImageOne} class="section-7-image1" alt="image" />
            <img src={ImageTwo} class="section-7-image2" alt="image" />
            <div class="section-7-div">Our Last Project   </div>
            <img src={ImageThree} class="section-7-image3" alt="image" />
            <img src={ImageFour} class="section-7-image4" alt="image" />
        </section>
    )
}