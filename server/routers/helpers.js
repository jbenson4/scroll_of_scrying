const { default: axios } = require("axios");
const { addPlayerCondition } = require("../db/insertions/condition_insertion");


const playerConditionHelper = function (db, id, index) {
  const formatted = index.trim().replace(/\s+/g, '-').toLowerCase();
  axios.get(`https://www.dnd5eapi.co/api/conditions/${formatted}`)
      .then((response) => {
        const description = response.data.desc.join(' ');
        const values = [
          id,
          response.data.index,
          response.data.name,
          description
        ];
        addPlayerCondition(values, db)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err.message))
}

module.exports = {
  playerConditionHelper: playerConditionHelper
};