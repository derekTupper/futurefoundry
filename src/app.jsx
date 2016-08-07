import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './stylesheets/style.scss';

//Import Site features refactored to Pods
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/headerContainer';
import Home from './home/homeContainer';
import Services from './services/servicesContainer';
import Counter from './counter/counterContainer';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Home />
          <Counter />
          <Services />
        </div>
      </MuiThemeProvider>
    );
  }
}


ReactDOM.render(
   <App />,
   document.querySelector('.injection')
);
