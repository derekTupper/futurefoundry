import React, { Component } from 'react';


//Import components that compose the homeContainer components
import WebDev from './components/webDevelopment'
import MobileDev from './components/mobile_development'
import ProductConsult from './components/productConsulting'
import HostingManage from './components/hosting_management'


export default class servicesContainer extends Component {
  render() {
    return (
      <div className='services'>
        <WebDev />
        <ProductConsult />
        <MobileDev />
        <HostingManage />
      </div>
    );
  }
}
