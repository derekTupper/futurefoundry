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


export default class App extends Component {
  render() {
    return (
        <div>
          <Navs />
          <Home />
          <Services />
        </div>
    );
  }
}


ReactDOM.render(
   <App />,
   document.querySelector('.injection')
);
