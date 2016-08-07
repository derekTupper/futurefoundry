import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


export default class Contact extends Component  {

  render() {
    return(
      <div className='splash-container'>
          <Text />
          <ContactForm />
      </div>
    );
  }
}


//Splash text displayed next to the contact form.
const Text = () => {
  return(
    <div className='col-lg-6 contact-text'>
      <h1>Forge your Future with Us</h1>
      <p>
      We forge technology solutions that elevate your business
      to create unparalleled digital experiences for your customers and employees.
      </p>
    </div>
  );
}
