'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = {};

app.get('/', (req,res) => {
  res.status(200).send(data);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
