import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Context from './context/Context';
import Login from './components/Login';
import Home from './components/Home';


function App() {

    return (

        <div className="main">
            <Context>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </Context>
        </div>

    )
}

export default App
