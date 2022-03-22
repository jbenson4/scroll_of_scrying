const addPlayerCondition = function (values, pool) {
  return pool.query(`
    INSERT INTO conditions (player_id, index, name, description)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `, values)
};
exports.addPlayerCondition = addPlayerCondition;