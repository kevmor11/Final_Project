import React, { Component } from 'react';
import AlertContainer from 'react-alert';
import axios from 'axios';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default
class PopupLink extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      link: '',
      title: '',
      description: '',
    }
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

  handleLinkChange = (event) => {
    this.setState({
      link: event.target.value,
    });
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  }

  submitForm = () => {
    let link = this.state.link;
    var prefix = 'http://';
    if (link.substr(0, prefix.length) !== prefix) {
      link = prefix + link;
    }
    axios.post(`/api/rooms/${this.props.roomID}/posts`, {
      link: link,
      title: this.state.title,
      description: this.state.description,
      category: "link"
    }).then(this.close)
      .catch(this.showAlert)
      .then(this.props.refreshRoom)
  }

  render() {
    const tooltip = (
      <Tooltip id="tooltip">Please enter a valid URL.</Tooltip>
    );
    return (
      <div>
        <Modal show={this.props.isActive} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field">
              <label htmlFor="url" className="label">URL</label>
              <OverlayTrigger placement="bottom" overlay={tooltip} style="z-index: 9001" >
                <p className="control">
                  <input className="input" type="url" value={this.state.link} id="url" onChange={this.handleLinkChange} />
                </p>
              </OverlayTrigger>
            </div>
            <div className="field">
              <label htmlFor="title" className="label">Title</label>
              <p className="control">
                <textarea className="input" type="text" value={this.state.title} id="title" onChange={this.handleTitleChange} />
              </p>
            </div>
            <div className="field">
              <label htmlFor="link_description" className="label">Description</label>
              <p className="control">
                <textarea className="input" type="text" value={this.state.description} id="link_description" onChange={this.handleDescriptionChange} />
              </p>
            </div>
            <p className="control">
              <button type="submit" className="button hover" onClick={ this.submitForm }>Submit</button>
            </p>
          </Modal.Body>
        </Modal>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}
