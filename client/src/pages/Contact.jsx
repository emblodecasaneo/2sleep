import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="image-layer" style={{backgroundImage: "url(assets/images/background/banner-3.jpg)"}}></div>
        <div className="auto-container">
          <h1>Contact Us</h1>
          <ul className="bread-crumb">
            <li><Link to="/">Home</Link></li>
            <li className="active">Contact</li>
          </ul>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-block text-center mb_30">
                <div className="icon"><i className="icon-23"></i></div>
                <h4>Location</h4>
                <p>New Hyde Park, NY 11040</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-block text-center mb_30">
                <div className="icon"><i className="icon-24"></i></div>
                <h4>Email</h4>
                <p><a href="mailto:example@royalking.com">example@royalking.com</a></p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-block text-center mb_30">
                <div className="icon"><i className="icon-25"></i></div>
                <h4>Phone</h4>
                <p><a href="tel:3336660000">333 666 0000</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding gray-bg">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section_heading mb_20">
                <span className="section_heading_title_small">Get in Touch</span>
                <h2 className="section_heading_title_big">Send Us Message</h2>
              </div>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="col-md-12">
                      <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="col-md-12">
                      <textarea name="message" placeholder="Your Message"></textarea>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn-1">
                        Send Message <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="google-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDAnMDAuMCJOIDczxrA1NCcwMC4wIlc!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="450" 
                  style={{border: 0}}
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 