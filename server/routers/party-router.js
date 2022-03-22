const express = require('express');
const router = express.Router();
const partyQueries = require('../db/queries/party_queries.js');
const { itemHelper, indexFormatter } = require('./helpers.js');
const { destroyItem } = require('../db/deletions/party_deletion')

module.exports = (db) => {

  // GET routes
  router.get('/', (req, res) => {
    partyQueries.getPartyData(db)
      .then((data) => {
        res.send(data);
      });
  });

  router.get('/items', (req, res) => {
    partyQueries.getPartyItems(db)
      .then((data) => {
        res.send(data);
      });
  });

  // POST routes
  router.post('/items/:index', (req, res) => {
    const index = indexFormatter(req.params.index);
    itemHelper(db, index);
  })
  
  // DELETE routes
  router.delete('/items/:index', (req, res) => {
    const index = indexFormatter(req.params.index);
    destroyItem(index, db)
      .then((response) => {
        console.log(`Item ${index} destroyed`);
        res.send(response);
      })
  })

  return router;
};