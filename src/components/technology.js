import React, { Component } from 'react';

class Content extends Component  {



  render() {

    const nodejs = require('../assets/img/nodejs.png');
    const rails = require('../assets/img/rails.png');
    const reactjs = require('../assets/img/reactjs.png');
    //const angular = require('../assets/img/angular.png');
    const mongodb = require('../assets/img/mongodb.png');


    const picsArray = [nodejs, rails, reactjs, mongodb];
    const pics = picsArray.map((pic, index) => {
      return (
        <div className="col-md-6 text-center" key={index}>
          <img src={pic} />
        </div>
      );
    });

    return(
        <div className='technology'>
          <div className='container-fluid'>
            <div className='col-md-4'>
                <h1>Technologies We Love</h1>
            </div>
            <div className='col-md-8'>
              <div className='imgflex'>
                  {pics}
              </div>
            </div>
          </div>
        </div>
    );
  }
}



export default Content;
