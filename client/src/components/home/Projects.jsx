import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
  const projects = [
    {
      image: "assets/images/resource/project-1.jpg",
      title: "Rooms & Suites",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Adipiscing integer ultrices suspendisse varius etiam est tempus nec vitae orci sodales."
    },
    {
      image: "assets/images/resource/project-2.jpg",
      title: "Rooms & Suites",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Adipiscing integer ultrices suspendisse varius etiam est tempus nec vitae orci sodales."
    },
    {
      image: "assets/images/resource/project-3.jpg",
      title: "Rooms & Suites",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Adipiscing integer ultrices suspendisse varius etiam est tempus nec vitae orci sodales."
    }
  ];

  return (
    <section className="section-padding p-0">
      <div className="gray-bg p_absolute l_0 b_0 r_0 h_140"></div>
      <div className="auto-container">
        <div className="project-1-wrapper">
          <Swiper
            modules={[Navigation]}
            className="single-item-carousel"
            navigation={{
              nextEl: '.slider-button-next',
              prevEl: '.slider-button-prev',
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="project-1-image" 
                  style={{backgroundImage: `url(${project.image})`}}
                >
                  <div className="project-1-block">
                    <span className="section_heading_title_small">Discover</span>
                    <h2 className="section_heading_title_big fs_50 mb_20">
                      {project.title}
                    </h2>
                    <p className="mb-0">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-nav-style-1 project-1-nav">
            <div className="slider-control slider-button-prev hvr-zoom-1 hvr-zoom-1-primary">
              <span><i className="icon-3"></i></span>
            </div>
            <div className="slider-control slider-button-next hvr-zoom-1 hvr-zoom-1-primary">
              <span><i className="icon-2"></i></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 