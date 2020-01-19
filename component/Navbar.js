import React from 'react';
import {NavLink} from 'react-router-dom'; // to use anchors {Link Or NavLink} with react-router  NavLink To add class (active)


// Stateless Component         
// not use {state} here And use {Arrow function} ex. function_name =()=>{}  instead of  {class} 

const Navbar =() => {
return (
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <ul className="navbar-nav">

      <li  className="nav-item">
      <NavLink exact className="nav-link" to="/">Home</NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/login">login</NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/Data">Get JSON Data</NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/Notfound">Not found</NavLink>
      </li>

    </ul>
  </nav>
  )
}
export default Navbar