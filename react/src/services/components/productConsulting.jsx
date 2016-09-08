import React, { Component } from 'react';


export default class ProductConsult extends Component  {
  render() {


    const ProductTiles = (props) => {
      return(
        <div id='development' className="row">
            <div className="thumbnail">
              <img src={props.img} />
              <div className="caption">
                <h3>{props.label}</h3>
              </div>
          </div>
        </div>
      );
    }




    return(
      <div className='productConsulting'>
        <div className='col-lg-4 col-lg-offset-4' id='product'>
          <h1>Product Development</h1>
          <p>
            All great ideas need to be nurtured.
            Early collaboration, feature planning,
            and research help transform napkin sketches into powerful ideas.
            We know its hard to create, so we offer ourselves as a resource for
            ideas and execution plannning
          </p>
        </div>
      </div>
    );
  }
}
