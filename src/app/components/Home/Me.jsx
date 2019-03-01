/* jshint unused:false */
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { IoLogoNodejs, IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import avatar from '../../asset/img/avatar.jpg';
import './styles/me.css';

const markMe = `
  Soy un Venezolano desarrollador de aplicaciones Web, basadas en Javascript principalmente, siendo fiel al stack MERN, combinado con la aplicación de Redux, Web Sockets y mucho más..., logrando una amplia gama de aplicaciones para distintas finalidades.
`;

class HomeMe extends Component {
  render() {
    const { isntPhone } = this.props;
    return pug`
      article.i-am
        section.i-am-last-envolp
          if isntPhone
            Image(src=avatar fluid roundedCircle)

          section.i-am-container
            h3 ¿Quien es Eduardo González?

            ReactMarkdown(source=markMe)

            footer
              IoLogoNodejs

              IoLogoJavascript.beat

              FaReact.spinner
`;
  }
}
export default HomeMe;
