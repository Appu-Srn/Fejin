import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Friends from './components/Friends'
import Error from './components/Error'
import './App.css';

function App() {
  return (
           <BrowserRouter>

      <div className="App mt-5 container-fluid">
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/footer' component={Footer} />
    <Route path='/photos' component={Friends} />
    <Route  component={Error} />
    </Switch>
    <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
