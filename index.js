/* eslint-disable no-console */
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('hello!'));

app.listen(8000, (err) => {
  if(err) {
    console.error('There was an error while creating the server');
    process.exit(1);
  }
  console.log('Listening on 8000');
});
