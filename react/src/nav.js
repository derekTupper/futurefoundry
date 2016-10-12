import React, { Component, ExecutionEnvironment }  from 'react';

const classNames = require('classnames');

import foundryCogLg from './assets/img/foundrycogs_lg.png';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      navScrolled: false,
    };
    this.handleNavScroll = this.handleNavScroll.bind(this);
    this.navigateToSection = this.navigateToSection.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleNavScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleNavScroll);
  }

  handleNavClick() {

    this.setState({
      menuOpen: !this.state.menuOpen
    });

  }


  handleNavScroll() {

    this.setState({
      navScrolled: (document.body.scrollTop > 20)
    });

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

  navClass(){
    var navClass = 'main is-transparent';

    if (this.state.menuOpen) {
      navClass = `${navClass} menu-open`
    }
    if (this.state.navScrolled) {
      navClass = `${navClass} is-filled-white`
    }

    return navClass
  }

  render() {

    var btnClass = 'button';
    var menuClass = 'menu-wrapper';
    var backgroundClass = 'menu-background'

    var menuOpenString = ' menu-open';

    if (this.state.menuOpen) {
      btnClass += menuOpenString;
      menuClass += menuOpenString;
    }

    if (this.state.navScrolled) {
      btnClass += ' is-filled-white';
    }

    return(
      <div id='header' className='header'>
        <nav onScroll={this.handleNavScroll} id='nav' className={this.navClass()} role='primary'>
          <div className='content'>
            <div className='menu-cog'>
              <div className='logo-wrap' >
                <a href='#/' className='logo-link'>
                  <img className='foundry-logo' src={foundryCogLg} />
                </a>
              </div>
            </div>
            <div className={menuClass}>
              <ul className='menu'>
                <li className='menu-item'>
                  <a href='#/work' className='menu-link'>Work</a>
                </li>
                <li className='menu-item'>
                  <a href='#/services' className='menu-link'>Services</a>
                </li>
                <li className='menu-item'>
                  <a href='#/about' className='menu-link'>About</a>
                </li>
                <li className='menu-item'>
                  <a href='#/blog' className='menu-link'>Blog</a>
                </li>
                <li className='menu-item'>
                  <a href='#/contact' className='menu-link'>Contact</a>
                </li>
              </ul>
            </div>
            <div onClick={this.handleNavClick} className={btnClass}>
              <div className='button-wrapper'>
                <div className='l-1'></div>
                <div className='l-2'></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
