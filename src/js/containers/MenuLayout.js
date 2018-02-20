import React, { Component } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

class MenuLayout extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Footer/>
      </div>
    );
  }
}

export default MenuLayout;