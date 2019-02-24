import React, { Component } from 'react';
import  {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import Smsmass from './components/Smsmass/Smsmass';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/tableOfContacts" component={Smsmass}/>
          <Route path="/smsmass" component={Smsmass}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;