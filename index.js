'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = {};

app.get('/', (req,res) => {
  res.status(200).send(data);
});

app.post('/data', (req,res) => {
  data = req.body;
  res.status(201).send('Added New Object!');
});
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
