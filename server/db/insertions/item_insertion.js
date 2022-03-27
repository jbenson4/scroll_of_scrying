const addPartyItem = function (values, pool) {
  return pool.query(`
    INSERT INTO items (index, name)
    VALUES ($1, $2)
    RETURNING *;
  `, values)
};
exports.addPartyItem = addPartyItem;