const addPlayerCondition = function (values, pool) {
  return pool.query(`
    INSERT INTO conditions (index, name, description)
    VALUES ($1, $2, $3)
    RETURNING *;
  `, values)
};
exports.addPlayerCondition = addPlayerCondition;