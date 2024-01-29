import React from 'react';
import "./intro.css"; 
import coding from "../../assets/coding.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hiring.png";

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>HELLO EVERYBODY,</span>
            <span className='introText'>I AM <span className='introName'>SOWJANYA TILLAPUDI</span> <br/>FRONTEND DEVELOPER</span>
            <p className='introPara'>I love to build attractive and responsive websites.</p>
            <p className='introPara'>Also, I like pushing myself and taking up new challenges.</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire Me" />Hire Me</button></Link>
        </div>
        <img  align="right" src={coding} alt="Profile" className='coding'/>
    </section>
  )
}

export default Intro
