import React, { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Details from './components/details';
import portifolio from './portifolio.json';
import './index.css';

export default function Portfolio(){

    const [isDetailsOpen, setDetailsOpen] = useState(false);

    const [headerOp, setHeaderOp] = useState('00');

    const mainSect = useRef();

    const [port, setPortifolio] = useState([]);

    window.onscroll = () => {
        const scr = document.documentElement.scrollTop;
        if(scr > 40){ setHeaderOp('FF'); }
        else if(scr <= 40){ setHeaderOp('00'); }
    }

    function openDetails(name){

        for(let i = 0; i <= portifolio.length;i++){
            if(name === portifolio[i].key){
                setPortifolio(portifolio[i])
                setDetailsOpen(true);
                break;
            }
        }
    }

    return(
        <>
        <Header selected="portfolio" bgOpacity={headerOp}/>
        <main>
            <article>
                <section className="firstContact">
                    <h1 className="firstContactTitle">Portfólio</h1>
                    <h2 className="firstContactSubtitle">Projetos que desenvolvemos para clientes que hoje fazem sucesso na web.</h2>
                    <button className="firstContactButton" onClick={() => window.scroll({top:mainSect.current.getBoundingClientRect().top+window.scrollY-70, behavior:'smooth'})} >Ver projetos <FaChevronDown/></button>
                </section>
                <section className="content" ref={mainSect}>
                    {
                    isDetailsOpen ?
                        <Details port ={port} closeDetails={setDetailsOpen}/> :
                        <div className="projects">

                            <div className="contentItem" onClick={() => openDetails("Onix")}>
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Onix Auto Socorro</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>

                            <div className="contentItem" onClick={() => openDetails("Onix Logo")}>
                                <img className="miniatureItem" src="onixlogo.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Onix Auto Socorro</h3>
                                <span className="serviceType">Criação de logo</span>
                            </div>
                        </div>
                    }
                </section>
            </article>
        </main>
        <Footer/>
        </>
    );
}