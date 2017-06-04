import React, { Component } from 'react';
import PinboardItemModal from './PinboardItemModal.jsx';

export default
class PinboardItemRequest extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      showModal: false,
      postID: null,
      posts: '',
    };
  }

  render() {
    let allPosts = [];
    if (this.props.post) {
      allPosts = this.props.post.map((post) => {
        return (
          <PinboardItemModal
            className="StickyNote"
            onClick={this.props.refreshRoom}
            key={post.id}
            title={post.title}
            description={post.description}
            img={post.image_file.url}
            content={post.content}
            thumb={post.image_file.thumb.url}
            link={post.link}
            category={post.category}
            user={post.user.first_name}
            postID={post.id}
            roomID={post.room.id}
            refreshRoom={this.props.refreshRoom}
          />
        );
      });
    }
    allPosts.reverse();

    return (
      <div className="components-container">
        {allPosts}
      </div>
    );
  }
}
