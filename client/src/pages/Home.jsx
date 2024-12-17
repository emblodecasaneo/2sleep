import React from 'react';

const Home = () => {
  return (
    <div>
      <div class="page-wrapper">

<div class="loader-wrap">
    <div class="preloader"><div class="preloader-close">Preloader Close</div></div>
    <div class="layer layer-one"><span class="overlay"></span></div>
    <div class="layer layer-two"><span class="overlay"></span></div>        
    <div class="layer layer-three"><span class="overlay"></span></div>        
</div>

<header class="main-header header-style-one">

    <div class="header-upper">
        <div class="auto-container">
            <div class="inner-container d-flex align-items-center justify-content-between">
                <div class="logo-box">
                    <div class="logo" style={{width: '240px'}}><a href="index.html"><img src="assets/images/logo.png" alt=''/></a></div>
                </div>
                <div class="middle-column">
                    <div class="nav-outer">
                        <div class="mobile-nav-toggler"><img src="assets/images/icons/icon-bar-2.png" alt=''/></div>
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation">
                                    <li class="dropdown"><a href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home Page 1</a></li>
                                            <li><a href="index-2.html">Home Page 2</a></li>
                                            <li><a href="index-3.html">Home Page 3</a></li>
                                        </ul>
                                    </li>                                    
                                    <li class="dropdown"><a href="about.html">About</a>
                                        <ul>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="team.html">Team</a></li>                                                
                                            <li><a href="testimonials.html">Testimonials</a></li>                                                
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="error.html">404 Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="blog-grid.html">Pages</a>
                                        <ul>                                                
                                            <li><a href="menu.html">Menu</a></li>                                                
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="spa.html">Spa & Wellness</a></li>
                                            <li><a href="amenities.html">Amenities</a></li>
                                            <li class="dropdown"><a href="event-grid.html">Events</a>
                                                <ul>
                                                    <li><a href="events.html">Events</a></li>
                                                    <li><a href="event-details.html">Event Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><a href="packages.html">Packages</a>
                                                <ul>
                                                    <li><a href="packages.html">Packages</a></li>
                                                    <li><a href="package-details.html">Package Details</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="room-1.html">Rooms</a>
                                        <ul>
                                            <li><a href="room-1.html">Room Style 01</a></li>
                                            <li><a href="room-2.html">Room Style 02</a></li>
                                            <li><a href="room-details.html">Room Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-standard.html">Blog Standard</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="right-column d-flex align-items-center">
                    <button type="button" class="theme-btn search-toggler"><i class="icon-1"></i></button>                        
                    <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1 btn-small btn-alt">Book Your Stay <span></span></a></div>
                </div>                      
            </div>
        </div>
    </div>
    <div class="sticky-header">
        <div class="header-upper">
            <div class="auto-container">
                <div class="inner-container d-flex align-items-center justify-content-between">
                    <div class="logo-box">
                        <div class="logo" style={{width: '240px'}}><a href="index.html"><img src="assets/images/logo.png" alt=''/></a></div>
                    </div>
                    <div class="middle-column">
                        <div class="nav-outer">
                            <div class="mobile-nav-toggler"><img src="assets/images/icons/icon-bar-2.png" alt=''/></div>

                            <nav class="main-menu navbar-expand-md navbar-light">
                            </nav>
                        </div>
                    </div>
                    <div class="right-column d-flex align-items-center">                        
                        <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1 btn-small btn-alt">Book Your Stay <span></span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn"><span class="fal fa-times"></span></div>
        
        <nav class="menu-box">
            <div class="nav-logo"><a href="index.html"><img src="assets/images/logo-light.png" alt='' title=""/></a></div>
            <div class="menu-outer"></div>
    <div class="social-links">
      <ul class="clearfix">
        <li><a href="#"><span class="fab fa-twitter"></span></a></li>
        <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
        <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
        <li><a href="#"><span class="fab fa-instagram"></span></a></li>
        <li><a href="#"><span class="fab fa-youtube"></span></a></li>
      </ul>
            </div>
        </nav>
    </div>

    <div class="nav-overlay">
        <div class="cursor"></div>
        <div class="cursor-follower"></div>
    </div>
</header>

<div id="search-popup" class="search-popup">
    <div class="close-search theme-btn"><span class="fal fa-times"></span></div>
    <div class="popup-inner">
        <div class="overlay-layer"></div>
        <div class="search-form">
            <form method="post" action="index.html">
                <div class="form-group">
                    <fieldset>
                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                        <input type="submit" value="Search Now!" class="theme-btn"/>
                    </fieldset>
                </div>
            </form>
            <br/>
            <h3>Recent Search Keywords</h3>
            <ul class="recent-searches">
                <li><a href="#">Finance</a></li>
                <li><a href="#">Idea</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Growth</a></li>
                <li><a href="#">Plan</a></li>
            </ul>
        </div>
    </div>
</div>

<section class="banner-section style-three">
    <div class="banner-shape-1"></div>
    <div class="swiper-container banner-slider-2">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="banner-feature-image d-none d-lg-block" style={{backgroundImage: 'url(assets/images/main-slider/banner-3.jpg)'}}></div>
                <div class="content-outer">
                    <div class="content-box">
                        <div class="inner">
                            <h4>Summer Vacations</h4>
                            <h1>Luxury <br/>
                                Hotel For <br/>
                                Vacation.</h1>
                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> Turpis ridiculus tellus.</div>
                            <div class="link-box">
                                <a href="room-1.html" class="btn-1">Book Room <span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="banner-feature-image d-none d-lg-block" style={{backgroundImage: 'url(assets/images/main-slider/banner-3.jpg)'}}></div>
                <div class="content-outer">
                    <div class="content-box">
                        <div class="inner">
                            <h4>Summer Vacations</h4>
                            <h1>Your <br/> Home For <br/>
                                Vacation.</h1>
                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> Turpis ridiculus tellus.</div>
                            <div class="link-box">
                                <a href="room-1.html" class="btn-1">Book Room <span></span></a>
                            </div>
                        </div>                               
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-slider-nav">
        <div class="banner-slider-control banner-slider-button-prev hvr-zoom-1 hvr-zoom-1-primary"><span><i class="icon-2"></i></span></div>
        <div class="banner-slider-control banner-slider-button-next hvr-zoom-1 hvr-zoom-1-primary"><span><i class="icon-3"></i></span> </div>
    </div>
</section>

<div class="hotel-booking-form-1 gray-bg">
    <div class="auto-container">
        <div class="hotel-booking-form-1-wrap">
            <form class="hotel-booking-form-1-form flex-grow-1 d-flex align-items-end">
                <div class="form-group">
                    <p class="hotel-booking-form-1-label text-lg-center">Check - in:</p>
                    <input placeholder="17 Sep, 2022" class="" type="text" name="form-name" id="nd_booking_archive_form_date_range_from" value="" />
                </div>
                <div class="form-group">        
                    <p class="hotel-booking-form-1-label text-lg-center">Check - Out:</p>
                    <input placeholder="21 Sep, 2022" class="" type="text" name="form-name" id="nd_booking_archive_form_date_range_to" value="" />                            
                </div>
                <div class="form-group">
                    <p class="hotel-booking-form-1-label text-lg-center">Rooms:</p>
                    <select>
                        <option data-display="1 Room">1 Room</option>
                        <option value="2 Rooms">2 Rooms</option>
                        <option value="3 Rooms">3 Rooms</option>
                        <option value="4 Rooms">4 Rooms</option>
                        <option value="5 Rooms">5 Rooms</option>
                    </select>
                </div>
                <div class="form-group">
                    <p class="hotel-booking-form-1-label text-lg-center">Adults:</p>
                    <select>
                        <option data-display="2 Adults">2 Adults</option>
                        <option value="1 Adult">1 Adult</option>
                        <option value="3 Adults">3 Adults</option>
                        <option value="4 Adults">4 Adults</option>
                        <option value="5 Adults">5 Adults</option>
                    </select>
                </div>
                <div class="form-group">
                    <p class="hotel-booking-form-1-label text-lg-center">Child:</p>
                    <select>
                        <option data-display="1 Children">1 Children</option>
                        <option value="0 Children">0 Children</option>
                        <option value="2 Childrens">2 Childrens</option>
                        <option value="3 Childrens">3 Childrens</option>
                        <option value="4 Childrens">4 Childrens</option>
                        <option value="5 Childrens">5 Childrens</option>
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn-1">Check Availability<span></span></button>
                </div>
            </form>
        </div>
    </div>
</div>

<section class="section-padding">
    <div class="gray-bg p_absolute l_0 b_0 r_0 h_340"></div>
    <div class="auto-container">
        <div class="section_heading text-center mb_60">
            <span class="section_heading_title_small">Exclusive Offers</span>
            <h2 class="section_heading_title_big">Featured Special <br/> Offers</h2>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                    <div class="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-1.jpg" alt=''/></div>
                    <h4 class="feature-1-title">Kick off Summer <br/> in NYC</h4>
                    <p class="feature-1-text">Amet minim mollit no duis sit enim <br/> aliqua dolor do amet officia.</p>
                    <div class="feature-1-link"><a class="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i class="icon-5"></i></a></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                    <div class="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-2.jpg" alt=''/></div>
                    <h4 class="feature-1-title">Free br/eakfast <br/> Packages</h4>
                    <p class="feature-1-text">Amet minim mollit no duis sit enim <br/> aliqua dolor do amet officia.</p>
                    <div class="feature-1-link"><a class="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i class="icon-5"></i></a></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                    <div class="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-3.jpg" alt=''/></div>
                    <h4 class="feature-1-title">The Signature <br/> Collection</h4>
                    <p class="feature-1-text">Amet minim mollit no duis sit enim <br/> aliqua dolor do amet officia.</p>
                    <div class="feature-1-link"><a class="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i class="icon-5"></i></a></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding gray-bg pt-0">
    <div class="auto-container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about-1-image-wrap mb_30 p_relative">
                    <div class="about-1-shape-1" data-parallax='{"y": -50}'></div>
                    <div class="about-1-image-1 hvr-img-zoom-1"><img src="assets/images/resource/about.jpg" alt=''/></div>
                </div>
            </div>
            <div class="col-lg-6 ps-lg-5">
                <div class="section_heading mb_20">
                    <span class="section_heading_title_small">About Royalking</span>
                    <h2 class="section_heading_title_big">Luxury <br/> Hotel in The Heart of <br/> San Francisco.</h2>
                </div>
                <p class="aboout-1-desc mb_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer
                    ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales
                    Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis
                    amet odio est. Sit semper et velit fusce.</p>
                <div class="about-1-btn mb_30">
                    <a href="about.html" class="btn-1">Discover More<span></span></a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding">
    <div class="auto-container">
        <div class="section_heading text-center mb_55">
            <span class="section_heading_title_small">Discover</span>
            <h2 class="section_heading_title_big">Rooms & Suites</h2>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s">
                    <div class="room-1-image hvr-img-zoom-1">
                        <img src="assets/images/resource/room-1.jpg" alt=''/>
                    </div>
                    <div class="room-1-content">
                        <p class="room-1-meta-info">Start from <span class="theme-color">$55.0</span>/night</p>
                        <div class="room-1-rating">
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-7"></i>
                        </div>
                        <h4 class="room-1-title mb_20"><a href="room-details.html">Luxury Room</a></h4>
                        <p class="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                        <div class="link-btn"><a href="room-details.html" class="btn-1 btn-alt">Book Now <span></span></a></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.2s">
                    <div class="room-1-image hvr-img-zoom-1">
                        <img src="assets/images/resource/room-2.jpg" alt=''/>
                    </div>
                    <div class="room-1-content">
                        <p class="room-1-meta-info">Start from <span class="theme-color">$55.0</span>/night</p>
                        <div class="room-1-rating">
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-7"></i>
                        </div>
                        <h4 class="room-1-title mb_20"><a href="room-details.html">Delux Room</a></h4>
                        <p class="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                        <div class="link-btn"><a href="room-details.html" class="btn-1 btn-alt">Book Now <span></span></a></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                    <div class="room-1-image hvr-img-zoom-1">
                        <img src="assets/images/resource/room-3.jpg" alt=''/>
                    </div>
                    <div class="room-1-content">
                        <p class="room-1-meta-info">Start from <span class="theme-color">$55.0</span>/night</p>
                        <div class="room-1-rating">
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-6"></i>
                            <i class="icon-7"></i>
                        </div>
                        <h4 class="room-1-title mb_20"><a href="room-details.html">Luxury Room</a></h4>
                        <p class="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                        <div class="link-btn"><a href="room-details.html" class="btn-1 btn-alt">Book Now <span></span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding p-0">
        <div class="gray-bg p_absolute l_0 b_0 r_0 h_140"></div>
        <div class="auto-container">
            <div class="project-1-wrapper">
                <div class="swiper-container single-item-carousel swiper-container-initialized swiper-container-horizontal" style={{cursor: 'grab'}}>
                    <div class="swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(-2280px, 0px, 0px)'}}><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style={{width: '1140px'}}>
                            <div class="project-1-image" style={{backgroundImage: 'url(assets/images/resource/project-3.jpg)'}}>
                                <div class="project-1-block">
                                    <span class="section_heading_title_small">Discover</span>
                                    <h2 class="section_heading_title_big fs_50 mb_20">Rooms &amp; Suites</h2>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        Adipiscing integer ultrices suspendisse varius etiam est
                                        tempus nec vitae orci sodales.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style={{width: '1140px'}}>
                            <div class="project-1-image" style={{backgroundImage: 'url(assets/images/resource/project-1.jpg)'}}>
                                <div class="project-1-block">
                                    <span class="section_heading_title_small">Discover</span>
                                    <h2 class="section_heading_title_big fs_50 mb_20">Rooms &amp; Suites</h2>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        Adipiscing integer ultrices suspendisse varius etiam est
                                        tempus nec vitae orci sodales.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style={{width: '1140px'}}>
                            <div class="project-1-image" style={{backgroundImage: 'url(assets/images/resource/project-2.jpg)'}}>
                                <div class="project-1-block">
                                    <span class="section_heading_title_small">Discover</span>
                                    <h2 class="section_heading_title_big fs_50 mb_20">Rooms &amp; Suites</h2>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        Adipiscing integer ultrices suspendisse varius etiam est
                                        tempus nec vitae orci sodales.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style={{width: '1140px'}}>
                            <div class="project-1-image" style={{backgroundImage: 'url(assets/images/resource/project-3.jpg)'}}>
                                <div class="project-1-block">
                                    <span class="section_heading_title_small">Discover</span>
                                    <h2 class="section_heading_title_big fs_50 mb_20">Rooms &amp; Suites</h2>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        Adipiscing integer ultrices suspendisse varius etiam est
                                        tempus nec vitae orci sodales.</p>
                                </div>
                            </div>
                        </div>
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{width: '1140px'}}>
                            <div class="project-1-image" style={{backgroundImage: 'url(assets/images/resource/project-1.jpg)'}}>
                                <div class="project-1-block">
                                    <span class="section_heading_title_small">Discover</span>
                                    <h2 class="section_heading_title_big fs_50 mb_20">Rooms &amp; Suites</h2>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        Adipiscing integer ultrices suspendisse varius etiam est
                                        tempus nec vitae orci sodales.</p>
                                </div>
                            </div>
                        </div></div>
                    <div class="slider-nav-style-1 project-1-nav">
                        <div class="slider-control slider-button-prev hvr-zoom-1 hvr-zoom-1-primary" tabindex="0" role="button" aria-label="Previous slide"><span><i class="icon-3"></i></span></div>
                        <div class="slider-control slider-button-next hvr-zoom-1 hvr-zoom-1-primary" tabindex="0" role="button" aria-label="Next slide"><span><i class="icon-2"></i></span> </div>
                    </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </div>
    </section>

<section class="section-padding gray-bg">
    <div class="auto-container">
        <div class="team-1-wrapper">
            <div class="section_heading text-center mb_50">
                <span class="section_heading_title_small">Discover</span>
                <h2 class="section_heading_title_big mb_20">Our Best Amenities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. <br/> Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor <br/> sagittis amet odio est. Sit semper et velit fusce.</p>
            </div>
            <div class="row">
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-8"></i></div>
                        <p class="fw_500">Fast wifi</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-9"></i></div>
                        <p class="fw_500">Coffee</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-10"></i></div>
                        <p class="fw_500">Bath</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-11"></i></div>
                        <p class="fw_500">Parking Space​</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-12"></i></div>
                        <p class="fw_500">Swimming pool</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-13"></i></div>
                        <p class="fw_500">Laundry service</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-14"></i></div>
                        <p class="fw_500">br/eakfast</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-15"></i></div>
                        <p class="fw_500">Spa & Wellness</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-16"></i></div>
                        <p class="fw_500">Meeting Room</p>
                    </div>
                </div>
                <div class="col_xl_five col-lg-3 col-md-6">
                    <div class="icon_box-1">
                        <div class="icon_box-1-icon"><i class="icon-17"></i></div>
                        <p class="fw_500">Welcome Drink</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding">
        <div class="auto-container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="section_heading mb_20">
                        <span class="section_heading_title_small">Testimonials</span>
                        <h2 class="section_heading_title_big">What <br/> They’re Say <br/> About Us?</h2>
                    </div>
                    <p class="testimonial-1-desc">Amet dui scelerisque vel habitant eget <br/> tincidunt facilisis pretium. Porttitor mi <br/> nisi, non vitae tempus.</p>
                    <div class="slider-nav-style-2 testimonial-1-nav">
                        <div class="slider-control slider-button-prev hvr-zoom-1 hvr-zoom-1-primary" tabindex="0" role="button" aria-label="Previous slide"><span><i class="icon-3"></i></span></div>
                        <div class="slider-control slider-button-next hvr-zoom-1 hvr-zoom-1-primary" tabindex="0" role="button" aria-label="Next slide"><span><i class="icon-2"></i></span> </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="testimonial-1-block-wrap">
                        <div class="testimonial-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt=""/></div>
                        <div class="swiper-container two-item-carousel swiper-container-initialized swiper-container-horizontal" style={{cursor: 'grab'}}>
                            <div class="swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(-880px, 0px, 0px)'}}><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style={{width: 410+'px', marginRight: 30+'px'}}>
                                    <div class="testimonial-1-block">
                                        <div class="testimonial-1-quote-icon"><i class="icon-18"></i></div>
                                        <p class="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                            aenean aliquet in. Risus a arcu eget
                                            mi hendrerit gravida elit scelerisque
                                            tempor Pharetra fringilla tellus vivera
                                            eget sapien viverra faucibus facilisis
                                            sed facilisi dictum.”</p>
                                        <h4 class="testimonial-1-name">Jacob Jones</h4>
                                        <p class="testimonial-1-designation">Manager</p>
                                        <div class="testimonial-1-author-thumb">
                                            <img src="assets/images/resource/testimonial-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{width: 410+'px', marginRight: 30+'px'}}>
                                    <div class="testimonial-1-block">
                                        <div class="testimonial-1-quote-icon"><i class="icon-18"></i></div>
                                        <p class="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                            aenean aliquet in. Risus a arcu eget
                                            mi hendrerit gravida elit scelerisque
                                            tempor Pharetra fringilla tellus vivera
                                            eget sapien viverra faucibus facilisis
                                            sed facilisi dictum.”</p>
                                        <h4 class="testimonial-1-name">Ralph Edwards</h4>
                                        <p class="testimonial-1-designation">Manager</p>
                                        <div class="testimonial-1-author-thumb">
                                            <img src="assets/images/resource/testimonial-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style={{width: 410+'px', marginRight: 30+'px'}}>
                                    <div class="testimonial-1-block">
                                        <div class="testimonial-1-quote-icon"><i class="icon-18"></i></div>
                                        <p class="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                            aenean aliquet in. Risus a arcu eget
                                            mi hendrerit gravida elit scelerisque
                                            tempor Pharetra fringilla tellus vivera
                                            eget sapien viverra faucibus facilisis
                                            sed facilisi dictum.”</p>
                                        <h4 class="testimonial-1-name">Jacob Jones</h4>
                                        <p class="testimonial-1-designation">Manager</p>
                                        <div class="testimonial-1-author-thumb">
                                            <img src="assets/images/resource/testimonial-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="1" style={{width: 410+'px', marginRight: 30+'px'}}>
                                    <div class="testimonial-1-block">
                                        <div class="testimonial-1-quote-icon"><i class="icon-18"></i></div>
                                        <p class="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                            aenean aliquet in. Risus a arcu eget
                                            mi hendrerit gravida elit scelerisque
                                            tempor Pharetra fringilla tellus vivera
                                            eget sapien viverra faucibus facilisis
                                            sed facilisi dictum.”</p>
                                        <h4 class="testimonial-1-name">Ralph Edwards</h4>
                                        <p class="testimonial-1-designation">Manager</p>
                                        <div class="testimonial-1-author-thumb">
                                            <img src="assets/images/resource/testimonial-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style={{width: 410+'px', marginRight: 30+'px'}}>
                                    <div class="testimonial-1-block">
                                        <div class="testimonial-1-quote-icon"><i class="icon-18"></i></div>
                                        <p class="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                            aenean aliquet in. Risus a arcu eget
                                            mi hendrerit gravida elit scelerisque
                                            tempor Pharetra fringilla tellus vivera
                                            eget sapien viverra faucibus facilisis
                                            sed facilisi dictum.”</p>
                                        <h4 class="testimonial-1-name">Jacob Jones</h4>
                                        <p class="testimonial-1-designation">Manager</p>
                                        <div class="testimonial-1-author-thumb">
                                            <img src="assets/images/resource/testimonial-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{width: 410+'px', marginRight: 30+'px'}}>
                                    <div class="testimonial-1-block">
                                        <div class="testimonial-1-quote-icon"><i class="icon-18"></i></div>
                                        <p class="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                            aenean aliquet in. Risus a arcu eget
                                            mi hendrerit gravida elit scelerisque
                                            tempor Pharetra fringilla tellus vivera
                                            eget sapien viverra faucibus facilisis
                                            sed facilisi dictum.”</p>
                                        <h4 class="testimonial-1-name">Ralph Edwards</h4>
                                        <p class="testimonial-1-designation">Manager</p>
                                        <div class="testimonial-1-author-thumb">
                                            <img src="assets/images/resource/testimonial-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div></div>                            
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<section class="cta-1-section">
    <div class="cta-1-bg" data-parallax='{"y": 30}' style={{backgroundImage: 'url(assets/images/background/parallax-bg.jpg)'}}></div>
    <div class="auto-container">
        <div class="section_heading text-center mb_40">
            <span class="section_heading_title_small">Testimonials</span>
            <h2 class="section_heading_title_big alt">Looking for a Relaxing Country <br/> Vacation Rental?</h2>
        </div>
        <div class="text-center">
            <div class="cta-1-link-bt"><a href="javascript:void(0);" class="btn-1">Check Availability<span></span></a></div>
        </div>
    </div>
</section>

<section class="section-padding">
    <div class="auto-container">
        <div class="section_heading text-center mb_60">
            <span class="section_heading_title_small">Our Article</span>
            <h2 class="section_heading_title_big">Get More Update For <br/> Royalking</h2>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                    <div class="blog-1-image">
                        <a href="blog-details.html"><img src="assets/images/resource/blog-1.jpg" alt=''/></a>
                    </div>
                    <div class="blog-1-bottom-content">
                        <div class="blog-1-date">15 APRIL</div>
                        <h4 class="blog-1-title"><a href="blog-details.html">Our New Miami Beach
                            Hotel Is Open!</a></h4>
                        <ul class="d-flex blog-1-meta-info">
                            <li>Admin</li>
                            <li>0 Comment</li>
                        </ul>
                        <p class="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div class="blog-1-link-btn"><a href="blog-details.html" class="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i class="icon-5"></i></a></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                    <div class="blog-1-image">
                        <a href="blog-details.html"><img src="assets/images/resource/blog-2.jpg" alt=''/></a>
                    </div>
                    <div class="blog-1-bottom-content">
                        <div class="blog-1-date">15 APRIL</div>
                        <h4 class="blog-1-title"><a href="blog-details.html">Know the secreat of
                            Royalking Resort </a></h4>
                        <ul class="d-flex blog-1-meta-info">
                            <li>Admin</li>
                            <li>0 Comment</li>
                        </ul>
                        <p class="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div class="blog-1-link-btn"><a href="blog-details.html" class="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i class="icon-5"></i></a></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                <div class="blog-1-block">
                    <div class="blog-1-image">
                        <a href="blog-details.html"><img src="assets/images/resource/blog-3.jpg" alt=''/></a>
                    </div>
                    <div class="blog-1-bottom-content">
                        <div class="blog-1-date">15 APRIL</div>
                        <h4 class="blog-1-title"><a href="blog-details.html">How to book a Resort in best price on Mountains</a></h4>
                        <ul class="d-flex blog-1-meta-info">
                            <li>Admin</li>
                            <li>0 Comment</li>
                        </ul>
                        <p class="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div class="blog-1-link-btn"><a href="blog-details.html" class="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i class="icon-5"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding gray-bg">
    <div class="auto-container">
        <div class="row">                
            <div class="col-lg-6 order-2">  
                <div class="p_relative">
                    <div class="p_absolute l_0 b__75"><img src="assets/images/shape/pattern-1.png" alt=''/></div>
                    <div class="form-alt">
                        <form method="post" action="sendemail.php" id="contact-form">
                            <div class="row clearfix">
                                <div class="form-group col-md-12">
                                    <input type="text" name="form_name" value="" placeholder="Your Name" required/>
                                </div>
                                
                                <div class="form-group col-md-12">
                                    <input type="text" name="email" value="" placeholder="Your Email" required/>
                                </div>
                                
                                <div class="form-group col-md-12">
                                    <input type="text" name="form_subject" value="" placeholder="Subject" required/>
                                </div>
                                
                                <div class="form-group col-md-12">
                                    <textarea name="form_message" placeholder="Massage"></textarea>
                                </div>
                                <div class="form-group col-md-12">
                                    <p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> I agree to the terms & conditions</p>
                                </div>
                                <div class="form-group col-md-12">
                                    <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value=""/>
                                    <button class="btn-1" type="submit" data-loading-text="Please wait...">Submit Now <i class="flaticon-right-arrow-1"></i><span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                  
            </div>
            <div class="col-lg-6">
                <div class="section_heading mb_30">
                    <span class="section_heading_title_small">Contact Us</span>
                    <h2 class="section_heading_title_big">If You Wish To <br/>
                        Learn More Ask Before <br/>
                        Booking.</h2>
                </div>
                <p>Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus <br/>
                    nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum <br/>
                    ornare sagittis dolor sagittis amet odio est.</p>
            </div>
        </div>
    </div>
</section>

<footer class="main-footer">
    <div class="footer-1-middle">
        <div class="auto-container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="contact-widget-1 mb_30">
                        <div class="footer-widget-title"><h4>Contact Us</h4></div>
                        <ul class="contact-widget-1-list">
                            <li><span>Add:</span> New Hyde Park, NY 11040</li>
                            <li><span>Email:</span><a href="mailto:example@royalking.com">example@royalking.com</a></li>
                            <li><span>Phone:</span><a href="tel:3336660000">333 666 0000</a></li>
                        </ul>
                        <ul class="footer-social-icon d-flex align-items-center">
                            <li><a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="link-widget-1 mb_30">
                        <div class="footer-widget-title"><h4>Links</h4></div>
                        <ul class="link-widget-1-list">
                            <li><a href="javascript:void(0);">About Us</a></li>
                            <li><a href="javascript:void(0);">Services</a></li>
                            <li><a href="javascript:void(0);">Case</a></li>
                            <li><a href="javascript:void(0);">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="link-widget-1 mb_30">
                        <div class="footer-widget-title"><h4>Hours</h4></div>
                        <p class="mb_25">Tincidunt neque pretium lectus <br/>
                            donec risus.</p>
                        <p>Mon - Fri: 9:00AM - 6:00PM <br/> Sat - Sun: 8:00AM - 4:00PM</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="about-widget-1 mb_30">
                        <div class="footer-widget-title"><h4>Newsletter</h4></div>
                        <div class="about-widget-1-text">
                            <p class="mb_30">Tincidunt neque pretium lectus <br/>
                                donec risus.</p>
                            <div class="footer-newsletter">
                                <form>
                                    <input type="email" placeholder="Email address"/>
                                    <button class="btn-1">Subscribe <span></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="auto-container">    
            <div class="footer-bottom-row">
                <div class="footer-bottom-text">Copyright 2022 by <a href="javascript:void(0);">royalking</a> theme All Right Reserved.</div>
            </div>
        </div>
    </div>
</footer>

</div>

<div class="scroll-to-top">
<div>
    <div class="scroll-top-inner">
        <div class="scroll-bar">
            <div class="bar-inner"></div>
        </div>
        <div class="scroll-bar-text">Go To Top</div>
    </div>
</div>
</div>
    </div>
  );
};

// Styles en ligne (à appliquer si nécessaire)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw'
  },

  main: {
    flex: 1,
    padding: '20px',
  },
};

export default Home;