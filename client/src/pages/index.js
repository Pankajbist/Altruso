
import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import About from '../components/About';
import Contact from '../components/Contact';

import Heroimg from '../../public/Altruso-background.jpg';
import { useSelector } from'react-redux';

const home = () => {
  const { fullName, isLoggedIn } = useSelector(state => state.users);


  return (
    <>
      <Header />
  
      <section
        className='hero'
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${Heroimg.src})`}}>
        <div className='content'>
          <h1>Welcome to Altruso </h1>
          <h3>
            Altruso: Crowdfunding with a Heart. 
            we're on a mission to spark creativity and make
            a positive impact. With Altruso, every campaign has the power to change lives, as a
            portion of our funds go towards supporting meaningful charitable causes. Join us in
            shaping a brighter future through design and compassion.
          </h3> 
         
          <br></br>        <br></br>        <br></br>
          {isLoggedIn && (
            <div className='center-container'>
              <Link href='/campaign' legacyBehavior>
                <a className='button1'>
                  <span></span> START CAMPAIGN NOW
                </a>
              </Link>
        <br></br>
            
             <div className='center-container'>
             <Link href='/donate' legacyBehavior>
               <a className='button1'>
                 <span></span> START DONATION NOW
               </a>
             </Link>
           </div>
           
           </div>
           
          )}
                  
        </div>
      </section>
      <About/>
      <Contact/>
    </>
  );
};

export default home;
