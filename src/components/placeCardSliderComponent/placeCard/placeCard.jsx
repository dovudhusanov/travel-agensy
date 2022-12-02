import React from 'react';
import "./placeCard.css"

function PlaceCard({image, title, descr, price, priceType}) {
    return (
       <div className="place-card-main">
           <div className="place-card">
               <img src={image} alt={title}/>
               <h3>{title}</h3>
               <p>{descr}</p>
               <span className="price-style">${price}/<span>{priceType}</span></span>
           </div>
       </div>
    );
}

export default PlaceCard;