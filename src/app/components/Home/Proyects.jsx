/* jshint unused:false */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import smsIcon from '../../asset/img/smsmass.svg';
import logo from '../../asset/img/avatar.ico';
import './styles/proyects.css';

const markSmsmass = `
## SMS Mass
Es un aplicación con la que puedes mandar miles de SMS sin mucho esfuerso, a partir de una lista de contactos y un mensaje, en instantes lograras:
- Cominicar tus campañas de marketing.
- Comunicar a tus empleados cualquier evento a celebrar.
- Enviar tus recordatorios.
- Enviar SMS personalizados, atraves del manejo de variables.
`;

const markEdlugora = `
#### EdluGora
*Mi pagina principal donde listaré todos los proyectos que llevo acabo.*
`;
const markSmass = `
#### SMSmass
*Poderosa App con la cual podras mandar miles de SMS de manera sencilla.*
`;

class HomeProyects extends Component {
  render() {
    return pug`
      .Proyects
        ul.summaryProyects
          Link(to="/")#edlugora.active
            Image.caption(src=logo roundedCircle)
            pre(markdown="true").body: ReactMarkdown(source=markEdlugora)

          Link(to="# ")#smass
            Image.caption(src=smsIcon rounded)
            pre(markdown="true").body: ReactMarkdown(source=markSmass)

        hr

        h1.myProyects Mis Proyectos

        article.descriptionProyects
          section.smsmass
            pre(markdown="true"): ReactMarkdown(source=markSmsmass)

          section.smsLogo

        hr
`;
}
}
export default HomeProyects;

/* article.smsmass
  img(src=smsIcon).ProyectsSmsmassImg

  .ProyectsSmsmassBody
    ReactMarkdown(source=markProyects)

    Link(to="/sm smass" className="btn btn-primary") Go SMS Mass*/