import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Details from './components/details';
import './index.css';

export default function Portfolio(){

    const [isDetailsOpen, setDetailsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState({});
    const [link, setLink] = useState("");
    const [opinion, setOpinion] = useState({});
    const [headerOp, setHeaderOp] = useState('00');

    const titleOnix = "Onix Auto Socorro";
    const descOnix = ["A Onix Auto Socorro presta serviços de guincho e confiou na MK Studio para desenvolver sua presença na web.",
                      "Foram realizados serviços de criação de identidade visual, landing page e redes sociais.",
                      "Com auxílio de estratégias de SEO e Marketing Digital, a Onix Auto Socorro conseguiu alcançar um público maior e está se destacando no mercado."];
    const imagesOnix = {banner: "OnixAutoSocorro.png",
                        img1: "OnixAutoSocorro2.png",
                        img2: "OnixAutoSocorro3.png",
                        img3: "OnixAutoSocorro4.png",
                        img4: "OnixAutoSocorro5.png"};
    const linkOnix = "https://onixautosocorro.herokuapp.com/";
    const opinionOnix = {message: "A melhor coisa que fizemos para alavancar nossas conversões foi contar com a MK Studio. Entregaram uma landing page em menos de uma semana e em poucos dias estávamos recebendo um número muito maior de ligações. Se você tiver oportunidade, conte com a MK Studio!!",
                         author: "Onix Auto Socorro"}

    window.onscroll = () => {
        const scr = document.documentElement.scrollTop;
        if(scr > 40){ setHeaderOp('FF'); }
        else if(scr <= 40){ setHeaderOp('00'); }
    }

    function openDetails(name){
        switch (name) {
            case "Onix":
                setTitle(titleOnix);
                setDescription(descOnix);
                setImages(imagesOnix);
                setLink(linkOnix);
                setOpinion(opinionOnix);
                setDetailsOpen(true);
                break;
        
            default:
                break;
        }
    }

    return(
        <>
        <Header selected="portfolio" bgOpacity={headerOp}/>
        <main>
            <article>
                <section className="firstContact">
                    <h1 className="firstContactTitle">Portfólio</h1>
                    <h2 className="firstContactSubtitle">Confira aqui os projetos que desenvolvemos para clientes que hoje fazem sucesso na web.</h2>
                </section>
                <section className="content">
                    {
                    isDetailsOpen ?
                        <Details title={title} description={description} images={images} link={link} opinion={opinion} closeDetails={setDetailsOpen}/> :
                        <div className="projects">
                            <div className="contentItem" onClick={() => openDetails("Onix")}>
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Onix Auto Socorro</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>
                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">T-Shirt Joy</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>
                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Talves Livros</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>

                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Onix Auto Socorro</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>
                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">T-Shirt Joy</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>
                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Talves Livros</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>

                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Onix Auto Socorro</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>
                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">T-Shirt Joy</h3>
                                <span className="serviceType">Criação de site</span>
                            </div>
                            <div className="contentItem">
                                <img className="miniatureItem" src="OnixAutoSocorro.png" alt="Serviço de criação de site da MK Studio" />
                                <h3 className="itemTitle">Talves Livros</h3>
                                <span className="serviceType">Criação de site</span>
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