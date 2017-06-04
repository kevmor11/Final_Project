import React, {Component} from 'react';
import PinItemModalImage from './PinItemModalImage.jsx';
import PinItemModalNote from './PinItemModalNote.jsx';
import PinItemModalLink from './PinItemModalLink.jsx';
import axios from 'axios';

export default
class PinboardItemModal extends Component {

  constructor(props) {
    super(props); 
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
    let choice;
    switch (this.props.category) {
      case "image":
        choice = (
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
        break;
      case "note":
        choice = (
          <PinItemModalNote
            postID={this.props.postID}
            title={this.props.title}
            description={this.props.description}
            name={this.props.user}
            roomID={this.props.roomID}
            refreshRoom={this.props.refreshRoom}
            deletePost={this.deletePost}
          />);
        break;
      case "link":
        choice = (
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
        break;
      default:
        throw new Error('Content category is not valid');
    }
    return choice;
  }
}
