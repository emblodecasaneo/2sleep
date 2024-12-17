import React from "react"

const Banner1 = () => {

return(
    <div>
        <section class="banner-section">
        <div class="swiper-container banner-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background-image: url(assets/images/main-slider/banner-1.jpg);">
                    <div class="content-outer">
                        <div class="content-box justify-content-center text-center">
                            <div class="inner">
                                <h4>Summeddr Vacations</h4>
                                <h1>Luxury Hotel For <br/> Vacation.</h1>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> Turpis ridiculus tellus.</div>
                                <div class="link-box">
                                    <a href="room-1.html" class="btn-1">Book Room <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image: url(assets/images/main-slider/banner-2.jpg);">
                    <div class="content-outer">
                        <div class="content-box justify-content-center text-center">
                            <div class="inner">
                                <h4>Summer Vacations</h4>
                                <h1>Your Home For <br/> Vacation.</h1>
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
            <div class="banner-slider-control banner-slider-button-prev"><span><i class="icon-3"></i></span></div>
            <div class="banner-slider-control banner-slider-button-next"><span><i class="icon-2"></i></span> </div>
        </div>
    </section>
    </div>
);
}


