import React, { Component } from 'react';


import Navbar from './components/navbar';

export default class headerContainer extends Component {
  render(){
    return(
      <div className='header'>
        <Navbar/>
      </div>

    )
  }

}
