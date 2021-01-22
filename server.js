const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Hosts, Locations, ToKnow } = require('./Database');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'bundle.js'));
});

app.get('/hostInfo/:name', async (req, res) => {
  try {
    const name = req.params.name.replace(/-/g, ' ');
    const data = await Hosts.findOne({ name }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/location/:city', async (req, res) => {
  try {
    const data = await Locations.findOne(req.params).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/toKnow/:name', async (req, res) => {
  try {
    const name = req.params.name.replace(/-/g, ' ');
    const data = await ToKnow.findOne({ name }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.put('/email/:id', async (req, res) => {
  try {
    const result = await Hosts.findByIdAndUpdate(req.params.id, { $push: { messages: req.body } })
      .exec();
    res.status(202).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = app;
