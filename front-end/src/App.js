import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Context from './context/Context';
import Login from './components/Login'; 


function App() {




    return (

        <div>
              <Context>
            <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                    <Footer />
            </BrowserRouter>
            </Context>

        </div>

    )
}

export default App
