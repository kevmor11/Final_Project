import React, { Component } from 'react';
import Room from './Room.jsx';
import axios from 'axios';
export default
class Rooms extends Component {
  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      roomName: "",
      rooms: props.rooms,
      allRoomsNames: props.rooms.map((room) => {
      return room.name
      })
    }
  }
  handleRoomNameChange = (event) => {
    this.setState({
      roomName: event.target.value
    });
  }

  createRoomClick = (event) => {
    this.setState({
      rooms:this.state.rooms.concat({ name: this.state.roomName})
        })
    axios.post(`/api/rooms`, {
      name: this.state.roomName
    });
  }
  render() {
    let allRooms;
    allRooms = this.state.rooms.map((room, i) => {
      console.log('ROOMS', room);
      return <Room key={room.id} roomName={room.name} roomNumber={i+1}/>
    })
    return (
      <div className="tile is-parent is-3 rooms">
        <article className="tile is-child box rooms">
        <div className="content">
            <p className="subtitle">Your Rooms</p>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="name" id="roomName"
                  name="roomName"
                  value={ this.state.roomName }
                  onChange={ this.handleRoomNameChange }
                  placeholder="Room Name"
                />
              </p>
              <button className="button" onClick={this.createRoomClick}>Create</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Room Name</th>
                </tr>
              </thead>
              <tbody>
                {allRooms}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    );
  }
}