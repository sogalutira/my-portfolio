import React, { Component } from 'react';

class PixelPaint extends Component {
	render() {
		return (
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
		)
	}
}

export default PixelPaint;