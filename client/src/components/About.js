import React from "react";
import Heroimg from "../../public/about-us-background.jpg";
import styles from "../styles/whyUsSection.module.css";

const WhyUs = () => {
  
          

  return (

    <React.Fragment>
      <section
        className='hero'
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${Heroimg.src})`}}>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <h3>
          The company itself is a very successful company. Blinded
            or we charge that there is nothing here that pleases us when we see that the labors are repulsed
            flees. Of these, those who are freed from true desire are blessed
            benefits.
            There is nothing here to please you, whether you are blinded or blinded by the troubles that drive you away
            We accuse him of running away. Of these, indeed, those who are freed are blessed
            with the desire of advantage
            adipisicing elit. It repels being blinded or blinded by hardships
            here nothing escapes from pleasing the accuser. It is just that they are blessed
            but loosed by the desire of convenience.
          </h3>
          
        </div>
        <div className="col-md-4">
      
        </div>
        
      </div>
      </section>
    </React.Fragment>
   
  );

};

export default WhyUs;