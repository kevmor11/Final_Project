import React, {Component} from 'react';
import AlertContainer from 'react-alert';
import axios from 'axios';
import {Modal, Popover, OverlayTrigger} from 'react-bootstrap'

export default
class PopupNote extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      title: '',
      description: '',
      currentRoomName: window.location['pathname'].split('/')[2],
    };
  }


  alertOptions = {
    offset: 255,
    position: 'top right',
    theme: 'dark',
    time: 8000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Oops, something went wrong and your post could not be added.', {
      type: 'error',
    })
  }

  close = () => {
    this.props.onClose();
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleContentChange = (event) => {
    this.setState({
      description: event.target.value,
      room_id:'',
    });
  }

  submitForm = () => {
      axios.post(`/api/rooms/${this.props.roomID}/posts`, {
        title: this.state.title,
        description: this.state.description,
        category: "note"
      }).then(this.close)
        .catch(this.showAlert)
        .then(this.props.refreshRoom)
  }

  render() {
    return (
      <div>
        <Modal show={this.props.isActive} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field">
              <label htmlFor="note_title" className="label">Title</label>
              <p className="control">
                <textarea className="input" type="text" value={this.state.title} name="title" id="note_title" onChange={this.handleTitleChange} />
              </p>
            </div>
            <div className="field">
              <label htmlFor="note_description" className="label">Description</label>
              <p className="control">
                <textarea className="input input-description" type="text" value={this.state.description} name="description" id="note_content" onChange={this.handleContentChange}  />
              </p>
            </div>
            <p className="control">
              <button type="submit" className="button is-primary" onClick={this.submitForm}>Submit</button>
            </p>
          </Modal.Body>
        </Modal>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}
