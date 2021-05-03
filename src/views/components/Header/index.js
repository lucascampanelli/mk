import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Header(props){

    const history = useHistory();

    const selected = props.selected;

    return(
        <header>
            <img src='mk_logo1.svg' alt='Logo da MK Studio.' className='logoHeader'/>
            <nav class='navigation'>
                <ul className='menuList'>
                    {(selected === 'home') ? <li className='menuOptionSelected' onClick={() => history.push('/')}>Início</li> : <li className='menuOption' onClick={() => history.push('/')}>Início</li>}
                    {(selected === 'portfolio') ? <li className='menuOptionSelected' onClick={() => history.push('/portfolio')}>Portfólio</li> : <li className='menuOption' onClick={() => history.push('/portfolio')}>Portfólio</li>}
                    {(selected === 'servicos') ? <li className='menuOptionSelected' onClick={() => history.push('/servicos')}>Serviços</li> : <li className='menuOption' onClick={() => history.push('/servicos')}>Serviços</li>}
                    {(selected === 'orcamento') ? <li className='menuOptionSelected' onClick={() => history.push('/orcamento')}>Orçamento</li> : <li className='menuOption' onClick={() => history.push('/orcamento')}>Orçamento</li>}
                </ul>
            </nav>
        </header>
    );

}