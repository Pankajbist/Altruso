import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../public/Altruso-logo.png';
import Link from 'next/link';
export default function Header() {
  return (
   <header>
    <div className="container">
       <nav>
        <div className="logo">
           <a href='/'><Image src={Logo} alt="Picture of the author"/></a>
        </div>
        <ul className="nav-menu">
            <li><a href="/About">ABOUT-US</a></li>
            <li><a  href="/Contact">CONTACT-US</a></li>
            <li><a className="active" href="/About">ABOUT-US</a></li>
            <li><a className="active" href="/Contact">CONTACT-US</a></li>
        </ul>
       </nav>
    </div>
        
    </header>
    
  )
}