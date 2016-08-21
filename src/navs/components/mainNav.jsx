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

  render() {

    const Button = (props) => {
      return(
        <button
         type='button'
         className={props.className}
         id={props.id}
         data-toggle={props.dataToggle}
         data-target={props.dataTarget}
       >
         {props.label}
       </button>
     );
    }


    return(
      <div className="mainHeader">
        <nav onScroll={this.handleScroll} className='navbar-fixed-top item animated fadein' id={this.state.id}  >
         <div className='inside-nav'>
          <div className='navbar-header'>
            {/*<a onScroll={this.handleScroll} className="navbar-brand" href="#">futurefoundry</a>*/}
            <h1 onScroll={this.handleScroll}  className="brand" >futurefoundry</h1>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            <li><Button label='Contact Us' className='btn btn-primary btn-lg' id='ContactUsBtn' dataToggle='modal' dataTarget='#contactModal'/></li>
          </ul>

         </div>
        </nav>
      </div>
    );
  }
}
