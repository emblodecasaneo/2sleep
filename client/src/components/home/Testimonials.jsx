import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = [
    {
      review: "Mattis cras magna morb nula punar aenean aliquet in. Risus a arcu eget mi hendrerit gravida elit scelerisque tempor Pharetra fringilla tellus vivera eget sapien viverra faucibus facilisis sed facilisi dictum.",
      name: "Jacob Jones",
      designation: "Manager",
      image: "assets/images/resource/testimonial-1.jpg"
    },
    {
      review: "Mattis cras magna morb nula punar aenean aliquet in. Risus a arcu eget mi hendrerit gravida elit scelerisque tempor Pharetra fringilla tellus vivera eget sapien viverra faucibus facilisis sed facilisi dictum.",
      name: "Ralph Edwards",
      designation: "Manager",
      image: "assets/images/resource/testimonial-2.jpg"
    }
  ];

  return (
    <section className="section-padding">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section_heading mb_20">
              <span className="section_heading_title_small">Testimonials</span>
              <h2 className="section_heading_title_big">
                What <br /> They're Say <br /> About Us?
              </h2>
            </div>
            <p className="testimonial-1-desc">
              Amet dui scelerisque vel habitant eget <br /> 
              tincidunt facilisis pretium. Porttitor mi <br /> 
              nisi, non vitae tempus.
            </p>
            <div className="slider-nav-style-2 testimonial-1-nav">
              <div className="slider-control slider-button-prev hvr-zoom-1 hvr-zoom-1-primary">
                <span><i className="icon-3"></i></span>
              </div>
              <div className="slider-control slider-button-next hvr-zoom-1 hvr-zoom-1-primary">
                <span><i className="icon-2"></i></span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="testimonial-1-block-wrap">
              <div className="testimonial-1-shape-1">
                <img src="assets/images/shape/pattern-1.png" alt="" />
              </div>
              <Swiper
                modules={[Navigation]}
                className="two-item-carousel"
                navigation={{
                  nextEl: '.slider-button-next',
                  prevEl: '.slider-button-prev',
                }}
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                  320: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  }
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-1-block">
                      <div className="testimonial-1-quote-icon">
                        <i className="icon-18"></i>
                      </div>
                      <p className="testimonial-1-review-desc">
                        "{testimonial.review}"
                      </p>
                      <h4 className="testimonial-1-name">{testimonial.name}</h4>
                      <p className="testimonial-1-designation">{testimonial.designation}</p>
                      <div className="testimonial-1-author-thumb">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 