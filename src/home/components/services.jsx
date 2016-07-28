import React, { Component } from 'react';

import ImgAssetPath from '../homeContainer';
import MediaAssetPath from '../homeContainer';


export default class Services extends Component  {
  render() {
    return(
      <div className='services'>
        <WebServices />
        <ProductConsulting />
        <Button />
        <MobileDevelopment />
        <HostingManagement />
      </div>
    );
  }
}

class WebServices extends Component {
  constructor(props) {
    super(props);
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
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
        <div>
          <img id="image" src="src/assets/img/home/webdevServices.png"/>
        </div>
        <div>
          <p id="text">Web <br/> Development</p>
        </div>
      </div>
    )
  }
}

class ProductConsulting extends Component {
  constructor(props) {
    super(props);
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
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
        <div>
          <img id="image" src="src/assets/img/home/productdevServices.png"/>
        </div>
        <div>
          <p id="text">Product <br/> Consulting</p>
        </div>
      </div>
    )
  }
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

class MobileDevelopment extends Component {
  constructor(props) {
    super(props);
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
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
        <div>
          <img id="image" src="src/assets/img/home/mobiledevServices.png"/>
        </div>
        <div>
          <p id="text"> Mobile <br/> Development</p>
        </div>
      </div>
    )
  }
}

class HostingManagement extends Component {
  constructor(props) {
    super(props);
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
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="services_tile" id={this.state.id}>
        <div>
          <img id="image" src="src/assets/img/home/hostingServices.png"/>
        </div>
        <div>
          <p id="text">Hosting <br/> Management</p>
        </div>
      </div>
    )
  }
}
