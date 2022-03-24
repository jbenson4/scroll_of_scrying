const addPartyItem = function (values, pool) {
  return pool.query(`
    INSERT INTO items (index, name, description)
    VALUES ($1, $2, $3)
    RETURNING *;
  `, values)
};
exports.addPartyItem = addPartyItem;