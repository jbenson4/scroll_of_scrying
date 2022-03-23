// load .env data into process.env
require("dotenv").config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(morgan('dev'));
app.use(express.json())

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// router variables
const playerRoutes = require('./routers/player-router');
const partyRoutes = require('./routers/party-router');
const { getMonsterObject } = require("./routers/monster-router.js");
// const monsterRoutes = require('./routers/monster-router');
// const noteRoutes = require('./routers/note-router');

// mount all resource routes

app.use('/party', partyRoutes(db));
app.use('/players', playerRoutes(db));
getMonsterObject("ancient-black-dragon")

// listen
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})