import React from "react";
import { Link, 
    BrowserRouter, 
    Routes,
    Route 
} from "react-router-dom";
import PortfolioMain from "./PortfolioMain";
import AboutMe from "../routes/AboutMe";
import ContactMe from "../routes/ContactMe";

export default function Head() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PortfolioMain />} />
                <Route path='/aboutme' element={<AboutMe />} />
                <Route path='/contactme' element={<ContactMe />} />
            </Routes>
            <Link to='/'>Home</Link>
        </BrowserRouter>
    )
}