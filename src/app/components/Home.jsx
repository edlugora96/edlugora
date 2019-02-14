import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Navbar } from 'react-bootstrap';
import avatar from '../asset/img/avatar.jpg';

class Home extends Component {
  render() {
    return (
      <header className="home">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">EdluGora</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron fluid >
         <Container>
           <h1>¡Hola mundo!</h1>
           <Row>
               <Col>
                 <p>
                   Te saluda 
                   <br/> <strong>Ed</strong>uado 
                   <br/> <strong>Lu</strong>is 
                   <br/> <strong>Go</strong>nzález 
                   <br/> <strong>Ra</strong>veli
                   <br/> <strong>EdluGora</strong>, Les sorprenderia la cantidad de familiares y amigos que no entienden mi acronimo.
                 </p>
               </Col>
               <Col>
                 <p>
                   Me presento tecnicamente:
                   <br/>Soy un desarrollador Web, estudioso, apacionado, y soñador, desarrollo aplicaciones basadas en Node js picipalmente, siguiendo la corriente MERN (Mongodb, Express, React, Node), lo complemnto con la aplicacion de Redux y Web Sockets con Socket.io (si asi lo amerita el poyecto), eso y más mucho más..., para lograr una alta gama de aplicaciones para distintas finalidades.
                   <br/>No me defino como frontend o backend, estudio día a día paa lograr ser Full Stack Developer.
                 </p>
               </Col>
               <Col>
                 <Image src={avatar} rounded fluid/>
               </Col>
           </Row>
         </Container>
        </Jumbotron>
       </header> 
    );
  }
}

export default Home;