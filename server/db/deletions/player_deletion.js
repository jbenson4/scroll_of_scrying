// removes a player condition
const removeCondition = function (id, index, pool) {
  return pool.query(
    `
    DELETE FROM players_conditions
    WHERE player_id = $1
    AND condition_id = (SELECT conditions.id FROM conditions WHERE conditions.index = $2)
    RETURNING *;
    `
  , [id, index])
  .then((result) => {
    return result.rows[0]
  })
  .catch((err) => {
    console.log(err.message);
  });
};
exports.removeCondition = removeCondition;

// destroys a player instance
const destroyPlayer = function (id, pool) {
  return pool
    .query(
      `
      DELETE FROM players
      WHERE id = $1;
      `
    , [id])
    .then((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.destroyPlayer = destroyPlayer;