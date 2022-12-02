import React from 'react';
import Header from "../../components/header/header";
import Partners from "../../components/partersComponent/partners";
import SlideCards from "../../components/placeCardSliderComponent/slideCards";
import AboutComponent from "../../components/aboutComponent/aboutComponent";
import Articles from "../../components/articles/articles";
import changeTitle from "../../middleware/changeTitle";

function Home() {
    changeTitle("Home Page")

    return (
        <>
            <Header
                imgUrl="https://lambumiz.ru/upload/iblock/776/8109c5a01c8841a%20-%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg"
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