const addPlayerCondition = function (values, pool) {
  return pool.query(
    `
  INSERT INTO players_conditions (player_id, condition_id)
  VALUES ($1, (SELECT conditions.id FROM conditions WHERE conditions.index = $2))
  RETURNING *;
  `,
    values
  );
};
exports.addPlayerCondition = addPlayerCondition;
