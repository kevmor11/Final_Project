import React, {Component} from 'react';
import PinboardItemModal from './PinboardItemModal.jsx'
import axios from 'axios'
export default
class PinboardItemRequest extends Component {
constructor(props) {
    super(props); // super calls `constructor` in React.Component
    console.log("Props from PBItemRequest", props)
    this.state = {
      showModal: false,
      user: props.userData.user,
      postID: null,
      posts: [],
      userData:props.userData.user,
      roomAxiosData:props
    }
  }


  // componentDidMount() {
  //   // console.log('userIDDDDDD', this.props.userData.data.user.id);
  //   axios.get(`/api/users/8.json`)
  //     .then(res => {
  //       console.log('res', res.data);
  //       // console.log("Room data", res);
  //       const user = res.data.user;
  //       this.setState({ user });
  //     });
  //   // this.setupSubscription();
  // }


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
    // alert(this.props.roomAxiosData.posts);
    allPosts = this.state.userData.posts.map((post, i) => {
      return   <PinboardItemModal key={i} title={post.title} description={"hey"} img={"www.example.com"} thumb={"www.google.com"} link={"www.example.com"} user={this.state.user} postID={1} category={"note"} />
    })
    return( 
      <div className="components-container">
        {allPosts}
      </div>
    )
  }
}