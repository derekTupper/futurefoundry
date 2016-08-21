import React, { Component } from 'react';


export default class ProductConsult extends Component  {
  render() {


    const Panel = (props) => {
      return(
        <div className="panel panel-default">
          <div className="panel-body">
              {props.content}
          </div>
        </div>
      );
    }




    return(
      <div className='productConsulting'>

          <div className='col-lg-4'>
            <Panel content='here is the content'/>
            <Panel content='here is the content'/>
          </div>
          <div className='col-lg-4'>
            <h1 id='productTitle'>Product</h1>
          </div>
          <div className='col-lg-4'>
            <Panel>
                
            </Panel>
          </div>
      </div>
    );
  }
}
