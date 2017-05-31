import React, { Component } from 'react';
import axios from 'axios';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default
class PopupLink extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      imageData: null,
      image: '',
      title: '',
      description: '',
    };
  }

  close = () => {
    this.props.onClose();
  }

  handleImageChange = (event) => {
    this.setState({
      imageData: event.target.files[0],
      image: event.target.value,
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

  submitForm = (event) => {
    const data = new FormData();
    event.preventDefault();
    data.append('post[image_file]', this.state.imageData);
    data.append('post[title]', this.state.title);
    data.append('post[description]', this.state.description);
    data.append('post[category]', "image");
    axios.post(`/api/rooms/${this.props.roomID}/posts`, data)
    .then(this.close.bind(this))
    .then(this.props.refreshRoom)
    .catch((err) => {
      console.log(err.message);
    });
  }

  render() {
    const tooltip = (
      <Tooltip id="tooltip">Upload a .jpg, .jpeg, .png, or .gif file.</Tooltip>
    );

    return (
      <div>

        <Modal show={this.props.isActive} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.submitForm} >
            <div className="field">
              <label htmlFor="image_file" className="label">Image</label>
              <OverlayTrigger placement="bottom" overlay={tooltip} style="z-index: 9001" >
                <p className="control">
                  <input className="input" type="file" value={this.state.image} id="image_file" onChange={this.handleImageChange} />
                </p>
              </OverlayTrigger>
            </div>
            <div className="field">
              <label htmlFor="image_title" className="label">Title</label>
              <p className="control">
                <textarea className="input" type="text" value={this.state.title} id="image_title" onChange={this.handleTitleChange} />
              </p>
            </div>
            <div className="field">
              <label htmlFor="image_description" className="label">Description</label>
              <p className="control">
                <textarea className="input input-description" type="text" value={this.state.description} id="image_description" onChange={this.handleDescriptionChange} />
              </p>
            </div>
            <p className="control">
              <button type="submit" className="button is-primary">Submit</button>
            </p>
            </form>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}
