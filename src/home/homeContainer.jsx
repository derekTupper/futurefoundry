import React, { Component } from 'react';


//Import components that compose the homeContainer components
import Contact from './components/contact'
import Services from './components/services'


export default class homeContainer extends Component {
  render() {
    return (
      <div className='home'>
        <Contact />
        <Services />
      </div>
    );
  }
}
