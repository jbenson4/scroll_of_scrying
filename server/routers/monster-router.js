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

  router.get('/roll/:num', (req, res) => {
    const num = Number(req.params.num);
    axios('https://www.dnd5eapi.co/api/monsters')
    .then((res) => {
      // console.log('res: ', res.data)
      const array = res.data.results;
      const items = [];
      const tableLength = num;
      while (items.length < tableLength) {
        const randomElement = array[Math.floor(Math.random() * array.length)]
        items.push(randomElement);
      }

      for (const i of items) {
        console.log(i.name);
      }
    })
    .catch((err) => console.log(err))
  })
  return router;
};