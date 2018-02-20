import React, { Component } from 'react';

class Nav extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

	handleScroll() {
	  // var navbarColor = "62,195,246"; //color attr for navbar
	  var navbarColor = "255,255,255";
	  var smallLogoHeight = $('.small-logo').height();
	  var bigLogoHeight = $('.big-logo').height();
	  var navbarHeight = $('.navbar').height(); 
	  
	  var smallLogoEndPos = (navbarHeight - smallLogoHeight) / 2;
	  
	  var ratio = (smallLogoHeight / bigLogoHeight);
	  var ySmall = ($(window).scrollTop() * ratio); 
	  var smallPadding = navbarHeight - ySmall;
	  
	  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
	  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
	  if (smallPadding < 9) { smallPadding = 0; }
	  
	  $('.small-logo-container ').css({ "padding-top": smallPadding});
	  
	  var navOpacity = ySmall / smallLogoHeight; 
	  if  (navOpacity > 1) { navOpacity = 1; }
	  if (navOpacity < 0 ) { navOpacity = 0; }
	  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
	  $('.navbar').css({"background-color": navBackColor});
	  
	  var shadowOpacity = navOpacity / 2;
	  if ( ySmall > 1) {
	    $('.navbar').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
	  } else {
	    $('.navbar').css({"box-shadow": "none"});
	  }
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

	render() {
		return (
			<div>
			<div className="navbar">
			  <li className="header-link">Contact</li>
			  <li className="header-link">Portfolio</li>
			  <li className="header-link">Home</li>
			  <div className="small-logo-container">
			    <h1 className="small-logo">Sheena</h1>
			  </div>
			</div>
			<div className="content">
			  <h1 className="big-logo">Aloha</h1>
			  Full Stack Developer exploring the world of web development and design by continuing my adventure in learning new technologies.
			</div>
			</div>
 
		);
	}
}

export default Nav;