import React from "react";
import Face from "../images/itJed.jpg"

export default function AboutMe() {
    return (
    <>
    <container className="container">
        <div>
            <img src={Face} alt ="This is supposed to be my face, but it seems that you've been spared" height="200px" className="itMe"/>
        </div>
        <div className="meWords">
            <h2>Hi! My name is Jed</h2>
            <p></p>
        </div>
    </container>
    </>

    )

}