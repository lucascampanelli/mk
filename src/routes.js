import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Home} />
            <Route path='/orcamento' component={Home} />
            <Route path='/servicos' component={Home} />

        </Switch>
        </BrowserRouter>
    );
}