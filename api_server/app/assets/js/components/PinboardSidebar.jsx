import React, {Component} from 'react';
import axios from 'axios'

export default
class PinboardSidebar extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      roomName: "",
      roomUsers: []
    }
  }

  // Get Room Name and Room users
  componentWillMount() {
    var room_name = "";
    var room_users = [];
    var room_users_firstNames = [];
    axios.get(`/api/rooms.json`)
      .then(res => {
        var rooms = res.data.rooms;
        // console.log("ROOMS", rooms);
        rooms.forEach((item, i) => {
          // console.log("INSIDE", item.id);
          if (this.props.currentRoom === item.id) {
            room_name = item.name;
            room_users = item.users;
            console.log("NAME", item.users);
            console.log("INSIDE");
          }
          room_users.forEach((item, i) => {
            // console.log("NAME", item.first_name);
            room_users_firstNames.push(item.first_name);
          })
        })
        this.setState({
          roomName: room_name,
          roomUsers: room_users_firstNames
        })
      // console.log("NAME STATE", this.state);
    });
  }

  render() {
    // console.log("HELLO", this.props);
    return(
      <div>
        {/*TODO Display all the users from the userrooms table that match the current_room ID which we should pass in to Sidebar
        as a prop from the other component that determines the current_room state */}
        <div className="tile is-parent is-2 rooms">
          <article className="tile is-child box">
            <div className="content">

              <p className="subtitle">{this.state.roomName}</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Friends</th>
                  </tr>
                </thead>
                <tbody>

                  { this.state.roomUsers.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item}</td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    )
  }
}
