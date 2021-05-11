import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.css';

export default function Orcamento(){

    const [headerOp, setHeaderOp] = useState("00");

    window.onscroll = () => {
        const scr = document.documentElement.scrollTop;
        if(scr > 40){ setHeaderOp('FF'); }
        else if(scr <= 40){ setHeaderOp('00'); }
    }

    return(
        <>
        <Header selected="orcamento" bgOpacity={headerOp}/>
        <main>
            <article>
                <section className="firstContact">
                    <h1 className="firstContactTitle">Orçamento</h1>
                    <h2 className="firstContactSubtitle">Deixa que a gente te ajuda! Faça um orçamento para sua página.</h2>
                </section>
                <section className="contact">
                    <h2 className="titleBlack">Fale um pouco sobre o seu negócio</h2>
                    <div className='contactContent'>
                        <div className="leftContact">
                            <p className="contactDesc">Para que possamos realizar um serviço de excelência, cumprindo todos os requisitos do seu negócio, é necessário que você fale detalhadamente sobre a sua necessidade.</p>
                            <p className="contactDesc">Assim que recebermos o seu pedido de orçamento, analisaremos o caso e prontamente responderemos por e-mail ou telefone, como você preferir :)</p>
                            <p className="contactDesc">Fique tranquilo, o orçamento é sem compromisso e sem custo algum!</p>
                        </div>
                        <div className="rightContact">
                            <div className="formArea">
                                <h3>Conte-nos sobre o que precisa</h3>
                                <p className="h3Desc">A MK Studio possui experiência para te ajudar no que precisar! Conte detalhadamente sobre sua necessidade.</p>
                                <form>
                                    <div className="inputGrid">
                                        <input type="text" name="name" className="defaultInputGrid" placeholder="Nome" />
                                        <input type="text" name="name" className="defaultInputGrid" placeholder="Sobrenome"/>
                                        <input type="email" name="name" className="defaultInputGrid" placeholder="E-mail" />
                                        <input type="tel" name="name" className="defaultInputGrid" placeholder="Telefone" />
                                        <input type="text" name="name" className="defaultInputGrid" placeholder="Empresa" />
                                    </div>
                                    
                                    <div className="messageDiv">
                                        <label id="labelWhatsapp">Gostaria que entrássemos em contato por Whatsapp?</label>
                                        <div className="radioGroup">
                                            <input type="radio" name="whatsapp" id="nao" value="nao" />
                                            <label for="nao">Não</label>
                                            <input type="radio" name="whatsapp" id="sim" value="sim" checked/>
                                            <label for="sim">Sim</label>
                                        </div>
                                        <textarea name="name" className="defaultInput" placeholder="Fale sobre sua necessidade"/>

                                        <button className="btnEnviar">ENVIAR</button>
                                    </div>
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