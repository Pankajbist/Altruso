
import React from 'react';
import Link from 'next/link';
import Header from '../components/home';
import Heroimg from '../../public/Altruso-background.jpg';
import { useSelector } from'react-redux';

const home = () => {

  const {fullName}= useSelector (state=>state.users)

  return (
    <>
      <Header />
      <section
        className='hero'
        style={{
          backgroundImage: "url('Altruso-background.jpg')",
        }}
      >
        <div className='content'>
          <h1>Welcome to Altruso {fullName}</h1>
          <p>
            Altruso: Crowdfunding with a Heart. <br/>
            We're not just about design projects; we're on a mission to spark creativity and make
            a positive impact. With Altruso, every campaign has the power to change lives, as a
            portion of our funds go towards supporting meaningful charitable causes. Join us in
            shaping a brighter future through design and compassion.
          </p> 
          <div className='center-container'>
            <Link href='/campaign' legacyBehavior>
      

              <a className='button1'>
                <span></span> START A Journey With Us
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;