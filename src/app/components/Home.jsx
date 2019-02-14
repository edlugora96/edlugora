import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import avatar from '../asset/img/avatar.jpg';
import logo from '../asset/img/LOGO.svg';
import { FaNodeJs } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';

class Home extends Component {
  render() {
    return (
      <header className="home">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo-eg"
            alt="EdluGora logo"
            />
            EdluGora
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login"><FaKey className="navbar-icon navbar-icon-login"/></a> <a href="#config"><FaCog className="navbar-icon navbar-icon-cog"/></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron fluid >
         <Container>
           <h1>¡Hola mundo!</h1>
           <Row>
               <Col>
                 <p>
                   Te saludo yo
                   <strong> Ed</strong>uado
                   <strong> Lu</strong>is
                   <strong> Go</strong>nzález
                   <strong> Ra</strong>veli.
                   <br/>Bienvenidos a <strong>EdluGora</strong>, <i>"Les sorprendería la cantidad de familiares y amigos que no entienden mi acrónimo".</i>
                 </p>
                 <p>
                   <strong>Me presento tecnicamente:</strong>
                   <br/>Soy un desarrollador Web, desarrollo aplicaciones basadas en Node js principalmente, siguiendo la corriente MERN (Mongodb, Express, React, Node), lo complemento con la aplicación de Redux y Web Sockets con Socket.io (si así lo amerita el proyecto), eso y más mucho más..., para lograr una alta gama de aplicaciones para distintas finalidades.
                 </p>
               </Col>
               <Col className="colIcon" lg={4}>
                <p><strong>Actualmente:</strong> <br/>> He desarrollado una aplicación para enviar SMS desde la web a tu teléfono, (por los momentos solo funciona en Venezuela). <br/>> Y mi página que aun esta en desarrollado. <br/>> Ambas están en su Versión 0.1.0</p>
                 <center>
                   <FaJsSquare className="beat"/>
                   <FaNodeJs className="spinner3d"/>
                   <FaReact className="spinner"/>
                 </center>
                 <p>Contactame: <a href="mailto:entrepreneur@edlugora.ml">entrepreneur@edlugora.ml</a></p>
               </Col>
               <Col lg={3}>
                 <Image src={avatar} roundedCircle  fluid/>
               </Col>
           </Row>
         </Container>
        </Jumbotron>
        <Navbar sticky="bottom" bg="dark" variant="dark">
          <Nav defaultActiveKey as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">Proyectos</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Servicios</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contactame</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
       </header>
    );
  }
}

export default Home;