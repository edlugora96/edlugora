/* jshint unused:false */
import React, { Component } from 'react';
// import { Image } from 'react-bootstrap';
import { FaKey } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
// import logo from '../../asset/img/favicon.ico';
import './navbar.css';
class Navbar extends Component {
  render() {
    if(!window.matchMedia('(max-width: 700px)').matches){
      return pug`
        nav.Home-Navbar
          ul.Home-Navbar-ul
            li.Home-Navbar-brand
              //- Image(roundedCircle fluid src=logo alt="Logo EdluGora")
              | EdluGora

            li.active Proyectos

            li Conoceme

            li Contactame

            a(href="https://paypal.me/edlugora" target="_blank") Donar

            li.Home-Navbar-login
              FaKey.beatHover

            li.Home-Navbar-config
              FaCog.spinnerHover
      `;
    } else {
      return '';
    }
  }
}
export default Navbar;