import React, { Component } from 'react';

import HomeHeader from './Header';
import HomeProyects from './Proyects';
import HomeMe from './Me';
import HomeForm from '../Form/Form';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <section className="Home-body">
          <HomeProyects/>
          <HomeMe />
          <HomeForm />
        </section>
     </React.Fragment>
    );
  }
}

export default Home;
