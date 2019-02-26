/* jshint unused:false */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import smsIcon from '../../asset/img/smsmass.svg';
import './styles/proyects.css';

const markProyects = `
  ## Mis proyectos
  ----
  #### SMS Mass
  Es un aplicación con la que puedes mandar miles de SMS sin mucho esfuerso, a partir de una lista de contactos y un mensaje, en instantes lograras:
  - Cominicar tus campañas de marketing.
  - Comunicar a tus empleados cualquier evento a celebrar.
  - Enviar tus recordatorios.\n\n
  Ademas de tener la capacidad de enviar SMS personalizados, atraves del manejo de variables. \n
  \n**Mensaje:**
  Hola \`<% Nombre %>\` quiero invitarte a \`<% Actividad %>\` este \`<% Dia %>\` no faltes\`<% Variable n %>\`\n\n
  **Tabla de Contactos:**\n
  | Nombre | Telefono | Actividad | Dia | Variable n |
  | ------ | :--------: | :------: | :------: | :------: |
  |Maria|0000-0000000| Jugar | Lunes | ... |
  |Juan|0000-0000000| Comer | Martes | ... |
  |Ana|0000-0000000| Correr | Viernes | ... | \n
  \n
  ---
  **Resultado:**\n

  | Mensajes |
  | ------ |
  | Hola Maria quiero invitarte a Jugar este Lunes no faltes... |
  | Hola Juan quiero invitarte a Comer este Martes no faltes... |
  | Hola Ana quiero invitarte a Correr este Viernes no faltes... |
  ---
`;

class HomeProyects extends Component {
  render() {
    return pug`
      .Proyects
        article.smsmass
          img(src=smsIcon).ProyectsSmsmassImg

          .ProyectsSmsmassBody
            ReactMarkdown(source=markProyects)

            Link(to="/smsmass" className="btn btn-primary") Go SMS Mass
`;
  }
}
export default HomeProyects;
