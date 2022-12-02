import React from 'react';
import "./partners.css"
import PartnersSlider from "./partnersSlider/partnersSlider";

function Partners() {
    return (
        <div className="container">
            <div className="partners-title">
                <h1>Our Partnership</h1>
                <p>Some our best partnership travel service worldwide</p>
            </div>
            <PartnersSlider />
        </div>
    );
}

export default Partners;