import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="image-layer" style={{backgroundImage: "url(assets/images/background/banner-1.jpg)"}}></div>
        <div className="auto-container">
          <h1>About Us</h1>
          <ul className="bread-crumb">
            <li><Link to="/">Home</Link></li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-1-image-wrap mb_30 p_relative">
                <div className="about-1-shape-1" data-parallax='{"y": -50}'></div>
                <div className="about-1-image-1 hvr-img-zoom-1">
                  <img src="assets/images/resource/about.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="section_heading mb_20">
                <span className="section_heading_title_small">About Royalking</span>
                <h2 className="section_heading_title_big">
                  Luxury Hotel in <br />
                  The Heart of City
                </h2>
              </div>
              <p className="about-1-desc mb_30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer
                ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales
                Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis
                amet odio est. Sit semper et velit fusce.
              </p>
              <div className="about-1-btn mb_30">
                <Link to="/contact" className="btn-1">
                  Contact Us<span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding gray-bg">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="feature-block-two mb_30">
                <div className="inner-box">
                  <div className="icon"><span className="flaticon-room-key"></span></div>
                  <h4>Luxury Rooms</h4>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="feature-block-two mb_30">
                <div className="inner-box">
                  <div className="icon"><span className="flaticon-wifi"></span></div>
                  <h4>Fast Internet</h4>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="feature-block-two mb_30">
                <div className="inner-box">
                  <div className="icon"><span className="flaticon-clock"></span></div>
                  <h4>24/7 Service</h4>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 