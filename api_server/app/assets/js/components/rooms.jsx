import React, { Component } from 'react';
import Room from './Room.jsx';
import axios from 'axios';  
export default

class Rooms extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: null,
      roomName: '',
      rooms: []
    }
  }

  componentDidMount() {
    console.log('component didmount now', this.state);
    // axios.get(`/api/users/2.json`)
    //   .then(res => {
    //     // console.log(res.data.user);
    //     const user = res.data.user;
    //     this.setState({ user });
    //   });
  }

  handleRoomNameChange = (event) => {
    this.setState({
      roomName: event.target.value
    });
  }
  
  createRoomClick = (event) => {
    axios.post(`/api/rooms`, {
      name: this.state.roomName
    }).then(console.log('succuss'));
  }

  render() {
    let allRooms;
    // if (this.state.user){
    //   allRooms = this.state.user.rooms.map((room,i) => { 
    //   return <Room key={room.name} roomName={room.name} roomNumber={i+1}/>;
    //     // return <Room key={i} roomName={room.name} roomNumber={i+1}/>
    //   })
    // }
    console.log('render state now', this.state);
    console.log('rooms', this.props.rooms);
    allRooms = this.props.rooms.map((room, i) => {
      return <Room key={room.name} roomName={room.name} roomNumber={i+1}/>
    })

    return (
      <div className="tile is-parent is-3 rooms">
        <article className="tile is-child box">
        <div className="content">
            <p className="subtitle">Your Rooms</p>
            <div className="field">
              <p className="control">
                <input className="input" type="name" id="roomName" name="roomName" value={ this.state.roomName } onChange={ this.handleRoomNameChange } placeholder="Room Name" />
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
