import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './stylesheets/style.scss';

//Import Site features refactored to Pods
import Home from './home/homeContainer'

//Import un-refactored components to app
import Header from './components/header';
import Tech from './components/technology';
import Counter from './components/counter';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Counter />
        <Tech />
      </div>
    );
  }
}


ReactDOM.render(
   <App />,document.querySelector('.injection')
);
