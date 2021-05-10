import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ReactComponent as MKNBVECTOR } from '../../assets/mk_nbvector.svg';
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
        <Header selected="servicos" bgOpacity={headerOp}/>
        <main>
            <article>
                <section className="firstContact">
                    <h1 className="firstContactTitle">Serviços</h1>
                    <h2 className="firstContactSubtitle">Tudo o que fazemos de melhor: desenvolvimento tecnológico e gerar resultados.</h2>
                </section>
                <section className="servicesContent">
                    <div className="titleDiv"><h2 className="titleContent">O que nós fazemos?</h2></div>
                    <div className="serviceList">
                        <div className="contentLeft">
                            <h3 className="servicesItem">Criação de sites</h3>
                            <p className="servicesDescription">Nós desenvolvemos sites, landing pages, lojas virtuais e blogs, tudo responsivo e com as tecnologias mais atuais.</p>
                            <p className="servicesDescription">Seja qual for a necessidade do seu negócio, nós podemos solucioná-las com um site.</p>
                        </div>
                        <div className="contentRight">
                            <MKNBVECTOR className="contentIllustration"/>
                        </div>

                        <div className="contentLeft">
                            <h3 className="servicesItem">Identidade visual</h3>
                            <p className="servicesDescription">Uma identidade visual de qualidade é uma das chaves para a prosperidade do seu negócio.</p>
                            <p className="servicesDescription">Nós fazemos criação de logos e designs que destacam o seu projeto.</p>
                        </div>
                        <div className="contentRight">
                            <MKNBVECTOR className="contentIllustration"/>
                        </div>
                    </div>
                </section>
            </article>
        </main>
        <Footer/>
        </>
    );
}