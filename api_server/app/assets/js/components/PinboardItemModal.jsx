import React, {Component} from 'react';
import PinItemModalImage from './PinItemModalImage.jsx';
import PinItemModalNote from './PinItemModalNote.jsx';
import PinItemModalLink from './PinItemModalLink.jsx';
import axios from 'axios';

export default
class PinboardItemModal extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      postID: null,
    };
  }

  deletePost = (postID) => {
    axios.delete(`/api/rooms/${this.props.roomID}/posts/${postID}`)
      .then(this.props.refreshRoom);
  }

  render() {
    switch (this.props.category) {
      case "image":
      // console.log('modal', this.props.roomID);
        return (
          <PinItemModalImage
            postID={this.props.postID}
            title={this.props.title}
            description={this.props.description}
            img={this.props.img}
            thumb={this.props.thumb}
            name={this.props.user}
            roomID={this.props.roomID}
            refreshRoom={this.props.refreshRoom}
            deletePost={this.deletePost}
          />);
      case "note":
        return (
          <PinItemModalNote
            postID={this.props.postID}
            title={this.props.title}
            content={this.props.content}
            name={this.props.user}
            roomID={this.props.roomID}
            refreshRoom={this.props.refreshRoom}
            deletePost={this.deletePost}
          />);
      case "link":
        return (
          <PinItemModalLink
            postID={this.props.postID}
            title={this.props.title}
            description={this.props.description}
            link={this.props.link}
            name={this.props.user}
            roomID={this.props.roomID}
            refreshRoom={this.props.refreshRoom}
            deletePost={this.deletePost}
          />);
      default:
        throw new Error('Content category is not valid');
    }
  }
}
