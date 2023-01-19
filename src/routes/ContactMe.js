import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault(); //prevent refresh
  
      emailjs.sendForm('gmail', 'templatePortfolio', e.target, 'Kz1NuGs3oKKPSGook')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <>
      <form className="container emailForm" ref={form} onSubmit={sendEmail}>
        <h2>Contact Me!</h2>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
        </>
    );
  };