const express = require('express');
const router = express.Router();
const playerQueries = require('../db/queries/player_queries.js');

module.exports = (db) => {

  router.get('/party', (req, res) => {
    playerQueries.getAllPlayerData(db)
      .then((data) => {
        res.json(data);
      });
  });
  return router;
};