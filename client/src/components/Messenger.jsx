import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      userCount: '', // total active users
      messages: [] // messages coming from the server will be stored here as they arrive
    };
  }

  // TODO: Setup with Action Cable instead of sockets
  // Once the components have mounted, initialize the socket connection to the server
  // componentDidMount() {
  //   this.socket = new WebSocket('ws://localhost:3001/');

  //   // Confirm that the client side can recieve messages from the server
  //   this.socket.onmessage = (event) => {
  //     const incomingMessage = JSON.parse(event.data);
  //     switch(incomingMessage.type) {
  //       case 'incomingMessage':
  //       case 'incomingNotification':
  //         this.setState(this.state.messages = this.state.messages.concat(incomingMessage));
  //         break;
  //       case 'usersCount':
  //         this.setState({userCount: incomingMessage.usersOnline});
  //         break;
  //       default:
  //         throw new Error('Unknown event type: ' + event.data.type);
  //     }
  //   }
  // }

  // Formats the data set (message) acquired using onNewMessage
  makeMessage(content) {
    // TODO - grab current user from session cookie or...?
    const username = this.state.currentUser.name
    const type = 'postMessage';
    return {
      type,
      username,
      content
    }
  }

  // // Formats the notification data set acquired using onNewUsername
  // makeNotification(newUsername) {
  //   const oldName = this.state.currentUser.name;
  //   return {
  //     type: 'postNotification',
  //     content: `User ${oldName} changed their name to ${newUsername}`
  //   }
  // }

  // Passed to ChatBar module and triggered upon press of the Enter key in the message input
  // message prop is then sent to the server-side via socket as a JSON string
  onNewMessage = (content) => {
    const newMessage = this.makeMessage(content);
    this.socket.send(JSON.stringify(newMessage));
  }

  // Passed to ChatBar module and triggered upon press of the Enter key in the username input
  // message prop is then sent to the server-side via socket as a JSON string
  // onNewUsername = (user) => {
  //   const notify = this.makeNotification(user);
  //   this.setState({ currentUser: {name: user}});
  //   this.socket.send(JSON.stringify(notify));
  // }

  // Renders html, including the contained modules
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">ChattyApp</a>
          <img src="https://freeiconshop.com/wp-content/uploads/edd/chat-alt-outline.png" className="icon"/>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser.name} onNewMessage={this.onNewMessage} />
      </div>
    );
  }
}
export default App;
