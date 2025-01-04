import React from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const rooms = [
    {
      image: "assets/images/resource/room-1.jpg",
      price: "55.0",
      title: "Luxury Room",
      description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget."
    },
    {
      image: "assets/images/resource/room-2.jpg",
      price: "65.0",
      title: "Delux Room",
      description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget."
    },
    {
      image: "assets/images/resource/room-3.jpg",
      price: "75.0",
      title: "Family Room",
      description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget."
    },
    {
      image: "assets/images/resource/room-4.jpg",
      price: "85.0",
      title: "Superior Room",
      description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget."
    }
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="image-layer" style={{backgroundImage: "url(assets/images/background/banner-2.jpg)"}}></div>
        <div className="auto-container">
          <h1>Our Rooms</h1>
          <ul className="bread-crumb">
            <li><Link to="/">Home</Link></li>
            <li className="active">Rooms</li>
          </ul>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section-padding">
        <div className="auto-container">
          <div className="section_heading text-center mb_55">
            <span className="section_heading_title_small">Discover</span>
            <h2 className="section_heading_title_big">Rooms & Suites</h2>
          </div>
          
          <div className="row">
            {rooms.map((room, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s">
                  <div className="room-1-image hvr-img-zoom-1">
                    <img src={room.image} alt={room.title} />
                  </div>
                  <div className="room-1-content">
                    <p className="room-1-meta-info">
                      Start from <span className="theme-color">${room.price}</span>/night
                    </p>
                    <div className="room-1-rating">
                      <i className="icon-6"></i>
                      <i className="icon-6"></i>
                      <i className="icon-6"></i>
                      <i className="icon-6"></i>
                      <i className="icon-7"></i>
                    </div>
                    <h4 className="room-1-title mb_20">
                      <Link to="/room-details">{room.title}</Link>
                    </h4>
                    <p className="room-1-text mb_30">{room.description}</p>
                    <div className="link-btn">
                      <Link to="/room-details" className="btn-1 btn-alt">
                        Book Now <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms; 