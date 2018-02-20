import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import FooterP from '../components/FooterP';

let detailView;

class Portfolio extends Component {
	render() {
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
                    <img className="proj-sum-img" src="../src/assets/activiterscreen.png"></img>
                  </div>
                  <div className="proj-sum-info">
                    <h3>Activiter</h3>
                    <h4>Full Stack Developer</h4>
                    <h4>EXP: 8 months</h4>
                    <div className="proj-sum-list">
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
                    <a href="http://www.stylesforhue.com/"><img className="proj-sum-img" src="../src/assets/stylesforhue.png"></img></a>
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
                    <a href="https://junior-devleague.github.io/sounds-of-the-sea/"><img className="proj-sum-img" src="../src/assets/soundsea.png"></img></a>
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
                    <a href="https://sogalutira.github.io/PixelPainter/"><img className="proj-sum-img" src="../src/assets/pixelpainter.png"></img></a>
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
                    <a href="https://sogalutira.github.io/my-lit-keyboard/"><img className="proj-sum-img" src="../src/assets/litkeyboard.png"></img></a>
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