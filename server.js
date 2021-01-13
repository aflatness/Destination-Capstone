const path = require('path');
const db = require('./database');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.group('server')
  console.log(`Connected to port ${port}!`)
  console.groupEnd('server')
})

