import React, { Component } from 'react';


export default class Home extends Component  {

  clickScroll(event) {
    event.preventDefault();

    const href = event.target.href;
    const elementID = href.substr(href.indexOf('#'));
    const navHeight = $('.inside-nav').height();
    console.log($(elementID).offset().top);
    console.log($(elementID).offset().top - navHeight);

    $('html, body').animate({
        scrollTop: ($(elementID).offset().top - navHeight)
      }, 800, function(){
    });
  }

  render() {
    var webDesktop = require('../assets/img/home/rotateImg/rWebD.png');
    var webTablet = require('../assets/img/home/rotateImg/rWebT.png');
    var webMobile = require('../assets/img/home/rotateImg/rWebM.png');
    var iphoneDesktop = require('../assets/img/home/rotateImg/rIphoneD.png');
    var imacDesktop = require('../assets/img/home/rotateImg/riMacD.png');
    var ipadDesktop = require('../assets/img/home/rotateImg/riPadD.png');

    return (
      <div className='home'>
        <div className=' col-lg-12'>
          <div className='scentWrapper col-xs-12 col-sm-12 col-sm-offset-1 col-md-6 col-lg-5 col-lg-offset-1 '>
            <h1>Hello,</h1>
            <p>We are Future Foundry a dev shop that specializes in providing technology solutions that elevate the experiences of
             your companies customers and employees</p>
            <button className='btn  btn-lg'>Contact Us</button>
          </div>
          <div className='rwpWrapper col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0 col-lg-6'>
            <div className='rwpImgs'>
                <span className='show-d hide-t hide-m'><img src={webDesktop}/></span>
                <span><img src={iphoneDesktop}/></span>
                <span><img src={imacDesktop}/></span>
                <span><img src={ipadDesktop}/></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
