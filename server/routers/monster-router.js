const { default: axios } = require("axios");
const express = require("express");
const { indexFormatter } = require("./helpers");
const router = express.Router();

module.exports = (db) => {
  
  router.get('/:index', (req, res) => {
    const index = indexFormatter(req.params.index);
    axios.get(`https://www.dnd5eapi.co/api/monsters/${index}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err))
  });
  return router;
};