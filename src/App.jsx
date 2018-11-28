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
          id: 111,
          username: "Bryan",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 112,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
        },
        {
          id: 113,
          username: "Bryan",
          content: "Rats"
        }
      ]
    }
    this.handleTextEnter = this.handleTextEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.stopPropagation()  
     if (event.key === 'Enter') {
       let uName;                           //defining variable uName to reference this.state.currentUser.name 
       if (!this.state.currentUser.name) {
        uName = "Anonymous"                 //nested if statemnt to display sifferent data depending on this.state.currentUser.name
      } else {
        uName = this.state.currentUser.name
      }
       const enterMsg = {
        id: Date.now(), 
        username: this.state.currentUser.name, //defining enter msg as an object with appropriate key/value pairs
        content: this.state.text
      }
      const messages = this.state.messages.concat(enterMsg) // Update the state of the app component.
                                                            // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages, text: ""})
      event.target.value = ""  //resetting the values in the form back to the placeholder
    }
  }
   handleTextEnter(event) {
    this.setState({text: event.target.value});
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  // Called after the component was rendered and it was attached to the
  // DOM. This is a good place to make AJAX requests or setTimeout.

  render() {
    return (
      <div>
       <Navbar /> <MessageList messages={this.state.messages}/> <ChatBar user={this.state.currentUser} handleSubmit={this.handleSubmit} handleTextEnter={this.handleTextEnter}/>
      </div>
    );
  }
}
export default App;


//line 34- calling the Chatbar, Navbar and MessageList components inside of a div tag in app.jsx, the root component, so they  will be rendered onto the page
//line 34- defining user variable and this.state.currentUser, defining messages variable as this.state.messages
