import React, { Component, ExecutionEnvironment }  from 'react';

import contactDialog from '../../home/components/contactDialog';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {id: "inactive"};
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    if( document.body.scrollTop > 20 ) {
      this.setState({id: 'active'});
    } else {
      this.setState({id: 'inactive'});
    }
  }

  navigateToSection(event) {
    event.preventDefault();

    const href = event.target.href;
    const elementID = href.substr(href.indexOf('#'));
    const navHeight = $('.inside-nav').height();
    console.log($(elementID).offset().top);
    console.log($(elementID).offset().top - navHeight);

    $('html, body').animate({
        scrollTop: ($(elementID).offset().top - navHeight)
      }, 800, function(){
    });
  }

  render() {

    const Button = (props) => {
      return(
        <button
         type='button'
         className={props.className}
         id={props.id}
         data-toggle={props.dataToggle}
         data-target={props.dataTarget}
         href={props.href}
       >
         {props.children}
       </button>
     );
    }


    return(
      <nav onScroll={this.handleScroll} className='navbar-fixed-top navbar-default' id={this.state.id} >
        <div className='navbar-header'>
          <p className="navbar-brand">futurefoundry</p>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#home" onClick={this.navigateToSection}>Home</a></li>
            <li><a href="#services" onClick={this.navigateToSection}>Services</a></li>
            <li><Button className='btn btn-primary btn-md' id='ContactUsBtn'><a href='mailto:contact@futurefoundry.co'>Contact Us</a></Button></li>
          </ul>
        </div>
      </nav>
    );
  }
}
