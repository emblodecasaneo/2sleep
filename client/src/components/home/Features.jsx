import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      image: "assets/images/resource/feature-image-1.jpg",
      title: "Kick off Summer in NYC",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    },
    {
      image: "assets/images/resource/feature-image-2.jpg",
      title: "Free Breakfast Packages",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    },
    {
      image: "assets/images/resource/feature-image-3.jpg",
      title: "The Signature Collection",
      description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    }
  ];

  return (
    <section className="section-padding">
      <div className="gray-bg p_absolute l_0 b_0 r_0 h_340"></div>
      <div className="auto-container">
        <div className="section_heading text-center mb_60">
          <span className="section_heading_title_small">Exclusive Offers</span>
          <h2 className="section_heading_title_big">Featured Special <br /> Offers</h2>
        </div>
        
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div 
                className="feature-1-block text-center wow fadeInLeft" 
                data-wow-delay=".2s" 
                data-wow-duration=".8s"
              >
                <div className="feature-1-image hvr-img-zoom-1">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <h4 className="feature-1-title">{feature.title}</h4>
                <p className="feature-1-text">{feature.description}</p>
                <div className="feature-1-link">
                  <Link 
                    to="/service-details" 
                    className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary"
                  >
                    <i className="icon-5"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 