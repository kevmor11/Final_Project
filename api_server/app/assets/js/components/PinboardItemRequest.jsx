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

  render() {
    let allPosts;
    if(this.props.post ){
      allPosts = this.props.post.map((post, i) => {
        console.log("HELLO", post.user.first_name);
        return (
            <PinboardItemModal onClick={this.props.updatePinboard}
                                        key={i} 
                                        title={post.title} 
                                        description={post.description} 
                                        img={post.image_file.url} 
                                        content={post.content}
                                        thumb={post.image_file.thumb.url} 
                                        link={post.link}  
                                        category={post.category}
                                        userName={post.user.first_name} />
        )   
      })
    }
    allPosts.reverse();

    return(
      <div className="components-container">
        {allPosts}
      </div>
    )
  }
} 