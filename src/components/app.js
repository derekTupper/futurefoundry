import React from 'react';
import {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../scss/style.scss';

import Header from './header';
import Splash from './splash';
import Tech from './technology';
import Counter from './counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
        <Counter />
        <Tech />
      </div>
    );
  }
}
