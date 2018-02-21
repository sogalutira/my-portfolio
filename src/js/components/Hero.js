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
  withRouter,
  browserHistory
} from 'react-router';


class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      show: "notActive",
      isVis: false,
      isContactVisible: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.toggleHoverState = this.toggleHoverState.bind(this);
    this.addClassName = this.addClassName.bind(this);
    this.removeClassName = this.removeClassName.bind(this);
    this.handleVis = this.handleVis.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.isHome = this.isHome.bind(this);
  }

  addClassName() {
    this.setState({show: "isActive"});
  }

  removeClassName() {
    this.setState({show: "notActive"});
  }

  handleHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovered: !this.state.isHovered,
    };
  }

 handleVis() {
    this.setState(this.toggleVisState);
  }

  toggleVisState(state) {
    return {
      isVis: !this.state.isVis,
    };
  }

  isHome() {
    this.setState({ isContactVisible: false });
  }

  handleContact() {
    this.setState({ isContactVisible: true });
  }

	render() {
    const willChange = this.state.isHovered ? 'isActive': 'notActive';
    const willShow = this.state.isVis ? 'isActive': 'notActive';
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
              <div className="icon-holder"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
              >
                <div id="home-plane" className={willChange}>
                  <i className="far fa-paper-plane"></i>
                  </div>
                <div className="spacer"></div>
                <div onClick={this.isHome}>
                  <Link to="/">Home</Link>
                </div>
              </div>
              <div className="icon-holder"
                onMouseEnter={this.addClassName}
                onMouseLeave={this.removeClassName}
              >
                <div id="port-plane" className={this.state.show}><i className="far fa-paper-plane"></i></div>
                <div className="spacer"></div>
                <div><Link to="/portfolio">Portfolio</Link></div>
              </div>
              <div className="icon-holder"
                onMouseEnter={this.handleVis}
                onMouseLeave={this.handleVis}
              >
                <div id="contact-plane" className={willShow}><i className="far fa-paper-plane"></i></div>
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

export default withRouter(Hero);