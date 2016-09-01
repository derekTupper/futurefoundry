import React, { Component } from 'react';



export default class WebDev extends Component  {
  render() {

    var reactjs = require('../../assets/img/services/technologies/reactjs.png');
    var java = require('../../assets/img/services/technologies/java.png');
    var javascript = require('../../assets/img/services/technologies/js.png');
    var mongodb = require('../../assets/img/services/technologies/mongodb.png');
    var nodejs = require('../../assets/img/services/technologies/nodejs.png');
    var rails = require('../../assets/img/services/technologies/rails.png');
    var angularjs = require('../../assets/img/services/technologies/angularjs.png');
    var sqldb = require('../../assets/img/services/technologies/sqldb.png');


    const LangTiles = (props) => {
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
      <div className='webDevelopment col-lg-offset-1'>
        <div className='col-lg-5' id='webText'>
          <h1 id='webTextMainTitle'>Development</h1>
          <p id='webTextSubTitle'></p>
          <p id='webTextContent'>
            We love bringing your ideas to life, whether it's on the web, desktop, mobile, or all three, using a variety of languages and platforms.
          </p>

          {/* <a href='#'>Learn More</a> */}

        </div>

        <div className='col-lg-5' id='techTiles'>
        <LangTiles img={reactjs} label='React JS'/>
        <LangTiles img={java} label='Java'/>
        <LangTiles img={javascript} label='Javascript'/>
        <LangTiles img={mongodb} label='MongoDB'/>
        <LangTiles img={nodejs} label='Node JS'/>
        <LangTiles img={rails} label='Rails'/>
        <LangTiles img={angularjs} label='Angular JS'/>
        <LangTiles img={sqldb} label='SQL'/>
        </div>
      </div>
    );
  }
}
