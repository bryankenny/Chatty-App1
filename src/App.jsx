import React, {Component} from 'react';
import Navbar from './Navbar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'


class App extends Component {
  
  render() {
    return (
      <div>
       <Navbar /> <ChatBar /> <MessageList />
      </div>
    );
  }
}
export default App;
