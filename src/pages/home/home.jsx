import React from 'react';
import Header from "../../components/header/header";
import Partners from "../../components/partersComponent/partners";
import SlideCards from "../../components/placeCardSliderComponent/slideCards";
import AboutComponent from "../../components/aboutComponent/aboutComponent";
import Articles from "../../components/articles/articles";

function Home() {
    return (
        <>
            <Header
                imgUrl="./images/home-banner.jpg"
                headerTitle="Explore The Most Beatiful Place Around The World"
            />
            <Partners />
            <SlideCards />
            <AboutComponent />
            <Articles />
        </>
    );
}

export default Home;