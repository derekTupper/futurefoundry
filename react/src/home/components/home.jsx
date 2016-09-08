import React, { Component } from 'react';



import ContactDialog from './contactDialog';
import SplashText from './splashText'

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
    return(
      <div>
            <SplashText />
            {/* <ContactDialog /> */}
            <div><a onClick={this.clickScroll} href="#services">Learn More</a></div>
      </div>
    );
  }
}
