import React from 'react';
import "./articles.css"
import {articlesData} from "../../data/data";
import ArticlesSlider from "./articlesSlider/articlesSlider";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Articles() {

    let settings = {
        autoplay: true,
        autoplaySpeed: 30000,
        pauseOnHover: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div className="articles">
            <div className="container">
                <span className="articles-title">ARTICLES</span>
                <h1>The Best Choice Of Place
                    Just For You</h1>
            </div>
            <div className="container">
                <Slider {...settings}>
                    {articlesData.map((data) => (
                        <ArticlesSlider
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            descr={data.descr}
                            images={data.images}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Articles;