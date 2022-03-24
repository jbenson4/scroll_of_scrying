const addPlayerCondition = function (id, index, pool) {
  return pool.query(
    `
  INSERT INTO players_conditions (player_id, condition_id)
  VALUES ($1, (SELECT conditions.id FROM conditions WHERE conditions.index = $2))
  RETURNING *;
  `,
    [id, index]
  );
};
exports.addPlayerCondition = addPlayerCondition;
