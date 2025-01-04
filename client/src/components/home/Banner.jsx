import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <section className="banner-section style-three">
      <div className="banner-shape-1"></div>
      <Swiper
        modules={[Navigation]}
        className="banner-slider-2"
        navigation={{
          nextEl: '.banner-slider-button-next',
          prevEl: '.banner-slider-button-prev',
        }}
      >
        <SwiperSlide>
          <div className="banner-feature-image d-none d-lg-block" 
               style={{backgroundImage: "url(assets/images/main-slider/banner-3.jpg)"}}></div>
          <div className="content-outer">
            <div className="content-box">
              <div className="inner">
                <h4>Summer Vacations</h4>
                <h1>Luxury <br />
                    Hotel For <br />
                    Vacation.</h1>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Turpis ridiculus tellus.</div>
                <div className="link-box">
                  <Link to="/rooms" className="btn-1">Book Room <span></span></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="banner-feature-image d-none d-lg-block" 
               style={{backgroundImage: "url(assets/images/main-slider/banner-3.jpg)"}}></div>
          <div className="content-outer">
            <div className="content-box">
              <div className="inner">
                <h4>Summer Vacations</h4>
                <h1>Your <br /> Home For <br />
                    Vacation.</h1>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Turpis ridiculus tellus.</div>
                <div className="link-box">
                  <Link to="/rooms" className="btn-1">Book Room <span></span></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="banner-slider-nav">
        <div className="banner-slider-control banner-slider-button-prev hvr-zoom-1 hvr-zoom-1-primary">
          <span><i className="icon-2"></i></span>
        </div>
        <div className="banner-slider-control banner-slider-button-next hvr-zoom-1 hvr-zoom-1-primary">
          <span><i className="icon-3"></i></span>
        </div>
      </div>
    </section>
  );
};

export default Banner; 