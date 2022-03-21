const express = require('express');
const router = express.Router();
const partyQueries = require('../db/queries/party-queries.js');

module.exports = (db) => {

  router.get('/', (req, res) => {
    partyQueries.getPartyData(db)
      .then((data) => {
        res.send(data);
      });
  });
  
  return router;
};