import React, { Component } from 'react';

import ImgAssetPath from '../homeContainer';
import MediaAssetPath from '../homeContainer';


export default class Services extends Component  {
  constructor() {
    super();
    this.state = {id: 'inactive'};
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  mouseOver() {
      this.setState({id: 'active'});
  }

  mouseOut() {
    this.setState({id: 'inactive'});
  }

  render() {
    return(
      <div className='services'>
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
          <img id='services_img' src="src/assets/img/home/webdevServices.png"/>
          <p id='services_text'>Web <br/> Development</p>
        </div>
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
          <img id='services_img' src="src/assets/img/home/webdevServices.png"/>
          <p id='services_text'>Web <br/> Development</p>
        </div>

        <div className="services_tile">
          <button>Button</button>
        </div>
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
          <img id='services_img' src="src/assets/img/home/webdevServices.png"/>
          <p id='services_text'>Web <br/> Development</p>
        </div>
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
          <img id='services_img' src="src/assets/img/home/webdevServices.png"/>
          <p id='services_text'>Web <br/> Development</p>
        </div>

      </div>
    );
  }
}
