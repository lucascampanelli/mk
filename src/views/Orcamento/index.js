import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.css';

export default function Orcamento(){
    return(
        <>
        <Header selected="orcamento" bgOpacity="00"/>
        <main>
            <article>
                <section className="firstContact">
                    <h1 className="firstContactTitle">Orçamento</h1>
                    <h2 className="firstContactSubtitle">Entre em contato conosco</h2>
                    <div className="apresentationDiv">
                        <p className="apresentationDesc">Você está no lugar certo! A MK Studio tem experiência e utiliza as tecnologias mais modernas para divulgar o seu negócio</p>
                    </div>
                </section>
                <section className="contact">
                    <h2 className="titleBlack">Fale um pouco sobre o seu negócio</h2>
                    <div className='contactContent'>
                        <div className="leftContact">
                            <p></p>
                        </div>
                        <div className="rightContact">
                            <div className="formArea">
                                <form>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
        
        <Footer/>
        </>
    );
}