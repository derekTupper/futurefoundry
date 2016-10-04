import React, { Component, ExecutionEnvironment }  from 'react';

const classNames = require('classnames');

import foundryLogoLg from './assets/img/foundrylogo_lg.png';
import foundryCogLg from './assets/img/foundrycogs_lg.png';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      className: 'main is-transparent',
      location: '1',
      buttonClassName: 'button-wrapper'
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.navigateToSection = this.navigateToSection.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleNavClick() {
    this.setState({buttonClassName: 'button-wrapper menu-open'})
  }


  handleScroll() {
    if( document.body.scrollTop > 20 ) {
      this.setState({className: 'main is-transparent is-filled-white'});
    } else {
      this.setState({className: 'main is-transparent'});
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

    // var navClass = navClass ({
    //   'main': true,
    //   'is-transparent': true,
    //   'is-filled-white': this.state.self
    //   // 'menu-open':
    //
    // });



    return(
      <div id='header' className='header'>
        <nav onScroll={this.handleScroll} id='nav' className={this.state.className} role='primary'>
          <div className='content'>
            <div className='menu-cog'>
              <div className='logo-wrap' >
                <a href='/' className='logo-link'>
                  <img className='foundry-logo' src={foundryCogLg} />
                </a>
              </div>
            </div>
            <div className='menu-wrapper'>
              <ul className='menu'>
                <li className='menu-item'>
                  <a href='/work' className='menu-link'>Services</a>
                </li>
                <li className='menu-item'>
                  <a href='/work' className='menu-link'>Work</a>
                </li>
                <li className='menu-item'>
                  <a href='#/work' className='menu-link'>About</a>
                </li>
                <li className='menu-item'>
                  <a href='#/work' className='menu-link'>Blog</a>
                </li>
                <li className='menu-item'>
                  <a href='#/work' className='menu-link'>Contact</a>
                </li>
              </ul>
            </div>
            <div onClick={this.handleNavClick} className={this.state.buttonClassName}>
              <div className='l-1'></div>
              <div className='l-2'></div>
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
