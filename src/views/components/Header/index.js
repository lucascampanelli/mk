import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';

export default function Header(props){

    const history = useHistory();

    const phoneMenu = useRef();
    const phoneMenuBackdrop = useRef();
    const phoneMenuPanel = useRef();

    const [isMenuOpen, setMenuOpen] = useState(false);

    const selected = props.selected;
    const bgOpacity = props.bgOpacity;

    let tStart;
    let tEnd;

    window.addEventListener('touchstart', (e) => {
        tStart = e.touches[0].screenX;
    })
    
    window.addEventListener('touchend', (e) => {
        let difference;
        let scrHalf = window.screen.width/2;
        tEnd = e.changedTouches[0].screenX;
        difference = tStart-tEnd;
        if(difference > 60 && !isMenuOpen && tStart >= scrHalf){
            showPhoneMenu();
        }
    })

    function showPhoneMenu(){
        if(isMenuOpen){

            let menuPosition = 0;
            let opacity = 1;

            const interval = setInterval(() => {
                if(menuPosition > -100){
                    phoneMenuPanel.current.style.right = menuPosition + 'vw';
                    if(opacity > 0){
                        phoneMenuBackdrop.current.style.opacity = opacity;
                    }
                
                    menuPosition -= 4;
                    opacity -= 0.1;
                }
                else{
                    phoneMenu.current.style.display = 'none';
                    clearInterval(interval);
                    setMenuOpen(false);
                }
            }, 10);
        }
        else {
            let menuPosition = -100;
            let opacity = 0;

            phoneMenuPanel.current.style.right = menuPosition + 'vw';
            phoneMenuBackdrop.current.style.opacity = opacity;
            
            phoneMenu.current.style.display = 'flex';
            const interval = setInterval(() => {
                if(menuPosition < 1){
                    phoneMenuPanel.current.style.right = menuPosition + 'vw';
                    if(opacity < 1){
                        phoneMenuBackdrop.current.style.opacity = opacity;
                    }
                
                    menuPosition += 4;
                    opacity += 0.1;
                }
                else{
                    clearInterval(interval);
                    setMenuOpen(true);
                }
            }, 10);
        }
    }

    return(
        <header style={{backgroundColor: '#ffffff'+bgOpacity}} >
            <img src='mk_logo1.svg' alt='Logo da MK Studio.' className='logoHeader'/>
            <nav className='navigation'>
                <ul className='menuList'>
                    {(selected === 'home') ? <li className='menuOptionSelected' onClick={() => history.push('/')}>Início</li> : <li className='menuOption' onClick={() => history.push('/')}>Início</li>}
                    {(selected === 'portfolio') ? <li className='menuOptionSelected' onClick={() => history.push('/portfolio')}>Portfólio</li> : <li className='menuOption' onClick={() => history.push('/portfolio')}>Portfólio</li>}
                    {(selected === 'servicos') ? <li className='menuOptionSelected' onClick={() => history.push('/servicos')}>Serviços</li> : <li className='menuOption' onClick={() => history.push('/servicos')}>Serviços</li>}
                    {(selected === 'orcamento') ? <li className='menuOptionSelectedAlt' onClick={() => history.push('/orcamento')}>Orçamento</li> : <li className='menuOptionAlt' onClick={() => history.push('/orcamento')}>Orçamento</li>}
                </ul>
            </nav>
            { isMenuOpen ? <FaTimes className="phoneMenuButton" onClick={() => showPhoneMenu()}/> : <FaBars className="phoneMenuButton" onClick={() => showPhoneMenu()}/>}
            <nav className="phoneMenu" ref={phoneMenu}>
                <div className="phoneMenuBackdrop" onClick={() => showPhoneMenu()} ref={phoneMenuBackdrop}/>
                <ul className="phoneMenuPanel" ref={phoneMenuPanel}>
                    {(selected === 'home') ?        <li className='phoneMenuOptionSelected' onClick={() => history.push('/')}>Início</li> :             <li className='phoneMenuOption' onClick={() => history.push('/')}>Início</li>}
                    {(selected === 'portfolio') ?   <li className='phoneMenuOptionSelected' onClick={() => history.push('/portfolio')}>Portfólio</li> : <li className='phoneMenuOption' onClick={() => history.push('/portfolio')}>Portfólio</li>}
                    {(selected === 'servicos') ?    <li className='phoneMenuOptionSelected' onClick={() => history.push('/servicos')}>Serviços</li> :   <li className='phoneMenuOption' onClick={() => history.push('/servicos')}>Serviços</li>}
                    {(selected === 'orcamento') ?   <li className='phoneMenuOptionSelectedAlt' onClick={() => history.push('/orcamento')}>Orçamento</li> : <li className='phoneMenuOptionAlt' onClick={() => history.push('/orcamento')}>Orçamento</li>}
                </ul>
            </nav>
        </header>
    );

}