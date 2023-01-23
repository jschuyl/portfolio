import React from 'react';
import Card from './Card'
//import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
//import AboutMe from '../routes/AboutMe';

export default function PortfolioMain() {

    return (
        <>
        <Container>
            <Card 
            img=""
            title="README.generator"
            describe="Command line operated README generator, with links and everything"/>\
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
        </>
    );
}