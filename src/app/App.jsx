/* jshint ignore:end */
import React, { Component } from 'react';
import  {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Smsmass from './components/Smsmass/Smsmass';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <BrowserRouter >
          <Switch>
            <Route path="/tableOfContacts" component={Smsmass} />
            <Route path="/smsmass" component={Smsmass} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;