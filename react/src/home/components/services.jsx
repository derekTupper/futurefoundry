import React, { Component } from 'react';


export default class Services extends Component  {
  render() {

    var laptop = require('../../assets/img/home/webdevServices.png');
    var product = require('../../assets/img/home/productdevServices.png');
    var mobile = require('../../assets/img/home/mobiledevServices.png');
    var hosting = require('../../assets/img/home/hostingServices.png');

    return(
      <div className='service_tiles'>
        <WebServices firstWord='Web' secondWord='Development' img={laptop}/>
        <WebServices firstWord='Product' secondWord='Consulting' img={product}/>
        <Button />
        <WebServices firstWord='Mobile' secondWord='Development' img={mobile}/>
        <WebServices firstWord='Hosting' secondWord='Management' img={hosting}/>
      </div>
    );
  }
}

const WebServices = (props) => {
  return(
    <div className="services_tile highlight">
      <div>
        <img id="image" src={props.img}/>
      </div>
      <div>
        <p id="text">{props.firstWord} <br/> {props.secondWord}</p>
      </div>
    </div>
  );
}

class Button extends Component {
  render() {
    return(
      <div className="services_tile">
        <button id="servicesArrow" ><img src="src/assets/img/home/arrowButton.png"/></button>
      </div>
    )
  }
}
