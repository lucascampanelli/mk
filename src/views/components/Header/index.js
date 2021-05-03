import React from 'react';

export default function Header(){
    return(
        <header>
            <img src='mk_logo1.svg' alt='Logo da MK Studio.' className='logoHeader'/>
            <nav class='navigation'>
                <ul className='menuList'>
                    <li className='menuOption'>Início</li>
                    <li className='menuOption'>Portfólio</li>
                    <li className='menuOption'>Serviços</li>
                    <li className='menuOption'>Orçamentos</li>
                </ul>
            </nav>
        </header>
    );
}