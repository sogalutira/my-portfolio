import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import '../css/style.css';

ReactDOM.render(<Routes/>,
	document.getElementById('app')
);