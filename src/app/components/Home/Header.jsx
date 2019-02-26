/* jshint unused:false */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Image } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom'
import './styles/header.css';

const markGreeting = `
  ##### *¡HOLA MUNDO!*\n
  Por 1ra vez te saludo yo **Ed**uado **Lu**is **Go**nzález **Ra**veli.\n
  *"Este es m i universo Web"*
`;

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: ''
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    const header = document.querySelector('#HomeHeader');
    header.classList.add('hero-caption')
    console.log(header.classList);
    // window.scrollY
  }
  componentDidMount() {
  window.addEventListener('load', this.handleScroll);
  }
  componentWillUnmount() {
  window.removeEventListener('load', this.handleScroll);
  }

  render() {
    return pug`
      header#HomeHeader.home-header
        section.home-header-body
          .home-greeting-wrap
            .home-greeting-body
              p.home-wellcome Bienvenidos a:

              h1.home-brand EdluGora

              .home-greeting: ReactMarkdown(source=markGreeting)

              Link(to="# ").home-link: IoIosArrowDown
`;
  }
}
export default HomeHeader;