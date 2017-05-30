import React, {Component} from 'react';
import axios from 'axios';
import {Modal, Button, OverlayTrigger, Tooltip} from 'react-bootstrap'

export default
class PopupLink extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      link: '',
      title: '',
      description: ''
    }
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  close() {
    this.props.onClose();
  }

  handleLinkChange(event) {
    this.setState({
      link: event.target.value
    })
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  submitForm(event){
    console.log("submit clicked")
    axios.post(`/api/rooms/${this.props.roomID}/posts`, {
      link: this.state.link,
      title: this.state.title,
      description: this.state.description,
      category: "link"
    }).then(this.close.bind(this)).then(this.props.updatePinboardApp)
  }

  render() {
    const tooltip = (
      <Tooltip id="tooltip">Please enter a valid URL.</Tooltip>
    );
    return (
      <div>

        <Modal show={this.props.isActive} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field">
              <label htmlFor="url" className="label">URL</label>
              <OverlayTrigger placement="bottom" overlay={tooltip} style="z-index: 9001" >
                <p className="control">
                  <input className="input" type="url" value={ this.state.link } id="url" onChange={ this.handleLinkChange } />
                </p>
              </OverlayTrigger>
            </div>
            <div className="field">
              <label htmlFor="title" className="label">Title</label>
              <p className="control">
                <textarea className="input" type="text" value={ this.state.title } id="title" onChange={ this.handleTitleChange } />
              </p>
            </div>
            <div className="field">
              <label htmlFor="link_description" className="label">Description</label>
              <p className="control">
                <textarea className="input" type="text" value={ this.state.description } id="link_description" onChange={ this.handleDescriptionChange } />
              </p>
            </div>
            <p className="control">
              <button type="submit" className="button is-primary" onClick={ this.submitForm }>Submit</button>
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
