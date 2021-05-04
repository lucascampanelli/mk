import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.css';

export default function Home(){

    const [headerOp, setHeaderOp] = useState('00')

    window.onscroll = () => {
        const scr = document.documentElement.scrollTop;
        if(scr > 40){ setHeaderOp('FF'); }
        else if(scr <= 40){ setHeaderOp('00'); }
    }

    return(
        <>
        <Header selected="home" bgOpacity={headerOp} />
        <main>
            <article>
                <section className="firstContact">
                    <h1 className="firstContactTitle">MK Studio</h1>
                    <h2 className="firstContactSubtitle">Nós construímos páginas para levar você ao seu sucesso!</h2>
                    <button className="firstContactButton">Veja como</button>
                </section>
                <section className="mainSection">
                    <h2 className="mainSectionTitle">Seja qual for o objetivo</h2>
                    <h3 className="mainSectionSubitle">Um site vai te dar o impulso que você precisa para ir ainda mais longe. 🚀</h3>
                    <p className="mainSectionParagraph">Para vender mais, conquistar mais seguidores, ou obter clientes a porta de entrada do negócio precisa ser: acessível, informativa, bonita e o mais importante de tudo... digital!</p>
                    <p className="mainSectionParagraph">Todo mundo gosta de praticidade e agilidade, e nós proporcionamos isso.</p>
                </section>
                <section className="mainSection">
                    <h2 className="mainSectionTitle">Percebeu alguma diferença?</h2>
                    <h3 className="mainSectionSubitle">Nossas páginas são mais rápidas e otimizadas. 🏃‍♂️</h3>
                    <p className="mainSectionParagraph">Uma página rápida significa maior interesse dos visitantes, que não perdem tempo ao navegar pelo seu site. Tudo direto ao ponto, sem travamentos, páginas congeladas e carregamentos demorados.</p>
                    <p className="mainSectionParagraph">Já uma página otimizada representa uma página limpa com tudo o que o cliente precisa ao alcance dos olhos.</p>
                </section>
            </article>
        </main>
        <Footer/>
        </>
    );
}