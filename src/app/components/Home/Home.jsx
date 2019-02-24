import React, { Component } from 'react';
import { Button, Card, ListGroup, ListGroupItem, Form, Navbar as NavbarBootstrap, Dropdown, Nav, Image } from 'react-bootstrap';
import { scrollTo } from 'scroll-js';
import { IoMdCheckmarkCircleOutline as Check, IoLogoNodejs, IoLogoJavascript} from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { MdMenu, MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom'
import moment from 'moment';
import Navbar from './Navbar';
import avatar from '../../asset/img/avatar.jpg';
import smsmass from '../../asset/img/smsmass.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      readMoreBtnText : 'Leer todo',
      showReadMoreState : false,
      isntPhone : false,
      menuActive: 'proyects'
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSeeMore = this.handleSeeMore.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
  }
  handleResize() {
    this.setState({
      isntPhone:window.matchMedia("(min-width: 700px)").matches
    })
  }
  handleScroll() {
    let el = document.querySelector(".Home-header-body"),
        el2 = document.querySelector(".i-am"),
        el3 = document.querySelector(".i-am-last-envolp"),
        el5 = document.querySelector(".donate"),
        el6 = document.querySelector(".proyects"),
        el7 = document.querySelector(".contact-to-me")
    if (window.scrollY<el.scrollHeight) {
      el.style.top = -56-(window.scrollY/2) +"px"
    }
    if (window.scrollY>el6.offsetTop+el.scrollHeight-200&& window.scrollY<el6.offsetTop+el.scrollHeight+el6.scrollHeight-200) {
      this.setState({menuActive:'proyects'})
    }
    if (window.scrollY>el7.offsetTop+el.scrollHeight-200&& window.scrollY<el7.offsetTop+el.scrollHeight+el7.scrollHeight-200) {
      this.setState({menuActive:'contact-to-me'})
    }
    if (window.scrollY>el2.offsetTop+el.scrollHeight-200&& window.scrollY<el2.offsetTop+el.scrollHeight+el2.scrollHeight-200) {
      el2.classList.add('i-am-fade-slide-down');
      this.setState({menuActive:'i-am'})
    }
    if (window.scrollY>el5.offsetTop+el.scrollHeight-100&& window.scrollY<el5.offsetTop+el.scrollHeight+el5.scrollHeight-200) {
      el5.classList.add('donate-show');
      this.setState({menuActive:'donate'})
    }
    if (window.scrollY>el2.offsetTop+el.scrollHeight&& window.scrollY<el2.offsetTop+el.scrollHeight+el2.scrollHeight) {
      el3.style.top = (window.pageYOffset-(el2.offsetTop+el.scrollHeight))/2 +"px"
      // el4.style.top = (window.pageYOffset-(el2.offsetTop+el.scrollHeight))/2 +"px"
      // console.log(el3.style.top)
    }
  }
  handleSeeMore(){
    let el = document.querySelector(".Home-body")
    scrollTo(document.body, { top: el.offsetTop, easing: 'ease-in-out' })
  }
  toggleReadMore(){
    let msjBtn = 'Leer todo'
    if (!this.state.showReadMoreState) {
      msjBtn = 'Leer nemos'
    }
    this.setState({
      readMoreBtnText : msjBtn,
      showReadMoreState: !this.state.showReadMoreState
    })
  }
  handleScrollTo(e){
    let el0 = document.querySelector(".Home-header-body"),
        el = document.querySelector(`.${e.currentTarget.id}`)
    this.setState({menuActive:e.currentTarget.id})
    scrollTo(document.body, { top: el.offsetTop+el0.scrollHeight, easing: 'ease-in-out' })
    console.log(el.offsetTop+el0.scrollHeight)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('load', this.handleResize);
    document.querySelector('#see-more').addEventListener('click', this.handleSeeMore);
    document.querySelector('#proyects').addEventListener('click', this.handleScrollTo);
    document.querySelector('#i-am').addEventListener('click', this.handleScrollTo);
    document.querySelector('#contact-to-me').addEventListener('click', this.handleScrollTo);
    document.querySelector('#donate').addEventListener('click', this.handleScrollTo);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('load', this.handleResize);
    document.querySelector('#see-more').removeEventListener('click', this.handleSeeMore);
    document.querySelector('#proyects').removeEventListener('click', this.handleScrollTo);
    document.querySelector('#i-am').removeEventListener('click', this.handleScrollTo);
    document.querySelector('#contact-to-me').removeEventListener('click', this.handleScrollTo);
    document.querySelector('#donate').removeEventListener('click', this.handleScrollTo);
  }
  render() {
    const { showReadMoreState, readMoreBtnText, menuActive, isntPhone } = this.state
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
          <NavbarBootstrap className="Home-body-navbar" bg="dark">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" as={CustomToggle} ><MdMenu/> <span>Menu</span><MdArrowDropDown/>
              </Dropdown.Toggle>

              <Dropdown.Menu className="Home-dropdown-menu">
                <Dropdown.Item id="proyects" active={menuActive=="proyects"?true:false}>Proyectos</Dropdown.Item>
                <Dropdown.Item id="i-am" active={menuActive=="i-am"?true:false}>Conoceme</Dropdown.Item>
                <Dropdown.Item id="contact-to-me" active={menuActive=="contact-to-me"?true:false} >Contactame</Dropdown.Item>
                <Dropdown.Item id="donate" active={menuActive=="donate"?true:false}>Apoyame</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavbarBootstrap>
          <Card className="proyects">
            <Card.Body>
              <Card.Title> SMS Mass</Card.Title>
              <Card.Text>
                <img src={smsmass} alt=""/>Con ésta aplicación puedes mandar miles de SMS sin mucho esfuerso, a partir de una lista de contactos y un mensaje, podras:
                  {!isntPhone?
                    <Button onClick={this.toggleReadMore} variant="primary" size="sm">
                      {readMoreBtnText}
                    </Button>
                    :''
                  }
              </Card.Text>
            </Card.Body>
            <ListGroup className={`list-group-flush ${showReadMoreState||isntPhone?'list-group-item-show':''}`}>
              <ListGroupItem><Check/> Cominicar tus campañas de marketing.</ListGroupItem>
              <ListGroupItem><Check/> Comunicar a tus empleados cualquier evento a celebrar.</ListGroupItem>
              <ListGroupItem><Check/> Mandar tus recordatorios.</ListGroupItem>
              <ListGroupItem>Ademas de tener la capacidad de enviar SMS personalizados, atraves del manejo de variables. ¿Que esperas?</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to="/smsmass" className="btn btn-primary">¡Envia tus SMS!</Link>
            </Card.Body>
          </Card>
          <article className="i-am">
            <h3>¿Quien es Eduardo Gonzalez?</h3>
            <section className="i-am-last-envolp"><section className="i-am-container">
                <p>
                  Soy un desarrollador Web, desarrollo aplicaciones basadas en Javascript principalmente, siguiendo la corriente MERN, aunado con la aplicación de Redux, Web Sockets y mucho más..., logrando una amplia gama de aplicaciones para distintas finalidades.
                 </p>
                  <footer>
                    <IoLogoNodejs/>
                    <IoLogoJavascript className="beat"/>
                    <FaReact className="spinner"/>
                  </footer>
              </section>
              {isntPhone?<Image src={avatar} fluid roundedCircle  />:''}</section>
          </article>
          <Form className="contact-to-me">
            <h3>Contactame</h3>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su apellido" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su dirección de email" />
            </Form.Group>
              <Form.Text className="text-muted">
                Nunca compartiremos tu información personal con nadie más.
              </Form.Text>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
          <article className="donate">
            <a href="https://paypal.me/edlugora" target="_blank">
              <section>
                <h3>¿Me ayudas a<br/> continuar con mis metas?</h3>
                <p>Siempre necesitaremos de una mano amiga.</p>
              </section></a>
            <Button variant="success" href="https://paypal.me/edlugora" target="_blank">Apoyar</Button>
          </article>
       </section>
       <footer className="Home-footer">
         <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from
           <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a> <br/>is licensed by
           <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" > CC 3.0 BY</a>
         </div> <br/>
         &#169; {moment().format('YYYY')=="2019"?moment().format('YYYY'):`2019 - ${moment().format('YYYY')}` } por Eduardo Gonzalez
       </footer>
     </React.Fragment>
    );
  }
}

export default Home;

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" className="dropdown-basic" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}
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