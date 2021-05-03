import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.css';

export default function Home(){
    return(
        <>
        <Header/>
        <section className="firstContact">
            <h1>MK Studio</h1>
            <h2>Uma página na web é o que você precisa para ter sucesso!</h2>
        </section>
        <Footer/>
        </>
    );
}