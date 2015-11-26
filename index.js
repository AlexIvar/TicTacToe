'use strict'

const express = require('express');
const app = express();

const PORT = 4000;

app.use('/', (req, res) => {
  res.send("hallo");
});

app.listen(PORT, () => {
  console.log('app is listening on port', PORT);
});
