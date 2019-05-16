import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
