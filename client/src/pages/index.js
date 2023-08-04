
import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
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
          <p>
            Altruso: Crowdfunding with a Heart. <br/>
            We're not just about design projects; we're on a mission to spark creativity and make
            a positive impact. With Altruso, every campaign has the power to change lives, as a
            portion of our funds go towards supporting meaningful charitable causes. Join us in
            shaping a brighter future through design and compassion.
          </p> 
         
          
          {isLoggedIn && (
            <div className='center-container'>
              <Link href='/campaign' legacyBehavior>
                <a className='button1'>
                  <span></span> START A CAMPAIGN
                </a>
              </Link>
            </div>
          )}
                  
        </div>
      </section>
    </>
  );
};

export default home;
