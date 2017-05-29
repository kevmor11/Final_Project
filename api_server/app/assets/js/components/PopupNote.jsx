import React, {Component} from 'react';
import axios from 'axios';
import {Modal, Popover, OverlayTrigger} from 'react-bootstrap'

export default
class PopupNote extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    // console.log("HEY THERE", this.props);

    this.state = {
      title: '',
      content: '',
      currentRoomName: window.location['pathname'].split('/')[2],
      currentRoomID: this.props.roomID
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

    // function findRoomID(roomName){
    //   let roomID;
    //   props.userData.user.rooms.forEach((roomObject)=>{
    //     let currentRoomName = window.location['pathname'].split('/')[2]
    //     if (currentRoomName == roomObject.name){
    //       roomID = roomObject.id;
    //     }
    //   })
    //   return roomID;
    // };
  }

  close() {
    this.props.onClose();
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
      room_id:''
    });
  }
  // componentDidMount() {
  // }

  submitForm() {
      // console.log("submit clicked");
      axios.post(`/api/rooms/${this.props.roomID}/posts`, {
        title: this.state.title,
        content: this.state.content,
        category: "note"
      }).then(this.close.bind(this));
  }

  // setRoomIdState = () => {
  //   this.setState({room_id: this.props.roomID});
  // }

  // setRoomId = (rooms) => {
  //   rooms.forEach((room, i)=> {
  //     if (window.location['pathname'].split('/')[2] == room.name) {
  //       const roomID = room.id;
  //       this.setRoomIdState(roomID);
  //     };
  //   });
  // }

  render() {
    return (
      <div>
        <Modal show={this.props.isActive} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field">
              <label htmlFor="note_title" className="label">Title</label>
              <p className="control">
                <textarea className="input" type="text" value={ this.state.title } name="title" id="note_title" onChange={ this.handleTitleChange } />
              </p>
            </div>
            <div className="field">
              <label htmlFor="note_content" className="label">Content</label>
              <p className="control">
                <textarea className="input input-description" type="text" value={ this.state.content } name="content" id="note_content" onChange={ this.handleContentChange }  />
              </p>
            </div>
            <p className="control">
              <button type="submit" className="button is-primary" onClick={ this.submitForm }>Submit</button>
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
