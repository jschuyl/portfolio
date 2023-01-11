import React from "react";

export default function ContactMe() {
    return (
        <>
        <form>
            <label>
                Email me!
                <input type="text" name="fname" placeholder="First name"></input>
                <input type="text" name="lname" placeholder="Last name"></input>
                <input type="text" name="email" placeholder="Email address"></input>
                <input type="submit" name="fireAway" value="Send"></input>
            </label>
        </form>
        </>
    )
}