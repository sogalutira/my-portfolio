import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portfolio from '../containers/Portfolio';
import MenuLayout from '../containers/MenuLayout';
import { Router, Route, browserHistory } from 'react-router';
import { Switch } from 'react-router-dom';

class Routes extends Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Switch>
					<Route 
						exact path="/" 
						component={MenuLayout}>
					</Route>
					<Route 
						path="/portfolio" 
						component={Portfolio}>
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default Routes;