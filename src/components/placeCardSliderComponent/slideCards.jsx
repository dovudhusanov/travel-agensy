import React from 'react';
import "./slideCards.css"
import SlideCard from "./slideCard/slideCard";

function SlideCards() {
    return (
        <div className="container">
           <div className="slide-cards-main">
               <div className="slide-cards-descr">
                   <p>Some our recommended place around the world</p>
               </div>
               <SlideCard />
           </div>
        </div>
    );
}

export default SlideCards;