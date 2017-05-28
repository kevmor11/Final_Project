import React, {Component} from 'react';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap';
import axios from 'axios';

export default
class PinItemModalImage extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null,
      postID: null,
      // currentRoomName: window.location['pathname'].split('/')[2],
      // currentRoomID: findRoomID(window.location['pathname'].split('/')[2])
    };
    // this.deletePost = this.deletePost.bind(this);
    // function findRoomID(roomName){
    //   let roomID;
    //   props.user.rooms.forEach((roomObject)=>{
    //     let currentRoomName = window.location['pathname'].split('/')[2];
    //     if (currentRoomName == roomObject.name){
    //       roomID = roomObject.id;
    //     }
    //   })
    //   return roomID;
    // };
  }

  open = () => {
      this.setState({
        showModal: true,
        postID: this.props.postID,
      });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  setRoomIdState = (id) => {
    this.setState({room_id: id});
  }

  setRoomId = (rooms) => {
    rooms.forEach((room, i)=> {
      if (window.location['pathname'].split('/')[2] == room.name) {
        const roomID = room.id;
        this.setRoomIdState(roomID);
      };
    });
  }

  setRoomIdState = (id) => {
    this.setState({room_id: id});
  }

  setRoomId = (rooms) => {
    rooms.forEach((room, i)=> {
      if (window.location['pathname'].split('/')[2] == room.name) {
        const roomID = room.id;
        this.setRoomIdState(roomID);
      };
    });
  }
  

  deletePost(event){
    alert('inside deletePost')
    axios.delete(`/api/rooms/${this.state.currentRoomID}/posts/${this.state.postID}`)
    .then(this.close.bind(this));
  }

  render() {
    return(
      <div>
        <div className="item" onClick={this.open}>
          <p className="img-title">{this.props.title}</p>
          <i className="add fa fa-picture-o"></i>
          <img className="img-thumb" src={'http://localhost:3000/' + this.props.thumb}/>
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <button type="submit" className="button" onClick={ this.deletePost }>Delete</button>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={'http://localhost:3000/' + this.props.img}/>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
