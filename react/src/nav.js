import React, { Component, ExecutionEnvironment }  from 'react';

const classNames = require('classnames');

import foundryLogoLg from './assets/img/foundrylogo_lg.png';
import foundryCogLg from './assets/img/foundrycogs_lg.png';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      location: '1'
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.navigateToSection = this.navigateToSection.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    if( document.body.scrollTop > 20 ) {
      this.setState({class: 'main'});
    } else {
      this.setState({scroll: 'main is-transparent'});
    }
  }

  navigateToSection(event) {
    event.preventDefault();

    const href = event.target.href;
    const elementID = href.substr(href.indexOf('#'));
    const navHeight = $('nav').height();
    const element = $(elementID);

    this.setState({
      location: event.target.parentNode.id
    });

    $('html, body').animate({
        scrollTop: (element.offset().top - navHeight)
      }, 800, function(){
    });
  }

  render() {

    const navClass = classNames ({
      'main': true,
      "main is-transparent": this.state.handleScroll
    });

    return(
      <div id='header' className='header'>
        <nav onScroll={this.handleScroll} id='nav' className={navClass} role='primary'>
          <div className='content'>
            <div className='menu-foundry'>
              <a href='#/home'><img src={foundryCogLg} /></a>
            </div>
            <div className='menu-wrapper'>
              <ul className='menu'>
                <li className='menu-item'>
                  <a href='#/work'>Work</a>
                </li>
                <li className='menu-item'>
                  <a href='#/work'>About</a>
                </li>
                <li className='menu-item'>
                  <a href='#/work'>Blog</a>
                </li>
                <li className='menu-item'>
                  <a href='#/work'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}



{/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
</button> */}
{/* <div className="collapse navbar-collapse" id="myNavbar">
<ul className="nav navbar-nav navbar-right">
  <li id={this.state.location == '1' ? 'active' : ''} id="1"><a href="#home" onClick={this.navigateToSection}>Home</a></li>
  <li id={this.state.location == '2' ? 'active' : ''} id="2"><a href="#services" onClick={this.navigateToSection}>Services</a></li>
  <li className={this.state.location == '3' ? 'active' : ''} id="3"><a href='mailto:contact@futurefoundry.co'>Contact Us</a></li>
</ul>
</div> */}
