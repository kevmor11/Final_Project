import React, { Component } from 'react';
import PinboardItemModal from './PinboardItemModal.jsx';

export default
class PinboardItemRequest extends Component {
  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: props.userData.user,
      postID: null,
      posts: '',
      userData: props.userData.user,
      roomAxiosData: props,
    };
  }

  render() {
    let allPosts = [];
    if (this.props.post) {
      allPosts = this.props.post.map((post) => {
        return (
          <PinboardItemModal
            onClick={this.props.updatePinboard}
            key={post.id}
            title={post.title}
            description={post.description}
            img={post.image_file.url}
            content={post.content}
            thumb={post.image_file.thumb.url}
            link={post.link}
            category={post.category}
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
