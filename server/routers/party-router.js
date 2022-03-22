const express = require('express');
const router = express.Router();
const partyQueries = require('../db/queries/party_queries.js');

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
  // DELETE routes
  router.delete('/items/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log('id: ', id);
    partyQueries.destroyItem(id, db)
      .then((response) => {
        console.log(`Item ${id} destroyed`);
        res.send(response);
      })
  })

  return router;
};