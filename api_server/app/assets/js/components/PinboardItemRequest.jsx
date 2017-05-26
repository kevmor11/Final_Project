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
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/1.json`)
      .then(res => {
        // console.log('res', res.data);
        const user = res.data.user;
        this.setState({ user });
      });
  }

  render() {
    return(
      <div>
        { this.state.user && this.state.user.posts.map((obj) => {
          return (
            <PinboardItemModal key={obj.id} title={obj.title} description={obj.description} img={obj.content.url} thumb={obj.content.thumb.url} link={obj.link} user={this.state.user} postID={this.state.user.posts.id} category={obj.category} />
            )
        })}
      </div>
    )
  }
}
