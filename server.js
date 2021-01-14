const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { Hosts, Locations, ToKnow } = require('./Database');

/* eslint-disable no-console */

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.group('server');
  console.log(`Connected to port ${port}!`);
  console.groupEnd('server');
});

app.get('/hostInfo/:propertyName', async (req, res) => {
  try {
    const data = await Hosts.findOne(req.params);
    res.status(200).send(data[0]);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/location/:city', async (req, res) => {
  try {
    const data = Locations.findOne(req.params);
    res.status(200).send(data[0]);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/toKnow/:locName', async (req, res) => {
  try {
    const data = await ToKnow.findOne(req.params);
    res.status(200).send(data[0]);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.put('/email/:id', async (req, res) => {
  try {
    const result = await Hosts.findByIdAndUpdate(req.params.id, { $push: { messages: req.body } });
    res.status(202).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});
