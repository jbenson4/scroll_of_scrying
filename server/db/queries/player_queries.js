// gets a single player by player ID
const getPlayerWithId = function (id, pool) {
  return pool.query(`
  SELECT *
  FROM players
  WHERE players.id = $1;
  `, [id])
    .then((response) => {
      if (response.rows[0].length === 0) { return null }
      else { return response.rows[0] }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getPlayerWithId = getPlayerWithId;

// gets all player data
const getAllPlayerData = function (id, pool) {
  return pool.query(`
  SELECT *
  FROM players;
  `)
    .then((response) => {
      if (response.rows[0].length === 0) { return null }
      else { return response.rows; }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getAllPlayerData = getAllPlayerData;

// gets a single player's conditions
const getPlayerConditions = function (id, pool) {
  return pool.query(`
  SELECT conditions.name
  FROM players_conditions_ownership
  JOIN players ON player_id = players.id
  JOIN conditions ON conditions.id = players_conditions_ownership.condition_id
  WHERE players.id = $1;
  `, [id])
    .then((response) => {
      if (response.rows[0].length === 0) { return null }
      else { return response.rows }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getPlayerConditions = getPlayerConditions;