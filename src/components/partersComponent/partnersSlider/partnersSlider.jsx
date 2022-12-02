import React from 'react';
import "./partnersSlider.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PartnersSlider() {
    let settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="partners-slider">
          <Slider {...settings}>
            <div className="partners-slider-img"><img src="./images/partnes-images/img.png" alt="img"/></div>
            <div className="partners-slider-img"><img src="./images/partnes-images/img_1.png" alt="img"/></div>
            <div className="partners-slider-img"><img src="./images/partnes-images/img_2.png" alt="img"/></div>
            <div className="partners-slider-img"><img src="./images/partnes-images/img_3.png" alt="img"/></div>
            <div className="partners-slider-img"><img src="./images/partnes-images/img_4.png" alt="img"/></div>
          </Slider>
        </div>
    );
}

export default PartnersSlider;