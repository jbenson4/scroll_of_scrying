const express = require('express');
const morgan = require('morgan');

// constants
const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(morgan('dev'));
app.use(express.json())

// routes


// listen
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})