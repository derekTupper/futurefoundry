import React, { Component } from 'react';
const Waypoint = require("../../node_modules/waypoints/lib/jquery.waypoints.js");


export default class Counter extends Component {
  constructor(props) {
    super(props);

    const waypoint = new Waypoint({
      element: $('#counter'),
      handler: () => {
        console.log('Hello');
      }
    })
  }

  render(){
    return(
      <div className='counter'>
        <h1>Projects</h1>


      </div>

    )
  }

}
