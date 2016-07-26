import React, { Component } from 'react';


//Import default asset path for home images and media
export const ImgAssetPath = 'src/assets/img/home';
export const MediaAssetPath = 'src/assets/media/home';


//Import components that compose the homeContainer components
import Splash from './components/splashText'
import Services from './components/services'


export default class homeContainer extends Component {
  render() {
    return (
      <div className='home'>
        <Splash />
        <Services />
      </div>
    );
  }
}
