import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FooterP from '../components/FooterP';

let detailView;

class Portfolio extends Component {
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
    console.log('date', this.state.dateIncrement);
    return (
      <div className="portfolio-container">
        <div className="port-screens">
  				<h1>Portfolio</h1>
        </div>
        <div className="port">
          <div className="port-holder">
            <div className="tile-holder">
              <div className="proj-sum">
                <div className="proj-sum-header">
                  <div className="proj-sum-img-div">
                    <img className="proj-sum-img" src="https://github.com/sogalutira/my-portfolio/blob/master/src/assets/activiterscreen.png?raw=true"></img>
                  </div>
                  <div className="proj-sum-info">
                    <h3>Activiter</h3>
                    <h4>Full Stack Developer</h4>
                    <h4 id="exp">EXP: {8 + this.state.dateIncrement}+ months </h4>
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
                    <li>Waterline</li>
                    <li>PostgreSQL</li>
                    <li>Grunt</li>
                    <li>Less</li>
                    <li>Data Visualization (D3)</li>
                  </div>
                </div>
              </div>
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
              <div className="proj-sum">
                <div className="proj-sum-header">
                  <div className="proj-sum-img-div">
                    <a href="https://junior-devleague.github.io/sounds-of-the-sea/"><img className="proj-sum-img" src="https://github.com/sogalutira/my-portfolio/blob/master/src/assets/soundsea.png?raw=true"></img></a>
                  </div>
                  <div className="proj-sum-info">
                    <h3>Sounds of the Sea</h3>
                    <a href="https://junior-devleague.github.io/sounds-of-the-sea/">github.io/sounds-of-the-sea</a>
                    <br/><span>Attack the nets using spacebar when the cursor reaches the peak of the wave.</span>
                    <div className="proj-sum-list">
                      <div className="proj-holder">
                        <li>Global Game Jam 2017</li>
                        <li>Phaser.io</li>
                        <li>Game Logic</li>
                        <li>Controls Programming</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="proj-list">
                  <div className="proj-holder">
                    <li>Global Game Jam 2017</li>
                    <li>Phaser.io</li>
                    <li>Game Logic</li>
                    <li>Controls Programming</li>
                  </div>
                </div>
              </div>
              <div className="proj-sum">
                <div className="proj-sum-header">
                  <div className="proj-sum-img-div">
                    <a href="https://sogalutira.github.io/PixelPainter/"><img className="proj-sum-img" src="https://github.com/sogalutira/my-portfolio/blob/master/src/assets/pixelpainter.png?raw=true"></img></a>
                  </div>
                  <div className="proj-sum-info">
                    <h3>Pixel Painter</h3>
                    <a href="https://sogalutira.github.io/PixelPainter/">github.io/PixelPainter</a>
                    <br/><span>Draw 8 bit art.</span>
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
            </div>
          </div>
        </div>
        <FooterP/>
			</div>
		)
	}
}

export default Portfolio;