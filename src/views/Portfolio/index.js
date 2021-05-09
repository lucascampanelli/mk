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

    const titleOnix = "Onix Auto Socorro";
    const descOnix = "A Onix Auto Socorro atua no ramo de serviços de guincho e confiou na MK Studio para desenvolver sua presença na Web. Foram realizados";
    const imagesOnix = {banner: "OnixAutoSocorro.png"};

    function openDetails(name){
        switch (name) {
            case "Onix":
                setTitle(titleOnix);
                setDescription(descOnix);
                setImages(imagesOnix);
                setDetailsOpen(true);
                break;
        
            default:
                break;
        }
    }

    return(
        <>
        <Header selected="portfolio" bgOpacity="00"/>
        <main>
            <article>
                <section className="firstContact">
                    <h1 className="firstContactTitle">Portfólio</h1>
                    <h2 className="firstContactSubtitle">Confira aqui os projetos que desenvolvemos para clientes que hoje fazem sucesso na web.</h2>
                </section>
                <section className="content">
                    {
                    isDetailsOpen ?
                        <Details title={title} description={description} images={images}/> :
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