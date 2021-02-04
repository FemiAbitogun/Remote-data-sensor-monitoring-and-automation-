import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';




import React from 'react'
import Login from './components/Login';
import Home from './components/Home.js'
import Navbar from './components/Navbar';

function App() {
    return (

        <div>
            <BrowserRouter>
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
                <footer>&copy;  <h3>2021  femi abitogun</h3> </footer>
            </BrowserRouter>
        </div>

    )
}

export default App
