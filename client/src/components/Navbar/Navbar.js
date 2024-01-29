import React from 'react';
import './navbar.css';
import logo from "../../assets/logo.png";
import chat from "../../assets/chat.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className='desktopMenu'>
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Blogs</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={chat} alt="chat" className='desktopMenuImg'/>Contact Me
        </button>

    </nav>
  )
}

export default Navbar
