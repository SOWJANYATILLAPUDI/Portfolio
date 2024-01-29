import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <div id='contactPage'>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm'>
            <input type="text" className='name' placeholder='Your name'/>
            <input type="email" className='email' placeholder="Your email"/>
            <textarea className="msg" name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button type="submit" value='send' className='submitBtn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
