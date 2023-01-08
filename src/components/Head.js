import React from "react";
import { NavLink } from "react-router-dom";

export default function Head() {
    return (
        <nav>
            <NavLink to="/">Jedediah Schuyler</NavLink>
            <ul>
                <li>
                    <NavLink to="/aboutme">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/contactme">Contact Me</NavLink>
                </li>
            </ul>
        </nav>
    )
}