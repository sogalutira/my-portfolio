import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portfolio from '../containers/Portfolio';
import MenuLayout from '../containers/MenuLayout';
// import { Router, Route, browserHistory } from 'react-router';
import { Switch, HashRouter, Route } from 'react-router-dom';

class Routes extends Component {
	render(){
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={MenuLayout} />
					<Route path="/portfolio" component={Portfolio} />
				</Switch>
			</HashRouter>
		)
	}
}

export default Routes;