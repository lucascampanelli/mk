import React from 'react';
import './index.css';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import { useHistory } from 'react-router';

export default function Details(props){

    const title = props.title;
    const description = props.description;
    const images = props.images;
    const opinion = props.opinion;
    const link = props.link;
    const setDetailsOpen = props.closeDetails;
    const history = useHistory();

    return(
        <>
            <section className="detailContent">
                <a className="closeBtn" onClick={() => setDetailsOpen(false)}> <FiArrowLeft/> Voltar</a>
                <div className="presentation">
                    <div className="detailPresentation">
                        <div className="presentationLeft">
                            <img className="banner" src={images.banner}/>
                        </div>
                        <div className="presentationRight">
                            <h2 className="projectName">{title}</h2>
                            {description.map(paragrafo => (
                                <p className="projectDescription">{paragrafo}</p>
                            ))}
                            <a className="linkProject" href={link} target="_blank">Visitar site <FiArrowRight/> </a>
                        </div>
                    </div>
                    <div className="imageList">
                        <img className="imagePresentation" src={images.img1}/>
                        <img className="imagePresentation" src={images.img2}/>
                        <img className="imagePresentation" src={images.img3}/>
                        <img className="imagePresentation" src={images.img4}/>
                    </div>
                </div>
            </section>
            <section className="detailOpinion">
                <div className="titleDiv"><h2 className="titleOpinion">O que o cliente achou</h2></div>
                <div className="opinionContent">
                    <p className="opinionMessage">" {opinion.message} "</p>
                    <span className="messageAuthor">- {opinion.author}</span>
                </div>
            </section>
            <section className="detailOffer">
                <h2 className="textOffer">Você também quer contar com a MK Studio?</h2>
                <button className="btnOffer" onClick={() => history.push('/orcamento')}>QUERO UM ORÇAMENTO!</button>
            </section>
        </>
    );
}