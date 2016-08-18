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
  };

  //  const Modal = (props) => {
  //    return(
  //     <div className='modal-fade' id='contactModal' tabindex='-1' role='dialog'>
  //       <div className='modal-dialog' role='document'>
  //         <div className='modal-content'>
  //           <div className='modal-header'>
   //
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //    );
  //  };



    const ContactInput = (props) => {
      var input = <input
        type="text"
        id={props.id}
        className='form-control'
        placeholder={props.placeholder}
      />;

      if (props.addon) {
        return(
          <formGroup className='input-group'>
            {input}
            <span
              className="input-group-addon"
              type={props.addon}
            >
              {props.addon}
            </span>
          </formGroup>
        );
      } else {
        return(
          <div>
            {input}
          </div>
        );
      };
    };



    return(
      <div>
        <Button label='Contact Us' className='btn btn-primary btn-lg' id='ContactUsBtn' dataToggle='modal' dataTarget='#contactModal'/>

        <div className="modal fade" id="contactModal"  role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                <ContactInput id='contactInput' placeholder='Name'  />
                <ContactInput id='contactInput' placeholder='Email' addon='@example.com' />

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}




export default ContactDialog;
