import React, { Component } from 'react';


import HeaderNav from './components/headerNavbar';
import Navbar from './components/navbar';


export default class headerContainer extends Component {
  render(){
    return(
      <div className='header'>
        <HeaderNav/>

      </div>

    )
  }

}
