import React from "react";
import styles from "../styles/contactUs.module.css";


const AboutUs = () => {
  return (
    <React.Fragment>
    
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
         
Feel free to get in touch with us at Altruso! We're here to help with any inquiries or concerns you might have. Whether you're a project creator looking to launch your idea or a supporter excited to contribute, we're eager to assist you on your crowdfunding journey. Reach out to us using the form below, and we'll respond as soon as possible. Thank you for being a part of the Altruso community!
          <br />
          <br />
          <div className={styles.map}>
          <iframe width="1052" height="482" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1052&amp;height=482&amp;hl=en&amp;q=gyaneshwor%20Kathmandu+(altruso)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>

          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <ul>
          
          <li>Email: <a href="mailto:altrusocrowdfunding@gmail.com">altrusocrowdfunding@gmail.com</a></li>
          <li>Phone: <a href="tel:01524684">Call Now</a></li>
        </ul>
            </div>
          </div>
        </div>
      </div>
   
    </React.Fragment>
  );
};

export default AboutUs;