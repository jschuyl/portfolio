import React from 'react';
import Card from './Card'
//import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
//import AboutMe from '../routes/AboutMe';

export default function PortfolioMain() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <>
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div>
                <Card 
                    img=""
                    title="README.generator"
                    describe="Command line operated README generator, with links and everything"/>
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </Carousel>
        </>
    );
}