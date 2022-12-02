import React from 'react';
import "./header.css"
import "./headerMedia.css"

function Header({imgUrl, headerTitle}) {
    return (
        <header
            className="header"
            style={{
                backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${imgUrl})`,
            }}
        >
            <div className="container">
                <div className="header-title">
                    <h1>{headerTitle}</h1>
                </div>
                <div className="header-slider">
                    <div>
                        <span>1/<span>8</span></span>
                        <div className="slider-line"></div>
                    </div>
                    <button className="see-header-slider">See More <i className="fa-regular fa-chevron-right"></i></button>
                </div>
            </div>
        </header>
    );
}

export default Header;