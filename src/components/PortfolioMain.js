import React from 'react';
import Card from 'react-bootstrap/Card'
//import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
//import AboutMe from '../routes/AboutMe';

export default function PortfolioMain() {

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img />
            <Card.Body>
                <Card.Header>Project Title</Card.Header>
                <Card.Text>Test text for testing purposes!</Card.Text>
                <Button>See it in action</Button>
                <Button>Check my code</Button>
            </Card.Body>
        </Card>
    );
}