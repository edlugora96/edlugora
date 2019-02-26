import React, { Component } from 'react';
import { scrollTo } from 'scroll-js';

import HomeHeader from './Header';
import HomeProyects from './Proyects';
import HomeMe from './Me';
import HomeForm from '../Form/Form';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      readMoreBtnText : 'Leer todo',
      showReadMoreState : false,
      isntPhone : false,
      menuActive: 'proyects'
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSeeMore = this.handleSeeMore.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
  }
  handleResize() {
    this.setState({
      isntPhone:window.matchMedia('(min-width: 700px)').matches
    });
  }
  handleScroll() {
    let el = document.querySelector('.Home-header-body'),
        el2 = document.querySelector('.i-am'),
        el3 = document.querySelector('.i-am-last-envolp'),
        el5 = document.querySelector('.donate'),
        el6 = document.querySelector('.proyects'),
        el7 = document.querySelector('.contact-to-me');
    if (window.scrollY<el.scrollHeight) {
      el.style.top = -56-(window.scrollY/2) +'px';
    }
    if (window.scrollY>el6.offsetTop+el.scrollHeight-200&& window.scrollY<el6.offsetTop+el.scrollHeight+el6.scrollHeight-200) {
      this.setState({menuActive:'proyects'});
    }
    if (window.scrollY>el7.offsetTop+el.scrollHeight-200&& window.scrollY<el7.offsetTop+el.scrollHeight+el7.scrollHeight-200) {
      this.setState({menuActive:'contact-to-me'});
    }
    if (window.scrollY>el2.offsetTop+el.scrollHeight-200&& window.scrollY<el2.offsetTop+el.scrollHeight+el2.scrollHeight-200) {
      el2.classList.add('i-am-fade-slide-down');
      this.setState({menuActive:'i-am'});
    }
    if (window.scrollY>el5.offsetTop+el.scrollHeight-100&& window.scrollY<el5.offsetTop+el.scrollHeight+el5.scrollHeight-200) {
      el5.classList.add('donate-show');
      this.setState({menuActive:'donate'});
    }
    if (window.scrollY>el2.offsetTop+el.scrollHeight&& window.scrollY<el2.offsetTop+el.scrollHeight+el2.scrollHeight) {
      el3.style.top = (window.pageYOffset-(el2.offsetTop+el.scrollHeight))/2 +'px';
      // el4.style.top = (window.pageYOffset-(el2.offsetTop+el.scrollHeight))/2 +"px"
      // console.log(el3.style.top)
    }
  }
  handleSeeMore(){
    let el = document.querySelector('.Home-body');
    scrollTo(document.body, { top: el.offsetTop, easing: 'ease-in-out' });
  }
  toggleReadMore(){
    let msjBtn = 'Leer todo';
    if (!this.state.showReadMoreState) {
      msjBtn = 'Leer nemos';
    }
    this.setState({
      readMoreBtnText : msjBtn,
      showReadMoreState: !this.state.showReadMoreState
    });
  }
  handleScrollTo(e){
    let el0 = document.querySelector('.Home-header-body'),
        el = document.querySelector(`.${e.currentTarget.id}`);
    this.setState({menuActive:e.currentTarget.id});
    scrollTo(document.body, { top: el.offsetTop+el0.scrollHeight, easing: 'ease-in-out' });
    console.log(el.offsetTop+el0.scrollHeight);
  }
  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('resize', this.handleResize);
    // window.addEventListener('load', this.handleResize);
    // document.querySelector('#see-more').addEventListener('click', this.handleSeeMore);
    // document.querySelector('#proyects').addEventListener('click', this.handleScrollTo);
    // document.querySelector('#i-am').addEventListener('click', this.handleScrollTo);
    // document.querySelector('#contact-to-me').addEventListener('click', this.handleScrollTo);
    // document.querySelector('#donate').addEventListener('click', this.handleScrollTo);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
    // window.removeEventListener('resize', this.handleResize);
    // window.removeEventListener('load', this.handleResize);
    // document.querySelector('#see-more').removeEventListener('click', this.handleSeeMore);
    // document.querySelector('#proyects').removeEventListener('click', this.handleScrollTo);
    // document.querySelector('#i-am').removeEventListener('click', this.handleScrollTo);
    // document.querySelector('#contact-to-me').removeEventListener('click', this.handleScrollTo);
    // document.querySelector('#donate').removeEventListener('click', this.handleScrollTo);
  }
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
