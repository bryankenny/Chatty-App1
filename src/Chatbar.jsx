import React, {Component} from 'react'
 class ChatBar extends Component {
  render() {
  
    var name;
    if (!this.props.user.name) {
        return "Anonymous User"
    }
    else {
        name = this.props.user.name
    }

    console.log("Rendering ChatBar")
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.user.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
 export default ChatBar 