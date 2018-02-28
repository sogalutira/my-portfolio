import React, { Component } from 'react';

class SoundSea extends Component {
	render() {
		return (
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
		)
	}
}

export default SoundSea;