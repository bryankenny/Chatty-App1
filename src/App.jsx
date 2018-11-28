import React, {Component} from 'react';
import Navbar from './Navbar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      currentUser: {name: "Bryan"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bryan",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  // Called after the component was rendered and it was attached to the
  // DOM. This is a good place to make AJAX requests or setTimeout.
  componentDidMount() {
  }

  render() {
    return (
      <div>
       <Navbar /> <ChatBar user={this.state.currentUser}/> <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
export default App;
