import React, {Component} from 'react';
import PinboardItemModal from './PinboardItemModal.jsx'
import axios from 'axios'

export default
class PinboardItemRequest extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null,
      postID: null,
      posts: []
    }
  }

  componentWillMount() {
    // PASS IN USER ID INSTEAD OF HARD CODING
    var ID = this.props.roomID;
    // console.log("PROPS", this.props);
    // console.log("ID", ID);
    axios.get(`/api/users/1.json`)
    // axios.get(`/api/rooms/${this.props.roomID}.json`)
      .then(res => {
        console.log('res', res.data);
        const user = res.data.user;
        this.setState({ user });
      });
    // this.setupSubscription();
  }

  updatePosts = (post) => {
    this.setState({
      posts: this.state.posts.concat({
        user_first_name: post.user.first_name, description: post.description
      })
    });
  }

  // setupSubscription() {
  //   App.cable.subscriptions.create('PostsChannel', {
  //     received(post) {
  //       return this.updatePosts(post);
  //     },
  //     updatePosts: this.updatePosts.bind(this)
  //   });
  // }

  render() {
    // console.log("REQUEST", this.props.roomID);
    return(
      <div className="components-container">
        { this.state.user && this.state.user.posts.map((obj) => {
          return (
            <PinboardItemModal key={obj.id} title={obj.title} description={obj.description} img={obj.content.url} thumb={obj.content.thumb.url} link={obj.link} user={this.state.user} postID={this.state.user.posts.id} category={obj.category} />
            )
        })}
      </div>
    )
  }
}
