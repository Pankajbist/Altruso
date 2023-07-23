// About.js

import React from 'react';
import { Link } from 'next/link'; // Assuming you are using react-router-dom for navigation

const About = () => {
  const containerStyle = {
    backgroundImage: "url('Altruso-about.avif')", // Make sure to adjust the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '40px',
    color: '#fff',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '36px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    background: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle} className="about-container">
      <h1 style={headingStyle}>About Altruso</h1>
      <p style={paragraphStyle}>
        Welcome to Altruso, a revolutionary crowdfunding platform that aims to make a difference
        in the world. We believe in the extraordinary potential of crowdfunding to drive positive
        change and create lasting impacts on society. At Altruso, we bring together passionate
        individuals, organizations, and social entrepreneurs with a shared vision of a better future.
        Through the power of the crowd, we empower projects that matter and contribute to a more
        sustainable, equal, and compassionate world.
      </p>
      <h2 style={headingStyle}>Our Mission</h2>
      <p style={paragraphStyle}>
        Our mission at Altruso is crystal clear: to inspire, support, and amplify initiatives that
        have a profound social and environmental purpose. We are dedicated to providing a platform
        that nurtures creativity, innovation, and positive action. By focusing on impact-driven
        projects, we aim to create meaningful changes that reverberate through generations.
      </p>
      <h2 style={headingStyle}>How it Works</h2>
      <p style={paragraphStyle}>
        Altruso operates on a simple principle: connecting dreamers with doers. Project creators
        can showcase their ideas, causes, and endeavors on our platform, detailing their vision and
        funding needs. Supporters from around the world can explore diverse projects that resonate
        with their values and aspirations, making contributions that drive these endeavors forward.
        Together, we form a united community, harnessing collective strength for the greater good.
      </p>
      <p style={paragraphStyle}>
        Every project listed on Altruso undergoes rigorous vetting to ensure it aligns with our core
        values and commitment to positive change. Transparency and accountability are paramount; we
        foster an environment where both creators and supporters receive regular updates on project
        progress and outcomes. By doing so, we build trust and forge enduring relationships within
        our community.
      </p>
      <h2 style={headingStyle}>Join Us in Making a Difference!</h2>
      <p style={paragraphStyle}>
        Whether you have a vision that ignites a spark of change or a desire to support initiatives
        that resonate with your heart, Altruso welcomes you with open arms. Every contribution,
        big or small, matters in shaping a better world. Together, we can create a legacy of hope,
        compassion, and progress for generations to come.
    </p>
    </div>
    )
  
};

export default About;

