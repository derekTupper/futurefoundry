import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';




import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './stylesheets/style.scss';

//Import Site features refactored to Pods
import Nav from './nav';
import Home from './components/home';
import Dev from './components/development';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
        <div data-spy="scroll">
          <Nav />
          <Home />
          <Dev />
          <Footer />
        </div>
    );
  }
}


ReactDOM.render(
   <App />,
   document.querySelector('.injection')
);
