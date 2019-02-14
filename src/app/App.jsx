import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        
        <Route exact path="/" component={Home}/>
        {/*<Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>*/}
      </Router>
    );
  }
}

export default App;
