import React, {Component} from 'react'
 
class ChatBar extends Component {
  render() {
  
    let name;

    if (!this.props.user.name) {
        return "Anonymous"
    }
    else {
        name = this.props.user.name
    }
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Anonymous" value={this.props.user.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={this.props.handleTextEnter}
               onKeyDown={this.props.handleSubmit} />
      </footer>  //passing functions through props to Chatbar
    );
  }
}
 export default ChatBar 