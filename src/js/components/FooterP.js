import React, { Component } from 'react';
import { Link } from 'react-router';
let PUBLIC_URL = "/my-portfolio/";

export default class FooterP extends Component {
	render() {
		return (
			<div className="footerp">
        <li>
        	<Link to="PUBLIC_URL">
        		<i className="fas fa-home"></i>
        		Home
        	</Link>
        </li>
        <li>
	        <a href="https://github.com/sogalutira">
	          <i className="fab fa-github-square"></i>
	          GitHub
	        </a>
	      </li>
	      <li>
	        <a href="https://www.linkedin.com/in/sgalutira/">
	          <i className="fab fa-linkedin"></i>
	          LinkedIn
	        </a>
	      </li>
	      <li>
          <i className="far fa-envelope"></i>
          sheena.galutira@gmail.com
        </li>
			</div>
		)
	}
}