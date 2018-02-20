import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';

class Contact extends Component {
	render() {
		return (
			<div id="contact-main">
				<div className="contact-container">
          <div>
            <div className="header-spacer">
            </div>
            <div className="contact-header">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="contact-cont">
            <div className="contact-txt">
              <div id="direct">
                <h2>Direct</h2>
                <li>
                  <i className="far fa-envelope"></i>
                  sheena.galutira@gmail.com
                </li>
                <li>
                  <i className="far fa-address-card"></i>
                  Honolulu, HI
                </li>
              </div>
              <div id="online">
                <h2>Follow</h2>
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
              </div>
            </div>
          </div>
        </div>
			</div>
		)
	}
}

export default withRouter(Contact);