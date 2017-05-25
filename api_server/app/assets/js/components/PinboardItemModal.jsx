import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'
import axios from 'axios'

export default
class PinboardItemModal extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null,
      postID: null,
    }
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/api/users/1.json`)
  //     .then(res => {
  //       // console.log(res.data.user);
  //       const user = res.data.user;
  //       this.setState({ user });
  //     });
  // }

  open = () => {
      this.setState({
        showModal: true,
        postID: this.props.user.posts.id,
      });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  render() {
    return(

      // { this.props.user &&
        <div>
          <div className="item" onClick={this.open}>
            <p className="img-title">{this.props.obj.title}</p>
            <img className="img-thumb" src={'http://localhost:3000/' + this.props.obj.content.thumb.url}/>
          </div>

          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.obj.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={'http://localhost:3000/' + this.props.obj.content.url}/>
              <p>{this.props.obj.description}</p>
            </Modal.Body>
          </Modal>
        </div>
      // }

    )
  }
}
