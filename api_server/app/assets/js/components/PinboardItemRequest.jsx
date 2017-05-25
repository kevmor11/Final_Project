import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'
import axios from 'axios'
import PinboardItemModal from './PinboardItemModal.jsx'

export default
class PinboardItemRequest extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null,
      postID: null,
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/1.json`)
      .then(res => {
        // console.log(res.data.user);
        const user = res.data.user;
        this.setState({ user });
      });
  }

  render() {
    return(
      <div>

        { this.state.user && this.state.user.posts.map((obj) => {
          console.log(obj);
          return (
            <PinboardItemModal key={obj.id} title={obj.title} description={obj.description} img={obj.content.url} thumb={obj.content.thumb.url} link={obj.link} user={this.state.user} postID={this.state.user.posts.id} category={obj.category} />
            )
        })}

      </div>
    )
  }
}
