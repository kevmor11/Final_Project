import React, {PropTypes, Component} from 'react';

class Message extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="message">
                <span className="message-username">{this.props.username}</span>
                <span className="message-content">{this.props.content}</span>
            </div>
        )
    }
}

export default Message;