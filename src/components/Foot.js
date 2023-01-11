import React from "react";
import { MDBFooter, 
    //MDBContainer, 
    //MDBRow, 
    //MDBCol, 
    MDBIcon } from 'mdb-react-ui-kit';

export default function Foot() {
    return ( 
    <MDBFooter className="bg-dark text-center text-white foot">
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

            <div className="me-5 d-none d-lg-block">
                <span>Thanks for checkling my stuff out!</span>
            </div>
            <div>
                <div className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </div>
                <div className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                </div>
                <div className="me-4 text-reset">
                    <MDBIcon fab icon="copyright" /> 2023
                </div>
            </div>
        
        </section>
       </MDBFooter>)
}
