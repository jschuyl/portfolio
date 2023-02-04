import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';


export default function Foot() {
    return ( 
    <MDBFooter className="bg-dark text-center text-white foot" bgColor="black">
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <p>Thanks for checking my stuff out!</p>
        <p>© SchuyGuy 2023</p>
        <ul>
            <li>
                <a href="https://github.com/jschuyl" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jedediah-schuyler-790872162/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/djedntly_now/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </li>
        </ul>        
        </section>
       </MDBFooter>)
}
