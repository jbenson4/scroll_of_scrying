const { default: axios } = require("axios");
const { response } = require("express");

const getMonsterObject = function (index) {
  axios.get(`https://www.dnd5eapi.co/api/monsters/${index}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err))
}

module.exports = {
  getMonsterObject
}