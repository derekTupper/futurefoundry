import React, { Component } from 'react';


//Import components that compose the homeContainer components
import Home from './components/home'
import Services from './components/services'



export default class homeContainer extends Component {
  render() {
    return (
      <div id='home' className='home'>
        <Home />
        {/* <Services /> */}
      </div>
    );
  }
}
