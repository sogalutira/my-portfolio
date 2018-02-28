import React, { Component } from 'react';

class Styles4Hue extends Component {
	render() {
		return (
      <div className="proj-sum">
        <div className="proj-sum-header">
          <div className="proj-sum-img-div">
            <a href="http://www.stylesforhue.com/"><img className="proj-sum-img" src="https://github.com/sogalutira/my-portfolio/blob/master/src/assets/stylesforhue.png?raw=true"></img></a>
          </div>
          <div className="proj-sum-info">
            <h3>Styles for Hue</h3>
            <a href="http://www.stylesforhue.com/">www.stylesforhue.com</a>
            <br/><span>Quick and easy prototyping for projects. Allows exporting of html and styles.</span>
            <div className="proj-sum-list">
              <div className="proj-holder">
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </div>
              <div className="proj-holder" id="column2">
                <li>Express</li>
                <li>MongoDB</li>
                <li>Sass</li>
              </div>
            </div>
          </div>
        </div>
        <div className="proj-list">
          <div className="proj-holder">
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </div>
          <div className="proj-holder" id="column2">
            <li>Express</li>
            <li>MongoDB</li>
            <li>Sass</li>
          </div>
        </div>
      </div>
		)
	}
}

export default Styles4Hue;