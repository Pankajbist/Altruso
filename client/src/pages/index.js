
import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import Heroimg from '../../public/Altruso-background.jpg';
import { useSelector } from'react-redux';

const Index = () => {

  const {fullName}= useSelector (state=>state.users)

  return (
    <>
      <Header />
      <section
        className='hero'
        style={{
          backgroundImage: "url('Altruso-background1.jpg')",
        }}
      >
        <div className='content'>
        <h1>
            Welcome to ALTRUSO: Where Visions Unite!
             {fullName}
          </h1>
        
          <h2>
          Join our vibrant community and turn dreams into reality. Let's make magic together! ✨
          </h2> 
          <div className='center-container'>
            <Link href='/register' legacyBehavior>
      

              <a className='button1'>
                <span></span> SIGNUP
              </a>
            </Link>
          </div>
          <div className='center-container'>
            <Link href='/login' legacyBehavior>
      

              <a className='button1'>
                <span></span> LOGIN
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
