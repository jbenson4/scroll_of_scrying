const { default: axios } = require('axios');
const express = require('express');
const { removeCondition } = require('../db/deletions/player_deletion.js');
const router = express.Router();
const playerQueries = require('../db/queries/player_queries.js');
const { editPlayer } = require('../db/updates/player_updates.js');
const { playerConditionHelper, indexFormatter } = require('./helpers');

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

  // POST routes
  router.post('/conditions/:id/:index', (req, res) => {
    const id = Number(req.params.id);
    const index = indexFormatter(req.params.index);
    playerConditionHelper(db, id, index);
  });

  // DELETE routes
  // Not yet working
  router.delete('/conditions/:id/:index', (req, res) => {
    const id = Number(req.params.id);
    const index = indexFormatter(req.params.index);
    removeCondition(id, index);
  })
  return router;
};