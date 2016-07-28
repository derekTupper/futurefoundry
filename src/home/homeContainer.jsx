import React, { Component } from 'react';


//Import components that compose the homeContainer components
import Splash from './components/splash_text'
import Services from './components/services'


export default class homeContainer extends Component {
  render() {
    return (
      <div className='home'>
        <Splash />
        <Services />
      </div>
    );
  }
}
