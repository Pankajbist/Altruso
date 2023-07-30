import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="contact-us-description">
        Thank you for your interest in Altruso. If you have any questions, feedback,
        or concerns, please feel free to get in touch with us using the contact form
        below.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
