import React, {Component} from 'react'
import Message from './Message.jsx'
 class MessageList extends Component {
  render() {
    const messagesObj = this.props.messages.map((msg) =>
      <Message user={msg.username} content={msg.content}/>
    )
     return (
      <div className="messagelist">
        {messagesObj}
      </div>
    );
  }
}
 export default MessageList 
