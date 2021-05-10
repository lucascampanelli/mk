import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.css';

export default function Servicos(){

    const [headerOp, setHeaderOp] = useState("00");

    window.onscroll = () => {
        const scr = document.documentElement.scrollTop;
        if(scr > 40){ setHeaderOp('FF'); }
        else if(scr <= 40){ setHeaderOp('00'); }
    }

    return(
        <>
        <Header selected="portfolio" bgOpacity={headerOp}/>
        <section className="firstContact">
            <h1 className="firstContactTitle">MK Studio</h1>
            <h2 className="firstContactSubtitle">Uma página na web é o que você precisa para ter sucesso.</h2>
        </section>
        <Footer/>
        </>
    );
}