import React, { useRef, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ReactComponent as MKBUBBLEVECTOR } from '../../assets/mk_bubblevector.svg';
import { ReactComponent as MKNBVECTOR } from '../../assets/mk_nbvector.svg';
import { ReactComponent as MKPHVECTOR } from '../../assets/mk_phvector.svg';
import { FaChevronDown } from 'react-icons/fa';
import './index.css';

export default function Home(){

    const [headerOp, setHeaderOp] = useState('00')
    const mainSect = useRef(); 

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
                    <button className="firstContactButton" onClick={() => window.scroll({top:mainSect.current.getBoundingClientRect().top+window.scrollY-70, behavior:'smooth'})} >Veja como <FaChevronDown/></button>
                </section>
                <section className="mainSection" ref={mainSect}>
                    <h2 className="mainSectionTitle">Seja qual for o objetivo</h2>
                    <h3 className="mainSectionSubitle">Um site vai te dar o impulso que você precisa para ir ainda mais longe. 🚀</h3>
                    <div className="mainSectionContent">
                        <div className="mainSectionParagraph">
                            <p className="mainSectionParagraph">Para vender mais, conquistar mais seguidores, ou obter clientes a porta de entrada do negócio precisa ser: acessível, informativa, bonita e o mais importante de tudo... digital!</p>
                            <p className="mainSectionParagraph">Todo mundo gosta de praticidade e agilidade, e nós proporcionamos isso.</p>
                        </div>
                        <MKBUBBLEVECTOR className="mainSectionVectorDt1"/>
                        <MKNBVECTOR className="mainSectionVector"></MKNBVECTOR>
                    </div>
                </section>
                <section className="mainSection">
                    <h2 className="mainSectionTitle">Percebeu alguma diferença?</h2>
                    <h3 className="mainSectionSubitle">Nossas páginas são mais rápidas e otimizadas. 🏃‍♂️</h3>
                    <div className="mainSectionContent">
                        <div className="mainSectionParagraph">
                            <p className="mainSectionParagraph">Uma página rápida significa maior interesse dos visitantes, que não perdem tempo ao navegar pelo seu site. Tudo direto ao ponto, sem travamentos, páginas congeladas e carregamentos demorados.</p>
                            <p className="mainSectionParagraph">Já uma página otimizada representa uma página limpa com tudo o que o cliente precisa ao alcance dos olhos.</p>
                        </div>
                        <MKPHVECTOR className="mainSectionVector"/>
                    </div>
                </section>
            </article>
        </main>
        <Footer/>
        </>
    );
}