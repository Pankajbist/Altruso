import React from 'react'
import Header from '../components/header'
import Heroimg from '../../public/Altruso-background.png'

export default function index() {
  return (
    <>
      <Header/>
        <section className='hero' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${Heroimg.src})`}}>
        
           
              
         
        <div class="content">
  <h1>Welcome to Altruso</h1>
  
  <p>
    Altruso: Crowdfunding with a Heart. <br></br>
  We're not just about design projects; we're on a mission to spark creativity and make a positive impact. With Altruso, every campaign has the power to change lives, as a portion of our funds go towards supporting meaningful charitable causes. Join us in shaping a brighter future through design and compassion.</p>
     
  
 
    <button type="button"><span></span>START A CAMPAIGN NOW</button>
  </div>
                  
        </section>
      
     </>
  )
}
