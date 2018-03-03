import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Activit from '../components/activit';
import FFXIVCrafting from '../components/ffxivcrafting';
import Styles4Hue from '../components/styles4hue';
import SoundSea from '../components/soundsea';
import PixelPaint from '../components/pixelpaint';
import LitKeyboard from '../components/litkeyboard';
import FooterP from '../components/FooterP';


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
              <Activit/>
              <FFXIVCrafting/>
              <Styles4Hue/>
              <SoundSea/>
              <PixelPaint/>
              <LitKeyboard/>
            </div>
          </div>
        </div>
        <FooterP/>
			</div>
		)
	}
}

export default Portfolio;