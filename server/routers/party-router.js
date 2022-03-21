const express = require('express');
const router = express.Router();
const playerQueries = require('../db/queries/player_queries.js');

module.exports = (db) => {

  router.get('/', (req, res) => {
    playerQueries.getAllPlayerData(db)
      .then((data) => {
        res.send(data);
      });
  });
  
  return router;
}