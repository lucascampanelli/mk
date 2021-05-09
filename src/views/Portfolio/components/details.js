import React from 'react';
import './index.css';

export default function Details(props){

    const title = props.title;
    const description = props.description;
    const images = props.images;

    return(
        <>
            <section className="detailContent">
                <div className="presentation">
                    <img className="banner" src={images.banner}/>
                    <h2 className="itemTitle">{title}</h2>
                    <p>{description}</p>
                </div>
            </section>
        </>
    );
}