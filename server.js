'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/', express.static(path.join(__dirname, 'index.html')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
});

const server = app.listen(8080, function(){
  let host = server.address().address;
  let port = server.address().port;
  console.log('Listening on: ', host, port);
});