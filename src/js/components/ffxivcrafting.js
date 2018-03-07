import React, { Component } from 'react';

class FFXIVCrafting extends Component {
	render() {
		return (
      <div className="proj-sum">
        <div className="proj-sum-header">
          <div className="proj-sum-img-div">
            <a href="https://www.amazon.com/Final-Fantasy-Crafting-Recipes-List/dp/B07465GLLV/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1520104194&sr=1-1&keywords=final+fantasy"><img className="proj-sum-img" src="https://github.com/sogalutira/my-portfolio/blob/master/src/assets/ffxivcrafting.png?raw=true"></img></a>
          </div>
          <div className="proj-sum-info">
            <h3>Final Fantasy Crafting XIV Recipes List</h3>
            <a href="https://www.amazon.com/Final-Fantasy-Crafting-Recipes-List/dp/B07465GLLV/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1520104194&sr=1-1&keywords=final+fantasy">View Final Fantasy XIV Crafting Recipes List</a>
            <br/><span>This is a fan made skill for crafters who play the Massively Multiplayer Online Role Playing Game Final Fantasy XIV. Final Fantasy XIV Crafting Recipes List was created with the help of XIVDB API.</span>
            <div className="proj-sum-list">
              <div className="proj-holder">
                <li>Amazon Alexa Skill</li>
                <li>Invocation Name: fourteen crafting</li>
                <li>Search for materials and its quantities needed for a crafted item</li>
              </div>
            </div>
          </div>
        </div>
        <div className="proj-list">
          <div className="proj-holder">
            <li>Amazon Alexa Skill</li>
            <li>Invocation Name: fourteen crafting</li>
            <li>Search for materials and its quantities needed for a crafted item</li>
          </div>
        </div>
      </div>
		)
	}
}

export default FFXIVCrafting;