import React, { Component } from 'react';
import Room from './Room.jsx';
import axios from 'axios';  
export default

class Rooms extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get(`/api/users/1.json`)
      .then(res => {
        // console.log(res.data.user);
        const user = res.data.user;
        this.setState({ user });
      });
  }


  render() {
    let allRooms;
    if(this.state.user){
      allRooms = this.state.user.rooms.map((room,i) => {
        return <Room key={i} roomName={room.name} roomNumber={i+1}/>
      })
    }

    return (
      <div className="tile is-parent is-2 rooms">
        <article className="tile is-child box">
        <div className="content">
            <p className="subtitle">Your Rooms</p>
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
