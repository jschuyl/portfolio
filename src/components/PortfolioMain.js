import React from 'react';
import Card from './Card'
//import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/carousel/lib/styles'
//import AboutMe from '../routes/AboutMe';

export default function PortfolioMain() {

    return (
        <>
        <container className="card__container center">
            <Card 
            img=""
            title="README.generator"
            describe="Command line operated README generator, with links and everything"/>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </container>
        </>
    );
}