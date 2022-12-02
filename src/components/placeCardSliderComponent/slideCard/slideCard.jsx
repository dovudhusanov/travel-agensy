import React from 'react';
import "./slideCard.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlaceCard from "../placeCard/placeCard";
import {dataSlider} from "../../../data/data";

function SlideCard() {

    let settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slide-cards">
            <Slider {...settings}>
                {dataSlider.map((data) => (
                    <PlaceCard
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        descr={data.descr}
                        price={data.price}
                        priceType={data.priceType}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default SlideCard;