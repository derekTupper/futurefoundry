import React, { Component } from 'react';


class SplashText extends Component  {

  render() {
    return(
      <div className='splash-container'>
        <div className='col-lg-6' id='splash-text'>
          <p id='splash-title'>Forge your Future</p>
          <p id='splash-content'>
          We forge technology solutions that elevate your business
          to create unparalleled digital experiences for your customers and employees.
          </p>
        </div>
        <div className='col-lg-6' id='splash-form'>
          <h1>Drop us a Line!</h1>
          <input className='foundry-input' id='contact-input' placeholder='Name'></input>
        </div>

      </div>
    );
  }
}

export default SplashText;
