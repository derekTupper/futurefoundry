import React, { Component, ExecutionEnvironment }  from 'react';


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
    if( document.body.scrollTop > 0 ) {
      this.setState({id: 'active'});
    } else {
      this.setState({id: 'inactive'});
    }
  }

  render() {
    return(
      <div className="main_header">
        <nav onScroll={this.handleScroll} className='navbar-fixed-top item animated fadein' id={this.state.id}  >
          <p onScroll={this.handleScroll} className="brand" id={this.state.id} >futurefoundry</p>
        </nav>
      </div>

    );
  }
}
