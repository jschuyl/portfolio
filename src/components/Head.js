import React from "react";
import { NavLink } from "react-router-dom";


export default function Head() {
    return (
        <nav className="nav">
            <NavLink to="/" className="title">Jedediah Schuyler</NavLink>
            <ul>
                <li>
                    <NavLink to="/aboutme">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/contactme">Contact Me</NavLink>
                </li>
                <li>
                    <NavLink to='/'>See what I've been up to!</NavLink>
                </li>
            </ul>
        </nav>
    )
}