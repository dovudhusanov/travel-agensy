import React from 'react';
import "./articlesSlider.css"

function ArticlesSlider({id, title, descr, images}) {
    return (
        <div className="container-article-slider">
            <div className="article-slider-info">
                <h1>0{id}</h1>
                <div>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <p className="article-p">{descr.slice(0, 100)}</p>
                </div>
            </div>
            <div className="articles-slider-img">
                {images.map(img => (
                    <img src={img.image} alt="img" key={img.id}/>
                ))}
            </div>
        </div>
    );
}

export default ArticlesSlider;