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
class PopupNote extends Component {
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
      <button onClick={this.openModal}>Create Note</button>
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
          <div className="note_title">
            <label htmlFor="note_title">Title</label>
            <input type="text" name="title" id="note_title" />
          </div>
          <div className="note_content">
            <label htmlFor="note_content">Description</label>
            <input type="text" name="content" id="note_content" />
          </div>
          <div className="note_submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>

    </div>
    )
  }
}