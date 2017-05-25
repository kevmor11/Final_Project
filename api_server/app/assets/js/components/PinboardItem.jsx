import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'
import axios from 'axios'

export default
class PinboardItem extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null
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

    return(
      <div>

        {/*<div className="item" onClick={this.open}>
          <p>Image Title</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg"/>
        </div>*/}

        { this.state.user &&
          <div>
            <div className="item" onClick={this.open}>
              <p className="img-title">{this.state.user.posts[2].title}</p>
              <img className="img-thumb" src={'http://localhost:3000/' + this.state.user.posts[2].content.thumb.url}/>
            </div>

            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.user.posts[2].title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={this.state.user.posts[2].content.url}/>
                <p>{this.state.user.posts[2].description}</p>
              </Modal.Body>
            </Modal>
          </div>
        }

      </div>
    )
  }
}
