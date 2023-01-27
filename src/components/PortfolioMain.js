import React from 'react';
//import { Link } from "react-router-dom";
import { CardCarousel } from './Carousel';
import 'react-multi-carousel/lib/styles.css'
//import AboutMe from '../routes/AboutMe';

export const PortfolioMain = () => {
    return (
        <div className='main-body'>
            <div className=''>
                <CardCarousel />
            </div>
        </div>
    )
}