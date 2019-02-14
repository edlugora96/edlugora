import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap';
import { FaKey } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import logo from '../../asset/img/favicon.ico';
class Navbar extends Component {
  render() {
    return (
      <nav className="Home-Navbar">
        <ul className="Home-Navbar-ul">
          <Link to="/" className="Home-Navbar-brand"><Image roundedCircle fluid src={logo} alt="Logo EdluGora"/> EdluGora</Link>
          <Link to="/" className="Home-Navbar-login"><FaKey className="beatHover"/></Link>
          <Link to="/" className="Home-Navbar-config"><FaCog className="spinnerHover"/></Link>
        </ul>
       </nav>
    );
  }
}

export default Navbar;