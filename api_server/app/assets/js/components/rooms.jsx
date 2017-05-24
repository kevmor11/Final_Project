import React, { Component } from 'react';
import axios from 'axios';

export default
class Rooms extends Component {
  constuctor(props) {
    super(props);

    this.state = {
      room: []
    };
  }
  
  componentDidMount() {
    axios.get(`localhost:3000/api/users/${id}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ room });
      });
  }
  render() {
    return (
      <tr>
        <th>1</th>
        <td><a href="" title="this room blah blah blah">Secret Garden</a></td>
        <td>{this.state.room.name}</td>
      </tr>
    );
  }
}
