import React from 'react';
//import { Link } from "react-router-dom";
import { CardCarousel } from '../components/Carousel';
import 'react-multi-carousel/lib/styles.css'
//import AboutMe from '../routes/AboutMe';
import Face from "../images/itJed.jpg"

export const PortfolioMain = () => {
    return (
        <div className='main-body' id="">
            <div className=''>
            <container className="container">
        <div>
            <img src={Face} alt ="This is supposed to be my face, but it seems that you've been spared" className="itMe"/>
        </div>
            <div className="whoAndWhat">
                <div>
                    <h1>Jedediah Schuyler</h1>
                    <h4>Certified Full Stack Developer</h4>
                </div>   
                
                <div className="meWords">
                    <h2>Hi! My name is Jed</h2>
                    <p>I have been coding since August of 2022, and so far it's been a really rewarding experience. The work is challenging, but I love that it makes me have to think on my feet (or, chair I guess) and theres nothing more satisfying than figuring out a problem and having a function return properly. While I am certified through the University of Arizona's full stack coding program I know that there is a lot that I don't know yet, but I am very eager to continue learning code and applying it to future projects. Thank you for taking the time to read this, and if you have the time please look over my resume or send me an email from my Contact Me section.</p>
                    <a href='https://docs.google.com/document/d/1ZIrAF9AmLFonHjVyNgwLzKg8346e9M2M/export?format=pdf&ouid=116989931584226689847&rtpof=true&sd=true' download>Click to download resume</a>
                </div>
        </div>
    </container>
                <CardCarousel />
            </div>
        </div>
    )
}