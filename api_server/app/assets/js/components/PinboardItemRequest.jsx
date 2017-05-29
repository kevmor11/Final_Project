import React, {Component} from 'react';
import PinboardItemModal from './PinboardItemModal.jsx'
import axios from 'axios'
export default
class PinboardItemRequest extends Component {
constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: props.userData.user,
      postID: null,
      posts:"",
      userData:props.userData.user,
      roomAxiosData:props
    }
  }


  // updatePosts = (post) => {
  //   this.setState({
  //     posts: this.state.posts.concat({
  //       user_first_name: post.user.first_name, description: post.description
  //     })
  //   });
  // }

  // setupSubscription() {
  //   App.cable.subscriptions.create('PostsChannel', {
  //     received(post) {
  //       return this.updatePosts(post);
  //     },
  //     updatePosts: this.updatePosts.bind(this)
  //   });
  // }

  render() {
      let allPosts;
    if(this.props.post ){
      allPosts = this.props.post.map((post, i) => {
        return   <PinboardItemModal onClick={this.props.updatePinboard}
                                    key={i} title={post.title} 
                                    description={post.description} 
                                    img={post.image_file.url} 
                                    thumb={post.image_file.thumb.url} 
                                    link={post.link}  
                                    category={post.category} />
      })
    }
    return(
      <div className="components-container">
        {allPosts}
      </div>
    )
  }
} 