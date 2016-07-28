import React, { Component } from 'react';


class SplashText extends Component  {

  render() {
    return(
      <div className='splash'>
        <div className='container'>
          <div className='carousel' id='splash_revolve'>
          </div>
          <p id='splash_text'>
          We forge technology solutions that elevate your business<br/>
          to create unparalleled digital experiences <br/> for your customers and employees. <br/>
          Let us FORGE your future!
           </p>
        </div>
      </div>
    );
  }
}

export default SplashText;
