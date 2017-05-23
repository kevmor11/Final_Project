import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        // Loops through all messages contained in the props, maps them to an array which piped into a container rendered into Message.jsx
        var allMessages = this.props.messages.map((message) => {
          return <Message key={message.id} username={message.username} content={message.content} />
        })
        return (
            <main className='messages'>
                {allMessages}
            </main>
        )
    }
}
export default MessageList;