// gets an entire player object
const getPlayerWithId = function (id, pool) {
  return pool
    .query(
      `
  SELECT *
  FROM players
  WHERE players.id = $1;
  `,
      [id]
    )
    .then((response) => {
      if (response.rows[0].length === 0) {
        return null;
      } else {
        return response.rows[0];
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getPlayerWithId = getPlayerWithId;

// gets a player's conditions
const getPlayerConditions = function (id, pool) {
  return pool
    .query(
      `
      SELECT conditions.index, conditions.name, conditions.description, player_id
      FROM players_conditions
      JOIN players ON player_id = players.id
      JOIN conditions ON conditions.id = players_conditions.condition_id
      WHERE players.id = $1;
    `,
      [id]
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
exports.getPlayerConditions = getPlayerConditions;
