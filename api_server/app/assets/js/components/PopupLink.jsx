import React, {Component} from 'react';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'

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
      link: event.target.value
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  submitForm(event){
    // TODO change so we are not hard coding the ID
    axios.post('/api/rooms/1/posts', {
      link: this.state.link,
      title: this.state.title,
      description: this.state.description
    }).then(this.close.bind(this));
  }


  render() {

    return (
      <div>

        <Modal show={this.props.isActive} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field">
              <label htmlFor="url" className="label">URL</label>
              <p className="control">
                <input className="input" type="url" value={ this.state.link } id="url" onChange={ this.handleLinkChange } />
              </p>
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
