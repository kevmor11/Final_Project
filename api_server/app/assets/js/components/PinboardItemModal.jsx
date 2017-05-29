import React, {Component} from 'react';
import PinItemModalImage from './PinItemModalImage.jsx'
import PinItemModalNote from './PinItemModalNote.jsx'
import PinItemModalLink from './PinItemModalLink.jsx'

export default
class PinboardItemModal extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null,
      postID: null,
    }
  // console.log("YO", this.state.user);
  }


  render() {
    // console.log("PARENT", this.props);
    switch (this.props.category) {
      case "image":
        return(
          <PinItemModalImage
          postID={this.props.postID}
          title={this.props.title}
          description={this.props.description}
          img={this.props.img}
          thumb={this.props.thumb}
          user={this.state.user}
          />);
        // break;
      case "note":
        return(
          <PinItemModalNote
          postID={this.props.postID}
          title={this.props.title}
          description={this.props.description}
          user={this.state.user}
          />);
        // break;
      case "link":
        return(
          <PinItemModalLink
          postID={this.props.postID}
          title={this.props.title}
          description={this.props.description}
          link={this.props.link}
          user={this.state.user}
          />);
        // break;
      default:
        throw new Error('Content category is not valid');
    }
  }
}
