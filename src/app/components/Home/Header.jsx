/* jshint unused:false */
import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';
import Typed from 'typed.js';
import Prism from 'prismjs';
import 'gsap/src/uncompressed/plugins/ScrollToPlugin';
import './styles/header.css';

const expressCode = `
/* Express Server */
const app = require('express')();

app.set('view engine', 'pug');
app.get('/', function(req, res){
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!'
  });
});

app.listen(3000, function(){
  console.log('listening on *:3000');
});
`,
  pugCode = `
//- Pug template
doctype html
html(lang="en")
  head
    title= title
  body
    h1 Pug Examples
    div.container
      p= message
`,
stylusCode = `
// Stylus
base-font-size = 12px
body-background = invert(#ccc)
body
  color #333
  background body-background
  font-size base-font-size
`;
const typeStrings = [
  Prism.highlight(pugCode, Prism.languages.pug),
  Prism.highlight(stylusCode, Prism.languages.stylus),
  Prism.highlight(expressCode, Prism.languages.javascript)
];
const options = {
  strings: typeStrings,
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
};
class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.handleScroll  = this.handleScroll.bind(this);
    this.handClickLink = this.handClickLink.bind(this);
  }

  handleScroll(){
    this.header.classList.add('hero-caption');
    this.headerme.style.transform = 'translateX('+ ((window.scrollY*2)*-1) + 'px)';
    this.headercaption.style.transform = 'translateY('+ (window.scrollY/0.95) + 'px)';
    this.headergreeting.style.transform = 'translateY('+ (window.scrollY/1.8) + 'px)';
  }
  handClickLink(){
    TweenMax.to(window, 1, { scrollTo: { y: '.Proyects' } });
  }
  componentDidMount() {

    this.header = document.querySelector('#HomeHeader');
    this.headerme = document.querySelector('.home-header-me');
    this.headercaption = document.querySelector('.caption');
    this.headergreeting = document.querySelector('.home-header-body');
    this.typeHeader = document.querySelector('#typeHeader');
    this.linkProyects = document.querySelector('.toProyects');

    window.addEventListener('load', this.handleScroll);
    window.addEventListener('scroll', this.handleScroll);
    this.linkProyects.addEventListener('click',this.handClickLink);

    this.typed = new Typed(this.typeHeader, options);

  }
  componentWillUnmount() {
    window.removeEventListener('load', this.handleScroll);
    window.removeEventListener('scroll', this.handleScroll);
    this.linkProyects.removeEventListener('click',this.handClickLink);
    this.typed.destroy();
  }
  render() {
    return pug`
      header#HomeHeader.home-header
        .home-header-me
          Link(to="# ").toProyects: IoIosArrowDown

        div.caption
          p.home-wellcome Bienvenidos a:

          h1.home-brand EdluGora

        .home-greeting-wrap
          section.home-header-body
            pre.line-numbers
              code#typeHeader

          section.home-header-right
  `;
  }
}
export default HomeHeader;