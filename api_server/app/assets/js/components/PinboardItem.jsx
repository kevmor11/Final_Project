import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'

export default
class PinboardItem extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/1.json`)
      .then(res => {
        console.log(res.data.user);
        const user = res.data.user;
        this.setState({ user });
      });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  render(){

    console.log(this.state.user);

    return(
      <div>
        <div className="item fa fa-picture-o" onClick={this.open}>
          <p>This is card 1</p>
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Image Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.user.posts[2].content}/>
            <p>{this.state.user.posts[2].description}</p>
          </Modal.Body>
        </Modal>

      </div>
    )
  }
}
