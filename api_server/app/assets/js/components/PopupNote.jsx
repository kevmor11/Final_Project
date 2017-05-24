import React, {Component} from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.44)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'rgba(255, 255, 255)',
    // padding               : '50px'
  }
};


export default
class PopupNote extends Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired
  }

  constructor() {
    super();

    this.state = {
      modalIsOpen: this.props.isActive
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
      {/*<button onClick={this.openModal}>Create Note</button>*/}
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Note"
      >

        <div className="field is-grouped">
          <p ref={subtitle => this.subtitle = subtitle} className="popup-header">Note</p>
          <div onClick={this.closeModal}><img className="close-popup" src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/385/010_x-512.png" /></div>
          <form action="api/posts" method="POST">
            <div className="field">
              <label htmlFor="note_title" className="label">Title</label>
              <p className="control">
                <input className="input" type="text" id="note_title" />
              </p>
            </div>
            <div className="field">
              <label htmlFor="note_content" className="label">Content</label>
              <p className="control">
                <input className="input" type="text" id="note_content" />
              </p>
            </div>
             <p className="control">
              <button type="submit" className="button is-primary">Submit</button>
            </p>
          </form>
        </div>
      </Modal>

    </div>
    )
  }
}