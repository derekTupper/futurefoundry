import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


export default class WebDev extends Component  {
  render() {

    const LangTiles = (props) => {
      return(
        
        <Paper
          zDepth={3}

        />
      );
    }


    return(
      <div className='web_development'>
      <LangTiles>Hello</LangTiles>

      </div>
    );
  }
}
