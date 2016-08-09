import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class ContactDialog extends Component {
  constructor(props){
    super(props);
    this.state = {open: false};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleOpen(){
  this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const ContactInput = (props) => {
      return(
        <TextField
          className='contactInput'
          hintText={props.hint}

        />
      );
    };

    const ContactButton = (props) => {
      return(
        <RaisedButton
          className='ContactUsBtn'
          label='Contact Us'
          onClick={this.handleOpen}
          style={{
            fontSize: '175%',
            fontFamily: 'Roboto'
          }}
        />
      );
    }

    return(
      <div>
        <ContactButton />
        <Dialog
         title="Tell Us About your Project"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
        >
          <ContactInput className='contactInput' hint='Name' />
          <ContactInput className='contactInput' hint='Email' />
          <ContactInput className='contactInput' hint='Phone' />
        </Dialog>
      </div>
    );
  }
}




const DescriptionInput = (props) => {
  return (
    <TextField
    className='contactDescription'
      multiLine={true}
      rows={5}

    />
  );
}


export default ContactDialog;
