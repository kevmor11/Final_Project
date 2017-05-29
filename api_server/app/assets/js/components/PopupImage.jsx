import React, {Component} from 'react';
import {Modal, Button, OverlayTrigger, Tooltip} from 'react-bootstrap'

export default
class PopupLink extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      image: null,
      content: '',
      description: '',
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  close() {
    this.props.onClose();
  }

  handleImageChange(event) {
    this.setState({
      image: event.target.value
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  submitForm(event) {
    // TODO change so we are not hard coding user 2
    axios.post('/api/rooms/1/posts', {
      image: this.state.image,
      content: this.state.content,
      description: this.state.description
    });
  }

  render() {

    const tooltip = (
      <Tooltip id="tooltip">Upload a .jpg, .jpeg, .png, or .gif file.</Tooltip>
    );

    return (
      <div>

        <Modal show={this.props.isActive} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="api/posts" method="POST">
              <div className="field">
                <label htmlFor="image_file" className="label">Image</label>
                <OverlayTrigger placement="bottom" overlay={tooltip} style="z-index: 9001" >
                  <p className="control">
                    <input className="input" type="file" value={ this.state.image } id="image_file" onChange={ this.handleImageChange } />
                  </p>
                </OverlayTrigger>
              </div>
              <div className="field">
                <label htmlFor="image_title" className="label">Title</label>
                <p className="control">
                  <textarea className="input" type="text" value={ this.state.content } id="image_title" onChange={ this.handleContentChange } />
                </p>
              </div>
              <div className="field">
                <label htmlFor="image_description" className="label">Description</label>
                <p className="control">
                  <textarea className="input" type="text" value={ this.state.description } id="image_description" onChange={ this.handleDescriptionChange } />
                </p>
              </div>
              <p className="control">
                <button type="submit" className="button is-primary" onClick={ this.submitForm }>Submit</button>
              </p>
            </form>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}
