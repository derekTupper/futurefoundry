import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import ContactDialog from './contactDialog';

export default class Contact extends Component  {

  render() {
    return(
      <div className='contactContainer'>
            <Text />
            <ContactDialog />
      </div>
    );
  }
}


//Splash text displayed next to the contact form.
const Text = () => {
  return(
    <div className='contact-text'>
      <h1>Forge your Future with Us</h1>
      <p>
      We forge technology solutions that elevate your business
      to create unparalleled digital experiences for your customers and employees.
      </p>
    </div>
  );
}
