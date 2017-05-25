import React, { Component } from 'react';
import Room from './Room.jsx';

export default
class Rooms extends Component {
   constructor(props){
    super(props);
    this.state = {isLoggedIn: false, user: [] };
  }

  componentDidMount() {
    axios.get(`/api/users/1.json`)
      .then(res => {
        console.log(res.data.user);
        const user = res.data.user;
        this.setState({ user });
      });
  }
  render() {
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
                <Room />
              </tbody>
            </table>
          </div>
        </article>
      </div>
    );
  }
}
