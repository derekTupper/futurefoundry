import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';




import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './stylesheets/style.scss';

//Import Site features refactored to Pods
import Navs from './navs/navsContainer';
import Home from './home/homeContainer';
import Services from './services/servicesContainer';
import Footer from './footer/footerContainer';

export default class App extends Component {
  render() {
    return (
        <div data-spy="scroll">
          <Navs />
          <Home />
          <Services />
          <Footer />
        </div>
    );
  }
}


ReactDOM.render(
   <App />,
   document.querySelector('.injection')
);
