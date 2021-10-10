import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Artists from './Artists.js';
import Albums from './Albums.js';
import Footer from './Footer.js';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Landing/>
    <About/>
    <Artists/>
    <Albums/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

