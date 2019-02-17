import React, { Component } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { scrollTo } from 'scroll-js';
import { IoMdCheckmarkCircleOutline as Check } from "react-icons/io";
import Navbar from './Navbar';
import smsmass from '../../asset/img/smsmass.svg';

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSeeMore = this.handleSeeMore.bind(this);
  }
  handleScroll() {
    let el = document.querySelector(".Home-header-body")
    el.style.top = -56-(window.scrollY/2) +"px"
  }
  handleSeeMore(){
    let el = document.querySelector(".Home-body")
    // console.log(el.scrollY, el.scrollTop, el.offsetTop)
    scrollTo(document.body, { top: el.offsetTop, easing: 'ease-in-out' })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.querySelector('#see-more').addEventListener('click', this.handleSeeMore);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('#see-more').removeEventListener('click', this.handleSeeMore);
  }
  render() {
    return (
      <React.Fragment>
        <header className="Home-header">
          <Navbar />
          <section className="Home-header-body">
            <div className="stripe"></div>
            <article>¡Hola mundo!</article>
            <p>
             Te saludo yo
             <strong> Ed</strong>uado
             <strong> Lu</strong>is
             <strong> Go</strong>nzález
             <strong> Ra</strong>veli.
             <br/>Bienvenidos a <strong>EdluGora</strong>
             <br/> <i>"Mi universo Web"</i>
           </p>
           <section className="view-more">
              <Button id="see-more" variant="success">Conoce mis proyectos</Button>
           </section>
          </section>
         </header>
         <section className="Home-body">
          <Card>
            <Card.Body>
              <Card.Title> SMS Mass</Card.Title>
              <Card.Text>
                <img src={smsmass} alt=""/>Con ésta aplicación puedes mandar miles de SMS sin mucho esfuerso, a partir de una lista de contactos y un mensaje, podras: 
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><Check/> Cominicar tus campañas de marketing.</ListGroupItem>
              <ListGroupItem><Check/> Comunicar a tus empleados cualquier evento a celebrar.</ListGroupItem>
              <ListGroupItem><Check/> Mandar tus recordatorios.</ListGroupItem>
              <ListGroupItem>Ademas de tener la capacidad de enviar SMS personalizados, atraves del manejo de variables. ¿Que esperas?</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button variant="primary">¡Envia tus SMS!</Button>
            </Card.Body>
          </Card>
          <article className="i-am">
            <h3>¿Quien es Eduardo Gonzalez?</h3>
            <p>
              Soy un desarrollador Web, desarrollo aplicaciones basadas en Javascript principalmente, siguiendo la corriente MERN, lo complemento con la aplicación de Redux, Web Sockets y mucho más..., para lograr una alta gama de aplicaciones para distintas finalidades.
             </p>
          </article>
         </section>
       </React.Fragment>
    );
  }
}

export default Home;
// onClick={scrollTo(document.body, { top: document.querySelector('.Home-header-body').clientHeight, easing: 'ease-in-out' })}
/*<div className="Home-header-body">
             <p>
               <strong>Me presento tecnicamente:</strong>
               <br/>Soy un desarrollador Web, desarrollo aplicaciones basadas en Javascript principalmente, siguiendo la corriente MERN lo complemento con Redux, Web Sockets y mucho más..., logrando una alta gama de aplicaciones para distintas finalidades.
             </p>
          </div>*/
/*

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

*/