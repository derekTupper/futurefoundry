import React, { Component } from 'react';


import MainNav from './components/mainNav';
import PageNav from './components/pageNav';


export default class headerContainer extends Component {
  render(){
    return(
      <div className='header'>
        <MainNav />
      </div>

    )
  }

}
