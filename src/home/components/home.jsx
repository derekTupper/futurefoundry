import React, { Component } from 'react';



import ContactDialog from './contactDialog';
import SplashText from './splashText'

export default class Home extends Component  {

  render() {
    return(
      <div className='contactContainer'>
            <SplashText />
            <ContactDialog />
      </div>
    );
  }
}


// //Splash text displayed next to the contact form.
// const Text = () => {
//   return(
//     <div className='contact-text'>
//       <h1>Forge your Future with Us</h1>
//       <div className='col-md-8 col-md-offset-2'>
//         <h2>
//         We forge technology solutions that elevate your business
//         to create unparalleled digital experiences for your customers and employees.
//         </h2>
//       </div>
//
//     </div>
//   );
// }
