const express = require('express');
const router = express.Router();
const playerQueries = require('../db/queries/player_queries.js');
const { editPlayer } = require('../db/updates/player_updates.js');

module.exports = (db) => {

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    playerQueries.getPlayerWithId(id, db)
      .then((data) => {
        res.send(data);
      });
  });

  router.get('/conditions/:id', (req, res) => {
    const id = req.params.id;
    playerQueries.getPlayerConditions(id, db)
      .then((data) => {
        res.send(data);
      });
  });

  // PUT routes
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const editedPlayer = req.body;
    editedPlayer.id = id;
    editPlayer(editedPlayer, db)
      .then((data) => {
        res.send(data);
      })
  });

  // router.put('/conditions/:id', (req, res) => {
  //   const editedConditions = req.body;
  // });
  return router;
};