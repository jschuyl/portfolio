import React from 'react'
import Card from './Card'
//import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel'
import Dev from '../images/devtek.jpg'
import Emp from '../images/employee.jpg'
import Lmay from '../images/lmay.jpg'
import Mbb from '../images/mbb.jpg'
import PWA from '../images/pwacticejpg.jpg'
import Social from '../images/social.jpg'
import 'react-multi-carousel/lib/styles.css'

export const CardCarousel = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <>
    <Carousel
        responsive={responsive}
        infinite={true}
        className=''
        renderButtonGroupOutside={true}
        centerMode={true}
        arrows={true}
        >
            <div>

            <Card 
                img={Emp}
                title="Employee Manager"
                describe="Command line operated SQL project that helps manage employees"
                github="https://github.com/jschuyl/Employee_Manager"
                linkBtn="card__btn hide"
                />
                </div>

            <Card 
                img={Mbb}
                title="Magic Bored Ball"
                describe="School project that shakes a magic eight ball to help you not be bored"
                link="https://jschuyl.github.io/magic-bored-ball/"
                github="https://github.com/jschuyl/magic-bored-ball"
                linkBtn="card__btn"
            />

            <Card 
                img={Social}
                title="Social Media Startup"
                describe="Backend for a social media using MongoDB and Express"
                github="https://github.com/jschuyl/social_media_startup"
                linkBtn="card__btn hide"
            />

            <Card 
                img={Dev}
                title="Devtek"
                describe="School project for a tech blog that takes inspiration from Drop"
                github="https://github.com/jamestpatmore/Project2"
                link="https://agile-sea-60043.herokuapp.com/"
                linkBtn="card__btn"
            />

            <Card 
                img={PWA}
                title="PWA-ctice"
                describe="Text editor progressive web app that utilizes the power of service workers"
                github="https://github.com/jschuyl/PWA-ctice"
                link="https://limitless-eyrie-85226.herokuapp.com/"
                linkBtn="card__btn"
            />

            <Card 
                img={Lmay}
                title="Let Me Ask You"
                describe="Anonymous question asking social media"
                github="https://github.com/HBurnton/let-me-ask-you-p3"
                link="https://polar-sierra-99541.herokuapp.com/"
                linkBtn="card__btn"
            />
    </Carousel>
    </>
);
}