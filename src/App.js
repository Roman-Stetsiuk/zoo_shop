import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Product } from './pages/Product';
import { Browse } from './pages/Browse';
import { NavBar } from './components/NavBar';
import { Routes } from './Constants';
import { Login } from './pages/Login';
import { LoginContextProvider } from './Contexts/LoginContext';

const App = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <NavBar>
                    <Switch>
                        <Route exact path={Routes.browse} component={Browse} />
                        <Route exact path={`${Routes.product}/:id`} component={Product} />
                        <Route exact path={Routes.login} component={Login} />
                    </Switch>
                </NavBar>
            </LoginContextProvider>
        </BrowserRouter>
    );
};

export default App;
