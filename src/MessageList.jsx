import React, {Component} from 'react'
import Message from './Message.jsx'
 class MessageList extends Component {
  render() {
    const msgList = this.props.messages.map((msg) =>
    <Message user={msg.username} content={msg.content} key={msg.id}/>
    )
     return (
      <div className="messagelist">
        {msgList}
      </div>
    );
  }
}
 export default MessageList 
