import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Product} from './pages/Product';
import {Browse} from './pages/Browse';
import {NavBar} from './components/Hub';
import {Routes} from './Constants';
import {Login} from './pages/Login';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar>
                <Switch>
                    <Route exact path={Routes.browse} component={Browse}/>
                    <Route exact path= {`${Routes.product}/:id`} component={Product}/>
                    <Route exact path={Routes.login} component={Login}/>
                </Switch>
            </NavBar>
        </BrowserRouter>
    );
};

export default App;
