import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portfolio from '../containers/Portfolio';
import MenuLayout from '../containers/MenuLayout';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
let PUBLIC_URL = "/my-portfolio/";

class Routes extends Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Route 
					path="PUBLIC_URL" 
					component={MenuLayout}>
				</Route>
				<Route 
					path="PUBLIC_URL + portfolio" 
					component={Portfolio}>
				</Route>
			</Router>
		)
	}
}

export default Routes;