import React, {Component} from 'react';

export default class SplashText extends Component {
    render() {
        var webDesktop = require('../../assets/img/home/rotateImg/rWebD.png');
        var webTablet = require('../../assets/img/home/rotateImg/rWebT.png');
        var webMobile = require('../../assets/img/home/rotateImg/rWebM.png');
        var iphoneDesktop = require('../../assets/img/home/rotateImg/rIphoneD.png');
        var imacDesktop = require('../../assets/img/home/rotateImg/riMacD.png');
        var ipadDesktop = require('../../assets/img/home/rotateImg/riPadD.png');

        return (
            <div className='rwpWrapper'>
                <h1 className='rwpSentence'>
                    We forge your future.
                </h1>
                <div className='rwpImgs'>
                    <span className='show-d hide-t hide-m'><img src={webDesktop}/></span>
                    <span><img src={iphoneDesktop}/></span>
                    <span><img src={imacDesktop}/></span>
                    <span><img src={ipadDesktop}/></span>
                </div>
            </div>
        );
    }
}
