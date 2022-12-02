import React from 'react';
import "./aboutcard.css"

function AboutCard
({
     image,
     cardTitle,
     title,
     info,
     numberOfManyPartner,
     numberOfManyTypePartner,
     numberOfManyWorld,
     numberOfManyTypeWorld,
     price,
     priceData
 }) {
    return (
        <div className="about-card">
            <div className="about-card-img"><img src={image} alt={cardTitle}/></div>
            <div className="about-card-info">
                <span className="card-title">{cardTitle}</span>
                <h1>{title}</h1>
                <p>{info}</p>
                <div className="number-of-many">
                    <div>
                        <h3>+{numberOfManyPartner}</h3>
                        <span>{numberOfManyTypePartner}</span>
                    </div>
                    <div>
                        <h3>+{numberOfManyWorld}</h3>
                        <span>{numberOfManyTypeWorld}</span>
                    </div>
                </div>
                <div className="price-pack">
                    <span className="pack-price price-style">${price}/<span>{priceData}</span></span>
                    <button className="btn">Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;