import React, { Component } from 'react';

class Activit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateIncrement: ''
    };

    this.getDate = this.getDate.bind(this);
  }

  getDate() {
    let initialDate = new Date(2018, 1, 26); // Feb 27, 2018
    let now = Date.now();
    let difference = now - initialDate;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let monthCount = millisecondsPerDay * 30;
    let daysSince = Math.floor(difference / monthCount);
    this.setState({dateIncrement: daysSince});
  }

  componentDidMount () {
    this.getDate();
  }
  
	render() {
		return (
      <div className="proj-sum">
        <div className="proj-sum-header">
          <div className="proj-sum-img-div">
            <img className="proj-sum-img" src="https://github.com/sogalutira/my-portfolio/blob/master/src/assets/activiterscreen.png?raw=true"></img>
          </div>
          <div className="proj-sum-info">
            <h3>Activiter</h3>
            <h4>Full Stack Developer</h4>
            <h4 id="exp">EXP: 10 months </h4>
            <div className="proj-sum-list">
              <div className="proj-holder">
                <li>Vuejs</li>
                <li>Nuxt</li>
                <li>Vuetify</li>
                <li>Sails</li>
                <li>Waterline</li>
              </div>
              <div className="proj-holder" id="column2">
                <li>PostgreSQL</li>
                <li>Grunt</li>
                <li>Less</li>
                <li>Data Visualization</li>
                <li>Tableau</li>
              </div>
            </div>
          </div>
        </div>
        <div className="proj-list">
          <div className="proj-holder">
            <li>JavaScript</li>
            <li>Vuejs</li>
            <li>Nuxt</li>
            <li>Vuetify</li>
            <li>Sails</li>
          </div>
          <div className="proj-holder" id="column2">
            <li>PostgreSQL</li>
            <li>Grunt</li>
            <li>Less</li>
            <li>Data Visualization</li>
            <li>Tableau</li>
          </div>
        </div>
      </div>
		)
	}
}

export default Activit;