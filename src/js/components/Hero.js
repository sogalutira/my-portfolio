import React, { Component } from 'react';
// import NavBar from './NavBar';
import About from '../containers/About';
import Footer from './Footer';
import Portfolio from '../containers/Portfolio';
import Contact from '../containers/Contact';
import {
  Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';


class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactVisible: false
    };

    this.handleContact = this.handleContact.bind(this);
    this.isHome = this.isHome.bind(this);
  }

  isHome() {
    this.setState({ isContactVisible: false });
  }

  handleContact() {
    this.setState({ isContactVisible: true });
  }

	render() {
    const blur = this.state.isContactVisible ? 'blur-eff': '';
		return (
      <div>
        <div id="hero-img">
          <div id="isContactVisible">
            { this.state.isContactVisible ? <div id="modal"><div id="close" onClick={this.isHome}>x</div><Contact /></div> : null }
          </div>
          <div className="hero-header">
            <div id="about" className={blur}>
              <About/>
            </div>
            <div id="holder">
            <div className="title-selection">
              <div className="icon-holder">
                <div id="home-plane" className="show-on-hover">
                  <i className="far fa-paper-plane"></i>
                  </div>
                <div className="spacer"></div>
                <div onClick={this.isHome}>
                  <Link to="/" replace>Home</Link>
                </div>
              </div>
              <div className="icon-holder">
                <div id="port-plane" className="show-on-hover">
                  <i className="far fa-paper-plane"></i>
                </div>
                <div className="spacer"></div>
                <div><Link to="/portfolio">Portfolio</Link></div>
              </div>
              <div className="icon-holder">
                <div id="contact-plane" className="show-on-hover">
                  <i className="far fa-paper-plane"></i>
                </div>
                <div className="spacer"></div>
                <div id="contact" onClick={this.handleContact}>Contact</div>
              </div>
            </div>
            </div>
          </div>
  			</div>
      </div>
		)
	}
}

export default Hero;