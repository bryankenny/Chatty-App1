import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("<Message/>:", this.props.username);

    return (
      <div className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">{this.props.content}</span>
      </div>
    );
  }
}
export default Message;