import React, { Component } from 'react';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <header className="Home-header">
        <Navbar />
        
        {/*<span>¡Hola mundo!</span><div className="Home-body">
          <p>
             Te saludo yo
             <strong> Ed</strong>uado
             <strong> Lu</strong>is
             <strong> Go</strong>nzález
             <strong> Ra</strong>veli.
             <br/>Bienvenidos a <strong>EdluGora</strong>
             <br/><small><i>"Te sorprendería la cantidad de familiares y amigos que no entienden mi acrónimo".</i></small>
           </p>
           <p>
             <strong>Me presento tecnicamente:</strong>
             <br/>Soy un desarrollador Web, desarrollo aplicaciones basadas en Javascript principalmente, siguiendo la corriente MERN lo complemento con Redux, Web Sockets y mucho más..., logrando una alta gama de aplicaciones para distintas finalidades.
           </p>
        </div>*/}
       </header>
    );
  }
}

export default Home;

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