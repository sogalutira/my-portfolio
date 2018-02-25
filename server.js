import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.get('/', (req, res) => {
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

const server = app.listen(8080, function(){
  let host = server.address().address;
  let port = server.address().port;
  console.log('Listening on: ', host, port);
});