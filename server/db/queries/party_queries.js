// gets all party data
const getPartyData = function (pool) {
  return pool
    .query(
      `
  SELECT *
  FROM players;
  `
    )
    .then((response) => {
      if (response.rows[0].length === 0) {
        return null;
      } else {
        return response.rows;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getPartyData = getPartyData;

// gets all party items
const getPartyItems = function (pool) {
  return pool
    .query(
      `
      SELECT *
      FROM items;
      `
    )
    .then((response) => {
      if (response.rows[0].length === 0) {
        return null;
      } else {
        return response.rows;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getPartyItems = getPartyItems;

// gets a party's conditions
const getPartyConditions = function (pool) {
  return pool
    .query(
      `
      SELECT conditions.index as condition_index, conditions.name as condition_name, player_id 
      FROM players_conditions
      JOIN conditions ON conditions.id = players_conditions.condition_id;
    `
    )
    .then((response) => {
      if (response.rows[0].length === 0) {
        return null;
      } else {
        return response.rows;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getPartyConditions = getPartyConditions;
