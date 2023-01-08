import React from 'react';
import {
    Link
  } from "react-router-dom";
//import { Button } from 'bootstrap';
//import AboutMe from '../routes/AboutMe';

export default function PortfolioMain() {

    return (
        <div className='card'>
            peanuts
            <Link to='/aboutme'>About Me</Link>
            <Link to='/contactme'>Contact Me</Link>
        </div>
    )

}