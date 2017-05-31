import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Pinboard from './Pinboard.jsx'
// import PropTypes from 'prop-types';
import axios from 'axios';
import ActionCable from 'actioncable';

export default
class PinboardApp extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      user: props.userData.data.user,
      roomName: "",
      roomID: 0,
      roomAxiosData:"",
      here: "",
      posts:[],
    };
  }

  updatePostsFromDB = () => {
    console.log("updating from db ... ")
    var location = window.location['pathname'].split('/')[2];
    axios.get(`/rooms/${location}.json`).then((res) => {
        this.setState({
          posts:res.data.room.posts
        })
    });
  }

  componentWillMount() {
    var location = window.location['pathname'].split('/')[2];
    var name = "";
    var ID = "";
    axios.get(`/rooms/${location}.json`).then((res) => {
      name = res.data.room.name;
      ID = res.data.room.id;
      this.setState({
        roomName: name,
        roomID: ID,
        roomAxiosData: res.data.room,
        posts:res.data.room.posts
      })
    });
  }

  componentDidMount() {
    this.setSubscription();
  }

  componentWillUnmount() {
    if(!this.cable) { return; }
    this.cable.disconnect();
  }

  setSubscription() {
    console.log('setting subscription ', ActionCable);
    this.cable = ActionCable.createConsumer();
    this.cable.subscriptions.create("PostChannel", {
      connected: () => {
        console.log('connected')
      },
      disconnected: (e) => {
        console.log('disconnected', e)
      },
      received: (data) => {
        this.updatePostsFromDB(data);
      }
    });
  }

  updatePinboardApp = () => {
    //this.updatePostsFromDB();
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.user} />
        <Pinboard updatePinboardApp={this.updatePinboardApp}
                  userData={this.state.user}
                  roomName={this.state.roomName} 
                  roomID={this.state.roomID} 
                  roomAxiosData={this.state.roomAxiosData} 
                  posts={this.state.posts} />
      </div>
    );
  }
}
