import React, { Component } from 'react';

export default class SplashText extends Component  {
  render() {

    // var laptop = require('../../assets/img/home/webdevServices.png');
    // var product = require('../../assets/img/home/productdevServices.png');
    // var mobile = require('../../assets/img/home/mobiledevServices.png');
    var hosting = require('../../assets/img/home/hostingServices.png');



    return(
      <section className='rwpWrapper'>
        <div className='rwpContent'>
          <div className='rwpImgs rw-item-1'>
            <img src={hosting}/>

          </div>
          <h1 className='rwpSentence'>
          <span>We Build</span>
          <div className='rwpWords rw-item-2'>
            <span>Web Development</span>
            <span>Web Development</span>
            <span>Web Development</span>
            <span>Web Development</span>
          </div>
          <span>.</span>
          </h1>

        </div>
      </section>
    );
  }
}
