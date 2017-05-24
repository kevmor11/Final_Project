import React, {Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default
class PopupLink extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
    <div>
      <button onClick={this.openModal}>Create Image</button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 ref={subtitle => this.subtitle = subtitle}>Note</h2>
        <button onClick={this.closeModal}>Close</button>
        <form action="api/posts" method="POST">
          <div className="image_file">
            <label htmlFor="image_file">Image</label>
            <input type="file" id="image_file" name="image file" />
          </div>
          <div className="image_title">
            <label htmlFor="image_title">Title</label>
            <input type="text" name="title" id="image_title" />
          </div>
          <div className="image_description">
            <label htmlFor="image_description">Description</label>
            <input type="text" name="description" id="image_description" />
          </div>
          <div className="image_submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>

    </div>
    )
  }
}
