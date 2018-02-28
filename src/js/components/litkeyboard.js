import React, { Component } from 'react';

class LitKeyboard extends Component {
	render() {
		return (
      <div className="proj-sum">
        <div className="proj-sum-header">
          <div className="proj-sum-img-div">
            <a href="https://sogalutira.github.io/my-lit-keyboard/"><img className="proj-sum-img" src="https://github.com/sogalutira/my-portfolio/blob/master/src/assets/litkeyboard.png?raw=true"></img></a>
          </div>
          <div className="proj-sum-info">
            <h3>My Lit Keyboard</h3>
            <a href="https://sogalutira.github.io/my-lit-keyboard/">github.io/my-lit-keyboard</a>
            <br/><span>A virtual mechanical keyboard for everyone to enjoy while they type notes on a virtual note pad.</span>
            <div className="proj-sum-list">
              <div className="proj-holder">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </div>
            </div>
          </div>
        </div>
        <div className="proj-list">
          <div className="proj-holder">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </div>
        </div>
      </div>
		)
	}
}

export default LitKeyboard;