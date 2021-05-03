import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Servicos from './views/Servicos';
import Orcamento from './views/Orcamento';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/orcamento' component={Orcamento} />
            <Route path='/servicos' component={Servicos} />

        </Switch>
        </BrowserRouter>
    );
}