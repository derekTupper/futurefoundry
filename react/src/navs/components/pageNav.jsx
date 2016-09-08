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
          </ul>

         </div>
        </nav>
      </div>
    );
  }
}
