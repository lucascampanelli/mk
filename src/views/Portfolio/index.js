import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.css';

export default function Portfolio(){
    return(
        <>
        <Header selected="portfolio" bgOpacity="00"/>
        <section className="firstContact">
            <h1 className="firstContactTitle">MK Studio</h1>
            <h2 className="firstContactSubtitle">Uma página na web é o que você precisa para ter sucesso.</h2>
        </section>
        <Footer/>
        </>
    );
}