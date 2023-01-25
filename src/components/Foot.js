import React from "react";
import { Link } from "react-router-dom"
import { MDBFooter, 
    //MDBContainer, 
    //MDBRow, 
    //MDBCol, 
    MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Instagram } from '@fortawesome/free-regular-svg-icons' // <-- import styles to be used


export default function Foot() {
    return ( 
    <MDBFooter className="bg-dark text-center text-white foot">
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <span>Thanks for checking my stuff out!</span>
        <span>© SchuyGuy 2023</span>
        <ul>
            <li>
                <Link to={{ pathname: "https://github.com/jschuyl" }}>Github</Link>
            </li>
            <li>
                <Link to={{ pathname: "https://www.linkedin.com/in/jedediah-schuyler-790872162/" }}>LinkedIn</Link>
            </li>
            <li>
                <Link to={{ pathname: "https://www.instagram.com/djedntly_now/"}}><FontAwesomeIcon icon="fa-brands fa-instagram"></FontAwesomeIcon></Link>
            </li>
        </ul>
        
        </section>
       </MDBFooter>)
}
