import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Popover, Tooltip, Button, OverlayTrigger} from 'react-bootstrap'

export default
class PopupNote extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = { showModal: false };
  }

  close() {
    this.props.onClose();
  }

  render() {
      const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>

        <Modal show={this.props.isActive} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
