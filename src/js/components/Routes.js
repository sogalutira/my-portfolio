import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portfolio from '../containers/Portfolio';
import MenuLayout from '../containers/MenuLayout';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

class Routes extends Component {
	render(){
		return (
			<Router history={browserHistory} basename="`${process.env.PUBLIC_URL}/">
				<Route 
					exact path="/" 
					component={MenuLayout}>
				</Route>
				<Route 
					path="/portfolio" 
					component={Portfolio}>
				</Route>
			</Router>
		)
	}
}

export default Routes;