import React from 'react';
import {about} from "../../data/data";
import AboutCard from "../aboutCard/aboutCard";
import "./aboutComponent.css"

function AboutComponent() {
    return (
        <div>
            {about.map((data) => (
               <div className="about-card-main" key={data.id}>
                   <div className="container">
                       <AboutCard
                           image={data.image}
                           cardTitle={data.cardTitle}
                           title={data.title}
                           info={data.info}
                           numberOfManyPartner={data.numberOf.numberOfManyPartner}
                           numberOfManyTypePartner={data.numberOf.numberOfManuTypePartner}
                           numberOfManyWorld={data.numberOf.numberOfManyWorld}
                           numberOfManyTypeWorld={data.numberOf.numberOfManuTypeWorld}
                           price={data.price}
                           priceData={data.priceData}
                       />
                   </div>
               </div>
            ))}
        </div>
    );
}

export default AboutComponent;