import React, {Component} from 'react';
import Navbar from './Navbar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

const uuidv1 = require('uuid/v1');

class App extends Component {
    constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.socket = new WebSocket("ws://0.0.0.0:3001")
    this.state = {
      currentUser: {name: "Bryan"},
      messages: [] // messages coming from the server will be stored here as they arrive
    };
     
    this.handleTextEnter = this.handleTextEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
    console.log("componentDidMount <App />");
    
      this.socket.onopen = function (event) {
      this.socket.send(JSON.stringify({username: "Anon", content: "Connected to server!"}))
      console.log("connected 2 server");
    }

    this.socket.onopen = function (event) {
      alert("hello world")
    }

  this.socket.onmessage = function (event) {
    let msgInput = JSON.parse(event.data) //parsed JSON data from the onmessage event, allows for key/value pairs in newMsg to access data ie msgInput.username
    const newMsg = {
      username: msgInput.username,          
      content: msgInput.content,
      id: msgInput.id
    }

  const messages = this.state.messages.concat(newMsg);
  this.setState({messages: messages})
  }

  this.socket.onopen = this.socket.onopen.bind(this);
  this.socket.onmessage = this.socket.onmessage.bind(this);
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
         id: uuidv1(), // calling uuidv1 to generate uuid as id for entered messages
         username: uName, //defining enter msg as an object with appropriate key/value pairs
         content: this.state.text
       }
        const messages = this.state.messages.concat(enterMsg) // Update the state of the app component.
                                                             // Calling setState will trigger a call to render() in App and all child components.
          this.setState({messages: messages, text: ""})

          this.socket.send(JSON.stringify(enterMsg)) //sending stringified JSON data to the server
          event.target.value = ""  //resetting the values in the form back to the placeholder
          
    }
  }

    handleTextEnter(event) {
    this.setState({text: event.target.value});
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