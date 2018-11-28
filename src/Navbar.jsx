import React, {Component} from 'react'
 class Navbar extends Component {
  render() {
    console.log("Rendering Navbar")
    return (
      <div><nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav></div>
    );
  }
}
 export default Navbar 